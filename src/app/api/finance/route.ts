import { NextResponse, NextRequest } from 'next/server';

interface ChartResponse {
  chart?: {
    result?: {
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        currency?: string;
      };
      indicators?: {
        quote?: { close: (number | null)[] }[];
        adjclose?: { adjclose: (number | null)[] }[];
      };
    }[];
    error?: { code: string; description: string } | null;
  };
}

async function fetchYahooPrice(
  symbol: string,
  dateString?: string | null,
): Promise<number | null> {
  const url = dateString
    ? (() => {
        const date = new Date(dateString);
        const p1 = Math.floor(
          (date.getTime() + date.getTimezoneOffset() * 60 * 1000) / 1000,
        );
        const p2 = p1 + 86400;
        return `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
          symbol,
        )}?period1=${p1}&period2=${p2}&interval=1d`;
      })()
    : `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
        symbol,
      )}?interval=1d&range=1d`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 300 }, // Cache response for 5 minutes on Vercel Hobby plan
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as ChartResponse;
    const result = data?.chart?.result?.[0];
    const meta = result?.meta;

    if (dateString) {
      const adjclose = result?.indicators?.adjclose?.[0]?.adjclose?.[0];
      if (adjclose != null && adjclose > 0) return adjclose;
      const close = result?.indicators?.quote?.[0]?.close?.[0];
      if (close != null && close > 0) return close;
      if (meta?.chartPreviousClose != null && meta.chartPreviousClose > 0) {
        return meta.chartPreviousClose;
      }
    } else {
      const price = meta?.regularMarketPrice ?? meta?.chartPreviousClose;
      if (price != null && price > 0) return price;

      const closes =
        result?.indicators?.quote?.[0]?.close?.filter(
          (c): c is number => c != null && c > 0,
        ) ?? [];
      if (closes.length > 0) {
        return closes[closes.length - 1];
      }
    }
  } catch (err) {
    console.warn(`fetchYahooPrice failed for symbol ${symbol}:`, err);
  }
  return null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker');
  const dateString = searchParams.get('date');

  if (!ticker) {
    return NextResponse.json(
      { error: 'Ticker is required 😡.' },
      { status: 400 },
    );
  }

  try {
    let currentPrice: number | null = null;
    const cleanTicker = ticker.trim().toUpperCase();

    // Candidates to test in parallel: exact, plus common exchange suffixes
    const candidates = [
      cleanTicker,
      `${cleanTicker}.V`,
      `${cleanTicker}.TO`,
      `${cleanTicker}.CN`,
      `${cleanTicker}.NE`,
      `${cleanTicker}F`,
    ];

    const results = await Promise.allSettled(
      candidates.map((candidate) => fetchYahooPrice(candidate, dateString)),
    );

    for (const result of results) {
      if (
        result.status === 'fulfilled' &&
        result.value != null &&
        result.value > 0
      ) {
        currentPrice = result.value;
        break;
      }
    }

    if (currentPrice == null || currentPrice <= 0) {
      return NextResponse.json(
        { error: `Price data not found for ticker: ${ticker}` },
        { status: 404 },
      );
    }

    return NextResponse.json({ currentPrice });
  } catch (error) {
    console.error('Error fetching data for ticker:', ticker, error);
    return NextResponse.json(
      { error: 'Failed to fetch stock price 😔.' },
      { status: 500 },
    );
  }
}

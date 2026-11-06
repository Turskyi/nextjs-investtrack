import { NextResponse, NextRequest } from "next/server";
import yahooFinance from "yahoo-finance2";

interface ChartResponse {
  indicators?: {
    adjclose?: { adjclose: (number | null)[] }[];
    quote?: { close: (number | null)[] }[];
  };
  meta?: {
    regularMarketPrice?: number;
    chartPreviousClose?: number;
  };
}

async function fetchPriceForSymbol(
  symbol: string,
  dateString?: string | null,
): Promise<number | null> {
  if (dateString) {
    const date = new Date(dateString);
    const startDate = Math.floor(
      (date.getTime() + date.getTimezoneOffset() * 60 * 1000) / 1000,
    );
    const endDate = startDate + 86400;

    try {
      const chartData = (await yahooFinance.chart(symbol, {
        period1: startDate,
        period2: endDate,
        interval: "1d",
      })) as ChartResponse;

      if (chartData?.indicators?.adjclose?.[0]?.adjclose?.[0] != null) {
        return chartData.indicators.adjclose[0].adjclose[0];
      }
      if (chartData?.indicators?.quote?.[0]?.close?.[0] != null) {
        return chartData.indicators.quote[0].close[0];
      }
      if (chartData?.meta?.chartPreviousClose !== undefined) {
        return chartData.meta.chartPreviousClose;
      }
    } catch {
      // Continue to next attempt
    }
    return null;
  }

  // 1. Try quote
  try {
    const quote = await yahooFinance.quote(symbol);
    const price =
      quote?.regularMarketPrice ??
      quote?.postMarketPrice ??
      quote?.preMarketPrice;
    if (price != null && price > 0) return price;
  } catch {
    // Continue to chart lookup
  }

  // 2. Try chart
  try {
    const chartData = (await yahooFinance.chart(symbol, {
      period1: Math.floor(Date.now() / 1000) - 86400 * 7,
      interval: "1d",
    })) as ChartResponse;

    const meta = chartData?.meta;
    const price = meta?.regularMarketPrice ?? meta?.chartPreviousClose;
    if (price != null && price > 0) return price;

    const closes =
      chartData?.indicators?.quote?.[0]?.close?.filter(
        (c): c is number => c != null && c > 0,
      ) ?? [];
    if (closes.length > 0) {
      return closes[closes.length - 1];
    }
  } catch {
    // Continue to Finnhub fallback
  }

  // 3. Try Finnhub API fallback
  const apiKey = process.env.FINNHUB_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(
          symbol,
        )}&token=${apiKey}`,
      );
      if (res.ok) {
        const data = await res.json();
        if (typeof data.c === "number" && data.c > 0) {
          return data.c;
        }
      }
    } catch {
      // Finnhub lookup failed
    }
  }

  return null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get("ticker");
  const dateString = searchParams.get("date");

  if (!ticker) {
    return NextResponse.json(
      { error: "Ticker is required 😡." },
      { status: 400 },
    );
  }

  try {
    // 1. Attempt exact ticker
    let currentPrice = await fetchPriceForSymbol(ticker, dateString);

    // 2. If exact ticker failed, try Yahoo Finance symbol search (e.g. BMV -> BMV.V)
    if (currentPrice == null) {
      try {
        const searchRes = await yahooFinance.search(ticker);
        if (searchRes?.quotes && searchRes.quotes.length > 0) {
          for (const quoteCandidate of searchRes.quotes) {
            if ("symbol" in quoteCandidate && quoteCandidate.symbol) {
              const candidatePrice = await fetchPriceForSymbol(
                quoteCandidate.symbol,
                dateString,
              );
              if (candidatePrice != null) {
                currentPrice = candidatePrice;
                break;
              }
            }
          }
        }
      } catch {
        // Search lookup failed
      }
    }

    // 3. Try exchange suffix variants (.V, .TO, .CN, .NE)
    if (currentPrice == null && !ticker.includes(".")) {
      const suffixes = [".V", ".TO", ".CN", ".NE"];
      for (const suffix of suffixes) {
        const candidatePrice = await fetchPriceForSymbol(
          `${ticker}${suffix}`,
          dateString,
        );
        if (candidatePrice != null) {
          currentPrice = candidatePrice;
          break;
        }
      }
    }

    if (currentPrice == null) {
      return NextResponse.json(
        { error: `Price data not found for ticker: ${ticker}` },
        { status: 404 },
      );
    }

    return NextResponse.json({ currentPrice });
  } catch (error) {
    console.error("Error fetching data for ticker:", ticker, error);
    return NextResponse.json(
      { error: "Failed to fetch stock price 😔." },
      { status: 500 },
    );
  }
}

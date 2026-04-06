import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker');

  if (!ticker) {
    return NextResponse.json(
      { error: 'Ticker is required 😡.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.FINNHUB_API_KEY;
  if (!apiKey) {
    console.error('FINNHUB_API_KEY is not set.');
    return NextResponse.json(
      { error: 'Server configuration error.' },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(ticker)}&token=${apiKey}`,
    );

    if (!res.ok) {
      throw new Error(`Finnhub responded with status ${res.status}`);
    }

    const data = await res.json();

    if (data.d === undefined || data.d === null) {
      throw new Error('Price change data not found 😔.');
    }

    return NextResponse.json({ priceChange: data.d });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching data from Finnhub 😔:', message);
    return NextResponse.json(
      { error: 'Failed to fetch price change 😔.' },
      { status: 500 },
    );
  }
}

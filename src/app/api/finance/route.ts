import yahooFinance from "yahoo-finance2";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get("ticker");

  if (!ticker) {
    return NextResponse.json(
      { error: "Ticker is required 😡." },
      { status: 400 },
    );
  }

  try {
    const quote = await yahooFinance.quoteSummary(ticker, {
      modules: ["price"],
    });
    const currentPrice = quote.price?.regularMarketPrice ?? null;

    return NextResponse.json({ currentPrice });
  } catch (error) {
    console.error("Error fetching data from Yahoo Finance:", error);
    return NextResponse.json(
      { error: "Failed to fetch stock price 😔." },
      { status: 500 },
    );
  }
}

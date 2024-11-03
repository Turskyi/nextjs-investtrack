import { NextResponse, NextRequest } from "next/server";
import yahooFinance from "yahoo-finance2";

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
    const quote = await yahooFinance.quote(ticker);
    if (quote.regularMarketChangePercent !== undefined) {
      return NextResponse.json({
        changePercentage: quote.regularMarketChangePercent,
      });
    } else {
      throw new Error("Change percentage data not found 😔.");
    }
  } catch (error) {
    console.error("Error fetching data from Yahoo Finance 😔:", error);
    return NextResponse.json(
      { error: "Failed to fetch change percentage 😔." },
      { status: 500 },
    );
  }
}

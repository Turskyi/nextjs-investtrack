import { NextResponse, NextRequest } from "next/server";
import yahooFinance from "yahoo-finance2";

interface ChartResponse {
  indicators?: {
    adjclose?: { adjclose: number[] }[];
  };
  meta?: {
    chartPreviousClose?: number;
  };
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
    let currentPrice;

    if (dateString) {
      const date = new Date(dateString);
      const startDate = Math.floor(
        (date.getTime() + date.getTimezoneOffset() * 60 * 1000) / 1000,
      );

      // Adding 24 hours for a single-day window.
      const endDate = startDate + 86400;

      const chartData = (await yahooFinance.chart(ticker, {
        period1: startDate,
        period2: endDate,
        interval: "1d",
      })) as ChartResponse;

      if (
        chartData &&
        chartData.indicators?.adjclose &&
        chartData.indicators.adjclose.length > 0 &&
        chartData.indicators.adjclose[0].adjclose.length > 0
      ) {
        currentPrice = chartData.indicators.adjclose[0].adjclose[0];
      } else if (chartData.meta?.chartPreviousClose !== undefined) {
        currentPrice = chartData.meta.chartPreviousClose;
      } else {
        throw new Error("Historical price data not found 😔.");
      }
    } else {
      const quote = await yahooFinance.quote(ticker);
      currentPrice = quote.regularMarketPrice;

      if (currentPrice === undefined) {
        throw new Error("Current price data not found 😔.");
      }
    }

    return NextResponse.json({ currentPrice });
  } catch (error) {
    console.error("Error fetching data from Yahoo Finance 😔:", error);
    return NextResponse.json(
      { error: "Failed to fetch stock price 😔." },
      { status: 500 },
    );
  }
}

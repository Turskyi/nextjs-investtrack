import { formatDateForDisplay, formatMoney } from "@/lib/utils";
import { Investment } from "@prisma/client";
import {
  Banknote,
  Building,
  Globe2,
  LineChart,
  TrendingUp,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Markdown from "../../../components/Markdown";
import { investmentTypeColors } from "@/lib/investment-types";

interface InvestmentPageProps {
  investment: Investment;
}

async function fetchPriceChange(ticker: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/change?ticker=${ticker}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch price change 😔.");
    const data = await res.json();
    return data.priceChange;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchChangePercentage(ticker: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/change-percentage?ticker=${ticker}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch change percentage 😔.");

    const data = await res.json();
    return data.changePercentage;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchStockPrice(ticker: string, date?: Date | string | null) {
  try {
    // If a date is provided, format it as a string (YYYY-MM-DDTHH:MM:SS).
    const formattedDate =
      date instanceof Date
        ? // This removes the milliseconds part.
          date.toISOString().split(".")[0]
        : date;

    const url = formattedDate
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/finance?ticker=${ticker}&date=${formattedDate}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/finance?ticker=${ticker}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch stock price 😔.");

    const data = await res.json();
    return data.currentPrice;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchExchangeRate(
  fromCurrency: string,
  toCurrency: string = "CAD",
) {
  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
    );
    if (!res.ok) throw new Error("Failed to fetch exchange rate 😔.");
    const data = await res.json();
    return data.rates[toCurrency] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function InvestmentPage({
  investment: {
    ticker,
    description,
    companyName,
    type,
    stockExchange,
    currency,
    companyLogoUrl,
    quantity,
    purchaseDate,
  },
}: InvestmentPageProps) {
  const currentPrice = await fetchStockPrice(ticker);
  // Fetch price on purchase date.
  const purchasePrice = await fetchStockPrice(ticker, purchaseDate);
  const isPurchased = quantity > 0;
  const totalValueCurrent = quantity * (currentPrice || 0);
  const exchangeRate =
    currency !== "CAD" ? await fetchExchangeRate(currency) : 1;
  const totalValueCAD = totalValueCurrent * exchangeRate;
  const totalValuePurchase = quantity * (purchasePrice || 0);
  const totalValuePurchaseCAD = totalValuePurchase * exchangeRate;

  const gainOrLoss = totalValueCurrent - totalValuePurchase;
  const gainOrLossPercentage = totalValuePurchase
    ? ((gainOrLoss / totalValuePurchase) * 100).toFixed(2)
    : "0.00";
  const gainOrLossCAD = totalValueCAD - totalValuePurchaseCAD;
  const gainOrLossPercentageCAD = totalValuePurchaseCAD
    ? ((gainOrLossCAD / totalValuePurchaseCAD) * 100).toFixed(2)
    : "0.00";

  // Get the color for the current investment type.
  const typeColor = investmentTypeColors[type] || "text-gray-500";

  const priceChange = await fetchPriceChange(ticker);

  const changePercentage = await fetchChangePercentage(ticker);

  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="Company logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{ticker}</h1>
            <p className="font-semibold">
              <span>{companyName}</span>
            </p>
          </div>
          <div className="text-muted-foreground">
            <p
              className={`flex items-center gap-1.5`}
              style={{ color: typeColor }}
            >
              <LineChart size={16} className="shrink-0" />
              {type}
            </p>
            <p className="flex items-center gap-1.5">
              <Building size={16} className="shrink-0" />
              {stockExchange}
            </p>
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              {currentPrice !== null
                ? formatMoney(currentPrice, currency)
                : "Price unavailable"}
            </p>
            <p className="flex items-center gap-1.5">
              <Globe2 size={16} className="shrink-0" />
              {currency}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {isPurchased && (
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              Quantity: {quantity}
            </p>
            <p className="flex items-center gap-1.5">
              <TrendingUp size={16} className="shrink-0" />
              Total Value (Current): {formatMoney(totalValueCurrent, currency)}
            </p>
            {totalValueCAD && (
              <p className="flex items-center gap-1.5">
                <TrendingUp size={16} className="shrink-0" />
                Total Value (Current CAD): {formatMoney(totalValueCAD, "CAD")}
              </p>
            )}
            <p className="flex items-center gap-1.5">
              <Calendar size={16} className="shrink-0" />
              Purchase Date:{" "}
              {purchaseDate ? formatDateForDisplay(purchaseDate) : "N/A"}
            </p>
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              Purchase Price:{" "}
              {purchasePrice ? formatMoney(purchasePrice, currency) : "N/A"}
            </p>
            <p className="flex items-center gap-1.5">
              <TrendingUp size={16} className="shrink-0" />
              Total Value (Purchase):{" "}
              {formatMoney(totalValuePurchase, currency)}
            </p>
            {totalValuePurchaseCAD && (
              <p className="flex items-center gap-1.5">
                <TrendingUp size={16} className="shrink-0" />
                Total Value (Purchase CAD):{" "}
                {formatMoney(totalValuePurchaseCAD, "CAD")}
              </p>
            )}
            <p
              className={`flex items-center gap-1.5 ${gainOrLoss >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              <TrendingUp size={16} className="shrink-0" />
              Gain/Loss: {formatMoney(gainOrLoss, currency)} (
              {gainOrLossPercentage}%)
            </p>

            <p
              className={`flex items-center gap-1.5 ${gainOrLossCAD >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              <TrendingUp size={16} className="shrink-0" />
              Gain/Loss CAD: {formatMoney(gainOrLossCAD, "CAD")} (
              {gainOrLossPercentageCAD}%)
            </p>
          </div>
        )}
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center gap-1.5">
            {" "}
            <TrendingUp size={16} className="shrink-0" /> Price Change:{" "}
            {priceChange ? `${priceChange.toFixed(2)}%` : "N/A"}{" "}
          </p>
          <p className="flex items-center gap-1.5">
            <TrendingUp size={16} className="shrink-0" />
            Change %:{" "}
            {changePercentage !== null
              ? `${changePercentage.toFixed(2)}%`
              : "N/A"}
          </p>
        </div>
      </div>

      <div>{description && <Markdown>{description}</Markdown>}</div>
      <div className="mt-5">
        <a
          href="https://companiesmarketcap.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Source: companiesmarketcap.com
        </a>
      </div>
    </section>
  );
}

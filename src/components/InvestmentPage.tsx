import { formatMoney } from "@/lib/utils";
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
import Markdown from "./Markdown";
import { investmentTypes } from "@/lib/investment-types";

interface InvestmentPageProps {
  investment: Investment;
}

// Generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Generate color mapping for each investment type
const typeColors: Record<string, string> = investmentTypes.reduce(
  (acc, type) => {
    acc[type] = getRandomColor();
    return acc;
  },
  {} as Record<string, string>,
);

export default function InvestmentPage({
  investment: {
    ticker,
    description,
    companyName,
    currentPrice,
    type,
    stockExchange,
    currency,
    companyLogoUrl,
    quantity,
    purchaseDate,
    purchasePrice,
  },
}: InvestmentPageProps) {
  const isPurchased = quantity > 0;
  const totalValueCurrent = quantity * currentPrice;
  const totalValuePurchase = quantity * (purchasePrice || 0);
  const gainOrLoss = totalValueCurrent - totalValuePurchase;
  const gainOrLossPercentage = totalValuePurchase
    ? ((gainOrLoss / totalValuePurchase) * 100).toFixed(2)
    : "0.00";

  // Get the color for the current investment type
  const typeColor = typeColors[type] || "text-gray-500";

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
              <Globe2 size={16} className="shrink-0" />
              {currency}
            </p>
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              {formatMoney(currentPrice, currency)}
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
              <Calendar size={16} className="shrink-0" />
              Purchase Date:{" "}
              {purchaseDate ? purchaseDate.toLocaleDateString() : "N/A"}
            </p>
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              Purchase Price:{" "}
              {purchasePrice ? formatMoney(purchasePrice, currency) : "N/A"}
            </p>
            <p className="flex items-center gap-1.5">
              <TrendingUp size={16} className="shrink-0" />
              Total Value (Current): {formatMoney(totalValueCurrent, currency)}
            </p>
            <p className="flex items-center gap-1.5">
              <TrendingUp size={16} className="shrink-0" />
              Total Value (Purchase):{" "}
              {formatMoney(totalValuePurchase, currency)}
            </p>
            <p
              className={`flex items-center gap-1.5 ${gainOrLoss >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              <TrendingUp size={16} className="shrink-0" />
              Gain/Loss: {formatMoney(gainOrLoss, currency)} (
              {gainOrLossPercentage}%)
            </p>
          </div>
        )}
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <TrendingUp size={16} className="shrink-0" />
            Price Change: {/* Placeholder for live data */}
          </p>
          <p className="flex items-center gap-1.5">
            <TrendingUp size={16} className="shrink-0" />
            Change %: {/* Placeholder for live data */}
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

import companyLogoPlaceholder from "@/assets/company-logo-placeholder.jpeg";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Investment } from "@prisma/client";
import { Banknote, Briefcase, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Badge from "../../components/Badge";
import { investmentTypeColors } from "@/lib/investment-types";
import { fetchStockPrice } from "./actions";

interface InvestmentListItemProps {
  investment: Investment;
}

export default async function InvestmentListItem({
  investment: {
    ticker,
    companyName,
    type,
    currency,
    companyLogoUrl,
    purchaseDate,
    quantity,
  },
}: InvestmentListItemProps) {
  // Get the color for the current investment type.
  const typeColor = investmentTypeColors[type] || "gray";
  const currentPrice = await fetchStockPrice(ticker);
  const totalValueCurrent = quantity * (currentPrice || 0);
  const purchasePrice = await fetchStockPrice(ticker, purchaseDate);
  const totalValuePurchase = quantity * (purchasePrice || 0);
  const gainOrLoss = totalValueCurrent - totalValuePurchase;
  const gainOrLossPercentage = totalValuePurchase
    ? ((gainOrLoss / totalValuePurchase) * 100).toFixed(2)
    : "0.00";

  return (
    <article className="flex gap-3 rounded-lg border p-5 shadow-lg transition-all duration-300 ease-in-out hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-2xl font-bold">{ticker}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
          {quantity > 0 && (
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="shrink-0" />
              Purchase Price:{" "}
              {purchasePrice ? formatMoney(purchasePrice, currency) : "N/A"}
            </p>
          )}
          {quantity > 0 && (
            <p
              className={`flex items-center gap-1.5 ${gainOrLoss >= 0 ? "text-green-500" : "text-red-500"}`}
            >
              <TrendingUp size={16} className="shrink-0" />
              Gain/Loss: {formatMoney(gainOrLoss, currency)} (
              {gainOrLossPercentage}%)
            </p>
          )}
          <p className="flex items-center gap-1.5">
            <Clock size={16} className="shrink-0" />
            {currentPrice !== null
              ? `Current Price: ${formatMoney(currentPrice, currency)}`
              : "Price unavailable. Under maintenance"}
          </p>
          {quantity > 0 && (
            <p className="flex items-center gap-1.5">
              {" "}
              <Briefcase size={16} className="shrink-0" /> Quantity: {quantity}{" "}
            </p>
          )}
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {purchaseDate
              ? relativeDate(purchaseDate)
              : "No purchase date available"}
          </p>
        </div>
      </div>
      <div className="hidden flex-col items-end justify-between sm:flex">
        {/* Render the Badge with the color. */}
        <Badge color={typeColor}>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {purchaseDate ? relativeDate(purchaseDate) : "Not yet purchased."}
        </span>
      </div>
    </article>
  );
}

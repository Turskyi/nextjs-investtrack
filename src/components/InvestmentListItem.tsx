import companyLogoPlaceholder from "@/assets/company-logo-placeholder.jpeg";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Investment } from "@prisma/client";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";

interface InvestmentListItemProps {
  investment: Investment;
}

export default function InvestmentListItem({
  investment: {
    ticker,
    companyName,
    type,
    stockExchange,
    currency,
    currentPrice,
    companyLogoUrl,
    purchaseDate,
  },
}: InvestmentListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{ticker}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={16} className="shrink-0" />
            {stockExchange}
          </p>
          <p className="flex items-center gap-1.5">
            <Globe2 size={16} className="shrink-0" />
            {currency || "USD"}
          </p>
          <p className="flex items-center gap-1.5">
            <Banknote size={16} className="shrink-0" />
            {formatMoney(currentPrice)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {purchaseDate
              ? relativeDate(purchaseDate)
              : "No purchase date available"}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {purchaseDate ? relativeDate(purchaseDate) : "Not yet purchased"}
        </span>
      </div>
    </article>
  );
}

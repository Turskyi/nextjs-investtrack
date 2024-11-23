import InvestmentFilterSidebar from "@/components/InvestmentFilterSidebar";
import InvestmentResults from "@/app/investments/InvestmentResults";
import H1 from "@/components/ui/h1";
import { InvestmentFilterValues } from "@/lib/validation";
import { Metadata } from "next";
import { APP_NAME } from "../../../constants";

// Inspired by the "app/page.tsx" component from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/app/page.tsx
interface InvestmentsPageProps {
  searchParams: {
    q?: string;
    type?: string;
    currency?: string;
    stockExchange?: string;
    isPurchased?: string;
    page?: string;
  };
}

function getTitle({
  q,
  type,
  currency,
  stockExchange,
  isPurchased,
}: InvestmentFilterValues) {
  const titlePrefix = q
    ? `${q} investments`
    : type
      ? `${type} opportunities`
      : stockExchange
        ? `${stockExchange} investments`
        : typeof isPurchased === "boolean"
          ? isPurchased === true
            ? "Purchased investments"
            : "Not purchased investments"
          : "All investments";

  const titleSuffix = currency ? ` in ${currency}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

function getSubtitle({
  q,
  type,
  currency,
  stockExchange,
  isPurchased,
}: InvestmentFilterValues) {
  // Define a subtitle based on the provided filter values
  if (
    !q &&
    !type &&
    !currency &&
    !stockExchange &&
    typeof isPurchased !== "boolean"
  ) {
    return "Browse all available investments.";
  }

  // Conditional subtitle based on filters
  if (q) {
    return `Explore ${q} investment opportunities.`;
  }

  if (type) {
    return `Discover various ${type} opportunities.`;
  }

  if (stockExchange) {
    return `Find investments listed on ${stockExchange}.`;
  }

  if (typeof isPurchased === "boolean") {
    return isPurchased === true
      ? "View all purchased investments."
      : "See investments you haven't purchased yet.";
  }

  return ""; // Default case, if no filters are applied
}

export function generateMetadata({
  searchParams: { q, type, currency, stockExchange, isPurchased },
}: InvestmentsPageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      currency,
      stockExchange,
      isPurchased:
        isPurchased === "true"
          ? true
          : isPurchased === "false"
            ? false
            : undefined,
    })} | ${APP_NAME}`,
  };
}

export default async function InvestmentsPage({
  searchParams: { q, type, currency, stockExchange, isPurchased, page },
}: InvestmentsPageProps) {
  const filterValues: InvestmentFilterValues = {
    q,
    type,
    currency,
    stockExchange,
    isPurchased:
      isPurchased === "true"
        ? true
        : isPurchased === "false"
          ? false
          : undefined,
  };

  return (
    <main className="m-auto my-10 max-w-5xl flex-grow space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">{getSubtitle(filterValues)}</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <InvestmentFilterSidebar defaultValues={filterValues} />
        <InvestmentResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  );
}

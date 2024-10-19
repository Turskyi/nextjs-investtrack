import InvestmentFilterSidebar from "@/components/InvestmentFilterSidebar";
import InvestmentResults from "@/components/InvestmentResults";
import H1 from "@/components/ui/h1";
import { InvestmentFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    currency?: string;
    stockExchange?: string;
    isPurchased?: string;
    page?: string;
  };
}

export default async function Home({
  searchParams: { q, type, currency, stockExchange, isPurchased, page },
}: PageProps) {
  const filterValues: InvestmentFilterValues = {
    q,
    type,
    currency,
    stockExchange,
    isPurchased: isPurchased === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{"Investments"}</H1>
        <p className="text-muted-foreground">
          Find your next investment opportunity.
        </p>
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

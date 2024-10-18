import InvestmentFilterSidebar from "@/components/InvestmentFilterSidebar";
import InvestmentListItem from "@/components/InvestmentListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import { InvestmentFilterValues } from "@/lib/validation";

export default async function Home() {
  const investments = await prisma.investment.findMany({
    where: {
      isPurchased: true,
    },
    orderBy: { createdAt: "desc" },
  });
  const filterValues: InvestmentFilterValues = {};

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
        <div className="space-y-4">
          {investments.map((investment) => (
            <InvestmentListItem investment={investment} key={investment.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

// import JobFilterSidebar from "@/components/JobFilterSidebar";
// import JobResults from "@/components/JobResults";
// import H1 from "@/components/ui/h1";
// import { JobFilterValues } from "@/lib/validation";
// import { Metadata } from "next";
import InvestmentListItem from "@/components/InvestmentListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const investments = await prisma.investment.findMany({
    where: {
      isPurchased: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main>
      {investments.map((investment) => (
        <InvestmentListItem investment={investment} key={investment.id} />
      ))}
    </main>
  );
}

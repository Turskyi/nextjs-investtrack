import InvestmentActions from "@/app/investments/[slug]/InvestmentActions";
import InvestmentPage from "@/components/InvestmentPage";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import InvestmentForm from "./InvestmentForm";

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

// `cache` will take care of duplicated remote calls.
const getInvestment = cache(async (slug: string) => {
  const investment = await prisma.investment.findUnique({
    where: { slug },
  });

  if (!investment) notFound();

  return investment;
});

export async function generateStaticParams() {
  const investments = await prisma.investment.findMany({
    select: { slug: true },
  });

  return investments.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const investment = await getInvestment(slug);

  return {
    title: investment.ticker,
  };
}

export default async function Page({
  params: { slug },
  searchParams,
}: PageProps) {
  const investment = await getInvestment(slug);

  const isEditing = searchParams.isEditing === "true";

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      {isEditing ? (
        <InvestmentForm
          initialValues={{
            slug: investment.slug,
            ticker: investment.ticker,
            type: investment.type,
            stockExchange: investment.stockExchange ?? undefined,
            currency: investment.currency,
            description: investment.description ?? undefined,
            currentPrice: `${investment.currentPrice}`,
            companyName: investment.companyName,
            quantity: `${investment.quantity}`,
          }}
          investment={investment}
        />
      ) : (
        <>
          <InvestmentPage investment={investment} />
          <InvestmentActions investment={investment} />
        </>
      )}
    </main>
  );
}

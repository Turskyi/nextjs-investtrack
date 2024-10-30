import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { InvestmentFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import InvestmentListItem from "../../components/InvestmentListItem";
import { auth } from "@clerk/nextjs/server";

// Inspired by the "JobResults" component from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/components/JobResults.tsx
interface InvestmentResultsProps {
  filterValues: InvestmentFilterValues;
  page?: number;
}

export default async function InvestmentResults({
  filterValues,
  page = 1,
}: InvestmentResultsProps) {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined 😞");

  const { q, type, currency, stockExchange, isPurchased } = filterValues;

  const investmentsPerPage = 6;
  const skip = (page - 1) * investmentsPerPage;

  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.InvestmentWhereInput = searchString
    ? {
        OR: [
          { ticker: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { stockExchange: { search: searchString } },
          { currency: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.InvestmentWhereInput = {
    AND: [
      // Ensure only investments belonging to the authenticated user are fetched.
      { userId },
      searchFilter,
      type ? { type } : {},
      currency ? { currency } : {},
      stockExchange ? { stockExchange } : {},
      isPurchased ? { isPurchased: true } : {},
    ],
  };

  const investmentsPromise = prisma.investment.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: investmentsPerPage,
    skip,
  });

  const countPromise = prisma.investment.count({ where });

  const [investments, totalResults] = await Promise.all([
    investmentsPromise,
    countPromise,
  ]);

  return (
    <div className="grow space-y-4">
      {investments.map((investment) => (
        <Link
          key={investment.id}
          href={`/investments/${investment.slug}`}
          className="block"
        >
          <InvestmentListItem investment={investment} />
        </Link>
      ))}
      {investments.length === 0 && (
        <p className="m-auto text-center">
          No investments found. You may not have created any investments yet, or
          your search filters are too narrow.
        </p>
      )}

      {investments.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / investmentsPerPage)}
          filterValues={filterValues}
        />
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: InvestmentFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: { q, type, currency, stockExchange },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(currency && { currency }),
      ...(stockExchange && { stockExchange }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex justify-between">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft size={16} />
        Previous page
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        Next page
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

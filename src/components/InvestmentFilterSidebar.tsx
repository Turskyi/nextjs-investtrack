import { investmentTypes } from "@/lib/investment-types";
import prisma from "@/lib/prisma";
import {
  InvestmentFilterValues,
  investmentFilterSchema,
} from "@/lib/validation";
import { redirect } from "next/navigation";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import FormSubmitButton from "./FormSubmitButton";

async function filterInvestments(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, type, currency, stockExchange } =
    investmentFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(currency && { currency }),
    ...(stockExchange && { stockExchange }),
  });

  redirect(`/?${searchParams.toString()}`);
}

interface InvestmentFilterSidebarProps {
  defaultValues: InvestmentFilterValues;
}

export default async function InvestmentFilterSidebar({
  defaultValues,
}: InvestmentFilterSidebarProps) {
  const distinctCurrencies = (await prisma.investment
    .findMany({
      where: { isPurchased: true },
      select: { currency: true },
      distinct: ["currency"],
    })
    .then((currencies) =>
      currencies.map(({ currency }) => currency).filter(Boolean),
    )) as string[];

  const distinctStockExchanges = (await prisma.investment
    .findMany({
      where: { isPurchased: true },
      select: { stockExchange: true },
      distinct: ["stockExchange"],
    })
    .then((exchanges) =>
      exchanges.map(({ stockExchange }) => stockExchange).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterInvestments} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Ticker, company, etc."
              defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">All types</option>
              {investmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="currency">Currency</Label>
            <Select
              id="currency"
              name="currency"
              defaultValue={defaultValues.currency || ""}
            >
              <option value="">All currencies</option>
              {distinctCurrencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="stockExchange">Stock Exchange</Label>
            <Select
              id="stockExchange"
              name="stockExchange"
              defaultValue={defaultValues.stockExchange || ""}
            >
              <option value="">All exchanges</option>
              {distinctStockExchanges.map((exchange) => (
                <option key={exchange} value={exchange}>
                  {exchange}
                </option>
              ))}
            </Select>
          </div>
          <FormSubmitButton className="w-full">
            Filter investments
          </FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}

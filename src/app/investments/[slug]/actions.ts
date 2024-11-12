"use server";

import prisma from "@/lib/prisma";
import { updateInvestmentSchema } from "@/lib/validation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

export async function updateInvestment(formData: FormData): Promise<FormState> {
  const investmentId = parseInt(formData.get("investmentId") as string);

  const slugId = formData.get("slug");
  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error("Not authorized 😞");
    }

    const values = Object.fromEntries(formData.entries());

    // Parse and validate the form data using the update investment schema.
    const {
      ticker,
      type,
      companyName,
      companyLogoUrl,
      description,
      quantity,
      stockExchange,
      currency,
      slug,
      purchaseDate,
    } = updateInvestmentSchema.parse(values);

    await prisma.investment.update({
      where: { id: investmentId },
      data: {
        id: investmentId,
        userId: userId,
        slug,
        ticker: ticker?.trim(),
        type: type,
        companyName: companyName?.trim(),
        companyLogoUrl: companyLogoUrl,
        description: description?.trim(),
        quantity: quantity ? parseInt(quantity) : 0,
        stockExchange: stockExchange ?? null,
        currency: currency ?? undefined,
        purchaseDate: purchaseDate,
        isPurchased:
          quantity !== "0" &&
          quantity !== "" &&
          typeof purchaseDate === "string",
      },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "Unexpected error 🥺";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }

  redirect(`/investments/${slugId}`);
}

export async function deleteInvestment(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const investmentId = parseInt(formData.get("investmentId") as string);

    const user = await currentUser();

    if (!user) {
      throw new Error("Not authorized 😞");
    }

    await prisma.investment.delete({
      where: { id: investmentId },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "Unexpected error 😞";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }

  redirect("/");
}

export async function fetchPriceChange(ticker: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/change?ticker=${ticker}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch price change 😔.");
    const data = await res.json();
    return data.priceChange;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchChangePercentage(ticker: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/change-percentage?ticker=${ticker}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch change percentage 😔.");

    const data = await res.json();
    return data.changePercentage;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchStockPrice(ticker: string, date?: Date | string | null) {
  try {
    // If a date is provided, format it as a string (YYYY-MM-DDTHH:MM:SS).
    const formattedDate =
      date instanceof Date
        ? // This removes the milliseconds part.
          date.toISOString().split(".")[0]
        : date;

    const url = formattedDate
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/finance?ticker=${ticker}&date=${formattedDate}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/finance?ticker=${ticker}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch stock price 😔.");

    const data = await res.json();
    return data.currentPrice;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchExchangeRate(
  fromCurrency: string,
  toCurrency: string = "CAD",
) {
  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
    );
    if (!res.ok) throw new Error("Failed to fetch exchange rate 😔.");
    const data = await res.json();
    return data.rates[toCurrency] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

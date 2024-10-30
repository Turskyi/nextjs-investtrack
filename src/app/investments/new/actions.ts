"use server";

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import { createInvestmentSchema } from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";
// For generating unique IDs or slugs.
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

// Inspired by the "jobs/new/actions.ts" server actions from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/d40cc79f5e0c1f503e437d97ef689b01e552db59/src/app/jobs/new/actions.ts
// Function to handle investment posting.
export async function createInvestment(formData: FormData): Promise<FormState> {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error("Not authorized 😞");
    }

    const values = Object.fromEntries(formData.entries());

    // Parse and validate the form data using the investment schema.
    const {
      ticker,
      type,
      companyName,
      companyLogoUrl,
      description,
      quantity,
      stockExchange,
      currency,
    } = createInvestmentSchema.parse(values);

    // Generate a unique slug for the investment posting.
    const slug = `${toSlug(ticker)}-${nanoid(10)}`;

    // Save the validated investment posting to the database.
    await prisma.investment.create({
      data: {
        userId: userId,
        slug,
        ticker: ticker.trim(),
        type,
        companyName: companyName.trim(),
        // Save the uploaded logo URL (if available).
        companyLogoUrl: companyLogoUrl,
        description: description?.trim(),
        // Handle optional fields.
        quantity: typeof quantity === "string" ? parseInt(quantity) : 0,
        // Handle optional stock exchange.
        stockExchange: stockExchange ?? null,
        // Handle optional currency field.
        currency: typeof currency === "string" ? currency : undefined,
      },
    });

    // Redirect the user to the confirmation page after successful submission
    revalidatePath("/investment-submitted");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
  redirect("/investment-submitted");
}

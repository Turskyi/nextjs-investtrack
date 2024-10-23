"use server";

import prisma from "@/lib/prisma";
import { createInvestmentSchema } from "@/lib/validation";
// For handling company logo uploads, if needed.
import { put } from "@vercel/blob";
// For generating unique IDs or slugs.
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import path from "path";

// Inspired by the "jobs/new/actions.ts" implementation from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/d40cc79f5e0c1f503e437d97ef689b01e552db59/src/app/jobs/new/actions.ts
// Function to handle investment posting.
export async function createInvestmentPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  // Parse and validate the form data using the investment schema.
  const {
    ticker,
    type,
    companyName,
    companyLogoUrl,
    description,
    quantity,
    totalValueOnPurchase,
    currentPrice,
    stockExchange,
    currency,
  } = createInvestmentSchema.parse(values);

  // Generate a unique slug for the investment posting.
  const slug = `${ticker}-${nanoid(10)}`;

  let companyLogoUrlString: string | undefined = undefined;

  // Handle company logo upload (if a logo was provided).
  if (companyLogoUrl) {
    const blob = await put(
      `company_logos/${slug}${path.extname(companyLogoUrl.name)}`,
      companyLogoUrl,
      {
        access: "public",
        addRandomSuffix: false,
      },
    );
    // Save the URL of the uploaded logo.
    companyLogoUrlString = blob.url;
  }

  // Save the validated investment posting to the database.
  await prisma.investment.create({
    data: {
      slug,
      ticker: ticker.trim(),
      type,
      companyName: companyName.trim(),
      // Save the uploaded logo URL (if available).
      companyLogoUrl: companyLogoUrlString,
      description: description?.trim(),
      // Handle optional fields.
      quantity: typeof quantity === "number" ? quantity : undefined,
      totalValueOnPurchase: totalValueOnPurchase ?? null,
      currentPrice: currentPrice,
      // Handle optional stock exchange.
      stockExchange: stockExchange ?? null,
      // Handle optional currency field.
      currency: typeof currency === "string" ? currency : undefined,
    },
  });

  // Redirect the user to the confirmation page after successful submission
  redirect("/investment-submitted");
}

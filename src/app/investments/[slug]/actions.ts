"use server";

import prisma from "@/lib/prisma";
import { updateInvestmentSchema } from "@/lib/validation";
import { auth, currentUser } from "@clerk/nextjs/server";
import path from "path";
import { del, put } from "@vercel/blob";
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
      currentPrice,
      stockExchange,
      currency,
      slug,
    } = updateInvestmentSchema.parse(values);

    let companyLogoUrlString: string | undefined = undefined;

    // Handle company logo update if a new logo was provided.
    if (companyLogoUrl) {

      const blob = await put(
        `company_logos/${slug ?? investmentId}${path.extname(companyLogoUrl.name)}`,
        companyLogoUrl,
        {
          access: "public",
          addRandomSuffix: false,
        },
      );
      companyLogoUrlString = blob.url;
    }

    await prisma.investment.update({
      where: { id: investmentId },
      data: {
        id: investmentId,
        userId: userId,
        ticker: ticker?.trim(),
        type: type,
        companyName: companyName?.trim(),
        companyLogoUrl: companyLogoUrlString,
        description: description?.trim(),
        quantity: quantity ? parseInt(quantity) : 0,
        currentPrice: currentPrice ? parseFloat(currentPrice) : undefined,
        stockExchange: stockExchange ?? null,
        currency: currency ?? undefined,
      },
    });

    revalidatePath("/");
  } catch (error) {
  
    let message = "Unexpected error";
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

    const investment = await prisma.investment.findUnique({
      where: { id: investmentId },
    });

    if (investment?.companyLogoUrl) {
      await del(investment.companyLogoUrl);
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

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import {
  createInvestmentSchema,
  updateInvestmentSchema,
} from "@/lib/validation";
import { auth } from "@clerk/nextjs/server";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.nextUrl);

  const page = url.searchParams.get("page");
  const itemsPerPage = url.searchParams.get("itemsPerPage");

  const userId = url.searchParams.get("userId")?.trim() || auth().userId;

  if (!userId) {
    return NextResponse.json(
      { error: "😉 userId is required" },
      { status: 400 },
    );
  }

  if (page) {
    const currentPage = parseInt(page);
    // Fallback to 6 if itemsPerPage is not provided.
    const pageSize = itemsPerPage ? parseInt(itemsPerPage) : 6;

    const totalItemCount = await prisma.investment.count({
      where: { userId },
    });

    const totalPages = Math.ceil(totalItemCount / pageSize);

    const investments = await prisma.investment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: (currentPage - 1) * pageSize,
    });

    return NextResponse.json({
      investments: investments,
      totalPages,
      currentPage,
    });
  } else {
    const allInvestments = await prisma.investment.findMany({
      orderBy: { createdAt: "desc" },
      where: { userId },
    });

    return NextResponse.json({ investments: allInvestments });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Preprocess `quantity` to ensure it's a string before validation.
    if (body.quantity !== undefined && typeof body.quantity !== "string") {
      body.quantity = String(body.quantity);
    }

    const parseResult = createInvestmentSchema.safeParse(body);

    if (!parseResult.success) {
      console.error("Validation Errors:", parseResult.error.flatten());
      return Response.json(
        { error: "Invalid input (≖ ͜ʖ≖)", details: parseResult.error.flatten() },
        { status: 400 },
      );
    }

    const {
      ticker,
      type,
      companyName,
      companyLogoUrl,
      stockExchange,
      currency,
      description,
      quantity,
      purchaseDate,
      currentPrice,
      purchasePrice,
      gainOrLossUsd,
    } = parseResult.data;

    const userId =
      body.userId && body.userId.trim() ? body.userId : auth().userId;

    if (!userId) {
      return Response.json({ error: "Unauthorized (Θ︹Θ)ს" }, { status: 401 });
    }

    // Generate a unique slug for the investment posting.
    const slug = `${toSlug(ticker)}-${nanoid(10)}`;

    // Ensure purchaseDate is in ISO-8601 format.
    const formattedPurchaseDate = purchaseDate
      ? new Date(purchaseDate).toISOString()
      : null;

    // Save the validated investment posting to the database.
    const investment = await prisma.investment.create({
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
        purchaseDate: formattedPurchaseDate,
        currentPrice: currentPrice,
        purchasePrice,
        gainOrLossUsd,
        isPurchased:
          quantity !== "0" &&
          quantity !== "" &&
          typeof purchaseDate === "string",
      },
    });

    return Response.json({ investment: investment }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Internal server error (ᵒ̤̑ ₀̑ ᵒ̤̑)wow!*✰" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    // Preprocess `quantity` to ensure it's a string before validation.
    if (body.quantity !== undefined && typeof body.quantity !== "string") {
      body.quantity = String(body.quantity);
    }

    const parseResult = updateInvestmentSchema.safeParse(body);

    if (!parseResult.success) {
      console.error("Validation Errors:", parseResult.error.flatten());
      return Response.json(
        { error: "Invalid input (≖ ͜ʖ≖)", details: parseResult.error.flatten() },
        { status: 400 },
      );
    }

    let { purchaseDate } = parseResult.data;

    // Ensure purchaseDate is in ISO 8601 format.
    if (purchaseDate && typeof purchaseDate === "string") {
      const parsedDate = new Date(purchaseDate);
      if (isNaN(parsedDate.getTime())) {
        return Response.json({ error: "Invalid date format" }, { status: 400 });
      }
      // Convert to ISO string if the date is valid.
      purchaseDate = parsedDate.toISOString();
    }

    const {
      ticker,
      type,
      companyName,
      companyLogoUrl,
      stockExchange,
      currency,
      description,
      quantity,
      slug,
      currentPrice,
    } = parseResult.data;

    const investment = await prisma.investment.findUnique({ where: { slug } });

    if (!investment) {
      return Response.json(
        { error: "(☞⌐▀͡ ͜ʖ͡▀ )☞ Investment not found" },
        { status: 404 },
      );
    }

    const userId =
      body.userId && body.userId.trim() ? body.userId : auth().userId;

    if (!userId || userId !== investment.userId) {
      return Response.json(
        { error: "Unauthorized ✌.|•͡˘‿•͡˘|.✌" },
        { status: 401 },
      );
    }

    const updatedInvestment = await prisma.investment.update({
      where: { id: investment.id },
      data: {
        id: investment.id,
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
        currentPrice: currentPrice ?? investment.currentPrice,
        isPurchased:
          quantity !== "0" &&
          quantity !== "" &&
          typeof purchaseDate === "string",
      },
    });

    return Response.json(
      { updatedInvestment: updatedInvestment },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Internal server error ¯_( ͠° ͟ʖ ͠°)_/¯" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.nextUrl);

    const investmentId = url.searchParams.get("investmentId");

    if (!investmentId) {
      return Response.json(
        { error: "Investment ID is required 🤷‍♂️" },
        { status: 400 },
      );
    }

    // Convert investmentId to a number
    const investmentIdNumber = Number(investmentId);
    if (isNaN(investmentIdNumber)) {
      return Response.json(
        { error: "Invalid investment ID 🤷‍♂️" },
        { status: 400 },
      );
    }

    const investment = await prisma.investment.findUnique({
      where: { id: investmentIdNumber },
    });

    if (!investment) {
      return Response.json(
        { error: "Investment not found 🤷‍♂️" },
        { status: 404 },
      );
    }

    const userId = url.searchParams.get("userId")?.trim() || auth().userId;

    if (!userId || userId !== investment.userId) {
      return Response.json(
        { error: "¯_( ͡~ ͜ʖ ͡°)_/¯ Unauthorized" },
        { status: 401 },
      );
    }

    await prisma.investment.delete({
      where: { id: investmentIdNumber },
    });

    return Response.json(
      { message: "Investment deleted ᇂ_ᇂ" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    // Extract error details safely.
    const errorDetails = {
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
      stack: error instanceof Error ? error.stack : undefined,
      customMessage: "Something went wrong while deleting the investment.",
    };

    return Response.json(
      { error: "Internal server error 😭", details: errorDetails },
      { status: 500 },
    );
  }
}

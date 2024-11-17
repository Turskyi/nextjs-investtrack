import { Investment } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const {
  placeholderInvestments,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require("../../../../scripts/placeholder-data");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  try {
    await Promise.all(
      placeholderInvestments.map(async (investment: Investment) => {
        const existingInvestment = await prisma.investment.findFirst({
          where: {
            userId: userId,
            ticker: investment.ticker,
          },
        });

        if (!existingInvestment) {
          await prisma.investment.create({
            data: {
              ...investment,
              userId: userId,
            },
          });
        }
      }),
    );
    return NextResponse.json({
      message: "Investments seeded successfully 💋",
    });
  } catch (error) {
    console.error("Error seeding investments 🤷:", error);
    return NextResponse.json(
      { error: "Error seeding investments 😢" },
      { status: 500 },
    );
  }
}

import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request: NextRequest) {
  const url = new URL(request.nextUrl);

  const userId = url.searchParams.get("userId")?.trim() || auth().userId;

  if (!userId) {
    return NextResponse.json(
      { error: "User ID is required 😈" },
      { status: 400 },
    );
  }

  try {
    // Step 1: Delete all investments from the database.
    await prisma.$transaction(async (tx) => {
      // Delete all investments in Prisma.
      await tx.investment.deleteMany({
        where: { userId },
      });
    });

    // Step 2: Delete the user.
    await clerkClient.users.deleteUser(userId);
    return NextResponse.json({ message: "User deleted 😎" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error deleting user 😢" });
  }
}

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/dist/server/web/spec-extension/request";

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  try {
    const userId =
      body.userId && body.userId.trim() ? body.userId : auth().userId;

    if (!userId) {
      return new Response("Unauthorized 😭", { status: 401 });
    }

    await prisma.investment.deleteMany({ where: { userId } });

    return new Response("All investments deleted successfully 😀.", {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting investments 😬:", error);
    return new Response("Internal server error 😢", { status: 500 });
  }
}

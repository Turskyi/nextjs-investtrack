/*
  Warnings:

  - A unique constraint covering the columns `[userId,ticker]` on the table `investments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "investments" ADD COLUMN     "currentPrice" DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "investments_userId_ticker_key" ON "investments"("userId", "ticker");

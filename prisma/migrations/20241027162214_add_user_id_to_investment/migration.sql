-- CreateTable
CREATE TABLE "investments" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "stockExchange" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "description" TEXT,
    "currentPrice" DOUBLE PRECISION NOT NULL,
    "companyName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "totalValueOnPurchase" DOUBLE PRECISION,
    "companyLogoUrl" TEXT,
    "isPurchased" BOOLEAN NOT NULL DEFAULT false,
    "purchaseDate" TIMESTAMP(3),
    "purchasePrice" DOUBLE PRECISION,
    "totalCurrentValue" DOUBLE PRECISION,
    "gainOrLossCad" DOUBLE PRECISION,
    "gainOrLossUsd" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investments_slug_key" ON "investments"("slug");

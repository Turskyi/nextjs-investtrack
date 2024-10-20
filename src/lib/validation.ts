import { z } from "zod";
import { investmentTypes, stockExchangeTypes } from "./investment-types";

// Inspired by the "validation.ts" implementation from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/lib/validation.ts
const requiredString = z.string().min(1, "Required");

// Validation for the company logo (optional, must be an image file, less than 2MB).
const companyLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

// Investment schema for validating `quantity` and `totalValueOnPurchase`.
const investmentSchema = z
  .object({
    quantity: z
      .number()
      .int()
      .min(0, "Quantity must be a positive integer")
      .optional()
      .or(z.literal(0)),
    totalValueOnPurchase: z.number().positive().optional().or(z.literal(0)),
  })
  .refine((data) => data.quantity || data.totalValueOnPurchase, {
    message: "Quantity or Total Value on Purchase is required",
    path: ["quantity"],
  });

const stockExchangeSchema = z
  .object({
    stockExchange: requiredString
      .refine(
        (value) => stockExchangeTypes.includes(value),
        "Invalid stock exchange type",
      )
      .optional(),
  })
  .refine((data) => !data.stockExchange || data.stockExchange, {
    message: "Stock exchange type is required if provided",
    path: ["stockExchange"],
  });

export const createInvestmentSchema = z
  .object({
    ticker: requiredString.max(10, "Ticker symbol can't exceed 10 characters"),
    type: requiredString.refine(
      (value) => investmentTypes.includes(value),
      "Invalid investment type",
    ),
    companyName: requiredString.max(
      100,
      "Company name can't exceed 100 characters",
    ),
    companyLogoUrl: companyLogoSchema,
    description: z.string().max(5000).optional(),
    currentPrice: z.number().positive("Must be a positive number"),
  })
  .and(investmentSchema)
  .and(stockExchangeSchema);

export type CreateInvestmentValues = z.infer<typeof createInvestmentSchema>;

export const investmentFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  currency: z.string().optional(),
  stockExchange: z.string().optional(),
  isPurchased: z.coerce.boolean().optional(),
});

export type InvestmentFilterValues = z.infer<typeof investmentFilterSchema>;

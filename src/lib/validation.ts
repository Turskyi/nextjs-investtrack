import { z } from "zod";
import { investmentTypes, stockExchangeTypes } from "./investment-types";
import currencies from "./currency-list";

// Inspired by the "validation.ts" implementation from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/lib/validation.ts
const requiredString = z.string().min(1, "Required");
const numericRequiredString = requiredString.regex(
  /^\d+(\.\d+)?$/,
  "Must be a number",
);

// Validation for the company logo (optional, must be a valid URL).
const companyLogoSchema = z
  .string()
  // Ensures it's a valid URL.
  .url("Must be a valid URL")
  // Allows it to be empty or undefined.
  .optional();

// Investment schema for validating `quantity` and `totalValueOnPurchase`.
const investmentSchema = z.object({
  quantity: numericRequiredString
    .min(0, "Quantity must be a positive integer or zero")
    // Allow this to be optional.
    .optional()
});

const stockExchangeSchema = z.object({
  stockExchange: requiredString.optional(),
});

// Extract valid currency codes from the currency list.
const acceptedCurrencies = currencies.map(
  (currency) => currency.AlphabeticCode,
);

// Currency schema for validation.
const currencySchema = z.object({
  currency: z.string().optional(),
});

// Define each component schema separately
const tickerSchema = z.object({
  ticker: requiredString.max(10, "Ticker symbol can't exceed 10 characters."),
});

const typeSchema = z.object({
  type: requiredString.refine(
    (value) => investmentTypes.includes(value),
    "Invalid investment type.",
  ),
});

const companyNameSchema = z.object({
  companyName: requiredString.max(
    100,
    "Company name can't exceed 100 characters.",
  ),
});

// Main schema without .refine() to keep it as a ZodObject.
const baseInvestmentSchema = tickerSchema
  .merge(typeSchema)
  .merge(companyNameSchema)
  .merge(investmentSchema)
  .merge(stockExchangeSchema)
  .merge(currencySchema)
  .extend({
    companyLogoUrl: companyLogoSchema,
    description: z.string().max(5000).optional(),
    currentPrice: numericRequiredString,
    slug: z.string().optional(),
    purchaseDate: z.string().optional(),
  });

export const createInvestmentSchema = baseInvestmentSchema
  .refine(
    (data) =>
      !data.stockExchange || stockExchangeTypes.includes(data.stockExchange),
    {
      message: "Invalid stock exchange type.",
      path: ["stockExchange"],
    },
  )
  .refine(
    (data) => !data.currency || acceptedCurrencies.includes(data.currency),
    {
      message: "Invalid or unsupported currency type.",
      path: ["currency"],
    },
  );

export const investmentFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  currency: z.string().optional(),
  stockExchange: z.string().optional(),
  isPurchased: z.coerce.boolean().optional(),
});

// Use `partial()` on the non-refined `baseInvestmentSchema`.
export const updateInvestmentSchema = baseInvestmentSchema.partial();

// Types.
export type CreateInvestmentValues = z.infer<typeof createInvestmentSchema>;
export type InvestmentFilterValues = z.infer<typeof investmentFilterSchema>;

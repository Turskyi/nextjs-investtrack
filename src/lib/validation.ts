import { z } from "zod";
import { investmentTypes, stockExchangeTypes } from "./investment-types";
import currencies from "./currency-list";

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
    // kb multiply mb multiply 2.
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

// Investment schema for validating `quantity` and `totalValueOnPurchase`.
const investmentSchema = z.object({
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a valid number",
    })
    .int("Quantity must be an integer")
    .min(0, "Quantity must be a positive integer or zero")
    .refine((val) => val === undefined || Number.isInteger(val), {
      message: "Quantity must be an integer",
    })
    // Allow this to be optional.
    .optional(),
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

// Extract valid currency codes from the currency list
const acceptedCurrencies = currencies.map(
  (currency) => currency.AlphabeticCode,
);

// Currency schema for validation
const currencySchema = z
  .object({
    currency: z
      .string()
      .refine((value) => acceptedCurrencies.includes(value), "Invalid currency")
      // Optional if not required for all cases.
      .optional(),
  })
  .refine(
    (data) => !data.currency || acceptedCurrencies.includes(data.currency),
    {
      message: "Invalid or unsupported currency type",
      path: ["currency"],
    },
  );

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
    // Company logo is optional and validated.
    companyLogoUrl: companyLogoSchema,
    description: z.string().max(5000).optional(),
    currentPrice: z.number().positive("Must be a positive number"),
  })
  // Merging with the investment schema for quantity and total value.
  .and(investmentSchema)
  // Merging with the stock exchange schema.
  .and(stockExchangeSchema)
  // Merging with the currency schema.
  .and(currencySchema);

export type CreateInvestmentValues = z.infer<typeof createInvestmentSchema>;

export const investmentFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  currency: z.string().optional(),
  stockExchange: z.string().optional(),
  isPurchased: z.coerce.boolean().optional(),
});

export type InvestmentFilterValues = z.infer<typeof investmentFilterSchema>;

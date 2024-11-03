"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  createInvestmentSchema,
  CreateInvestmentValues,
} from "@/lib/validation";
import Select from "@/components/ui/select";
import { investmentTypes, stockExchangeTypes } from "@/lib/investment-types";
import currencies from "@/lib/currency-list";
import Markdown from "@/components/Markdown";
import { updateInvestment } from "./actions";
import FormSubmitButton from "@/components/FormSubmitButton";
import { Investment } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { formatDateToISO } from "@/lib/utils";

// This implementation is inspired by the "NewJobForm" component from the
// Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/app/jobs/new/NewJobForm.tsx.

interface InvestmentFormProps {
  initialValues: Partial<CreateInvestmentValues>;
  investment: Investment;
}

export default function InvestmentForm({
  initialValues,
  investment,
}: InvestmentFormProps) {
  const form = useForm<CreateInvestmentValues>({
    resolver: zodResolver(createInvestmentSchema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting },
  } = form;

  // Watch the quantity value.
  const quantity = watch("quantity");

  async function onSubmit(
    values: CreateInvestmentValues,
    investmentId: number,
  ) {
    // Format `purchaseDate` to full ISO-8601 if it exists.
    if (values.purchaseDate) {
      values.purchaseDate = formatDateToISO(values.purchaseDate);
    }
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });
    // Append investmentId to the formData.
    formData.append("investmentId", investmentId.toString());
    try {
      await updateInvestment(formData);
    } catch (error) {
      console.error(error);
      alert("Something went wrong 😓, please try again.");
    }
  }

  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <div className="space-y-5 text-center">
        <H1>Edit Investment.</H1>
        <p className="text-muted-foreground">Update the investment details.</p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <Form {...form}>
          <form
            className="space-y-4"
            // Disable native validation, because we will use our own
            // validation, with our own error message, not the browser message.
            noValidate
            onSubmit={handleSubmit((values) => onSubmit(values, investment.id))}
          >
            {/* Company name. */}
            <FormField
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Apple Inc."
                      {...field}
                      defaultValue={initialValues.companyName}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Company logo URL */}
            <FormField
              control={control}
              name="companyLogoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Logo URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      defaultValue={initialValues.companyLogoUrl}
                      type="url"
                      placeholder="Enter direct image URL. (For example https://blah.webp)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Type. */}
            <FormField
              control={control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Type</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue="">
                      <option value="" hidden>
                        Select an option
                      </option>
                      {investmentTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          defaultValue={initialValues.type}
                        >
                          {type}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stock Exchange. */}
            <FormField
              control={control}
              name="stockExchange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock Exchange</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue="">
                      <option value="" hidden>
                        Select an option
                      </option>
                      {stockExchangeTypes.map((stockExchange) => (
                        <option
                          key={stockExchange}
                          value={stockExchange}
                          defaultValue={initialValues.stockExchange}
                        >
                          {stockExchange}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ticker. */}
            <FormField
              control={control}
              name="ticker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticker Symbol</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. AAPL"
                      {...field}
                      defaultValue={initialValues.ticker}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Currency. */}
            <FormField
              control={control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue={initialValues.currency}>
                      {currencies.map((currency) => (
                        <option
                          key={currency.AlphabeticCode}
                          value={
                            currency.AlphabeticCode ?? initialValues.currency
                          }
                        >
                          {`${currency.Entity} - ${currency.AlphabeticCode} - ${currency.Currency}`}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantity. */}
            <FormField
              control={control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        id="quantity"
                        defaultValue={initialValues.quantity}
                        placeholder="e.g. 100"
                        type="number"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Purchase Date. */}
            {/* Conditionally render Purchase Date if quantity > 0. */}
            {typeof quantity === "string" &&
              quantity !== "0" &&
              quantity !== "" && (
                <FormField
                  control={control}
                  name="purchaseDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purchase Date and Time</FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          placeholder="Select purchase date and time"
                          {...field}
                          defaultValue={initialValues.purchaseDate}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            {/* Description. */}
            <div>
              {initialValues.description && (
                <Markdown>{initialValues.description}</Markdown>
              )}
            </div>
            <input hidden name="investmentId" value={investment.id} />
            <input hidden name="slug" value={investment.slug} />
            <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
              Update
            </FormSubmitButton>
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
          </form>
        </Form>
      </div>
    </main>
  );
}

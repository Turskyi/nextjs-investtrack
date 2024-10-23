"use client";

import LoadingButton from "@/components/LoadingButton";
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
import { createInvestmentPosting } from "./actions";
import Select from "@/components/ui/select";
import { investmentTypes, stockExchangeTypes } from "@/lib/investment-types";
import currencies from "@/lib/currency-list";

// This implementation is inspired by the "NewJobForm" component from the
// Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/app/jobs/new/NewJobForm.tsx.
export default function NewInvestmentForm() {
  const form = useForm<CreateInvestmentValues>({
    resolver: zodResolver(createInvestmentSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateInvestmentValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        if (typeof value === "number") {
          formData.append(key, value.toString());
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          // For strings or other types.
          formData.append(key, value);
        }
      }
    });

    try {
      await createInvestmentPosting(formData);
    } catch (error) {
      console.error(error); // Log the error if needed
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <div className="space-y-5 text-center">
        <H1>Create a New Investment</H1>
        <p className="text-muted-foreground">
          Submit the details of a new investment opportunity.
        </p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <Form {...form}>
          <form
            className="space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="ticker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticker Symbol</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. AAPL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Apple Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="companyLogoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Logo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      {stockExchangeTypes.map((exchange) => (
                        <option key={exchange} value={exchange}>
                          {exchange}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue="USD">
                      <option value="" hidden>
                        Select an option
                      </option>
                      {currencies.map((currency) => (
                        <option
                          key={currency.AlphabeticCode}
                          value={currency.AlphabeticCode ?? "USD"}
                        >
                          {currency.Currency}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 100" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton type="submit" loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}

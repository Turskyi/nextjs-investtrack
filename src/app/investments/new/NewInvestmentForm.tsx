"use client";

import LoadingButton from "@/components/LoadingButton";
import RichTextEditor from "@/components/RichTextEditor";
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
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { draftToMarkdown } from "markdown-draft-js";
import { useForm } from "react-hook-form";
import {
  createInvestmentSchema,
  CreateInvestmentValues,
} from "@/lib/validation";
import { createInvestment } from "./actions";
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
    watch,
    control,
    setFocus,
    formState: { isSubmitting },
  } = form;

  // Watch the quantity value.
  const quantity = watch("quantity");

  async function onSubmit(values: CreateInvestmentValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createInvestment(formData);
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again. 😓");
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
            // Disable native validation, because we will use our own
            // validation, with our own error message, not the browser message.
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Company name. */}
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
                        <option key={stockExchange} value={stockExchange}>
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
                    <Input placeholder="e.g. AAPL" {...field} />
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
                    <Select
                      {...field}
                      defaultValue={
                        currencies.find(
                          (currency) =>
                            currency.AlphabeticCode === "USD" &&
                            currency.Entity ===
                              "UNITED STATES OF AMERICA (THE)",
                        )?.AlphabeticCode ?? ""
                      }
                    >
                      {currencies.map((currency) => (
                        <option
                          key={currency.AlphabeticCode}
                          value={currency.AlphabeticCode ?? ""}
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
                        defaultValue={0}
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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

            {/* Description. */}
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label onClick={() => setFocus("description")}>
                    Description
                  </Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
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

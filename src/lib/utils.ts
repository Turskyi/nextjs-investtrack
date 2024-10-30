import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNowStrict } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}

export const formatDateToISO = (date: string) => new Date(date).toISOString();

// Utility to format date to `YYYY-MM-DD`.
export const formatDateForInput = (date: Date | string) => {
  const d = typeof date === "string" ? new Date(date) : date;
  // YYYY-MM-DD format.
  return d.toISOString().split("T")[0];
};

export const formatDateForDisplay = (date: Date | string) => {
  const d = typeof date === "string" ? new Date(date) : date;
  // Adjust to remove local timezone effect, treating it as UTC.
  const utcDate = new Date(d.getTime() + d.getTimezoneOffset() * 60000);

  // Format to desired display format: MM/DD/YYYY.
  const day = String(utcDate.getUTCDate()).padStart(2, "0");
  const month = String(utcDate.getUTCMonth() + 1).padStart(2, "0");
  // getUTCMonth() is zero-based.
  const year = utcDate.getUTCFullYear();

  return `${month}/${day}/${year}`;
};

export function toSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

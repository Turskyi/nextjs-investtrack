import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import currencies from "@/lib/currency-list";

// TODO: remove, because never used.

// Inspired by the "LocationInput" component from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/components/LocationInput.tsx
interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onCurrencySelected: (currency: string) => void;
}

export default forwardRef<HTMLInputElement, CurrencyInputProps>(
  function CurrencyInput({ onCurrencySelected, ...props }, ref) {
    const [currencySearchInput, setCurrencySearchInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);

    const filteredCurrencies = useMemo(() => {
      if (!currencySearchInput.trim()) return [];

      const searchWords = currencySearchInput.split(" ");

      return currencies
        .map((currency) => `${currency.Currency} (${currency.AlphabeticCode})`)
        .filter(
          (currency) =>
            currency.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              currency.toLowerCase().includes(word.toLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [currencySearchInput]);

    return (
      <div className="relative">
        <Input
          placeholder="Search for a currency..."
          type="search"
          value={currencySearchInput}
          onChange={(e) => setCurrencySearchInput(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          {...props}
          ref={ref}
        />
        {currencySearchInput.trim() && hasFocus && (
          <div className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
            {!filteredCurrencies.length && (
              <p className="p-3">No results found.</p>
            )}
            {filteredCurrencies.map((currency) => (
              <button
                key={currency}
                className="block w-full p-2 text-start"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onCurrencySelected(currency);
                  setCurrencySearchInput("");
                }}
              >
                {currency}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);

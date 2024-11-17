"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuggestedInvestmentsButton({
  userId,
}: {
  userId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDownloadSuggestedInvestments = async () => {
    setIsLoading(true);
    const response = await fetch("/api/suggested-investments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (response.ok) {
      alert("Suggested investments downloaded successfully! 💋");
      router.refresh(); // Refresh the page to fetch the new investments
    } else {
      alert("Failed to download suggested investments. 🤷");
    }
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleDownloadSuggestedInvestments}
      className="hover:bg-primary-dark mt-4 rounded bg-primary px-4 py-2 text-white disabled:opacity-50"
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        "Download Suggested Investment Wishlist"
      )}
    </button>
  );
}

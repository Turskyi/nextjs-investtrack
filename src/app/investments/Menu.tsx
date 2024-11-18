"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoreVertical } from "lucide-react"; // Import the icon

export default function Menu({ userId }: { userId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDeleteAllInvestments = async () => {
    setIsLoading(true);
    const response = await fetch("/api/delete-investments", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (response.ok) {
      setIsOpen(false);
      alert("All investments deleted successfully! 😊");
      router.refresh();
    } else {
      alert("Failed to delete investments. 😞");
    }
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-2 hover:bg-gray-200"
      >
        <MoreVertical size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded border bg-white shadow-lg">
          <button
            onClick={handleDeleteAllInvestments}
            className="block w-full px-4 py-2 text-left text-red-500 hover:bg-red-100 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-red-500"
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
                Deleting...
              </span>
            ) : (
              "Delete All Investments"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

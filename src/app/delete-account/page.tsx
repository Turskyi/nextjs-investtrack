"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

export default function DeleteAccountPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  // Clerk hook to get the authenticated user ID.
  const { userId } = useAuth();
  const router = useRouter();

  const handleDeleteAccount = async () => {
    setLoading(true);
    setError(null);

    try {
      const encodedUserId = userId ? encodeURIComponent(userId) : "";
      // Send the delete request to API route.
      const response = await fetch(`/api/delete-user?userId=${encodedUserId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Redirect after deletion.
        router.push("/account-deleted");
      } else {
        setError(result.error || "（。ˇ ⊖ˇ）♡ Failed to delete account");
      }
    } catch (err) {
      // Logs the error to the console for debugging.
      console.error("Error:", err);
      setError("An unexpected error occurred ٩(▀̿Ĺ̯▀̿ ̿٩)三");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex-grow px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Delete Account</h1>
      <p className="mb-4">
        Deleting your account is permanent and cannot be undone. When you delete
        your account, the following data will be removed:
      </p>
      <ul className="mb-6 ml-6 list-disc">
        <li>Your profile information</li>
        <li>All your saved investment records</li>
        <li>Any other personal data associated with your account</li>
      </ul>
      <p className="mb-6">
        After deleting your account, your data will be permanently removed from
        our servers. If you are sure, click the button below to delete your
        account.
      </p>

      {error && <p className="mb-4 text-red-600">{error}</p>}
      {success ? (
        <p className="mb-4 text-green-600">
          Your account has been successfully deleted.
        </p>
      ) : (
        <Button
          onClick={handleDeleteAccount}
          disabled={loading}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          {loading ? "Deleting..." : "Delete Account"}
        </Button>
      )}
    </div>
  );
}

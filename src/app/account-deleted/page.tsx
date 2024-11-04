"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AccountDeletedPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto flex-grow px-4 py-10 text-center">
      <h1 className="mb-6 text-3xl font-bold">Account Deleted</h1>
      <p className="mb-4">
        Your account has been successfully deleted. We&apos;re sorry to see you
        go!
      </p>
      <p className="mb-6">
        If you ever change your mind, feel free to sign up again.
      </p>

      <div className="space-x-4">
        <Button onClick={() => router.push("/")} variant="default">
          Go to Home
        </Button>
        <Button onClick={() => router.push("/sign-up")} variant="secondary">
          Sign Up Again
        </Button>
      </div>
    </div>
  );
}

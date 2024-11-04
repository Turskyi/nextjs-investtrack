import H1 from "@/components/ui/h1";
import Link from "next/link";

export default function Page() {
  return (
    <main className="m-auto my-10 max-w-5xl flex-grow space-y-5 px-3 text-center">
      <H1>Investment Submitted</H1>
      <p>Your investment posting has been submitted.</p>

      {/* Navigation Button */}
      <Link
        href="/"
        className="mt-5 inline-block rounded bg-primary px-4 py-2 text-white hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </main>
  );
}

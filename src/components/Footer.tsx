import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        {/* First section: Logo and tagline */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">InvestTrack</h3>
            <p className="text-sm text-muted-foreground">
              Empowering you to grow your investments
            </p>
          </div>

          {/* Links section */}
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground sm:justify-end">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Footer bottom section: copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} InvestTrack, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

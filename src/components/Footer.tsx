import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl space-y-3 px-3 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 flex-wrap">
          {/* First section: Logo and tagline */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">InvestTrack</h3>
            <p className="text-sm text-muted-foreground">
              Empowering you to grow your investments
            </p>
          </div>

          {/* Links section */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center sm:justify-start">
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

          {/* App store badges */}
          <div className="flex flex-row gap-3 justify-center sm:justify-end items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.turskyi.investtrack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                width={160}
                height={53}
              />
            </a>
            <a
              href="https://apps.apple.com/ca/app/investtrack/id6743641818"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={133}
                height={45}
              />
            </a>
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

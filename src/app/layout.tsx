import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { APP_NAME } from "../../constants";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "Track and manage your investments with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Node version:', process.version);
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Google tag (gtag.js) */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BTXR9B8LVK"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-BTXR9B8LVK');
            `}
          </Script>
        </head>
        <body
          className={`${inter.className} flex min-h-screen min-w-[350px] flex-col`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

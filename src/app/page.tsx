import logo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { APP_NAME } from "../../constants";
import { auth } from "@clerk/nextjs/server";

const INVESTMENTS_PATH = "/investments";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect(INVESTMENTS_PATH);

  return (
    <main className="flex flex-grow flex-col justify-evenly gap-5">
      <div className="flex flex-grow flex-col items-center justify-center gap-5">
        <Image
          src={logo}
          alt={`${APP_NAME} logo`}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {APP_NAME}
        </span>

        <p className="max-w-prose text-center">
          Track and manage your investments with ease.
        </p>
        <Button size="lg" className="h-12 w-80" asChild>
          <Link href={INVESTMENTS_PATH}>View Investments</Link>
        </Button>
      </div>
    </main>
  );
}

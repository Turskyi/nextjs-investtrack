"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { APP_NAME } from "../../constants";
import { useRouter } from "next/navigation";
import Menu from "@/app/investments/Menu";

export default function Navbar() {
  const { user, signOut } = useClerk();
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt={`${APP_NAME} logo`} />
          <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
        </Link>

        {isSignedIn && (
          <>
            <span className="font-semibold">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
            <button
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
              className="underline"
            >
              Log out
            </button>
          </>
        )}

        {/* `asChild` makes component look like Button, but act like Link. */}
        <Button asChild>
          <Link href="/investments/new">Post an investment</Link>
        </Button>

        {user && <Menu userId={user.id} />}
      </nav>
    </header>
  );
}

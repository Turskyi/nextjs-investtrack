import logo from "@/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { APP_NAME } from "../../constants";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt={`${APP_NAME} logo`} />
          <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
        </Link>
        {/* `asChild` makes component look like Button, but act like Link. */}
        <Button asChild>
          <Link href="/investments/new">Post an investment</Link>
        </Button>
      </nav>
    </header>
  );
}

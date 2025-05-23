import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import { APP_NAME } from "../../../../constants";

export const metadata: Metadata = {
  title: `${APP_NAME} - Sign In`,
};

export default function SignInPage() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}

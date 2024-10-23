import { Metadata } from "next";
import NewInvestmentForm from "./NewInvestmentForm";

export const metadata: Metadata = {
  title: "Post a new investment.",
};

export default function Page() {
  return <NewInvestmentForm />;
}

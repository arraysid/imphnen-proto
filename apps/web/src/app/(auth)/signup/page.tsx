import { SignupPage } from "@packages/ui/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Page() {
  return <SignupPage />;
}

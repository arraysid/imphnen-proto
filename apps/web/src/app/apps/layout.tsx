import { AppsLayout } from "@/layouts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppsLayout>{children}</AppsLayout>;
}

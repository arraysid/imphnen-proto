import { AppsLayout } from "@/layouts";
import { getServerSession } from "@/libs/auth";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getServerSession();
  return <AppsLayout>{children}</AppsLayout>;
}

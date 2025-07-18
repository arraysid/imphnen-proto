import { baiJamjureeFont } from "@/libs/fonts";
import "@/styles/globals.css";
import { TanstackQueryProvider } from "@packages/utils/tanstack-query";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "IMPHNEN | %s",
    default: "IMPHNEN | Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
  },
  description: "Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={baiJamjureeFont.className}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}

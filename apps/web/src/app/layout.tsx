import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMPHNEN ",
  description: "Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

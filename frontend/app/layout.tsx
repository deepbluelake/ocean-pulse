import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "OceanPulse",
  description: "Ocean intelligence for coastal awareness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

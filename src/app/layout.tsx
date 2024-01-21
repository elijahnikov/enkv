import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import PageLayout from "@/components/common/page-layout";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "enkv - Elijah Posnikov",
  description: "Portfolio for Elijah Posnikov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}

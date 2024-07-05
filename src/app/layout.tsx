import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";

const inter = Inter({ subsets: ["latin"] });

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "John Doe";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Software Engg.";
const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || "/favicon.ico";


export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

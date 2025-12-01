import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  display: 'swap',
});

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "John Doe";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Software Engg.";
const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || "/favicon.ico";
const imageUrl = process.env.NEXT_PUBLIC_THUMBNAIL_IMAGE


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
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </head>
      <body className={poppins.className}>
        <QueryProvider>
          {children}
          <Analytics />
        </QueryProvider>
      </body>
    </html>
  );
}
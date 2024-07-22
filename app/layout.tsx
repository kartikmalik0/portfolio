"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { useRouter } from "next/router";
import Head from "next/head";
import 'fumadocs-ui/style.css';
import { RootProvider } from "fumadocs-ui/provider";
const inter = Inter({ subsets: ["latin"] });

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "John Doe";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Software Engg.";
const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || "/favicon.ico";
const imageUrl = process.env.NEXT_PUBLIC_THUMBNAIL_IMAGE;

const docsTitle = "KartikDevHub";
const docsDescription = "Explore to KARTIK_MALIKs Web Dev Documentation";
const docsImageUrl = "https://utfs.io/f/724e983c-2b1a-4a1f-982b-2d8eaadd206e-gsff2r.jpg";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const isDocsRoute = router.pathname.startsWith('/docs');

  const currentTitle = isDocsRoute ? docsTitle : siteTitle;
  const currentDescription = isDocsRoute ? docsDescription : siteDescription;
  const currentImageUrl = isDocsRoute ? docsImageUrl : imageUrl;

  return (
    <html lang="en">
      <Head>
        <title>{currentTitle}</title>
        <meta name="description" content={currentDescription} />
        <link rel="icon" href={faviconUrl} />
        {currentImageUrl && <meta property="og:image" content={currentImageUrl} />}
      </Head>
      <body className={inter.className}>
        <RootProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </RootProvider>
      </body>
    </html>
  );
}

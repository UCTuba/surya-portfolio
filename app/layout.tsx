import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Surya Sri Venkat Annabathuni - ML, Data & Software";
  const description = "UK-based Indian technologist building machine-learning, data and full-stack systems - with cinema always in the frame.";

  return {
    metadataBase: base,
    title,
    description,
    authors: [{ name: "Surya Sri Venkat Annabathuni" }],
    keywords: ["machine learning", "software engineering", "data science", "computer vision", "portfolio"],
    openGraph: {
      title,
      description,
      type: "website",
      url: base,
      siteName: "Surya Sri Venkat",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: "Surya Sri Venkat - Code. Cinema. Curiosity." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

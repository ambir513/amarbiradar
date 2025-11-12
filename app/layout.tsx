import { Providers } from "@/components/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amar Biradar - A Full Stack web developer.",
  description:
    "Welcome to my personal website where I share my projects, blogs, and experiences as a full stack web developer.",
  icons: [
    { url: "/image/ab.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/image/ab.png" },
  ],
  keywords: [
    "Amar Biradar",
    "ambir513",
    "AmBir",
    "nextjs",
    "seo",
    "meta tags",
    "web development",
    "full stack",
  ],
  authors: [{ name: "Amar Biradar", url: "https://amarbiradar.me" }],
  creator: "AmBir",
  openGraph: {
    title: "AmBir - A Full Stack web developer.",
    description:
      "Welcome to my personal website where I share my projects, blogs, and experiences as a full stack web developer.",
    url: "https://amarbiradar.me",
    siteName: "Amar Biradar",
    images: [
      {
        url: "/image/ambir513.jpeg",
        width: 1080,
        height: 1080,
        alt: "AmBir - A Full Stack web developer.",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

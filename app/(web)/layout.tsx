import "~/styles/globals.css";

import * as React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dante Kelly - Portfolio",
  description: "Personal Portfolio of Dante Kelly",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {children}
        {draftMode().isEnabled && <VisualEditing />}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

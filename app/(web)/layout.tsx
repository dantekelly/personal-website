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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" className={inter.variable}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {isEnabled && (
          <a
            className="fixed bottom-0 right-0 m-4 bg-blue-500 p-4 text-white"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {children}
        {isEnabled && <VisualEditing />}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

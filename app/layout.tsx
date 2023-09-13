import * as React from "react";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";

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
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

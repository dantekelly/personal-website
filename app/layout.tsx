import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";

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

"use client";
import * as React from "react";

import FlowbiteContext from "~/contexts/FlowbiteContext";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlowbiteContext>
      <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body>{children}</body>
      </html>
    </FlowbiteContext>
  );
}

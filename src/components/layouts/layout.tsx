import * as React from "react";

import Header from "~/components/layouts/header";
import { useBreakpoint } from "~/utils/useBreakpoint";

interface LayoutProps {
  isHome?: boolean;
  children: React.ReactNode;
}

export default function Layout({ isHome, children }: LayoutProps) {
  const { isBelowMd } = useBreakpoint("md");

  const showAside = isHome ?? isBelowMd;

  return (
    <>
      <Header isMobile={isBelowMd} />

      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 pt-20">
        {children}
      </main>

      {showAside && <aside></aside>}
    </>
  );
}

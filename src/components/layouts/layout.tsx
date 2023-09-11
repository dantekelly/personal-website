import * as React from "react";

import Header from "~/components/layouts/header";
import { useBreakpoint } from "~/utils/useBreakpoint";
import Aside from "~/components/layouts/aside";
import clsx from "clsx";

interface LayoutProps {
  isHome?: boolean;
  children: React.ReactNode;
}

export default function Layout({ isHome, children }: LayoutProps) {
  const { isBelowMd, isAboveMd } = useBreakpoint("md");

  return (
    <div
      className={clsx(
        "grid grid-cols-1 bg-slate-900 grid-areas-layout",
        isAboveMd && "grid-cols-layout",
      )}
    >
      <Header isMobile={isBelowMd} />

      <main className={clsx("pt-[90px]", isAboveMd && "flex-grow")}>
        {children}
      </main>

      {isAboveMd && <Aside isMobile={isBelowMd} />}
    </div>
  );
}

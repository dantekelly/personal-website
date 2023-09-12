import * as React from "react";
import clsx from "clsx";

import Header from "~/components/layouts/header";
import Aside from "~/components/layouts/aside";

interface LayoutProps {
  children: React.ReactNode;
  isBelowMd: boolean;
  isAboveMd: boolean;
}

export default function Layout({
  isBelowMd,
  isAboveMd,
  children,
}: LayoutProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 bg-slate-900 grid-areas-layout",
        isAboveMd && "grid-cols-layout",
      )}
    >
      <Header isMobile={isBelowMd} />

      <main
        className={clsx(
          "overflow-x-hidden px-[24px] pt-[90px] lg:px-[48px]",
          isAboveMd && "flex-grow",
        )}
      >
        {children}
      </main>

      {isAboveMd && <Aside isMobile={isBelowMd} />}
    </div>
  );
}

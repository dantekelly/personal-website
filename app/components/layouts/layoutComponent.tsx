import * as React from "react";
import clsx from "clsx";

import Header from "./header";
import Aside from "./aside";

interface LayoutProps {
  children: React.ReactNode;
  isBelowMd: boolean;
  isAboveMd: boolean;
}

export default function LayoutComponent({
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

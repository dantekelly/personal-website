import * as React from "react";

import Header from "./header";
import Aside from "./aside";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutComponent({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-1 bg-slate-900 grid-areas-layout lg:grid-cols-layout">
      <Header />

      <main className="overflow-x-hidden px-[24px] pt-[90px] lg:flex-grow lg:px-[48px]">
        {children}
      </main>

      <Aside />
    </div>
  );
}

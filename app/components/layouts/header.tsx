import React from "react";
import Image from "next/image";
import Link from "next/link";

import DanteIcon from "@/icons/icon-dante.png";
import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 z-10 flex h-[90px] flex-1 content-between items-center justify-between border-0 border-b border-slate-600 bg-slate-900 px-[24px] lg:px-[48px]">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src={DanteIcon} alt="Dante Icon" width={42} height={42} />
      </Link>

      <Link className="hidden sm:block" href="mailto:dante@dantekelly.com">
        <Button color="primary">Contact Me</Button>
      </Link>
    </header>
  );
}

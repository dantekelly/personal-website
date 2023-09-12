import Image from "next/image";
import Link from "next/link";

import DanteIcon from "@/icons/icon-dante.png";
import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 flex flex-1 content-between justify-between border-0 border-b border-slate-600 bg-slate-900 px-[24px] lg:px-[48px]">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src={DanteIcon} alt="Dante Icon" width={42} height={42} />
      </Link>
      <nav className="flex h-[89px] items-center space-x-6 text-sm font-medium">
        <Link href="mailto:dante@dantekelly.com">
          <Button color="primary">Contact Me</Button>
        </Link>
      </nav>
    </div>
  );
}

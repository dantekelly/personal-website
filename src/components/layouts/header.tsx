"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import DanteIcon from "@/icons/icon-dante.png";

interface HeaderProps {
  isMobile?: boolean;
}

export default function Header({ isMobile }: HeaderProps) {
  return (
    <Navbar border fluid>
      <Navbar.Brand as={Link} href="/" className="h-[90px]">
        <Image src={DanteIcon} alt="Dante Icon" width={42} height={42} />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <Link href="mailto:dante@dantekelly.com">
          <Button color="primary">Contact Me</Button>
        </Link>
      </div>
    </Navbar>
  );
}

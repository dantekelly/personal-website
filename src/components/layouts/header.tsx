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
      <Navbar.Brand as={Link} href="/">
        <Image src={DanteIcon} alt="Dante Icon" width={42} height={42} />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        {!isMobile && <Button className="bg-blue-700">Contact Me</Button>}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active as={Link} href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link as={Link} href="/blog">
          Blog
        </Navbar.Link>
        {isMobile && <Button className="bg-blue-700">Contact Me</Button>}
      </Navbar.Collapse>
    </Navbar>
  );
}

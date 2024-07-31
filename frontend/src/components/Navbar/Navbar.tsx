import Image from "next/image";
import { Logo } from "../Logo";
import Link from "next/link";
import { CurrencySelect } from "@/components/CurrencySelect";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import React from "react";

interface NavbarProps {
  openModal: () => void;
  currCode: string;
}

export const Navbar: React.FC<NavbarProps> = ({openModal, currCode}) => {
  return (
    <header className="fixed bg-white z-10 flex justify-center w-full h-20">
      <div className="flex gap-8 w-full items-center max-w-7xl">
        <Logo />
        <nav className="flex flex-grow gap-4">
          <Link className="font-bold" href="/services?group=service&currency=IDR">Visa & Permits</Link>
          <Link className="font-bold" href="/">My Account</Link>
          <Link className="font-bold" href="/">Company</Link>
          <Link className="font-bold" href="/">Home</Link>
        </nav>
        <CurrencySelect onClick={openModal} currCode={currCode} />
        <MagnifyingGlass className="" />
        <Button label="Get Started" />
      </div>
    </header>
  );
}

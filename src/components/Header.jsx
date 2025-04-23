import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="header-custom-gradient px-5 md:px-29 lg:px-80 py-6">
      <Link href="/">
        <h1 className="font-bold text-2xl">MOVIEAPP</h1>
      </Link>
    </header>
  );
}

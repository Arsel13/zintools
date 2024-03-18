import Link from "next/link";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

export default function page() {
  return (
    <header>
      <nav>
        <Link href="/" className="flex items-center gap-3">
          <IoSettingsSharp />
          <span className="text-lg font-semibold">ZinTools</span>
        </Link>
      </nav>
    </header>
  );
}

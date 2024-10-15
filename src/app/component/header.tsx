import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-100">
      <div className="flex justify-center items-center gap-6 bg-purple-500 text-yellow-50 py-5">
        <Link href="./">Home</Link>
        <Link href="./About">About</Link>
        <Link href="./Services">Service</Link>
        <Link href="./contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header;

import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./Carticon";
import Image from "next/image";
import { Style_Script } from "next/font/google";

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400", // Style Script usually has a single weight
  variable: "--font-style-script", // To use Tailwind CSS variables
  display: "swap", //
});

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-purple-500 p-4 flex items-center justify-between border-b-2 border-b-purple-500 md:h-24 lg:px-20 xl:px-40">
      {/*LEFT LINKS*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/*LOGO*/}
      <div className="text-4xl md:font-extrabold md:text-5xl flex-1 md:text-center">
        <Link href="/">
          <span className={styleScript.className}>Slushiees</span>
        </Link>
      </div>

      {/*MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />
      </div>

      {/*RIGHT LINKS*/}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-amber-200 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="text-sm">234 567 890</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

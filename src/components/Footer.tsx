import React from "react";
import Link from "next/link";
import { Style_Script } from "next/font/google";

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400", // Style Script usually has a single weight
  variable: "--font-style-script", // To use Tailwind CSS variables
  display: "swap", //
});

const Footer = () => {
  return (
    <div className="h-12 p-7 md:h-24 lg:px-20 xl:px-40 text-purple-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        <span className={`text-4xl ${styleScript.className}`}>Slushiees</span>
      </Link>
      <p className="text-sm">&copy; 2025 ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;

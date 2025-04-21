"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./Carticon";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Menu", href: "/menu" },
  { id: 3, title: "Hours", href: "/hours" },
  { id: 4, title: "Contact", href: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY USER
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.href} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

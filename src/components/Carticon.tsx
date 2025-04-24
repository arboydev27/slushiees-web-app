"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartIcon = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link href="/cart" onClick={onClick} className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;

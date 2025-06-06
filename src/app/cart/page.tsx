import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-purple-500 lg:flex-row">
      {/* PRDOCUTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        {/* SINGLE ITEM CONNTAINER */}
        <div className="flex items-center justify-between mb-4  overflow-scroll">
          <Image src="/featured/f7.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">
              Blue Raspberry Slush
            </h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$5.00</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* SINGLE ITEM CONNTAINER */}
        <div className="flex items-center justify-between mb-4 overflow-scroll">
          <Image src="/featured/f1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">
              Cookies & Cream Shake
            </h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$6.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* SINGLE ITEM CONNTAINER */}
        <div className="flex items-center justify-between mb-4 overflow-scroll">
          <Image src="/featured/f4.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">
              Tropical Oregano Tango
            </h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$6.50</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$18.40</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-amber-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL (INCL. VAT)</span>
          <span className="font-bold">$18.40</span>
        </div>
        <button className="bg-purple-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;

import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/*TEXT CONNTAINER*/}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Hawaiian Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          {" "}
          Limited Time Only! Sink your teeth into our Juicy Jalapeño
          Burger—available this week only! 🔥 Don’t miss out—grab yours before
          it’s gone!
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-3xl py-3 px-6">
          Order Now
        </button>
      </div>

      {/*IMAGE CONTAINER*/}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;

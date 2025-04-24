import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";
import { Style_Script } from "next/font/google";

// md:bg-[url('/offerBg.png')]

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400", // Style Script usually has a single weight
  variable: "--font-style-script", // To use Tailwind CSS variables
  display: "swap", //
});

const Offer = () => {
  return (
    <div className="bg-gradient-to-b from-amber-200 from-30% to-purple-400 to-50% md:bg-none md:bg-amber-200 h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]">
      {/*TEXT CONNTAINER*/}
      <div className="pt-5 px-8 flex-1 flex flex-col justify-center items-center text-center gap-8">
        <h1
          className={`${styleScript.className} text-6xl text-purple-500 font-bold xl:text-6xl`}
        >
          Strawberry Chocho Smoothies &<br /> Ice-Cold Slushies
        </h1>
        <p className="text-purple-500 xl:text-xl">
          {" "}
          Limited Time Only! 🍍 Try our fan-favorite Tropical Tango Smoothie or
          the bold Blue Raspberry Slush-only this week! Sip the summer before it
          melts away!
        </p>
        <CountDown />
        <button className="bg-purple-500 text-white rounded-3xl py-3 px-6 animate-bounce">
          Order Now
        </button>
      </div>

      {/*IMAGE CONTAINER*/}
      {/* <div className="scale-110 flex-1 w-full relative md:h-full md:scale-3d 2xl:scale-100 group">
        <Image
          src="/offerDrink.png"
          alt=""
          fill
          className="object-contain group-hover:scale-110 transition-all duration-300"
        />
      </div> */}
      <div className="relative flex-1 w-full md:h-full overflow-hidden">
        <div className="bg-gradient-to-b from-purple-400 from-20% to-purple-500 to-60% h-full w-full md:rounded-tl-[450px] md:rounded-bl-[450px] flex items-center justify-center">
          <div className="relative w-[80%] h-[80%] group transition-all duration-300 scale-140 md:scale-130">
            <Image
              src="/offerDrink.png"
              alt="Slushie"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

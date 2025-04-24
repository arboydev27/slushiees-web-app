"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always refreshing & always fruity & always cool",
    image: "/slide1a.jpg",
  },
  {
    id: 2,
    title: "we deliver icy goodness anywhere in Oklahoma",
    image: "/slide2a.jpg",
  },
  {
    id: 3,
    title: "the sweetest drinks to chill with friends & fam",
    image: "/slide3a.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-purple-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-purple-500 text-white py-4 px-8 rounded-3xl">
          OrderNow
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative hover:saturate-130 transition-all duration-500">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;

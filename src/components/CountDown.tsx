"use client";
import Countdown from "react-countdown";

import React from "react";

const endingDate = new Date("2025-04-30");

const CountDown = () => {
  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endingDate}
      />
    </div>
  );
};

export default CountDown;

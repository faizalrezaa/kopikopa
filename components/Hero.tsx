import React from "react";
import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  return (
    <MotionWrapper as="section" className="flex flex-col items-center">
      <div id="hero" className="flex flex-col md:items-center p-6 lg:p-12">
        <h1 className="flex font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-12 md:text-center md:max-w-140 md:leading-15 lg:leading-18  xl:leading-24 lg:max-w-160 xl:max-w-280 xl:pb-5">
          Melangkah dalam Aroma, Menemukan Kedamaian.
        </h1>
        <h3 className="pt-5 pb-12 max-w-90 md:text-center xl:text-2xl md:max-w-120 xl:max-w-180">
          Dari biji pilihan petani lokal hingga ke cangkir Anda. Nikmati
          kesempurnaan sangrai di setiap tegukan.
        </h3>
      </div>
      <div className="w-full md:w-80 xl:w-120 md:mb-12 h-auto">
        <img src="/hero.png" alt="" className="w-full h-auto" />
      </div>
    </MotionWrapper>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="sticky top-0 z-20 w-full p-7 lg:p-10 bg-primary">
      <div className="flex justify-between items-center">
        <div className="hidden lg:block text-lg cursor-pointer">
          <a href="/#about-us" className="uppercase">
            tentang kami
          </a>
          <a href="/#product" className="uppercase ml-8">
            produk kami
          </a>
          <a href="/#location" className="uppercase ml-8">
            lokasi
          </a>
        </div>
        <div className="flex flex-col leading-3.5 text-xl lg:text-4xl lg:leading-6 lg:mr-37 lg:font-medium cursor-pointer">
          <div className="uppercase">kopi</div>
          <div className="uppercase">kopa</div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 bg-secondary rounded-4xl cursor-pointer"
        >
          <span
            className={`${isOpen ? "rotate-45 translate-x-0.5" : ""} transition duration-300 ease-in bg-tertiary w-6 h-0.5 origin-left`}
          ></span>
          <span
            className={`${isOpen ? "opacity-0" : "opacity-100"} transition duration-300 ease-in bg-tertiary w-6 h-0.5`}
          ></span>
          <span
            className={`${isOpen ? "-rotate-45 translate-x-0.5" : ""} transition duration-300 ease-in bg-tertiary w-6 h-0.5 origin-left`}
          ></span>
        </button>
        <a className="hidden lg:block uppercase  bg-tertiary text-primary py-3 px-6 rounded-3xl text-sm font-medium cursor-pointer hover:bg-tertiary-hover">
          hubungi kami
        </a>
      </div>
      <div
        className={`${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} grid   transition-all duration-300 ease-in  py-6 cursor-pointer`}
      >
        <div className="overflow-hidden">
          <div className=" flex flex-col items-center gap-4">
            <a href="/#about-us" className="uppercase mx-auto">
              tentang kami
            </a>
            <a href="/#product" className="uppercase mx-auto">
              produk kami
            </a>
            <a href="/#location" className="uppercase mx-auto">
              lokasi
            </a>
            <a className="uppercase mx-auto bg-tertiary text-primary py-3 px-6 rounded-3xl text-sm font-medium hover:bg-tertiary-hover">
              hubungi kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

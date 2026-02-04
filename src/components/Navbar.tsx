import { useState } from "react";
import HashLinkSmooth from "./HashLinkSmooth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="w-full h-25 flex justify-between items-center bg-primary p-8 xl:p-20">
        <div className="hidden xl:flex flex-row gap-9">
          <HashLinkSmooth
            to="/#about-us"
            className="font-poppins-md cursor-pointer"
          >
            TENTANG KAMI
          </HashLinkSmooth>
          <HashLinkSmooth
            to="/#products"
            className="font-poppins-md cursor-pointer"
          >
            PRODUK
          </HashLinkSmooth>
          <HashLinkSmooth
            to="/#location"
            className="font-poppins-md cursor-pointer"
          >
            LOKASI
          </HashLinkSmooth>
        </div>

        <HashLinkSmooth
          to="/"
          className="leading-3 text-lg xl:text-4xl font-poppins-md  w-12 xl:w-20 xl:leading-6 h-auto cursor-pointer"
        >
          KOPI KOPA
        </HashLinkSmooth>
        <HashLinkSmooth
          to="/call-us"
          className="hidden xl:block bg-tertiary text-primary px-6 py-3.5 rounded-4xl font-poppins-md ml-24 cursor-pointer"
        >
          Hubungi Kami
        </HashLinkSmooth>

        <button
          onClick={navToggle}
          className="flex flex-col justify-center items-center gap-1 w-12 h-12 rounded-4xl bg-secondary xl:hidden"
        >
          <span
            className={`${isOpen ? "rotate-45 -translate-y-0.5 translate-x-1" : ""} bg-tertiary transition duration-300 ease-in origin-left w-5.5 h-0.5`}
          ></span>
          <span
            className={`${isOpen ? "opacity-0" : "opacity-100"} bg-tertiary transition duration-300 ease-in origin-left w-5.5 h-0.5`}
          ></span>
          <span
            className={`${isOpen ? "-rotate-45 translate-y-0.5 translate-x-1" : ""} bg-tertiary transition duration-300 ease-in origin-left w-5.5 h-0.5`}
          ></span>
        </button>
      </div>
      <div
        className={`${isOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0"} grid transition-all  ease-in-out duration-600 xl:hidden`}
      >
        <div
          className={`overflow-hidden flex flex-col justify-center items-center gap-4 font-poppins-md bg-primary pb-9  `}
        >
          <HashLinkSmooth
            to="/#about-us"
            className=" text-eb bg-primary md:text-xl"
          >
            TENTANG KAMI
          </HashLinkSmooth>
          <HashLinkSmooth
            to="/#products"
            className=" text-eb bg-primary md:text-xl"
          >
            PRODUK
          </HashLinkSmooth>
          <HashLinkSmooth
            to="/#location"
            className=" text-eb bg-primary md:text-xl"
          >
            LOKASI
          </HashLinkSmooth>
          <HashLinkSmooth
            to="/call-us"
            className="bg-tertiary text-primary px-5 py-3 text-sm rounded-4xl font-poppins-md  cursor-pointer"
          >
            Hubungi Kami
          </HashLinkSmooth>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

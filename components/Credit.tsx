"use client";
import { useEffect } from "react";

export default function Credit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id="credits"
      className="flex flex-col justify-center items-center w-full h-80 bg-primary"
    >
      <div className="font-poppins-md">Credits</div>
      <div>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://www.flaticon.com/free-icons/coffee"
              title="coffee icons"
            >
              Coffee icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/coffee-bean"
              title="coffee bean icons"
            >
              Coffee bean icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/v60" title="v60 icons">
              V60 icons created by rezafahlevimrf - Flaticon
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import { FaqType, faqData } from "@/public/faqs";

export default function Faq() {
  const [activeItem, setActiveItems] = useState<null | number>(null);
  const toggelItem = (id: number) => {
    setActiveItems(activeItem == id ? null : id);
  };
  return (
    <section id="faq">
      <div className="w-full flex flex-col justify-center items-center gap-7 bg-primary py-20 px-5">
        <h1
          id="faq"
          className="flex flex-col font-semibold justify-center items-center font-poppins-md text-3xl md:text-4xl pb-9 text-eb "
        >
          FAQ
        </h1>
        <div className="w-full flex flex-col justify-center items-center font-poppins-md  text-eb ">
          {faqData.map((data: FaqType) => (
            <Accordion
              key={data.id}
              question={data.question}
              answer={data.answer}
              isOpen={activeItem == data.id}
              callback={() => toggelItem(data.id)}
            ></Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

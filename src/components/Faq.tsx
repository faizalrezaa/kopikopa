import { useState } from "react";
import Accordion from "./atomic/Accordion";
import { faqData, type FaqItems } from "../statics/faqs";

const Faq = () => {
  const [activeItem, setActiveItems] = useState<null | number>(null);
  const toggelItem = (id: number) => {
    setActiveItems(activeItem == id ? null : id);
  };
  return (
    <section id="faq">
      <div className="w-full flex flex-col justify-center items-center gap-7 bg-primary py-20 px-5">
        <h1 className="flex flex-col justify-center items-center font-poppins-md text-3xl md:text-4xl pb-9 text-eb ">
          FAQ
        </h1>
        <div className="w-full flex flex-col justify-center items-center font-poppins-md  text-eb ">
          {faqData.map((data: FaqItems) => (
            <Accordion
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
};

export default Faq;

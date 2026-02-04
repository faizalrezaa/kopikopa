interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  callback: () => void;
}

const Accordion = ({ question, answer, isOpen, callback }: FaqItem) => {
  return (
    <section className="w-full">
      <div className="w-full h-px bg-secondary"></div>
      <div className="w-full flex flex-col gap-2.5 xl:px-5 cursor-pointer">
        <div
          className="flex justify-between items-center py-6"
          onClick={callback}
        >
          <div className=" font-poppins-md w-64 md:text-xl xl:text-2xl xl:w-129">
            {question}
          </div>
          <div className="font-poppins-reg text-2xl md:text-xl xl:text-2xl">
            {isOpen ? "-" : "+"}
          </div>
        </div>

        <div
          className={`${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden font-poppins-el transition-all duration-700 ease-in -mt-4 pb-7 w-64 md:text-lg md:max-w-96 xl:text-xl xl:w-250 xl:font-poppins-l`}
        >
          {answer}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

import MotionDiv from "./MotionDiv";

const Quote = () => {
  return (
    <section className="w-full flex justify-center items-center bg-secondary  py-7 px-5">
      <div className="flex justify-center items-center xl:max-w-230 h-56 xl:h-160 xl:text-6xl xl:leading-19 font-old text-xl md:text-2xl text-center text-tertiary">
        <MotionDiv className="">
          "Kualitas yang lahir dari kesabaran proses sangrai dan ketulusan dalam
          setiap seduhan."
        </MotionDiv>
      </div>
    </section>
  );
};

export default Quote;

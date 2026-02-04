import MotionDiv from "./MotionDiv";

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full flex flex-col  gap-8 pb-11  bg-primary">
        <MotionDiv className="p-8 flex flex-col justify-center xl:items-center gap-8">
          <h1 className="font-poppins-md font-medium max-w-150 text-3xl md:text-5xl xl:text-8xl xl:text-center  xl:max-w-250 xl:leading-25 leading-10 md:leading-17 text-eb">
            Melangkah dalam Aroma, Menemukan Kedamaian.
          </h1>
          <h2 className="max-w-150 font-poppins-reg font-medium  md:text-lg xl:text-2xl xl:text-center xl:max-w-170 xl:pt-10 text-eb">
            Dari biji pilihan petani lokal hingga ke cangkir Anda. Nikmati
            kesempurnaan sangrai di setiap tegukan.
          </h2>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;

import MotionDiv from "./MotionDiv";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="flex flex-col gap-8 py-9 px-7 bg-primary">
        <div className="w-full flex flex-col mx-auto gap-8 py-9  bg-primary">
          <MotionDiv className="uppercase font-poppins-el xl:pl-33 text-sm md:text-lg mt-8 xl:text-2xl -mb-3.5">
            tentang kami
          </MotionDiv>
          <MotionDiv className="font-poppins-md text-3xl md:text-4xl xl:text-8xl xl:pb-6 xl:py-12 text-center  text-eb ">
            Jejak di Setiap Biji
          </MotionDiv>
          <MotionDiv className="w-full flex justify-center items-center">
            <div className="w-full xl:w-10/12 xl:h-150 h-auto">
              <img
                src="/images/about-us.png"
                alt=""
                className="object-cover w-full h-auto xl:h-150"
              />
            </div>
          </MotionDiv>
        </div>

        <MotionDiv className="flex flex-row xl:justify-center items-center">
          <div className="hidden xl:block h-96 w-160"></div>
          <div className="flex flex-col gap-6">
            <div className="max-w-100 font-poppins-reg text-sm md:text-lg xl:text-xl xl:pb-12 text-eb bg-primary">
              Kami percaya bahwa rasa yang luar biasa bermula dari etika yang
              baik. Bagi kami, setiap cangkir adalah janji tentang kualitas dan
              integritas.
            </div>
            <div className="max-w-100 font-poppins-reg text-sm md:text-lg xl:text-xl text-eb bg-primary">
              Biji kopi kami didatangkan langsung dari lereng pegunungan Gayo
              dan Kintamani, dipanen hanya saat matang sempurna untuk menjaga
              profil rasa yang autentik dan kaya.
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default AboutUs;

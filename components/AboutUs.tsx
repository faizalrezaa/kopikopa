import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function AboutUs() {
  return (
    <section className="py-15 px-6 md:px-20 xl:px-30 flex flex-col gap-6 md:gap-10 lg:gap-15">
      <MotionWrapper
        as="h3"
        id="about-us"
        className="uppercase text-sm font-extralight xl:text-xl"
      >
        tentang kami
      </MotionWrapper>
      <MotionWrapper
        as="h1"
        className="w-full text-center font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Jejak di Setiap Biji
      </MotionWrapper>
      <MotionWrapper
        as="div"
        className="relative w-full h-[200px] md:h-[400px] xl:h-[500px]"
      >
        <Image
          src="/about-us.png"
          alt="pohon-kopi"
          fill
          className="object-cover"
        />
      </MotionWrapper>
      <MotionWrapper as="div" className="flex text-sm md:text-xl">
        <div className="hidden md:block w-6/13"></div>
        <div className="w-3xs md:w-6/13 lg:text-2xl">
          <p className="font-light   pt-4 pb-7">
            Kami percaya bahwa rasa yang luar biasa bermula dari etika yang
            baik. Bagi kami, setiap cangkir adalah janji tentang kualitas dan
            integritas.
          </p>
          <p className="font-light">
            Biji kopi kami didatangkan langsung dari lereng pegunungan Gayo dan
            Kintamani, dipanen hanya saat matang sempurna untuk menjaga profil
            rasa yang autentik dan kaya.
          </p>
        </div>
        <div className="hidden md:block w-1/13"></div>
      </MotionWrapper>
    </section>
  );
}

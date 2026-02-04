import MotionDiv from "./MotionDiv";

const HeroImage = () => {
  return (
    <MotionDiv className="w-full  flex justify-center xl:h-180">
      <img
        src="/images/hero.png"
        alt=""
        className="object-cover w-full h-auto xl:max-w-130 xl:h-150"
      />
    </MotionDiv>
  );
};

export default HeroImage;

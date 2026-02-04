import { servings, type Servings as ServingsType } from "../statics/servings";
import MotionDiv from "./MotionDiv";

const Servings = () => {
  return (
    <section id="servings">
      <div className="w-full flex flex-col justify-center items-center gap-7 px-7 py-12 bg-primary">
        <MotionDiv className="font-poppins-md pb-7 text-3xl md:text-4xl xl:pt-14">
          Ritual Seduh
        </MotionDiv>
        <div className="flex justify-center items-center">
          <div className="w-full flex flex-col xl:flex-row gap-7 xl:gap-10">
            {servings.map((data: ServingsType) => (
              <MotionDiv className="flex flex-col justify-center items-center gap-6 bg-primary px-7 py-17 border-2 border-secondary">
                <div className="">
                  <img src={`${data.img}`} alt="" className="object-cover" />
                </div>
                <h2 className="font-poppins-md text-2xl md:text-3xl">
                  {data.judul}
                </h2>
                <div className="max-w-80 font-poppins-reg text-center md:text-md">
                  {data.isi}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servings;

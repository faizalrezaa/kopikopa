import { servings, ServingType } from "@/public/servings";
import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function Serving() {
  return (
    <section className="py-15 px-6 xl:px-60">
      <MotionWrapper
        as="h1"
        id="serving"
        className="text-3xl xl:text-5xl font-medium text-center pb-5"
      >
        Ritual Seduh
      </MotionWrapper>
      <div className="flex flex-col lg:flex-row py-6 gap-5">
        {servings.map((serving: ServingType) => (
          <MotionWrapper
            as="div"
            key={serving.id}
            className="flex flex-col items-center gap-2.5 border-secondary px-10 py-13 border-2 rounded-sm"
          >
            <div className="relative w-20 aspect-square mb-3">
              <Image
                src={serving.src}
                alt={serving.alt}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-medium pb-2.5">{serving.title}</h2>
            <p className="text-sm text-center">{serving.desc}</p>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

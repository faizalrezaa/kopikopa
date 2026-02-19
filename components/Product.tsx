import Image from "next/image";
import { products, ProductType } from "@/public/products";
import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

export default function Product() {
  return (
    <MotionWrapper as="section" className="py-15 px-6 lg:px-20">
      <h1
        id="product"
        className="text-3xl xl:text-5xl font-medium text-center pb-6"
      >
        Produk Kami
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: ProductType) => (
          <div
            key={product.id}
            className="flex flex-col justify-center gap-4.5 py-6"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="w-full text-center pb-1.5">{product.name}</h2>
              <h3 className="w-full text-center text-xs h-12 font-light">
                {product.taste}
              </h3>
            </div>

            <Link
              href={`products/${product.id}`}
              className="py-2.5 px-8 rounded-3xl text-primary mx-auto bg-tertiary text-sm hover:bg-tertiary-hover"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}

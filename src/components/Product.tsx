import { products, type Product as ProductType } from "../statics/product";
import MotionDiv from "./MotionDiv";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section id="products" className="bg-primary">
      <div className="px-10 py-10 flex flex-col justify-center items-center gap-5">
        <MotionDiv className="font-poppins-md text-3xl md:text-4xl xl:text-5xl xl:pt-10 pb-6 text-eb">
          Produk
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 xl:gap-12 ">
          {products.map((data: ProductType) => (
            <MotionDiv className="flex flex-col justify-center items-center gap-8 md:gap-10">
              <div className="">
                <img
                  src={`${data.img}`}
                  alt=""
                  className="object-cover w-2xl"
                />
              </div>
              <div>
                {" "}
                <div className="font-poppins-reg text-xl md:text-2xl text-center pb-1 md:pb-2.5">
                  {data.judul}
                </div>
                <div className="md:min-h-14 font-poppins-el text-center text-sm md:text-lg ">
                  {data.rasa}
                </div>
              </div>
              <Link
                to={`/products/${data.id}`}
                className="font-poppins-reg  text-primary bg-tertiary px-10 py-2 rounded-4xl cursor-pointer"
              >
                Details
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

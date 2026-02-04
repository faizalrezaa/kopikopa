import { useParams } from "react-router-dom";
import { products } from "../statics/product";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div></div>;
  }
  return (
    <section id="">
      <div className="flex flex-col md:flex-row justify-center p-10 bg-primary">
        <div className="w-full h-auto md:max-w-xl xl:max-w-2xl md:mr-10 xl:mr-10">
          <img
            src={product.img}
            alt=""
            className="object-cover w-full h-auto "
          />
        </div>
        <div className="flex flex-col justify-center bg-primary">
          <div className="font-poppins-md text-3xl pt-6">{product.judul}</div>
          <div className="font-poppins-l text-lg">{product.rasa}</div>
          <div className="font-poppins-l text-4xl py-5 ">Rp{product.harga}</div>
          <div className="w-20 text-center font-poppins-reg text-sm  rounded border-2 border-secondary py-2 px-3 mb-3 ">
            {product.berat}
          </div>
          <div className="font-poppins-reg text-sm py-1 pt-6">
            Level Roast : {product.levelRoast}
          </div>
          <div className="font-poppins-reg text-sm py-1">
            Asal : {product.origin}
          </div>
          <div className="font-poppins-light text-sm py-1 max-w-80">
            {product.deskripsi}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

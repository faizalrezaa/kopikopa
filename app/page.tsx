import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import AboutUs from "@/components/AboutUs";
import Product from "@/components/Product";
import Serving from "@/components/Serving";
import Location from "@/components/Location";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <section>
      <Hero />
      <Quote />
      <AboutUs />
      <Product />
      <Serving />
      <Location />
      <Faq />
    </section>
  );
}

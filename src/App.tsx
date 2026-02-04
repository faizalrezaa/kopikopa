import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Quote from "./components/Quote";
import AboutUs from "./components/AboutUs";
import Servings from "./components/Servings";
import Location from "./components/Location";
import Faq from "./components/Faq";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import SpaceY from "./components/atomic/SpaceY";
import Credit from "./components/Credit";
import NoMatch from "./components/NoMatch";
import Lenis from "@studio-freight/lenis";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import CallUs from "./components/CallUs";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full bg-primary">
              <Hero />
              <HeroImage />
              <Quote />
              <AboutUs />
              <Product />
              <Servings />
              <Location />
              <Faq />
            </div>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/call-us" element={<CallUs />}></Route>
        <Route path="/credits" element={<Credit />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      <SpaceY></SpaceY>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

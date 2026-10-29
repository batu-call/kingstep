import Navbar from "./components/Navbar";
import ScrollHero from "./components/ScrollHero";
import Marquee from "./components/Marquee";
import ProductSection from "./components/ProductSection";
import Story from "./components/Story";
import Spotlight from "./components/Spotlight";
import Features from "./components/Features";
import Lookbook from "./components/Lookbook";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import SneakerDefs from "./components/SneakerDefs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SneakerDefs />
      <Navbar />
      <main>
        <ScrollHero />
        <ProductSection />
        <Marquee />
        <Story />
        <Spotlight />
        <Features />
        <Lookbook />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
import CardsSection from "./components/CardsSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";
import HeaderOne from "./components/header/HeaderOne";
import HeaderTwo from "./components/header/HeaderTwo";
import HeroSection from "./components/HeroSection";
import LetsChat from "./components/LetsChat";
import MapComponent from "./components/MapComponent";
import OurAffiliatesSection from "./components/OurAffiliatesSection";
import ProjectSection from "./components/ProjectsSection";
import TestimonialSection from "./components/TestimonialSection";
import TestimonialsHeading from "./components/TestimonialsHeading";

export default function Home() {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <CardsSection />
      <ProjectSection />
      <TestimonialsHeading />
      <TestimonialSection />
      <OurAffiliatesSection />
      <LetsChat />
      <MapComponent />
      <Footer />
    </div>
  );
}

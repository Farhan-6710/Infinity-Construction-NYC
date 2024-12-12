import ServiceSpeciality from "../components/services/ServiceSpeciality";
import CarouselSection from "../components/carouselSection/CarouselSection";
import Footer from "../components/Footer";
import HeaderTwo from "../components/header/HeaderTwo";
import HeroSection from "../components/services/ServicesSection";
import LetsChat from "../components/extras/LetsChat";
import MapComponent from "../components/MapComponent";
import OurAffiliatesSection from "../components/OurAffiliatesSection";
import ProjectSection from "../components/ProjectsSection";
import TestimonialSection from "../components/testimonials/TestimonialSection";
import TestimonialsHeading from "../components/testimonials/TestimonialsHeading";

export default function Home() {
  return (
    <>
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <ServiceSpeciality />
      <ProjectSection />
      <TestimonialsHeading />
      <TestimonialSection />
      <OurAffiliatesSection />
      <LetsChat />
      <MapComponent />
      <Footer />
    </>
  );
}

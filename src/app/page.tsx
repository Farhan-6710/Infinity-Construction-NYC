import ServiceSpeciality from "../components/servicesSection/ServiceSpeciality";
import CarouselSection from "../components/carouselSection/CarouselSection";
import Footer from "../components/Footer";
import HeaderTwo from "../components/headerSection/HeaderTwo";
import HeroSection from "../components/Hero";
import LetsChat from "../components/extras/LetsChat";
import MapComponent from "../components/MapComponent";
import OurAffiliatesSection from "../components/OurAffiliatesSection";
import ProjectSection from "../components/ProjectsSection";
import TestimonialSection from "../components/testimonialsSection/TestimonialSection";
import TestimonialsHeading from "../components/testimonialsSection/TestimonialsHeading";
import ServicesSection from "@/components/servicesSection/ContactSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <ServicesSection />
      <ServiceSpeciality />
      <Gallery />
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

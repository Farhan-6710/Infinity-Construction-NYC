import OurServices from "../components/servicesSection/OurServices";
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
import ContactScroll from "@/components/extras/ContactScroll";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <OurServices />
      <Gallery />
      <ProjectSection />
      <TestimonialsHeading />
      <TestimonialSection />
      <OurAffiliatesSection />
      <ServicesSection />
      <SocialLinks />
      <MapComponent />
      <Footer />
      <ContactScroll />
      <LetsChat />
    </>
  );
}

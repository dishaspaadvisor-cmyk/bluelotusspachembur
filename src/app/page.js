
import HeroSection from "@/component/HeroSection";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import OffersPage from "./offer/page";
import GalleryPage from "./gallery/page";
import ContactPage from "./contact/page";
import FAQPage from "../component/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <ServicesPage />
      <OffersPage />
      <GalleryPage/>
       <FAQPage/>
      <ContactPage/>
     
    </>
  );
}


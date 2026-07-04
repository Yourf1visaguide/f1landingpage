import FooterSection from "@/components/LandingPage/Footer/footer";
import FAQSection from "@/components/LandingPage/Faq/Faq";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import PreparationSection from "@/components/LandingPage/Prepration/Prepration";
import TestimonialsPage from "@/components/LandingPage/Testimonial/Testimonial";
import VisaTimeline from "@/components/LandingPage/VisaTimeline/VisaTimeline";
import ProcessSection from "@/components/LandingPage/VisaProcess/VisaProcess";
import { navLinksData } from "@/data/navlinks";


export default function LandingPage() {
  
  return (
    <div className="bg-white">
    <Navbar navLinks={navLinksData} />
    <HeroSection />
    <TestimonialsPage />
    <ProcessSection />
    <PreparationSection />
    <VisaTimeline />
    <FAQSection />
    <FooterSection />
    </div>
  );
}
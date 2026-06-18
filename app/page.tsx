import FooterSection from "@/components/Footer/footer";
import FAQSection from "@/components/MainPage/Faq/Faq";
import HeroSection from "@/components/MainPage/HeroSection/HeroSection";
import Navbar from "@/components/MainPage/Navbar/Navbar";
import PreparationSection from "@/components/MainPage/Prepration/Prepration";
import TestimonialsPage from "@/components/MainPage/Testimonial/Testimonial";
import VisaTimeline from "@/components/MainPage/VisaTimeline/VisaTimeline";
import ProcessSection from "@/components/VisaProcess/VisaProcess";

export default function LandingPage() {
  
  return (
    <div className="bg-white">
    <Navbar />
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
import React from 'react'


import HeroSection from "@/components/LandingPage2/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import TestimonialsPage from "@/components/LandingPage2/Testimonial/Testimonial";
import HowThisWork from "@/components/LandingPage2/VisaTimeline/VisaTimeline";
import WhySection from "@/components/WhySection/WhySection";
import VisaRejection from "@/components/LandingPage2/VisaRejection/VisaRejection";
import Footer from "@/components/LandingPage2/Footer/footer";
import FAQSection from "@/components/LandingPage2/Faq/Faq";
import { faqsData, successStoryData } from "@/data/dubai";
import PreparationSection from "@/components/LandingPage2/Prepration/Prepration";

import { costAndRequirementData, 
  footerData, 
  heroSection,
  visaRejectionSection, 
  VisaTimelineData, 
  whySection 
} from "@/data/dubai";
import { navLinksData } from "@/data/navlinks";
import SuccessStoriesPage from "@/components/LandingPage2/SuccessStories/SuccessStories";



function TouristVisa() {
  return (
    <div className="bg-white">
      <Navbar navLinks={navLinksData} />

      <HeroSection 
      heading={heroSection.heading}
      description={heroSection.description}
      image={heroSection.image}
      imageClass={heroSection.imageClass}
    />
    <SuccessStoriesPage data={successStoryData}  sheet={process.env.NEXT_PUBLIC_TOURISTVISA_GOOGLE_SHEET_ID ?? ""}/>

{/*     
    <TestimonialsPage sheet={process.env.NEXT_PUBLIC_TOURISTVISA_GOOGLE_SHEET_ID ?? ""} title={<>
      Turning <span className="text-red-600 ">Travel Dreams </span>Into Reality
      </>} description="See why families, couples, and solo travelers choose us for a smooth and hassle-free visa experience." />
    
    <WhySection title={whySection.title} description={whySection.description}  features={whySection.features} badge={whySection.badge} />
    <HowThisWork
      steps={VisaTimelineData.steps} 
      title={VisaTimelineData.title}
      description={VisaTimelineData.description}
      badge={VisaTimelineData.badge}
      />
      <PreparationSection data={costAndRequirementData} />
    <VisaRejection  badge={visaRejectionSection.badge}
      title={visaRejectionSection.title}
      description={visaRejectionSection.description}
      reasons={visaRejectionSection.reasons}
      cta={visaRejectionSection.cta}
      buttonText={visaRejectionSection.buttonText} 
    />
    <FAQSection data={faqsData} />
    <Footer data={footerData} /> */}
    </div>
  )
}

export default TouristVisa

import HeroSection from "@/components/LandingPage2/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import HowThisWork from "@/components/LandingPage2/VisaTimeline/VisaTimeline";
import WhySection from "@/components/WhySection/WhySection";
import Footer from "@/components/LandingPage2/Footer/footer";
import FAQSection from "@/components/LandingPage2/Faq/Faq";
import {
  faqsData,
  internationalUniversityData,
  studyTransferFromDubai,
  successStoryData,
} from "@/data/dubai";
import PreparationSection from "@/components/LandingPage2/Prepration/Prepration";

import {
  costAndRequirementData,
  footerData,
  heroSection,
  VisaTimelineData,
  whySection,
} from "@/data/dubai";
import { navLinksData } from "@/data/navlinks";
import SuccessStoriesPage from "@/components/LandingPage2/SuccessStories/SuccessStories";
import StudyTransferFromDubai from "@/components/LandingPage2/StudyTransferFromDubai/StudyTransferFromDubai";
import InternationalUniversity from "@/components/LandingPage2/InternationalUniversity/InternationalUniversity";

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
      <SuccessStoriesPage
        data={successStoryData}
        sheet={process.env.NEXT_PUBLIC_DUBAISUCCESSSTORIES_GOOGLE_SHEET_ID?? ""}
      />

      <WhySection
        title={whySection.title}
        description={whySection.description}
        features={whySection.features}
        badge={whySection.badge}
      />

      <StudyTransferFromDubai data={studyTransferFromDubai} />

      <InternationalUniversity data={internationalUniversityData} />
      <HowThisWork
        steps={VisaTimelineData.steps}
        title={VisaTimelineData.title}
        description={VisaTimelineData.description}
        badge={VisaTimelineData.badge}
      />
      <PreparationSection data={costAndRequirementData} />

      <FAQSection data={faqsData} />
      <Footer data={footerData} />
    </div>
  );
}

export default TouristVisa;

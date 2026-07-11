import {
  CostAndRequirementType,
  FAQType,
  FooterType,
  VisaProcessType,
  VisaTimelineType,
  WhySection as WhySectionType,
} from "@/lib/types";
import { CheckSquare } from "lucide-react";
import { ReactNode } from "react";

export const heroSection: {
  image: string;
  imageClass: string;
  heading: ReactNode;
  description: ReactNode;
} = {
  image: "/hero-section-bg.jpg",
  imageClass: "object-cover object-top",
  heading: (
    <>
      Your Dream of Studying <br className="hidden lg:block" />
      in <span className="text-red-600">America </span> Starts Here
    </>
  ),
  description: (
    <>
      Navigate the F-1 student visa process with confidence.
      <span className="font-semibold text-red-600">
        {" "}
        Apply now in just Rs 36,000
      </span>{" "}
      and get step-by-step guidance, mock interview mastery, and everything you
      need to land your USA study visa.
    </>
  ),
};

export const faqsData: FAQType[] = [
  {
    question: "What is included in the Rs 36,000 fee?",
    paragraphs: [
      "Our fee covers end-to-end consulting: DS-160 form filling assistance, SEVIS payment guidance, comprehensive financial document structuring, and personalized 1-on-1 mock interview sessions to guarantee you are fully prepared for the embassy.",
    ],
  },
  {
    question: "What happens if my visa was previously rejected?",
    paragraphs: [
      "A rejection is not the end. We specialize in cases with previous 214(b) refusals. We will evaluate your previous application, identify exactly where it failed, and rebuild your narrative with new, compelling information.",
    ],
  },
  {
    question: "Does the Rs 36,000 cover government fees?",
    paragraphs: [
      "No, the SEVIS fee ($350) and MRV embassy appointment fee ($185) are mandatory US government fees paid directly to the respective authorities. Our Rs 36,000 fee is strictly for our professional consulting and preparation services.",
    ],
  },
  {
    question: "Are there any hidden charges in the Rs 36,000 fee?",
    paragraphs: [
      "No, absolutely not. The Rs 36,000 is a flat fee for our complete end-to-end consulting, documentation, and interview preparation. There are no hidden fees or extra charges from our side.",
    ],
  },
  {
    question: "What is the benefit of preparing in a Visa Pod?",
    paragraphs: [
      "We specifically built Visa Pods to simulate a real-life embassy experience. Practicing your mock interviews in an environment that mimics the actual US consulate helps significantly reduce interview anxiety, builds your confidence, and prepares you to answer the officer's questions naturally under pressure.",
    ],
  },
];

export const costAndRequirementData: CostAndRequirementType = {
  badge: "Requirement & Cost",

  title: (
    <>
      Requirements & Costs at a <span className="text-red-600">Glance</span>
    </>
  ),

  description: "Know exactly what documents to prepare and fees to budget for.",

  // Left Side
  documents: {
    icon: "FileText",
    title: "Documents We Help You Organize",
    description: "Everything needed for a strong visa application.",

    items: [
      {
        icon: "FileUser",
        title: "Valid Passport & Form I-20",
        description:
          "Ensuring your core eligibility documents are perfectly aligned.",
      },

      {
        icon: "Monitor",
        title: "DS-160 Confirmation",
        description: "Completed and verified online application forms.",
      },

      {
        icon: "LandMark",
        title: "Financial Evidence",
        description:
          "Structuring bank statements and loan approvals beautifully.",
      },

      {
        icon: "GraduationCap",
        title: "Study Documents",
        description:
          "Academic transcripts, degree certificates, and test scores (IELTS / PTE / Duolingo).",
      },
    ],
  },

  // Right Side
  pricing: {
    governmentFees: {
      icon: "badgeIndianRupee",
      title: "US Gov Fees",
      description: "Paid Separately",

      items: [
        {
          label: "SEVIS I-901 Fee",
          value: "$350",
        },
        {
          label: "MRV Application Fee (DS-160)",
          value: "$185",
        },
      ],
    },

    package: {
      title: "Our Full Service Package*",
      price: "₹36,000",

      description:
        "* The Rs 36,000 fee covers our complete end-to-end consulting, DS-160 preparation, document structuring, and interview coaching. US Government fees are paid separately.",

      button: {
        text: "Apply on WhatsApp",
      },
    },
  },
};

export const visaProcessData: VisaProcessType = {
  heading: (
    <>
      The F-1 <strong className="text-red-600">Visa Process</strong> Made Simple
    </>
  ),
  description: "We handle the confusion. You just follow the roadmap.",
  badgeText: "USA Study Visa Roadmap",
  buttonText: "Contact Us on WhatsApp",

  steps: [
    {
      number: "01",
      icon: "House",
      title: "Apply in Top US Universities",
      description: "Choose universities that match your profile and goals.",
    },
    {
      number: "02",
      icon: "UserCheck",
      title: "Get Accepted",
      description: "Receive your university admission offer.",
    },
    {
      number: "03",
      icon: "FilePlusCorner",
      title: "Apply for I-20",
      description: "Complete documentation for your I-20 issuance.",
    },
    {
      number: "04",
      icon: "FilePenLine",
      title: "Complete DS-160",
      description: "Submit your official visa application form.",
    },
    {
      number: "05",
      icon: "Mic",
      title: "Prepare for Interview in Special Pods",
      description: "Practice with experts and real interview scenarios.",
    },
    {
      number: "06",
      icon: "ClipboardClock",
      title: "Book Interview",
      description: "Schedule your visa interview appointment.",
    },
    {
      number: "07",
      icon: "PlaneTakeoff",
      title: "Fly to America",
      description: "Begin your study journey in the USA.",
    },
  ],
};

export const VisaTimelineUsaData: VisaTimelineType = {
  title: (
    <>
      Your
      <span className="text-red-700"> Journey </span>Begins Here
    </>
  ),
  description:
    "From choosing your dream destination to receiving your visa, our experts guide you through every step of the journey.",
  badge: "How It Works",

  steps: [
    {
      step: 1,
      title: "Step 1 Onboarding & Strategy",
      content:
        "We review your university acceptance and academic profile to build a custom timeline.",
      icon: "School",
      image: "/images/howthiswork/1.jpg",
    },
    {
      step: 2,
      title: "Step 2 Filing & Financials",
      content:
        "We handle your DS-160, guide your SEVIS fee payment, and structure your sponsor documents perfectly.",
      icon: "CreditCard",
      image: "/images/howthiswork/2.jpg",
    },
    {
      step: 3,
      title: "Step 3 Mock Interviews",
      content:
        "Rigorous 1-on-1 practice to ensure you confidently prove your non-immigrant intent to the officer.",
      icon: "Mic",
      image: "/images/howthiswork/3.jpg",
    },
    {
      step: 4,
      title: "Step 4 Approval & Departure",
      content:
        "Get your visa stamped and prepare for your flight to the United States!",
      icon: "Plane",
      image: "/images/howthiswork/4.jpg",
    },
  ],
};

export const footerData: FooterType = {
  badge: "Start Your Journey Today",
  heading: (
    <>
      Secure Your US Visa{" "}
      <span className=" text-red-600"> Approval Strategy Now</span>
    </>
  ),
  description:
    "Don't leave your American future to chance. Apply now in just Rs 36,000 and let our experts handle the paperwork, preparation and interview strategy.",
  smallText: "Apply on WhatsApp",
  largeText: " Rs 36,000",
  leftIcon: "MessageCircle",
  rightIcon: "ArrowRight",
  buttonBelowText:
    "Join 12,500+ successful students. Your dream university awaits.",

  quickLinks: [
    { linkText: "Success Stories", link: "#stories" },
    { linkText: "Step-by-Step Process", link: "#process" },
    { linkText: "Document Checklist", link: "#requirements" },
    { linkText: "FAQ", link: "#faq" },
  ],
  services: [
    "DS-160 Support",
    "Visa Interview Prep",
    "Financial Structuring",
    "Visa Pods",
  ],
};



export const seo = {
  title:
  "Study in USA from India | F-1 Visa & University Admission Consultants in Jalandhar",

  description:
    "Study in the USA with expert admission and F-1 visa guidance from Jalandhar. Get assistance with university selection, I-20, DS-160, SEVIS, scholarships, visa interview preparation, and complete application support.",

  keywords: [
    // Primary
    "Study in USA",
    "Study in USA from India",
    "USA Study Visa",
    "USA Student Visa",
    "F1 Visa",
    "F-1 Visa",
    "Study Abroad USA",

    // University & Admissions
    "USA Universities",
    "Top Universities in USA",
    "Study in America",
    "Masters in USA",
    "Bachelors in USA",
    "Community Colleges USA",

    // Visa Process
    "I-20",
    "DS-160",
    "SEVIS Fee",
    "USA Visa Interview",
    "F1 Visa Interview",
    "USA Visa Documentation",

    // Student Life
    "Scholarships in USA",
    "Study and Work in USA",
    "CPT",
    "OPT",
    "STEM OPT",

    // Local SEO
    "USA Study Visa Consultants",
    "USA Study Visa Consultants Jalandhar",
    "USA Study Visa Consultants Punjab",
    "Study Abroad Consultants Jalandhar",
    "Study Visa Consultants Punjab",
    "Overseas Education Consultants Jalandhar",

    // Brand
    "Your F1 Visa Guide",
  ],

  slug: "usa",

  image: "/images/seo/usa.jpg",
};
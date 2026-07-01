import { ReactNode } from "react";
import { CheckSquare, WholeWord } from "lucide-react";

import {
  FAQType,
  FooterType,
  TouristDestination,
  TouristDestinationCategory,
  VisaTimelineSteps,
  VisaTimelineType,
  WhySection as WhySectionType,
} from "@/lib/types";

export const heroSection: {
  image: string;
  imageClass: string;
  heading: ReactNode;
  description: ReactNode;
} = {
  image: "/tourist-visa/bg-tourist-visa-after-compress.jpg",
  imageClass: "md:object-right object-[65%_center]",
  heading: (
    <>
      <span className="text-red-600"> Your Dream Vacation </span>
      Starts Here {/* <br className="hidden lg:block" /> */}
      With Expert Visa Guidance.
    </>
  ),
  description: (
    <>
      <ul className="space-y-3">
        {[
          "Fast Processing",
          "Dedicated Visa Expert",
          "15+ Tourist Destinations",
          "Complete Documentation Support",
        ].map((item, index) => (
          <li className="flex items-center gap-3" key={index}>
            <CheckSquare className="text-red-600" /> <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  ),
};
export const touristDestinationBasicData = {
  title: (
    <>
      Choose Your <span className="text-red-700">Dream Destination</span>
    </>
  ),
  description:
    "Explore tourist visa options across the world's most popular destinations. Select one country from each category to compare requirements, processing time, and travel opportunities before starting your application.",
  buttonText: "Continue",
};

export const touristDestinationData: TouristDestinationCategory[] = [
  {
    mainTitle: "Choose Your Premium Destination",
    description:
      "Select one of our most popular English-speaking destinations with world-famous attractions and unforgettable travel experiences.",
    titleColor: "text-red-600",
    countries: [
      {
        id: "usa",
        country: "USA",
        flag: "us",
        image: "/images/tourist-visa/usa.jpg",
        visaType: "B1/B2",
        validity: "10 Years",
        processingTime: "Varies",
        fee: "Check",
        badge: "Most Popular",
        documents: [
          "Passport",
          "Photograph",
          "Bank Statement",
          "Travel Itinerary",
        ],
        popular: true,
      },
      {
        id: "australia",
        country: "Australia",
        flag: "au",
        image: "/images/tourist-visa/australia.jpg",
        visaType: "Visitor Visa",
        validity: "12 Months",
        processingTime: "2–4 Weeks",
        fee: "Check",
        badge: "Popular",
        documents: ["Passport", "Photo", "Bank Statement", "Travel Plan"],
      },
      {
        id: "uk",
        country: "uk",
        flag: "gb",
        image: "/images/tourist-visa/uk.jpg",
        visaType: "Standard Visitor",
        validity: "6 Months",
        processingTime: "3 Weeks",
        fee: "Check",
        badge: "Fast Processing",
        documents: ["Passport", "Photo", "Financial Proof", "Accommodation"],
      },
      
      {
        id: "new-zealand",
        country: "New Zealand",
        flag: "nz",
        image: "/images/tourist-visa/new-zealand.jpg",
        visaType: "Visitor Visa",
        validity: "9 Months",
        processingTime: "3–5 Weeks",
        fee: "Check",
        badge: "Nature Escape",
        documents: ["Passport", "Photo", "Financial Proof", "Travel Plan"],
      },
      
      {
        id: "canada",
        country: "Canada",
        flag: "ca",
        image: "/images/tourist-visa/canada.jpg",
        visaType: "Visitor Visa",
        validity: "Up to 10 Years",
        processingTime: "Varies",
        fee: "Check",
        badge: "Top Choice",
        documents: ["Passport", "Photo", "Financial Proof", "Travel Plan"],
      },
    ],
  },

  {
    mainTitle: "Explore Europe",
    description:
      "Discover historic cities, breathtaking landscapes, and effortless travel across Europe's most loved destinations.",
    titleColor: "text-blue-600",
    countries: [
      {
        id: "netherlands",
        country: "Netherlands",
        flag: "nl",
        image: "/images/tourist-visa/netherlands.jpg",
        visaType: "Schengen",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "€90",
        badge: "Schengen",
        documents: ["Passport", "Photo", "Insurance", "Bank Statement"],
      },
      {
        id: "france",
        country: "France",
        flag: "fr",
        image: "/images/tourist-visa/france.jpg",
        visaType: "Schengen",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "€90",
        badge: "Romantic",
        documents: ["Passport", "Photo", "Insurance", "Bank Statement"],
      },
      {
        id: "germany",
        country: "Germany",
        flag: "de",
        image: "/images/tourist-visa/germany.jpg",
        visaType: "Schengen",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "€90",
        badge: "Popular",
        documents: ["Passport", "Photo", "Insurance", "Bank Statement"],
      },
      {
        id: "spain",
        country: "Spain",
        flag: "es",
        image: "/images/tourist-visa/spain.jpg",
        visaType: "Schengen",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "€90",
        badge: "Beach Holiday",
        documents: ["Passport", "Photo", "Insurance", "Bank Statement"],
      },
      {
        id: "switzerland",
        country: "Switzerland",
        flag: "ch",
        image: "/images/tourist-visa/switzerland.jpg",
        visaType: "Schengen",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "€90",
        badge: "Luxury",
        documents: ["Passport", "Photo", "Insurance", "Bank Statement"],
      },
      {
        id: "cyprus",
        country: "Cyprus",
        flag: "cy",
        image: "/images/tourist-visa/cyprus.jpg",
        visaType: "Tourist Visa",
        validity: "90 Days",
        processingTime: "15 Days",
        fee: "Check",
        badge: "Island Paradise",
        documents: ["Passport", "Photo", "Financial Proof", "Travel Plan"],
      },
    ],
  },

  {
    mainTitle: "Asia & Middle East Adventures",
    description:
      "From luxury shopping to tropical beaches and cultural experiences, choose your perfect holiday destination.",
    titleColor: "text-amber-600",
    countries: [
      {
        id: "dubai",
        country: "Dubai",
        flag: "ae",
        image: "/images/tourist-visa/dubai.jpg",
        visaType: "Tourist Visa",
        validity: "30 Days",
        processingTime: "3–5 Days",
        fee: "Check",
        badge: "Fast Processing",
        popular: true,
        documents: ["Passport", "Photo", "Return Ticket", "Hotel Booking"],
      },
      {
        id: "singapore",
        country: "Singapore",
        flag: "sg",
        image: "/images/tourist-visa/singapore.jpg",
        visaType: "Tourist Visa",
        validity: "30 Days",
        processingTime: "3–5 Days",
        fee: "Check",
        badge: "Family Favourite",
        documents: ["Passport", "Photo", "Return Ticket", "Financial Proof"],
      },
      {
        id: "japan",
        country: "Japan",
        flag: "jp",
        image: "/images/tourist-visa/japan.jpg",
        visaType: "Tourist Visa",
        validity: "90 Days",
        processingTime: "7–10 Days",
        fee: "Check",
        badge: "Cherry Blossom",
        documents: ["Passport", "Photo", "Bank Statement", "Travel Plan"],
      },
      {
        id: "thailand",
        country: "Thailand",
        flag: "th",
        image: "/images/tourist-visa/thailand.jpg",
        visaType: "E-Visa",
        validity: "90 Days",
        processingTime: "5–7 Days",
        fee: "₹400",
        badge: "Beach Holiday",
        documents: ["Passport", "Photo", "Bank Statement", "Travel Itinerary"],
      },
      {
        id: "vietnam",
        country: "Vietnam",
        flag: "vn",
        image: "/images/tourist-visa/vietnam.jpg",
        visaType: "E-Visa",
        validity: "90 Days",
        processingTime: "3–5 Days",
        fee: "Check",
        badge: "Budget Friendly",
        documents: ["Passport", "Photo", "Travel Itinerary", "Financial Proof"],
      },
      {
        id: "turkey",
        country: "Turkey",
        flag: "tr",
        image: "/images/tourist-visa/turkey.jpg",
        visaType: "Tourist Visa",
        validity: "90 Days",
        processingTime: "7–10 Days",
        fee: "Check",
        badge: "Historic Beauty",
        documents: ["Passport", "Photo", "Financial Proof", "Travel Plan"],
      },
      {
        id: "russia",
        country: "Russia",
        flag: "ru",
        image: "/images/tourist-visa/russia.jpg",
        visaType: "Tourist Visa",
        validity: "30 Days",
        processingTime: "10 Days",
        fee: "Check",
        badge: "Unique Experience",
        documents: ["Passport", "Photo", "Invitation", "Travel Itinerary"],
      },
    ],
  },
];

export const testimonialsPage = {
  title: (
    <>
      Real Students. <span className="text-[#DC2626]">Real Results.</span>
    </>
  ),
  description:
    "Join hundreds of Indian students already living their European dream.",
};

export const whySection: WhySectionType = {
  features: [
    {
      icon: "globe",
      title: "15+ Travel Destinations",
      description:
        "Explore popular tourist destinations worldwide with expert visa guidance tailored to each country's requirements.",
    },
    {
      icon: "shieldCheck",
      title: "High Visa Success Rate",
      description:
        "Our experienced visa specialists carefully review every application to maximize your chances of approval.",
      large: true,
    },
    {
      icon: "clock3",
      title: "Fast & Hassle-Free Processing",
      description:
        "From document verification to application submission, we handle the complete process so you can focus on planning your trip.",
      large: true,
    },
    {
      icon: "fileCheck",
      title: "Complete Documentation Support",
      description:
        "We prepare, review, and organize every required document to minimize errors and avoid unnecessary delays.",
    },
    {
      icon: "headset",
      title: "Dedicated Visa Expert",
      description:
        "Get one-on-one guidance from a dedicated consultant throughout your tourist visa journey.",
    },
    {
      icon: "planeTakeoff",
      title: "Travel Assistance",
      description:
        "Need help with flights, hotel bookings, travel insurance, or itinerary planning? We've got you covered.",
    },
  ],

  title: (
    <>
      Why Travelers <span className="text-red-600">Choose Us</span>
    </>
  ),

  description:
    "From documentation to visa approval, we make international travel simple, transparent, and stress-free for every traveler.",

  badge: "Why Choose Us",
};

export const VisaTimelineData: VisaTimelineType = {
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
      title: "Choose Your Destination",
      content:
        "Select the country you want to visit and let our experts guide you through the right visa requirements.",
      icon: "MapPinned",
      image: "/images/howthiswork/1.jpg",
    },
    {
      step: 2,
      title: "Free Consultation",
      content:
        "Our visa specialists review your travel plans and explain the complete application process.",
      icon: "MessagesSquare",
      image: "/images/howthiswork/2.jpg",
    },
    {
      step: 3,
      title: "Submit Documents",
      content:
        "Share your passport and supporting documents. We'll verify everything before submission.",
      icon: "FileText",
      image: "/images/howthiswork/3.jpg",
    },
    {
      step: 4,
      title: "Application Processing",
      content:
        "We prepare and submit your visa application while keeping you updated at every stage.",
      icon: "ClipboardCheck",
      image: "/images/howthiswork/4.jpg",
    },
    {
      step: 5,
      title: "Visa Decision",
      content:
        "Receive your approved visa and final travel guidance before your departure.",
      icon: "BadgeCheck",
      image: "/images/howthiswork/4.jpg",
    },
    {
      step: 6,
      title: "Travel With Confidence",
      content:
        "Pack your bags and enjoy your international trip while we remain available for any assistance.",
      icon: "PlaneTakeoff",
      image: "/images/howthiswork/4.jpg",
    },
  ],
};

export const visaRejectionSection = {
  badge: "Avoid Common Mistakes",

  title: (
    <>
      Why Tourist Visa Applications{" "}
      <span className="text-red-600">Get Rejected</span>
    </>
  ),

  description:
    "Most tourist visa refusals happen because of avoidable mistakes. Our experts carefully review every application to help reduce errors and improve your chances of approval.",

  buttonText: "Start Your Application",

  reasons: [
    {
      reason: {
        icon: "FileWarning",
        title: "Incomplete Documents",
        description:
          "Missing or incorrect documents can delay processing or even lead to visa refusal.",
      },

      solution: {
        icon: "ShieldCheck",
        title: "Complete Document Review",
        description:
          "We carefully verify every required document before submission to reduce mistakes and delays.",
      },
    },

    {
      reason: {
        icon: "Wallet",
        title: "Financial Proof Issues",
        description:
          "Some countries require specific financial documents to prove you can support your trip.",
      },

      solution: {
        icon: "BadgeDollarSign",
        title: "Financial Guidance",
        description:
          "Our team explains exactly which financial documents are required for your destination.",
      },
    },

    {
      reason: {
        icon: "FilePenLine",
        title: "Incorrect Information",
        description:
          "Typing mistakes or inconsistent information may create unnecessary complications.",
      },

      solution: {
        icon: "ClipboardCheck",
        title: "Expert Application Review",
        description:
          "Every application is reviewed by experienced visa specialists before submission.",
      },
    },

    {
      reason: {
        icon: "MapPinned",
        title: "Weak Travel Itinerary",
        description:
          "An unclear travel purpose or incomplete itinerary may raise additional questions.",
      },

      solution: {
        icon: "Route",
        title: "Travel Planning Support",
        description:
          "We help prepare a clear travel itinerary with supporting documents where required.",
      },
    },

    {
      reason: {
        icon: "FolderX",
        title: "Missing Supporting Documents",
        description:
          "Hotel bookings, employment proof, invitation letters, or other documents may be required.",
      },

      solution: {
        icon: "Files",
        title: "Country-Specific Checklist",
        description:
          "Receive a personalized checklist based on your destination before applying.",
      },
    },

    {
      reason: {
        icon: "ClockAlert",
        title: "Late Application",
        description:
          "Applying too close to your travel date can result in unnecessary delays.",
      },

      solution: {
        icon: "CalendarClock",
        title: "Application Timeline Guidance",
        description:
          "We recommend the ideal time to apply based on your destination and travel plans.",
      },
    },
  ],

  cta: {
    title: "Don't Leave Your Visa to Chance",

    description:
      "Professional guidance helps you avoid common mistakes and submit a stronger visa application.",

    points: [
      "Expert Document Review",
      "Country-Specific Checklist",
      "End-to-End Visa Support",
    ],
  },
};

export const faqsData: FAQType[] = [
  {
    question: "How do I apply for a tourist visa?",

    paragraphs: [
      "The application process generally starts with choosing your destination, preparing the required documents, completing the visa application, and attending biometrics or an interview if required by the destination country.",
      "Our team guides you through every step of the process, helping you prepare your application accurately and submit the required documents with confidence.",
    ],
  },

  {
    question: "What documents are generally required for a tourist visa?",

    paragraphs: [
      "The required documents vary by country, but most tourist visa applications typically require the following:",
    ],

    list: [
      "Valid Passport",
      "Recent Passport-size Photographs",
      "Completed Visa Application Form",
      "Financial Proof or Bank Statements",
      "Travel Itinerary",
      "Hotel Booking or Accommodation Details (where applicable)",
      "Return Flight Reservation (where applicable)",
      "Employment, Business or Student Proof (where applicable)",
    ],

      custom: (
       <>
    {["Our experts provide a country-specific checklist before you apply to help ensure nothing important is missed.", ].map((item, index) => (
      <div key={index}  className="mt-5">{item}</div>
    ))}
  </>
    ),
  },

  {
    question: "How long does tourist visa processing usually take?",

    paragraphs: [
      "Visa processing times vary depending on the destination country, embassy workload, seasonal demand, and the completeness of your application.",
      "We recommend applying well in advance of your intended travel date to allow sufficient processing time.",
    ],
  },

  {
    question: "Can I apply for a tourist visa without any travel history?",

    paragraphs: [
      "Yes. Many first-time international travelers successfully receive tourist visas every year.",
      "Approval depends on meeting the destination country's eligibility requirements and submitting a complete, well-prepared application.",
    ],
  },

  {
    question: "How much financial proof or bank balance is required?",

    paragraphs: [
      "Financial requirements differ from one country to another and may also depend on your travel duration, itinerary, and personal circumstances.",
      "Our team explains the financial documentation required for your chosen destination before you submit your application.",
    ],
  },

  {
    question: "Can someone else sponsor my trip?",

    paragraphs: [
      "Yes. Many countries allow tourist visa applicants to receive financial sponsorship from eligible family members or sponsors.",
      "Additional supporting documents may be required depending on the destination country's immigration guidelines.",
    ],
  },

  {
    question: "Does receiving a tourist visa guarantee entry into the country?",

    paragraphs: [
      "No. A valid tourist visa allows you to travel to the destination, but the final decision regarding entry is made by the immigration authorities at the port of entry.",
      "Travelers should always carry the necessary supporting documents when arriving at their destination.",
    ],
  },

  {
    question: "Can a tourist visa be extended?",

    paragraphs: [
      "Visa extension policies vary by country. Some destinations may allow extensions under specific circumstances, while others may not permit extensions at all.",
      "We recommend following the immigration rules of your destination and applying for any extension only if permitted by local authorities.",
    ],
  },

  {
    question: "What assistance do you provide during the tourist visa process?",

    paragraphs: [
      "Our experienced visa consultants assist you throughout the application process to help reduce common mistakes and improve document quality.",
    ],

    list: [
      "Document Checklist",
      "Application Form Guidance",
      "Document Review",
      "Financial Documentation Guidance",
      "Appointment Assistance (where applicable)",
      "Interview Preparation (where applicable)",
      "End-to-End Application Support",
    ],
  },

  {
    question: "Do you guarantee tourist visa approval?",

    paragraphs: [
      "No. No individual, consultant, or agency can legally guarantee visa approval.",
      "Visa decisions are made solely by the relevant embassy, consulate, or immigration authority based on their own assessment of each application.",
    ],

    custom: (
       <>
    {["Our role is to help you prepare the strongest possible application by reviewing your documents carefully and guiding you throughout the process.",
    ].map((item, index) => (
      <div key={index}  className="mt-5">{item}</div>
    ))}
  </>
    ),
  },

  {
    question: "Can I apply again if my tourist visa application is refused?",

    paragraphs: [
      "Yes. In many cases, applicants may reapply after addressing the reasons that contributed to the previous refusal.",
      "Our consultants can review your previous application, identify potential issues, and help you prepare a stronger application before reapplying.",
    ],
  },
];

export const footerData:FooterType = {
  badge: "Start Your Journey Today",
  heading: <>Ready For Your Next
  <span className=" text-red-600">{" "} International Trip?
 </span>
  </>,
  description: "Join thousands of happy travelers who trusted our experts for a smooth tourist visa application process.",
  smallText:"Apply on WhatsApp",
  largeText: " Rs 36,000",
  leftIcon:"MessageCircle",
  rightIcon: "ArrowRight",
  buttonBelowText:"Available on WhatsApp • Fast response • Expert assistance",

  quickLinks: [
    { linkText: "Success Stories", link: "#stories" },
    { linkText: "Why Visa Get Rejected", link: "#rejection" },
    { linkText: "Step-by-Step Process", link: "#process" },
    { linkText: "Why Choose Us", link: "#whyNetherlands" },
    { linkText: "Choose Destination", link: "#destination" },
    { linkText: "Eligibility & Cost", link: "#eligibility" },
    { linkText: "FAQ", link: "#faq" },
  ],
  services:[
    "Application Processing",
    "Document Preparation",
    "Interview Preparation",
    "Dedicated Personal Counselor",
  ]
};
import { ReactNode } from "react";
import { CheckSquare } from "lucide-react";

import {
  CostAndRequirementType,
  FAQType,
  FooterType,
  TouristDestinationCategory,
  VisaTimelineType,
  WhySection as WhySectionType,
  SuccessStoryType,
  StudyTransferFromDubaiType,
  InternationalUniversityType,
} from "@/lib/types";

// export const navlinksData = [
//     { name: "Success Stories", href: "#stories" },
//     { name: "Choose Destination", href: "#destination" },
//     { name: "Process", href: "#process" },
//     { name: "FAQ", href: "#faq" },
//   ];

export const heroSection: {
  image: string;
  imageClass: string;
  heading: ReactNode;
  description: ReactNode;
} = {
  image: "/dubai/dubai-bg-hero-section.jpg",
  imageClass: "md:object-bottom object-[75%_center] ",
  heading: (
    <>
      Study in Dubai. Your Gateway to
      <span className="text-red-600"> World-Class Education.</span>
    </>
  ),
  description: (
    <>
      <ul className="space-y-3">
        {[
          "Study at International Universities",
          "Affordable Education Options",
          "Part-Time Work Opportunities",
          "International Transfer Options After 1 Year of Study in Dubai.",
        ].map((item, index) => (
          <li className="flex items-start justify-start " key={index}>
            <CheckSquare className="text-red-600 shrink-0 mt-1.5 size-5 mr-3" />{" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  ),
};
export const touristDestinationBasicData = {
  title: (
    <>
      Apply for Tourist Visas to Any Three Countries for{" "}
      <span className="text-red-700"> Just ₹36,000</span>
    </>
  ),
  description:
    "Select your preferred destinations and let our visa experts guide you through the complete application process.",
  buttonText: "Continue with these 3 countries ",
};

export const successStoryData: SuccessStoryType = {
  title: (
    <>
      Real Student <span className="text-red-600">Success</span> Journeys.
    </>
  ),
  description:
    "See how students started their educational journey in Dubai and successfully continued their studies at universities in other countries, subject to university admissions and destination-country requirements.",
  badge: "Success Stories",
  info: [
    {
      id: "1",
      studentName: "Rajwinder",
      profileImage: "/images/dubai/students/stu1.jpg",
      fromCountry: "Dubai",
      toCountry: "United Kingdom",
      university: "Ravensbourne University",
      program: "MSc Business Management",
      shortDescription:
        "Started studies in Dubai and later continued higher education in the United Kingdom.",
      featured: true,
      step1: "Started Studies in Dubai",
      step2: "Received Admission Offer",
      step3: "Continued Studies in the UK",
      image1: "/images/dubai/students/student-1.png",
      image2: "/images/dubai/students/transfer.png",
      image3: "/images/dubai/students/visa.png",
    },
    {
      id: "2",
      studentName: "Rajwinder",
      profileImage: "/images/dubai/students/stu1.jpg",
      fromCountry: "Dubai",
      toCountry: "Malta",
      university: "Ravensbourne University",
      program: "MSc Business Management",
      shortDescription:
        "Started studies in Dubai and later continued higher education in the United Kingdom.",
      featured: true,
      step1: "Started Studies in Dubai",
      step2: "Received Admission Offer",
      step3: "Continued Studies in the UK",
      image1: "/images/dubai/students/student-1.png",
      image2: "/images/dubai/students/transfer.png",
      image3: "/images/dubai/students/visa.png",
    },
    {
      id: "3",
      studentName: "Rajwinder",
      profileImage: "/images/dubai/students/stu1.jpg",
      fromCountry: "Dubai",
      toCountry: "Spain",
      university: "Ravensbourne University",
      program: "MSc Business Management",
      shortDescription:
        "Started studies in Dubai and later continued higher education in the United Kingdom.",
      featured: true,
      step1: "Started Studies in Dubai",
      step2: "Received Admission Offer",
      step3: "Continued Studies in the UK",
      image1: "/images/dubai/students/student-1.png",
      image2: "/images/dubai/students/transfer.png",
      image3: "/images/dubai/students/visa.png",
    },
    {
      id: "4",
      studentName: "Rajwinder",
      profileImage: "/images/dubai/students/stu1.jpg",
      fromCountry: "Dubai",
      toCountry: "Germany",
      university: "Ravensbourne University",
      program: "MSc Business Management",
      shortDescription:
        "Started studies in Dubai and later continued higher education in the United Kingdom.",
      featured: true,
      step1: "Started Studies in Dubai",
      step2: "Received Admission Offer",
      step3: "Continued Studies in the UK",
      image1: "/images/dubai/students/student-1.png",
      image2: "/images/dubai/students/transfer.png",
      image3: "/images/dubai/students/visa.png",
    },
  ],
};

export const touristDestinationData: TouristDestinationCategory[] = [
  {
    mainTitle: "Choose Your First Destination.",
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
    mainTitle: "Select Your Second Country From Europe.",
    description:
      "Discover historic cities, breathtaking landscapes, and effortless travel across Europe's most loved destinations.",
    titleColor: "text-red-600",
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
    mainTitle: "Choose Third Destination from Asia & the Middle East",
    description:
      "From luxury shopping to tropical beaches and cultural experiences, choose your perfect holiday destination.",
    titleColor: "text-red-600",
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
      icon: "GraduationCap",
      title: "Globally Recognized Universities",
      description:
        "Study at internationally recognized universities and branch campuses offering a wide range of undergraduate and postgraduate programs.",
    },
    {
      icon: "Wallet",
      title: "Affordable Study Options",
      description:
        "Explore programs with competitive tuition fees and flexible study options compared to many traditional international study destinations.",
      large: true,
    },
    {
      icon: "BriefcaseBusiness",
      title: "Part-Time Work Opportunities",
      description:
        "Eligible students may have opportunities to work part-time while studying, subject to UAE regulations and employer requirements.",
      large: true,
    },
    {
      icon: "Globe",
      title: "International Transfer Options",
      description:
        "Some students may have opportunities to continue their studies internationally after studying in Dubai.",
    },
    {
      icon: "Building2",
      title: "Modern Campus Experience",
      description:
        "Enjoy world-class campuses, advanced learning facilities, multicultural classrooms, and a safe, student-friendly environment.",
    },
    {
      icon: "Languages",
      title: "International Student Community",
      description:
        "Study alongside students from around the world while building valuable global connections and cultural experiences.",
    },
  ],

  title: (
    <>
      Why Study in <span className="text-red-600">Dubai?</span>
    </>
  ),

  description:
    "Dubai combines globally recognized education, modern campuses, career opportunities, and an international learning environment, making it one of the world's most attractive destinations for higher education.",

  badge: "Why Study in Dubai",
};

export const studyTransferFromDubai: StudyTransferFromDubaiType = {
  badge: "International Study Progression",

  title: (
    <>
      <span className="text-red-600">International Transfer </span> Options
      After One Year of Study in Dubai.
    </>
  ),

  description:
    "Dubai provide opportunities for students to continue their academic journey internationally in other countries. Progression opportunities vary based on university admissions, academic performance, credit recognition (where applicable), and destination-country requirements.",

  center: {
    title: "Study in Dubai",
    subtitle: "Your Starting Point",
    flag: "ae",
  },

  destinations: [
    {
      name: "United Kingdom",
      flag: "gb",
      x: 20,
      y: 22,
    },
    {
      name: "Canada",
      flag: "ca",
      x: 50,
      y: 12,
    },
    {
      name: "Germany",
      flag: "de",
      x: 80,
      y: 22,
    },
    {
      name: "Australia",
      flag: "au",
      x: 10,
      y: 72,
    },
    {
      name: "Spain",
      flag: "es",
      x: 35,
      y: 80,
    },
    {
      name: "Malta",
      flag: "mt",
      x: 60,
      y: 80,
    },
    {
      name: "USA",
      flag: "us",
      x: 85,
      y: 72,
    },
  ],

  buttonText: "Get Personalized Guidance",

  note: "Progression opportunities depend on university admissions, academic performance, credit recognition (where applicable), and destination-country requirements.",
};

export const costAndRequirementData: CostAndRequirementType = {
  badge: "Requirements & Costs",

  title: (
    <>
      Study Requirements & Estimated <span className="text-red-600">Costs</span>
    </>
  ),

  description:
    "Understand the typical admission requirements, estimated study costs, and the documents generally required before beginning your application.",

  // Left Side
  documents: {
    icon: "FileText",

    title: "Common Admission Requirements",

    description:
      "Requirements may vary depending on the university and program you choose.",

    items: [
      {
        icon: "FileUser",

        title: "Valid Passport",

        description:
          "A valid passport with sufficient validity for admission and student visa processing.",
      },

      {
        icon: "GraduationCap",

        title: "Academic Documents",

        description:
          "Educational certificates, transcripts, and other academic records required by your chosen university.",
      },

      {
        icon: "Languages",

        title: "English Language Requirement",

        description:
          "Some universities or programs may require proof of English proficiency where applicable.",
      },

      {
        icon: "FolderCheck",

        title: "Supporting Documents",

        description:
          "Passport-size photographs, personal statement, financial documents, and any additional documents requested by the university.",
      },
    ],
  },

  // Right Side

  pricing: {
    governmentFees: {
      icon: "BadgeIndianRupee",

      title: "Typical Student Expenses",

      description: "Estimates only",

      items: [
        {
          label: "Annual Tuition Fees",
          value: "Approx. AED 25,000–70,000+",
        },

        {
          label: "Student Visa & Emirates ID",
          value: "Varies by University",
        },

        {
          label: "Living Expenses",
          value: "Approx. AED 3,000–6,000/month",
        },

        {
          label: "Application Processing",
          value: "Varies by Institution",
        },
      ],
    },

    package: {
      title: "Our Full Service Package*",

      price: "₹36,000",

      description:
        "*The ₹36,000 fee covers our end-to-end education consulting, university selection guidance, admission assistance, application preparation, documentation support, and student visa guidance for your Dubai study application. University tuition fees, student visa charges, Emirates ID fees, medical examination fees, travel expenses, accommodation, health insurance, and other third-party charges are paid separately.",

      button: {
        text: "Apply on WhatsApp",
      },
    },
  },
};

export const VisaTimelineData: VisaTimelineType = {
  badge: "How It Works",

  title: (
    <>
      Your <span className="text-red-700">Study Journey</span> Starts Here
    </>
  ),

  description:
    "From choosing the right university to arriving in Dubai, our education counsellors guide you through every important step of your study abroad journey.",

  steps: [
    {
      step: 1,
      title: "Counselling & Profile Evaluation",
      content:
        "Discuss your academic background, career goals, preferred destination, and budget with our experienced education counsellors.",
      icon: "MessagesSquare",
      image: "/images/howthiswork/1.jpg",
    },

    {
      step: 2,
      title: "University & Course Selection",
      content:
        "Shortlist universities and programs that match your qualifications, interests, and future study plans.",
      icon: "School",
      image: "/images/howthiswork/2.jpg",
    },

    {
      step: 3,
      title: "Application & Admission",
      content:
        "Prepare your application, submit the required documents, and receive your university admission offer after successful evaluation.",
      icon: "FileCheck",
      image: "/images/howthiswork/3.jpg",
    },

    {
      step: 4,
      title: "Student Visa Processing",
      content:
        "After admission, your university and our team assist you with the student visa process and required documentation.",
      icon: "ClipboardCheck",
      image: "/images/howthiswork/4.jpg",
    },

    {
      step: 5,
      title: "Travel to Dubai & Complete Formalities",
      content:
        "Arrive in Dubai, complete the required post-arrival formalities, and receive your Emirates ID and student residence documentation as applicable.",
      icon: "PlaneTakeoff",
      image: "/images/howthiswork/5.jpg",
    },

    {
      step: 6,
      title: "Begin Your Student Journey",
      content:
        "Start your classes, explore student life in Dubai, and receive continued guidance whenever you need support during your studies.",
      icon: "GraduationCap",
      image: "/images/howthiswork/6.jpg",
    },
  ],
};

export const internationalUniversityData: InternationalUniversityType = {
  title: (
    <>
      Study at
      <span className="text-red-600"> International Universities</span>
      <br />
      Without Leaving Dubai
    </>
  ),
  description: "",
  buttonText: "",
  badgeText: "International Universities",
  whyChoose: "Why Students Choose International Universities in Dubai",
  WhyChooseDescription:
    "International branch campuses in Dubai allow students to study at globally recognised institutions while remaining in the UAE. Tuition fees, available scholarships, and overall study costs vary by university and program. Some students may also explore international study progression opportunities, depending on university admissions, academic performance, credit recognition (where applicable), and destination-country requirements.",
  countries: [
    {
      country: "United Kingdom",
      flag: "gb",
      description: "Leading UK universities with campuses in Dubai.",

      universities: [
        {
          name: "University of Birmingham Dubai",
          image: "/images/universities/birmingham.webp",
        },
        {
          name: "Heriot-Watt University Dubai",
          image: "/images/universities/heriot.webp",
        },
        {
          name: "Middlesex University Dubai",
          image: "/images/universities/middlesex.webp",
        },
      ],
    },

    {
      country: "Australia",
      flag: "au",
      description:
        "Australian universities offering internationally recognised degrees.",

      universities: [
        {
          name: "University of Wollongong in Dubai",
          image: "/images/universities/uow.webp",
        },
        {
          name: "Curtin University Dubai",
          image: "/images/universities/curtin.webp",
        },
        {
          name: "Murdoch University Dubai",
          image: "/images/universities/murdoch.webp",
        },
      ],
    },

    {
      country: "United States",
      flag: "us",
      description: "American-style education in Dubai.",

      universities: [
        {
          name: "RIT Dubai",
          image: "/images/universities/rit.webp",
        },
        {
          name: "American University in Dubai",
          image: "/images/universities/aud.webp",
        },
      ],
    },
    {
      country: "Canada",
      flag: "ca",
      description: "Canadian higher education opportunities in Dubai.",

      universities: [
        {
          name: "Canadian University Dubai",
          image: "/images/universities/cud.webp",
        },
      ],
    },

    {
      country: "Germany",
      flag: "de",
      description:
        "German universities offering internationally recognised programs in Dubai.",

      universities: [
        {
          name: "University of Europe for Applied Sciences",
          image: "/images/universities/ue.webp",
        },
      ],
    },
  ],
};

export const faqsData: FAQType[] = [
  {
    question: "Can international students work while studying in Dubai?",

    paragraphs: [
      "Eligible students may have opportunities to work part-time while studying, subject to UAE regulations, employer requirements, and their visa conditions.",
      "Work eligibility and permitted hours may vary based on current regulations and each student's individual circumstances.",
    ],
  },

  {
    question:
      "Can I continue my studies in another country after studying in Dubai?",

    paragraphs: [
      "Some students may have opportunities to continue their studies internationally after studying in Dubai.",
      "Opportunities depend on university admissions, academic performance, credit recognition (where applicable), and destination-country requirements. Our counsellors can assess your individual profile and discuss available options.",
    ],
  },

  {
    question: "Can students transfer after one year of studying in Dubai?",

    paragraphs: [
      "Some universities may offer study progression pathways or transfer opportunities after one year of study, depending on the student's academic performance and the receiving university's admission policies.",
      "Eligibility also depends on credit recognition (where applicable) and destination-country requirements. Speak with our counsellors to understand the options available for your academic profile.",
    ],
  },

  {
    question: "What are the admission requirements to study in Dubai?",

    paragraphs: [
      "Admission requirements vary depending on the university and program you choose.",
      "Most institutions generally require academic transcripts, a valid passport, English language proficiency (where applicable), and other supporting documents requested by the university.",
    ],
  },

  {
    question: "What programs can I study in Dubai?",

    paragraphs: [
      "Dubai offers a wide range of undergraduate, postgraduate, diploma, foundation, and professional programs across multiple fields.",
    ],

    list: [
      "Business & Management",
      "Computer Science & Information Technology",
      "Engineering",
      "Artificial Intelligence",
      "Hospitality & Tourism",
      "Healthcare",
      "Architecture & Design",
      "Finance & Accounting",
      "Media & Communication",
      "Many other specialized programs",
    ],
  },

  {
    question: "Are there internationally recognized universities in Dubai?",

    paragraphs: [
      "Yes. Dubai is home to several internationally recognized universities and international branch campuses offering globally respected qualifications across a wide range of disciplines.",
    ],
  },

  {
    question: "How much does it cost to study in Dubai?",

    paragraphs: [
      "Tuition fees vary depending on the university, course, and duration of study.",
      "Our counsellors can help you compare universities and recommend options based on your academic goals and budget.",
    ],
  },

  {
    question: "How long does the student visa process usually take?",

    paragraphs: [
      "Processing times vary depending on the university, application completeness, and the relevant authorities.",
      "Applying well before your intended intake is recommended to allow sufficient processing time.",
    ],
  },

  {
    question:
      "I have previous visa refusals. Can I still apply to study in Dubai?",

    paragraphs: [
      "Yes. Previous visa refusals do not automatically prevent you from applying to study in Dubai.",
      "Every application is assessed individually based on university admission requirements and the relevant immigration regulations.",
    ],
  },

  {
    question: "What assistance do your counsellors provide?",

    paragraphs: [
      "Our experienced education counsellors assist students throughout the admission and student visa process.",
    ],

    list: [
      "University Selection",
      "Course Selection",
      "Admission Guidance",
      "Application Assistance",
      "Documentation Support",
      "Student Visa Guidance",
      "Pre-Departure Assistance",
      "Personalized Counselling",
    ],
  },

  {
    question: "Do you guarantee university admission or student visa approval?",

    paragraphs: [
      "No. No consultant or agency can legally guarantee university admission or student visa approval.",
      "Admissions are decided by the respective universities, while student visa decisions are made by the relevant government authorities.",
    ],

    custom: (
      <>
        {[
          "Our role is to guide you throughout the application process, review your documents carefully, and help you prepare the strongest possible application.",
        ].map((item, index) => (
          <div key={index} className="mt-5">
            {item}
          </div>
        ))}
      </>
    ),
  },

  {
    question:
      "Is studying in Dubai more affordable than other popular study destinations?",

    paragraphs: [
      "For many students, Dubai offers competitive tuition fees and living costs compared with some traditional international study destinations.",
      "The overall cost depends on your university, program, accommodation, lifestyle, and personal circumstances.",
    ],
  },

  {
    question: "Which countries may students explore after studying in Dubai?",

    paragraphs: [
      "Some students explore opportunities to continue their studies in countries such as the United Kingdom, Canada, Germany, Australia, Spain, Malta, and others.",
      "International study progression opportunities depend on university admissions, academic performance, credit recognition (where applicable), and destination-country requirements.",
    ],
  },
];

export const footerData: FooterType = {
  badge: "Start Your Journey Today",
  heading: (
    <>
      Ready to Begin Your
      <span className="text-red-600"> Study in Dubai?</span>
    </>
  ),
  description:
    "Get personalized guidance on university selection, admissions, student visas, scholarships, and international study progression opportunities.",
  smallText: "Apply on WhatsApp",
  largeText: " Rs 36,000",
  leftIcon: "MessageCircle",
  rightIcon: "ArrowRight",
  buttonBelowText: "Available on WhatsApp • Fast response • Expert assistance",

  quickLinks: [
    { linkText: "Success Stories", link: "#stories" },
    { linkText: "Choose Destination", link: "#destination" },
    { linkText: "Step-by-Step Process", link: "#process" },
    { linkText: "Requirements & Cost", link: "#requirements" },
    { linkText: "Why Choose Us", link: "#whyNetherlands" },
    { linkText: "Why Visa Get Rejected", link: "#rejection" },
    { linkText: "FAQ", link: "#faq" },
  ],
  services: [
    "Application Processing",
    "Document Preparation",
    "Interview Preparation",
    "Dedicated Personal Counselor",
  ],
};

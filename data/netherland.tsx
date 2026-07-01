import { FAQType, FooterType, WhySection as WhySectionType } from "@/lib/types";
import { BadgeCheck, BriefcaseBusiness, Building2, Check, CheckSquare, Globe, IdCard, Rocket } from "lucide-react";
import { ReactNode } from "react";


export const heroSection: {
  image: string;
  imageClass: string;
  heading: ReactNode;
  description: ReactNode;
} = {
  image: "/netherland/3a14a1a6-85f3-4731-a95b-01132be9fe6e.png",
  imageClass: "md:object-right object-[65%_center]",
  heading: (
    <>
      Study in the
      <span className="text-red-600"> Netherlands 🇳🇱 </span>
      <br className="hidden lg:block" />
      Europe's Gateway for Indian Students
    </>
  ),
  description: (
    <>
      <ul className="space-y-3">
        
        <li className="flex items-center gap-3">
          <CheckSquare className="text-red-600" />{" "}
          <span>
             
            <strong>Highest </strong> Visa Approval Ratio.
          </span>
        </li>
        <li className="flex items-center gap-3">
          <CheckSquare className="text-red-600" />{" "}
          <span>
            <strong >Work 16–20 Hrs/Week</strong>  Legally.
          </span>
        </li>
        
        <li className="flex items-center gap-3">
          <CheckSquare className="text-red-600" />{" "}
          <span>
            Total budget 
            <strong> under 13-15 Lakhs!</strong>
          </span>
        </li>
        <li className="flex items-center gap-3">
          <CheckSquare className="text-red-600" />{" "}
          <span>
            Temporary Residence Card  <strong >within 90 days of arrival.  </strong>
          </span>
        </li>
      </ul>
    </>
  ),
};

export const testimonialsPage = {
  title:<>
  Real Students. <span className="text-[#DC2626]">Real Results.</span>
  </>,
  description:"Join hundreds of Indian students already living their European dream."
}


export const whySection:WhySectionType = {
  features:[
  {
    icon: "globe",
    title: "Schengen Zone Access",
    description:
      "Travel freely across 26+ European countries on a single student visa. Live, explore & experience all of Europe from Amsterdam.",
    large: true,
  },
  {
    icon: "building2",
    title: "Study in Amsterdam",
    description:
      "One of Europe's most vibrant, multicultural & globally ranked cities. World-class universities. World-class life.",
    large: true,
  },
  {
    icon: "badgeCheck",
    title: "Highest Visa Approval Ratio",
    description:
      "While other countries are rejecting Indian students, Netherlands has the best visa ratio right now. Your approval is our guarantee.",
  },
  {
    icon: "briefcaseBusiness",
    title: "Work 16–20 Hrs/Week Legally",
    description:
      "Earn up to ₹1.5–₹2 Lakh per month working part-time. Cover your living expenses and save money while studying in Europe.",
  },
  {
    icon: "idCard",
    title: "TRC of Europe in 90 Days",
    description:
      "Receive your Temporary Residence Card within 90 days of arrival. Your official European identity — fast tracked.",
  },
  {
    icon: "rocket",
    title: "Move Anywhere After 90 Days",
    description:
      "With TRC in hand, explore, work, or even relocate to any Schengen country after just 90 days. Germany, France, Spain — your choice.",
  },
],
  title:<>
  Why <span className="text-red-600">{" "}   Indian Students  {" "}  </span> Are Choosing Netherlands
  </>,
  description:"When Canada, UK & Australia are saying NO — Netherlands opens the door wide open for you.",
  badge:"Why Choose Netherland"
};



export const VisaTimelineData = {
  title:<>Easy
  <span className="text-red-700"> 6-Step </span>Process
  </>,
  description:"We handle everything—from applications and documentation to visa guidance and travel preparation. You can focus on your future while our team takes care of the process.",
  badge:"Journey to Europe",
  steps:[
      {
        step: 1,
        title: "Application Fees",
        content:
          "Pay just ₹11,000 to kick-start your European journey. We begin processing your university application immediately.",
        icon: "CreditCard" ,
        image: "/images/howthiswork/1.jpg",
      },
      {
        step: 2,
        title: "Receive Offer Letter",
        content:
          "Get your official university offer letter quickly. We have partnerships with multiple top Netherlands universities for you to choose from.",
        icon: "Mail",
        image: "/images/howthiswork/2.jpg",
      },
      {
        step: 3,
        title: "University Interview",
        content:
          "Super easy, friendly interview. Almost everyone clears it. We fully prepare you — no stress, no anxiety, just confidence.",
        icon: "Mic2",
        image: "/images/howthiswork/3.jpg",
      },
      {
        step: 4,
        title: "Fees Deposit — 6K Euro",
        content:
          "Deposit €6,000 to confirm your university seat. Financial assistance is available if you need it.",
        icon: "Banknote",
        image: "/images/howthiswork/4.jpg",
      },
       {
        step: 5,
        title: "Rest Fees in Installments",
        content:
          "Pay remaining university fees in comfortable installments. No lump sum pressure. Study now, pay comfortably over time.",
        icon: "HandCoins",
        image: "/images/howthiswork/4.jpg",
      },
       {
        step: 6,
        title: "Visa Approved — Fly!",
        content:
          "Your visa is approved — we guarantee it. Choose your FREE Air Ticket to Amsterdam or a FREE Laptop as your welcome gift!",
        icon: "Plane",
        image: "/images/howthiswork/4.jpg",
      },
    ],
} 




export const faqsData: FAQType[] = [
  {
    question: "What is your service fee?",
    paragraphs: [
      "Our service fee for the complete Netherlands study process is ₹36,000 only.",
      "This covers application guidance, documentation, university liaison, and visa support — end to end.",
    ],
  },

  {
    question: "What is the ₹50,000 guarantee? How does it work?",
    paragraphs: [
      "We are so confident in our service that we offer a unique ₹50,000 benefit regardless of outcome. We are so confident in our service that we offer a unique ₹50,000 benefit regardless of outcome.",
      "Whether your visa is approved or refused, you receive ₹50,000 from us in either case. Your ₹36,000 fee is fully covered and you walk away with more.",
    ],

    table: {
      headers: ["Visa Result", "What You Get"],
      rows: [
        [
          "✅ Approved",
          "₹50,000 🎉 Welcome Bonus after your visa is approved",
        ],
        [
          "❌ Refused",
          "₹50,000 Refund / Compensation",
        ],
      ],
    },

    
  },

  {
    question: "How much funds do I need to show?",
    paragraphs: [
      "You need to show ₹40 Lakhs (40L) in your bank account as proof of sufficient funds for living expenses and tuition.",
    ],

    list: [
      "New funds work too.",
      "We can help you arrange the required financial statement if needed.",
    ],
  },

  {
    question: "I don't have ₹40L in my account. Can you help?",
    paragraphs: [
      "Yes! If you don't have the required funds, we have funding support available.",
      "Just reach out to us and we'll guide you through the available options.",
    ],
  },

  {
    question: "Is there an interview with the embassy?",
    paragraphs: [
      "No. There is no interview required.",
      "The visa process is straightforward and handled through your university and the IND.",
      "You just need to submit the right documents — we guide you through everything.",
    ],
  },

  {
    question: "Do I need to apply for the visa myself?",
    paragraphs: [
      "No. Once you get admission, your Dutch university applies for the visa (MVV + Residence Permit) on your behalf through the IND.",
      "We coordinate with the university to ensure everything is submitted correctly and on time.",
    ],
  },

  {
    question: "What documents are needed for the Netherlands study visa?",

    paragraphs: [
      "Typical documents include:",
    ],

    list: [
      "Valid Passport (scanned — all pages for MVV applicants)",
      "Unconditional Admission Letter from the Dutch University",
      "Proof of Financial Resources (₹40L Bank Statement)",
      "Health Insurance Proof or Intent to Purchase",
      "Antecedents Certificate (Declaration of Good Conduct)",
      "Statement of Intent (with IND Request Form)",
    ],

    custom: (
      <>
    {["We provide a complete checklist and review every document before submission.", ].map((item, index) => (
      <div key={index}  className="mt-5">{item}</div>
    ))}
  </>
    ),
  },

  {
    question: "How long does the visa process take?",

    paragraphs: [
      "IND processing typically takes 60–90 days (around 2–3 months) from the date a complete application is submitted.",
      "We recommend starting the process at least 4–5 months before your intended arrival.",
    ],
  },

  {
    question: "When do I pay the ₹36,000 fee?",

    paragraphs: [
      "The ₹36,000 fee is paid upfront when you enroll with us for the complete process.",
      "After that, we handle everything.",
    ],
  },

  {
    question: "When will I receive the ₹50,000?",

    paragraphs: [
      "You receive the ₹50,000 after the visa decision is announced.",
    ],

    list: [
      "If approved → We transfer ₹50,000 within [X days].",
      "If refused → We transfer ₹50,000 within [X days].",
    ],
  },

  {
    question: "Can I work while studying in the Netherlands?",

    paragraphs: [
      "Yes! As an international student you can work:",
    ],

    list: [
      "Up to 16 hours per week during the academic year (with a work permit arranged by your employer).",
      "Full-time during June, July, and August (summer months — no permit needed).",
    ],
  },

  {
    question: "What happens after I get the visa?",

    paragraphs: [
      "After your MVV entry sticker is issued:",
    ],

    list: [
      "Collect your MVV from the Dutch Embassy/Consulate (Delhi, Mumbai or Bangalore).",
      "Schedule your travel to the Netherlands.",
      "Register at your local municipality (Gemeente) within 2 weeks of arrival to receive your BSN.",
      "Collect your VVR Residence Permit Card from the IND Office.",
    ],

    custom: (
      <>
    {["We continue guiding you through every step even after your visa has been issued.", ].map((item, index) => (
      <div key={index}  className="mt-5">{item}</div>
    ))}
  </>
     
    ),
  },

  {
    question: "What if I have more questions?",

    paragraphs: [
      "You can reach out to us anytime.",
      "We're here to help you through the complete process — from choosing the right university to arriving safely in the Netherlands.",
    ],
  },
];



export const footerData:FooterType = {
  badge: "Start Your Journey Today",
  heading: <>
  <span className=" text-red-600">Don't Miss </span>
                Upcoming Intake
  </>,
  description: "Join hundreds of successful Indian students studying in the Netherlands. Total budget under 13-15 Lakhs. Secure your spot today!",
  smallText:"Apply on WhatsApp",
  largeText: " Rs 36,000",
  leftIcon:"MessageCircle",
  rightIcon: "ArrowRight",
  buttonBelowText:" Get a FREE counseling call today — no obligations.",

  quickLinks: [
    { linkText: "Success Stories", link: "#stories" },
    { linkText: "Step-by-Step Process", link: "#process" },
    { linkText: "Why Netherlands", link: "#whyNetherlands" },
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

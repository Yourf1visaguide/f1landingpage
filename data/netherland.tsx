import { WhySection as WhySectionType } from "@/lib/types";
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
          "Deposit €6,000 to confirm your university seat. No old bank funds required. Financial assistance is available if you need it.",
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


import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type NavLinks = {
  name:string;
  href:string;
}

export type Testimonial = {
  id: number;
  tag?: string;
  tagColor?: string;
  description: string;
  name: string;
  visa: string;
  location: string;
  initials: string;
  priority: boolean;
  videoUrl: string;
  type: "image" | "video";
};
export type WhyFeature = {
  icon: string;
  title: string;
  description: string;
  large?: boolean;
};

export type WhySection = {
  features: WhyFeature[];
  title: ReactNode;
  description: string;
  badge: string;
};

export type VisaTimelineSteps =  {
    step: number;
    title: string;
    content: string;
    icon: string;
    image: string;
  };

export type VisaTimelineType = {
  title: ReactNode;
  description: string;
  badge: string;
  steps: VisaTimelineSteps[];
};




export type FAQType = {
  question: string;
  paragraphs?: string[];
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  custom?: ReactNode;
};


export type TouristDestination = {
  id: string;
  country: string;
  flag: string;
  image: string;
  visaType: string;
  validity: string;
  processingTime: string;
  fee: string;
  badge?: string;
  documents: string[];
  popular?: boolean;
};

export type TouristDestinationCategory = {
  mainTitle:string;
  description:string;
  titleColor:"text-blue-600" | "text-red-600" | "text-black-900" | "text-amber-600";
  countries:TouristDestination[]
}

export type FooterQuickLink = {
  linkText: string;
  link: string;
};


//prepration types


export interface RequirementItemType {
  icon: string;
  title: string;
  description: string;
}

export interface GovernmentFeeItemType {
  label: string;
  value: string;
}

export interface CostAndRequirementType {
  badge: string;
  title: ReactNode;
  description: string;

  documents: {
    icon: string;
    title: string;
    description: string;
    items: RequirementItemType[];
  };

  pricing: {
    governmentFees: {
      icon: string;
      title: string;
      description: string;
      items: GovernmentFeeItemType[];
    };

    package: {
      title: string;
      price: string;
      description: string;

      button: {
        text: string;
      };
    };
  };
}

//prepration types

export type FooterType = {
  badge: string;
  heading: ReactNode;
  description: string;
  smallText: string;
  largeText: string;
  leftIcon: string;
  rightIcon: string;
  buttonBelowText:string;
  quickLinks: FooterQuickLink[];
  services: string[];
};


export type VisaProcessStepsType = {
  number:string;
icon:string;
title:string;
description:string;
}
export type VisaProcessType = {
  heading:ReactNode;
  description:string;
  badgeText:string;
  steps:VisaProcessStepsType[];
  buttonText:string;

}



export type SuccessStoryInfoType = {
    id: string;
  studentName: string;
  profileImage: string;
  fromCountry: string;
  toCountry: string;
  university: string;
  program: string;
  shortDescription: string;
  featured?: boolean;
  step1:string;
  step2:string;
  step3:string;
  image1:string;
  image2:string;
  image3:string;
  }

export interface SuccessStoryType {
  title:ReactNode;
  description:string;
  badge:string;
  info:SuccessStoryInfoType[]

}



export interface StudyTransferFromDubaiCountryType {
  name: string;
  flag: string;
  x:number;
  y:number;

}

export interface StudyTransferFromDubaiType {
  badge: string;
  title: ReactNode;
  description: string;

  center: {
    title: string;
    subtitle: string;
    flag: string;
  };

  destinations: StudyTransferFromDubaiCountryType[];

  buttonText: string;
  note: string;
}




export interface InternationalUniversity {
  name: string;
  city?: string;
  image: string;
}

export interface InternationalUniversityCountry {
  country: string;
  flag: string;
  description: string;
  universities: InternationalUniversity[];
}

export interface InternationalUniversityType {
  title:ReactNode;
  description:string;
  badgeText:string;
  buttonText:string;
  countries:InternationalUniversityCountry[]
  whyChoose:string;
  WhyChooseDescription:string;
}
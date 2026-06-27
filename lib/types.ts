import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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

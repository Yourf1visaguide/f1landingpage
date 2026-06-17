import { Inter, Playfair_Display } from "next/font/google";
import { ArrowRight, MessageCircle } from "lucide-react";
import HeroStats from "./HeroStats";

import RedButton from "@/components/Red-Buttons";
import BlackButton from "@/components/BlackButton";
import Badge from "@/components/Badge";
import { handleWhatsappClick } from "@/function/handleWhatsapp";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });


function HeroLeft() {
  
  return (
    <div className="space-y-8 lg:col-span-8">
        <Badge text="Over 50,000+ Success Stories" isLive={true} color="green" />
      

      {/* Headline */}
      <h1
        className={`${playfair.variable} font-serif text-5xl lg:text-6xl xl:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight`}
      >
        Your Dream of <br className="hidden lg:block" />
        Studying in <span className="text-red-600">America</span>
        <br />
        Starts Here
      </h1>

      {/* Testimonial Quote */}
      <div className="border-l-4 border-red-600 pl-6 py-2">
        <p className="text-lg text-[#0F172A] italic font-medium">
          "Because of this team, my visa was approved in less than 2 minutes!"
        </p>
        <p className="text-sm text-slate-600 mt-2 font-medium">
          — Arjun M., NYU
        </p>
      </div>

      {/* Subheadline */}
      <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
        Navigate the F-1 student visa process with confidence.{" "}
        <span className="font-semibold text-[#0F172A]">
          Apply now in just Rs 36,000
        </span>{" "}
        and get step-by-step guidance, mock interview mastery, and everything
        you need to land your USA study visa.
      </p>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <RedButton onClick={handleWhatsappClick} text="APPLY ON WHATSAPP" className="text-base py-5" icon={<MessageCircle className="h-5 w-5" />} />
        <BlackButton href="#stories" text="See Success Stories"  className="text-base py-5" icon={<ArrowRight className="h-5 w-5" />} />
      </div>

      {/* Stats */}
      <HeroStats />
    </div>
  );
}

export default HeroLeft;

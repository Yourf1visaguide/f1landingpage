import React from 'react'

import { heroSection } from "@/data/tourist-visa";
import HeroSection from "@/components/LandingPage2/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import TouristDestination from "@/components/LandingPage2/TouristDestination/TouristDestination";
import TestimonialsPage from "@/components/LandingPage2/Testimonial/Testimonial";


function TouristVisa() {
  return (
    <div className="bg-white">
      <Navbar />

      <HeroSection 
      heading={heroSection.heading}
      description={heroSection.description}
      image={heroSection.image}
      imageClass={heroSection.imageClass}
    />
    <TestimonialsPage sheet={process.env.NEXT_PUBLIC_TOURISTVISA_GOOGLE_SHEET_ID ?? ""} title={<>
      Turning <span className="text-red-600 ">Travel Dreams </span>Into Reality
      </>} description="See why families, couples, and solo travelers choose us for a smooth and hassle-free visa experience." />
    <TouristDestination />
    </div>
  )
}

export default TouristVisa
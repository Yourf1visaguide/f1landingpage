import React from 'react'

import { heroSection } from "@/data/tourist-visa";
import HeroSection from "@/components/LandingPage2/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import TouristDestination from "@/components/LandingPage2/TouristDestination/TouristDestination";


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
    <TouristDestination />
    </div>
  )
}

export default TouristVisa
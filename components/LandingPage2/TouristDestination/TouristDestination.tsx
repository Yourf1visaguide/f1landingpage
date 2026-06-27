import React from 'react'
import TouristCard from "./TouristCard"
import { touristDestinationData } from "@/data/tourist-visa"

function TouristDestination() {
  return (
    <div className="bg-zinc-200 py-24 px-4">
      <div className="max-w-7xl mx-auto min-[750px]:grid min-[750px]:grid-cols-2  min-[1000px]:grid-cols-3 min-[1320px]:grid-cols-4 gap-4">
{
  touristDestinationData.map((item, index) => (
        <TouristCard data={item} key={index} />

  ))
}

      </div>
    </div>
  )
}

export default TouristDestination
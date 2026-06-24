"use client"
import { ArrowRight, MessageCircle } from "lucide-react"

import BlackButton from "@/components/BlackButton"
import RedButton from "@/components/Red-Buttons"
import { handleWhatsappClick } from "@/function/handleWhatsapp"

function HeroSectionCta() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
        <RedButton onClick={handleWhatsappClick} text="APPLY ON WHATSAPP" className="text-base py-5" icon={<MessageCircle className="h-5 w-5" />} />
        <BlackButton href="#stories" text="See Success Stories"  className="text-base py-3 bg-white text-black hover:bg-zinc-200 active:bg-white active:text-black transition duration-200" icon={<ArrowRight className="h-5 w-5" />} />
      </div>
  )
}

export default HeroSectionCta
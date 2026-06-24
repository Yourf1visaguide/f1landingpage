"use client"
import { MessageCircle } from "lucide-react"
import BlackButton from "@/components/BlackButton"
import { handleWhatsappClick } from "@/function/handleWhatsapp"
import React from 'react'

function PreprationCtaButton() {
  return (
    <BlackButton 
            text="Apply on WhatsApp" 
            icon={<MessageCircle className="h-5 w-5" />}
            className="w-full mt-4 py-4 md:text-xl text-base"
            onClick={handleWhatsappClick}
          />
  )
}

export default PreprationCtaButton
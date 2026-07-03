"use client"
import { MessageCircle } from "lucide-react"
import BlackButton from "@/components/BlackButton"
import { handleWhatsappClick, handleWhatsappClickWithMessage } from "@/function/handleWhatsapp"
import React from 'react'

function PreprationCtaButton({text}:{text:string}) {
  return (
    <BlackButton 
            text={text} 
            icon={<MessageCircle className="h-5 w-5" />}
            className="w-full mt-4 py-4 md:text-xl text-base"
            onClick={() => handleWhatsappClickWithMessage()}
          />
  )
}

export default PreprationCtaButton
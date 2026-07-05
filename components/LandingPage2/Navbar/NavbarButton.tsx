import React from 'react'
import RedButton from "@/components/Red-Buttons"
import { handleWhatsappClickWithMessage } from "@/function/handleWhatsapp"

function NavbarButton() {
  return (
    <RedButton text="Call Now"  onClick={() => handleWhatsappClickWithMessage()} />
  )
}

export default NavbarButton
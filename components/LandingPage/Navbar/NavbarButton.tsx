import React from 'react'
import RedButton from "@/components/Red-Buttons"
import { handleWhatsappClick } from "@/function/handleWhatsapp"

function NavbarButton() {
  return (
    <RedButton text="Call Now" onClick={handleWhatsappClick} />
  )
}

export default NavbarButton
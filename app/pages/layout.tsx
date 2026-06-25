import WhatsappBubble from "@/components/whatsapp/whatsapp-button"
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div>
      {children}
      <WhatsappBubble />
    </div>
  )
}

export default layout
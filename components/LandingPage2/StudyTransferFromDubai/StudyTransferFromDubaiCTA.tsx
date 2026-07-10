"use client"

import RedButton from "@/components/Red-Buttons"
import { handleWhatsappClickWithMessage } from "@/function/handleWhatsapp";

function StudyTransferFromDubaiCTA({buttonText}:{buttonText:string;}) {
  return (
    <div>
      {/* Note

        <p className="mx-auto mt-8 w-full text-center text-sm leading-7 text-zinc-500">
          <span className="font-semibold text-zinc-700">Important:</span>{" "}
          {data.note}
        </p> */}

        <div className="mt-2 text-center">
          <RedButton text={buttonText} className="py-3 text-lg" onClick={() => handleWhatsappClickWithMessage()} />
        </div>
    </div>
  )
}

export default StudyTransferFromDubaiCTA
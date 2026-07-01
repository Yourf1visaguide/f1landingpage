"use client"
import { handleWhatsappClick } from "@/function/handleWhatsapp"
import { icons } from "@/lib/icons"
import { FooterType } from "@/lib/types"

function FooterCtaButton({data}:{data:FooterType}) {
  const LeftIcon = icons[data.leftIcon as keyof typeof icons]
  const RightIcon = icons[data.rightIcon as keyof typeof icons]
  return (
    <div className="w-full  flex flex-col justify-end lg:items-center items-end ">
              <button 
              onClick={handleWhatsappClick} 
                className=" group flex 
                w-full items-center justify-between rounded-2xl bg-red-800 md:max-w-sm px-8 py-6 transition-all hover:bg-red-700 cursor-pointer " >
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase">
                    <LeftIcon className="h-4 w-4" />
                    {data.smallText}
                  </div>

                  <div className="mt-2 text-4xl font-bold">
                    {data.largeText}
                  </div>
                </div>

                <RightIcon className="h-8 w-8 transition-transform group-hover:translate-x-2" />
              </button>

              <p className="mt-4 text-center text-sm text-zinc-300  ">
                {data.buttonBelowText}
              </p>
            </div>
  )
}

export default FooterCtaButton
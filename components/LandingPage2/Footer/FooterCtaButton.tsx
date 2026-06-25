"use client"
import { handleWhatsappClick } from "@/function/handleWhatsapp"
import { ArrowRight, MessageCircle } from "lucide-react"
import React from 'react'

function FooterCtaButton() {
  return (
    <div className="w-full  flex flex-col justify-end items-end ">
              <button
              onClick={handleWhatsappClick}
                className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-red-800
                md:max-w-sm
                px-8
                py-6
                transition-all
                hover:bg-red-700
                cursor-pointer
              "
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase">
                    <MessageCircle className="h-4 w-4" />
                    Apply on WhatsApp
                  </div>

                  <div className="mt-2 text-4xl font-bold">
                    Rs 36,000
                  </div>
                </div>

                <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
              </button>

              <p className="mt-4 text-center text-sm text-zinc-300 ">
                Get a FREE counseling call today — no obligations.
              </p>
            </div>
  )
}

export default FooterCtaButton
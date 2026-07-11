"use client";

import RedButton from "@/components/Red-Buttons";
import { handleWhatsappClickWithMessage } from "@/function/handleWhatsapp";
import { icons } from "@/lib/icons";
import {
  Check,
  CircleAlert,
  FileWarning,
  MessageCircle,
  User,
} from "lucide-react";

function StudyTransferFromDubaiCTA({
  buttonText,
  note,
}: {
  buttonText: string;
  note: string;
}) {
  return (
    <div className=" relative max-w-5xl mx-auto border border-zinc-200 p-6 rounded-lg  shadow-sm flex flex-col md:flex-row">
      <div className="bg-red-50/70 blur-2xl absolute top-10 left-10 bottom-10 right-10 z-0" />
      <div className="mx-auto w-full text-center text-sm leading-7 text-zinc-500 md:w-1/2 md:border-r border-b flex-1  md:border-b-0 pb-6 mb-6 md:mb-0 z-10  border-zinc-200 pr-0 mr-0 md:pr-8 md:mr-8">
        <div className="text-red-600 flex gap-x-2 text-lg font-semibold items-center justify-start">
          <CircleAlert className="size-5 bg-red-600 text-white rounded-full" />{" "}
          Important
        </div>
        <p className="text-justify">{note}</p>
      </div>

      <div className="mt-0 text-center md:w-1/2 z-10">
        <div className="flex mb-2 gap-x-4 mb-6">
          <div className="bg-red-600 p-3 size-16 rounded-full ">
            <User className="size-10" />
          </div>
          <div>
            <h6 className="text-red-600 text-left text-lg font-semibold">
              Talk to Our Counsellors{" "}
            </h6>
            <p className="text-zinc-600 text-left text-base">
              Get personalized guidance bases on your academic profile and
              goals.
            </p>
          </div>
        </div>
        <RedButton
          icon={<MessageCircle className="size-5" />}
          text={buttonText}
          className="py-2 text-sm sm:text-lg w-full flex items-start justify-center"
          onClick={() => handleWhatsappClickWithMessage()}
        />
        <ul className="flex gap-x-2 mt-6 justify-between">
          {[
            { icon: "Check", text: "Free Consultation" },
            { icon: "Check", text: "Eligibility Assessment" },
          ].map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <li
                className="text-zinc-600 bg-white shadow-sm rounded-lg px-2 py-1 border border-zinc-200 flex gap-x-2 w-full  items-center justify-center text-xs font-semibold"
                key={index}
              >
                <Check className="size-3 text-red-600 " />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default StudyTransferFromDubaiCTA;

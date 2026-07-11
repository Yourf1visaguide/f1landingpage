import {
  StudyTransferFromDubaiType,
  StudyTransferFromDubaiCountryType,
} from "@/lib/types";

import StudyTransferFromDubaiCard from "./StudyTransferFromDubaiCard";
import StudyTransferFromDubaiCenter from "./StudyTransferFromDubaiCenter";
import StudyTransferFromDubaiSvg from "./StudyTransferFromDubaiSvg";
import Badge from "@/components/Badge";
import RedButton from "@/components/Red-Buttons";
import {
  handleWhatsappClick,
  handleWhatsappClickWithMessage,
} from "@/function/handleWhatsapp";
import StudyTransferFromDubaiCTA from "./StudyTransferFromDubaiCTA";
import StudyTransferFromDubaiCenterSteps from "./StudyTransferFromDubaiCenterSteps";
import { ArrowDown, ArrowRight } from "lucide-react";

interface StudyTransferFromDubaiProps {
  data: StudyTransferFromDubaiType;
}

export default function StudyTransferFromDubai({
  data,
}: StudyTransferFromDubaiProps) {
  return (
    <section className="py-24 px-4 lg:px-6 max-w-7xl mx-auto bg-white border border-white border-t " id="StudyTransfer">
        {/* Heading */}

        <div className="mx-auto text-center">
          <Badge text={data.badge} isLive={true} />

          <h2 className="mt-6 text-4xl/tight max-w-3xl mx-auto font-bold lg:text-5xl/tight text-zinc-900">
            {data.title}
          </h2>

          <p className="mt-6 text-lg max-w-5xl mx-auto leading-8 text-zinc-600">
            {data.description}
          </p>
        </div>

        {/* Hub */}
        
        <div className="mt-4">
        
          <div className=" relative mx-auto max-w-4xl h-[500px] sm:h-[500px] lg:h-[600px] ">
            <StudyTransferFromDubaiSvg destinations={data.destinations} />

            <div className=" absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">
              <StudyTransferFromDubaiCenter
                title={data.center.title}
                subtitle={data.center.subtitle}
                subtitle2={data.center.subtitle2}
                flag={data.center.flag}
              />
            </div>

            {/* Countries */}

            {data.destinations.map(
              (item: StudyTransferFromDubaiCountryType) => {
                return (
                  <div
                    key={item.name}
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: "translate(-50%,-50%)",
                    }}
                    className={`
                  absolute
                  z-30
                `}
                  >
                    <StudyTransferFromDubaiCard item={item} />
                  </div>
                );
              },
            )}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mb-8 mt-4 flex justify-center items-center gap-x-2">
          <StudyTransferFromDubaiCenterSteps
            subheadingTitle="2nd Year"
            subheading={data.center.subtitle2}
          />
        </div>
        <StudyTransferFromDubaiCTA buttonText={data.buttonText} note={data.note} />
     
    </section>
  );
}

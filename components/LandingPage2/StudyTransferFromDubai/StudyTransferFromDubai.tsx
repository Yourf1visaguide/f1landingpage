import {
  StudyTransferFromDubaiType,
  StudyTransferFromDubaiCountryType,
} from "@/lib/types";

import StudyTransferFromDubaiCard from "./StudyTransferFromDubaiCard";
import StudyTransferFromDubaiCenter from "./StudyTransferFromDubaiCenter";
import StudyTransferFromDubaiSvg from "./StudyTransferFromDubaiSvg";
import Badge from "@/components/Badge";
import RedButton from "@/components/Red-Buttons";
import { handleWhatsappClick, handleWhatsappClickWithMessage } from "@/function/handleWhatsapp";
import StudyTransferFromDubaiCTA from "./StudyTransferFromDubaiCTA";

interface StudyTransferFromDubaiProps {
  data: StudyTransferFromDubaiType;
}



export default function StudyTransferFromDubai({
  data,
}: StudyTransferFromDubaiProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto bg-white border border-white border-t ">
      <div className="container">
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

        <div className="relative mx-auto mt-20 h-[760px] max-w-6xl">
          {/* SVG */}

          <StudyTransferFromDubaiSvg destinations={data.destinations} />

          {/* Center */}

          <div className=" absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">
            <StudyTransferFromDubaiCenter
              title={data.center.title}
              subtitle={data.center.subtitle}
              flag={data.center.flag}
            />
          </div>

          {/* Countries */}

          {data.destinations.map((item: StudyTransferFromDubaiCountryType) => {
            
          
            return (
            <div
              key={item.name}
              style={{
              left:`${item.x}%`,
              top:`${item.y}%`,
              transform:"translate(-50%,-50%)"
}}
              className={`
                  absolute
                  z-30
                `}
            >
              <StudyTransferFromDubaiCard item={item} />
            </div>
          )})}
        </div>

        {/* CTA */}

        

        <StudyTransferFromDubaiCTA buttonText={data.buttonText} />
      </div>
    </section>
  );
}

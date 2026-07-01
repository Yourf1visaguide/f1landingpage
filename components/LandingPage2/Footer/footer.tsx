

import { icons } from "@/lib/icons";
import { FooterType } from "@/lib/types";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import FooterCtaButton from "./FooterCtaButton";

export default function Footer({data}:{data:FooterType}) {
  return (
    <footer className="relative mt-32 bg-linear-to-b from-red-950 via-zinc-950 to-zinc-950 text-white ">
      {/* Floating CTA Card */}

      <div className="absolute right-0 bottom-0 rounded-full h-full w-full bg-red-700/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 ">
        <div className="relative -translate-y-24 overflow-hidden rounded-xl border border-red-500/30 bg-red-950 p-8 shadow-2xl lg:p-14 flex ">
          <div className="absolute right-0 top-0  left-0 bottom-0  h-full w-full bg-black/50 -z-50 " />
          <div className="absolute right-0 bottom-2/4  h-full w-1/8 bg-red-500/50 rounded-full blur-3xl -z-50 " />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                {data.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight lg:text-5xl text-blue-50">
                {data.heading}
              </h2>

              <p className="mt-6 text-lg text-red-100 text-justify">
                {data.description}
              </p>
            </div>

            <FooterCtaButton data={data} />
          </div>
        </div>
      </div>

      {/* Footer Content */}

      <div className="mx-auto max-w-7xl px-6 pb-10 z-50 ">
        <div className="grid gap-12 lg:grid-cols-12 z-50">
          {/* Company Info */}

          <div className="lg:col-span-5 z-50">
            <h3 className="text-2xl font-bold ">Your F-1 Visa Guide</h3>

            {/* <p className="mt-5 max-w-md leading-7 text-white/70">
              Helping students secure their F-1 visa with
              expert guidance, documentation support and
              interview preparation.
            </p> */}

            {/* Address */}

            <div className="mt-2 space-y-4">
              <div className="flex items-start gap-3">
                <icons.MapPin className="mt-1 h-5 w-5 text-red-600" />

                <div className="text-white/70">
                  Taj Food Market, SCO 18-19, 2nd Floor
                  <br />
                  Crystal Plaza 1, above PUMA, Choti Baradari,
                  <br />
                  Jalandhar, Punjab 144001
                  <br />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <icons.Phone className="h-5 w-5 text-red-600" />

                <span className="text-white/70">+91 917087 775007</span>
              </div>

              <div className="flex items-center gap-3">
                <icons.Mail className="h-5 w-5 text-red-600" />

                <span className="text-white/70">info@yourf1visaguide.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2 z-50">
            <h4 className="font-semibold text-white">Quick Links</h4>

            <div className="mt-5 space-y-3">
              {
                data.quickLinks.map((item, index) => (
                  <a href={item.link} key={index} className="block text-white/70 hover:text-red-600">
                  {item.linkText}
                  </a>
                ))
              }
              
            </div>
          </div>

          {/* Services */}

          <div className="lg:col-span-2 z-50">
            <h4 className="font-semibold text-white">Services</h4>

            <div className="mt-5 space-y-3">
              {
                data.services.map((item, index) => (
                  <p className="text-white/70" key={index}>
                    {item}
                  </p>
                ))
              }
            </div>
          </div>

          {/* Trust Stats */}

          <div className="lg:col-span-3 z-50">
            <h4 className="font-semibold text-white">Trusted Results</h4>

            <div className="mt-5 space-y-5">
              <div>
                <div className="text-3xl font-bold text-red-600">50,000+</div>

                <div className="text-white/70">Happy Clients</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-red-600">94%</div>

                <div className="text-white/70">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}

        <div className="mt-16 rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm leading-7 text-white/60">
            <span className="font-semibold text-white">Disclaimer:</span> "Your
            F-1 Visa Guide" is an independent educational and consulting
            platform and is not affiliated with the U.S. Department of State,
            USCIS, or any government agency. The information provided is for
            educational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-linear-to-b from-blue-950 via-zinc-950 to-zinc-950 text-white">
      {/* Floating CTA Card */}

          <div className="absolute right-0 bottom-0 rounded-full h-full w-full bg-red-700/5 blur-3xl " />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative -translate-y-24 overflow-hidden rounded-xl border border-blue-500/30 bg-blue-950 p-8 shadow-2xl lg:p-14">
        
          <div className="absolute right-0 top-0  left-0 bottom-0  h-full w-full bg-black/50 -z-50 " />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Start Your Journey Today  
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-6xl text-blue-50">
                Secure Your US Visa
                <span className="block text-red-600">
                  Approval Strategy Now
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/80">
                Don't leave your American future to chance.
                Apply now in just Rs 36,000 and let our experts
                handle the paperwork, preparation and interview strategy.
              </p>
            </div>

            <div className="w-full max-w-sm">
              <button
                className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-red-800
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

              <p className="mt-4 text-center text-sm text-white/70">
                Join 12,500+ successful students.
                Your dream university awaits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}

      <div className="mx-auto max-w-7xl px-6 pb-10 ">

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Company Info */}

          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold ">
              Your F-1 Visa Guide
            </h3>

            {/* <p className="mt-5 max-w-md leading-7 text-white/70">
              Helping students secure their F-1 visa with
              expert guidance, documentation support and
              interview preparation.
            </p> */}

            {/* Address */}

            <div className="mt-2 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-600" />

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
                <Phone className="h-5 w-5 text-red-600" />

                <span className="text-white/70">
                  +91 917087 775007
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />

                <span className="text-white/70">
                  support@yourdomain.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <div className="mt-5 space-y-3">
              <a href="#stories" className="block text-white/70 hover:text-red-600">
                Success Stories
              </a>

              <a href="#process" className="block text-white/70 hover:text-red-600">
                Step-by-Step Process
              </a>

              <a href="#documents" className="block text-white/70 hover:text-red-600">
                Document Checklist
              </a>

              <a href="#faq" className="block text-white/70 hover:text-red-600">
                F-1 FAQ
              </a>
            </div>
          </div>

          {/* Services */}

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <div className="mt-5 space-y-3">
              <p className="text-white/70">DS-160 Support</p>
              <p className="text-white/70">Visa Interview Prep</p>
              <p className="text-white/70">Financial Structuring</p>
              <p className="text-white/70">Visa Pods</p>
            </div>
          </div>

          {/* Trust Stats */}

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white">
              Trusted Results
            </h4>

            <div className="mt-5 space-y-5">
              <div>
                <div className="text-3xl font-bold text-red-600">
                  
                  50,000+
                </div>

                <div className="text-white/70">
                  Students Helped
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-red-600">
                  94%
                </div>

                <div className="text-white/70">
                  Approval Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}

        <div className="mt-16 rounded-2xl border border-white/10 bg-black/20 p-6">
          <p className="text-sm leading-7 text-white/60">
            <span className="font-semibold text-white">
              Disclaimer:
            </span>{" "}
            "Your F-1 Visa Guide" is an independent educational
            and consulting platform and is not affiliated with
            the U.S. Department of State, USCIS, or any government
            agency. The information provided is for educational
            purposes only and does not constitute legal advice.
          </p>
        </div>

        
      </div>
    </footer>
  );
}
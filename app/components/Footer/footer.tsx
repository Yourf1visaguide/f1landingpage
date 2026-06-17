"use client";

import React from "react";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-950">
      {/* Background Accent */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,.15),transparent_40%)]" /> */}

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* CTA Section */}

        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
            <CheckCircle2
              className="h-4 w-4 text-red-500"
              fill="currentColor"
            />

            <span className="text-sm font-semibold text-red-300">
              Start Your Journey Today
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
            Secure Your US Visa
            <span className="block text-red-500">
              Approval Strategy Now
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            Don't leave your American future to chance.
            Apply now in just Rs 36,000 and let our experts
            handle the heavy lifting, paperwork, and
            interview preparation.
          </p>

          {/* CTA Card */}

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-red-500/20 bg-white/5 p-8 backdrop-blur-sm">
            <button
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-red-600
                px-8
                py-6
                text-left
                transition
                hover:bg-red-700
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />

                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Apply on WhatsApp
                  </span>
                </div>

                <div className="mt-3 text-4xl font-bold">
                  Rs 36,000
                </div>
              </div>

              <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
            </button>

            <p className="mt-5 text-sm text-slate-400">
              Join 12,500+ successful students.
              Your dream university awaits.
            </p>
          </div>
        </div>

        {/* Divider */}

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom Area */}

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold">
              Your F-1 Visa Guide
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Helping students navigate the F-1 visa
              process with confidence through expert
              guidance, document preparation, and
              interview coaching.
            </p>
          </div>

          {/* Links */}

          <div className="lg:col-span-5">
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <div className="mt-5 space-y-4">
              <a
                href="#stories"
                className="block text-slate-400 transition hover:text-red-400"
              >
                Success Stories
              </a>

              <a
                href="#process"
                className="block text-slate-400 transition hover:text-red-400"
              >
                Step-by-Step Process
              </a>

              <a
                href="#documents"
                className="block text-slate-400 transition hover:text-red-400"
              >
                Document Checklist
              </a>

              <a
                href="#faq"
                className="block text-slate-400 transition hover:text-red-400"
              >
                F-1 FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}

        <div className="mt-20 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-sm leading-7 text-slate-400">
            <span className="font-semibold text-slate-300">
              Disclaimer:
            </span>{" "}
            "Your F-1 Visa Guide" is an independent
            educational and consulting platform and is not
            affiliated with the U.S. Department of State,
            USCIS, or any government agency. The
            information provided is for educational
            purposes only and does not constitute legal
            advice.
          </p>
        </div>

        {/* Copyright */}

        <div className="mt-10 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Your F-1 Visa Guide. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
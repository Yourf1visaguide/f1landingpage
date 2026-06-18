"use client";

import { SearchX } from "lucide-react";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import BlackButton from "@/components/BlackButton";
import RedButton from "@/components/Red-Buttons";
import { useRouter } from "next/navigation";

export default function NotFound() {

  const router = useRouter()
  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center size-24 rounded-full bg-red-100 mb-8">
          <SearchX className="size-12 text-red-700" />
        </div>

        <p className="text-red-700 font-semibold uppercase tracking-[0.25em] mb-3">
          Error 404
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
          Page Not Found
        </h1>

        <p className="text-lg text-zinc-600 mb-10">
          The page you are looking for may have been moved,
          deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          

          <RedButton text="Back To Home" onClick={() => router.push("/")} className="text-lg"  />
          <BlackButton text="Contact Support" onClick={handleWhatsappClick} className="text-lg"  />
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8">
          <p className="text-sm text-zinc-500">
            Need help with your F-1 Visa application?
            Our experts are available to assist you.
          </p>
        </div>
      </div>
    </main>
  );
}
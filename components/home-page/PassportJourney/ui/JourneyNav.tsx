"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navItems, type NavTarget } from "@/data/journey";
import { handleWhatsappClickWithMessage } from "@/function/handleWhatsapp";
import { FONT_BODY } from "./tokens";
import Navbar from "@/components/LandingPage2/Navbar/Navbar";
import { navLinksData } from "@/data/navlinks";

interface JourneyNavProps {
  onGo: (target: NavTarget) => void;
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

/** Top bar of the hero. Links and buttons fade out once the story starts ([data-nav-fade]). */
export default function JourneyNav({ onGo }: JourneyNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (target: NavTarget) => {
    setOpen(false);
    onGo(target);
  };

  return (
    <header className={`absolute inset-x-0 top-0 z-40 ${FONT_BODY}`}>
      <Navbar navLinks={navLinksData} />
    </header>
  );
}
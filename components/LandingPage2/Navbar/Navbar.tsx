"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import NavbarButton from "./NavbarButton";
import { NavLinks } from "@/lib/types";
import { phone } from "@/function/handleWhatsapp";
import SocialIcon from "./SocialIcon";
import MobileMenuDropdown from "./MobileMenuDropdown";

export default function Navbar({ navLinks }: { navLinks: NavLinks[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (isOpen) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
  };
}, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-100/90 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* 1. Logo */}
            <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
              <Image
                src="/images/logo.png"
                width={120}
                height={40}
                className="h-9 sm:h-10 w-auto"
                alt="Your F1 Visa Guide"
                priority
              />
            </Link>

            {/* 2. Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-900 hover:text-red-600 font-medium text-[16px] transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* 3. Right Side Actions */}
            <div className="flex items-center gap-3 sm:gap-4">

              {/* Social Icons */}
              <SocialIcon customClassName="sm:flex hidden" />

              {/* Divider */}
              <div className="h-8 hidden sm:block  w-0.5 bg-zinc-300" />


              {/* Apply Now Button */}
              <NavbarButton />

              <div className="h-8  w-0.5 bg-zinc-400/50 block lg:hidden" />

              {/* Hamburger — mobile only */}
              <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="lg:hidden cursor-pointer flex items-center justify-center w-9 h-9 rounded-md bg-red-700 text-zinc-100 hover:text-white hover:text-red-600 hover:bg-red-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 "
              >
                <span className="relative w-5 h-5 flex items-center justify-center">
                  <Menu
                    className={`absolute w-6 h-6 transition-all duration-300  p-0.5 ${
                      isOpen
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                    strokeWidth={1.75}
                  />
                  <X
                    className={`absolute w-6 h-6 transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                    strokeWidth={1.75}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-zinc-900/40  transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Mobile Drawer ── */}
      <MobileMenuDropdown isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
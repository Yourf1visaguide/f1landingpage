"use client"
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import NavbarButton from "./NavbarButton";
export default function Navbar() {

  
  const navLinks = [
    { name: "Success Stories", href: "#stories" },
    { name: "Process", href: "#process" },
    { name: "Why Netherlands", href: "#whyNetherlands" },
    { name: "Eligibility & Cost", href: "#eligibility" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-100/90 border-b border-zinc-200 shadow-sm z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
        {/* Height reduced from h-20 to h-16 for a sleeker look */}
        <div className="flex items-center justify-between h-16 z-50">
          
          {/* 1. Logo (Left) */}
          <Link href="/" className="flex-shrink-0">
            {/* Adjusted dimensions to fit the shorter navbar height */}
            <Image 
              src="/images/logo.png" 
              width={120} 
              height={40} 
              className="h-10 w-auto" 
              alt="Your F1 Visa Guide"
            />
          </Link>

          {/* 2. Navigation Links (Center - Hides on smaller screens) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Changed to dark text, hovers to brand red
                className="text-zinc-900 hover:text-red-700  font-medium text-[16px] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Right Side Actions (Always Visible) */}
          <div className="flex items-center gap-4">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/91917087775007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                // Changed to dark icon, hovers to brand red
                className="text-zinc-600 hover:text-[#DC2626] transition-colors"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://instagram.com/yourf1visaguide/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-zinc-600 hover:text-[#DC2626] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>

            {/* Vertical Divider (Height reduced to h-6 to match the shorter nav) */}
            <div className="hidden sm:block w-px h-6 bg-zinc-300" />

            {/* Apply Now Button (Padding slightly reduced to fit h-16 perfectly) */}
            <NavbarButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
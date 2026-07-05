import { navLinksData } from "@/data/navlinks"
import React from 'react'
import SocialIcon from "./SocialIcon"
import Link from "next/link"

function MobileMenuDropdown({isOpen, closeMenu}:{isOpen:boolean, closeMenu:() => void}) {
  return (
    <div 
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm  border-b border-zinc-200 rounded-b-lg shadow-xl transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 rotate-0 "
            : "opacity-0 -translate-y-4  -rotate-1 pointer-events-none"
        }`}
      >
        <div className="h-0.5 bg-red-600 " />

        <div className="max-w-7xl mx-auto px-2 py-2">
          <ul className="flex flex-col" role="list">
            {navLinksData.map((link, index) => (
              <li
                key={link.name}
                className="bg-zinc-50/30 border-b pl-4 pr-4 border-zinc-200  rounded-t-md  last:border-0 hover:bg-zinc-50/50 transition-all duration-200 "
                style={{
                  // ✅ All longhand — no shorthand conflict
                  transitionProperty: "opacity, transform",
                  transitionDuration: "300ms",
                  transitionTimingFunction: "ease",
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? "translateX(0)"
                    : "translateX(-8px)",
                }}
              >
                  <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between  py-3.5 text-zinc-700 hover:text-red-700 font-medium text-[15px] transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="text-zinc-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-200 text-lg leading-none">
                    ›
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-b px-0 border-zinc-200 last:border-0 pt-3 pb-1  flex justify-end">
              <SocialIcon customClassName="flex sm:hidden" />
            </li>
          </ul>
        </div>
      </div>
  )
}

export default MobileMenuDropdown
import { phone } from "@/function/handleWhatsapp";
import {  MessageCircle } from "lucide-react";
import Link from "next/link";

function SocialIcon({customClassName}:{customClassName:string}) {
  return (
    <div className={`flex items-center gap-3 ${customClassName} `}>
      <Link
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle
          className="w-5 h-5 text-green-600 hover:text-green-500 transition-all duration-200"
          strokeWidth={1.5}
        />
      </Link>
      <Link
        href="https://www.instagram.com/your_visaguide/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="text-pink-700 hover:text-pink-600 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </Link>
    </div>
  );
}

export default SocialIcon;

import { phone } from "@/function/handleWhatsapp";
import { countries, SITE } from "../journey";

// Final scene of the home page: the plane, the boarding pass and the airmail-letter footer.

export const ticketCopy = {
  label: "Boarding pass",
  brand: "Your F1 Visa Guide",
  status: "Final call",
  heading: "Not sure which country?",
  accent: "Your destination is waiting.",
  fields: [
    { label: "From", value: "Jalandhar" },
    { label: "To", value: "Your dream destination" },
    { label: "Class", value: "1-to-1 counselling" },
  ],
  seat: "01A",
  talk: "Talk to a counsellor",
  directions: "Get directions",
  whatsappMessage: "Hi, I'm not sure which country is right for me. Can a counsellor help?",
};

export const letterCopy = {
  airmail: "Par avion · By air mail",
  from: " Your F1 Visa Guide, Jalandhar",
  to: "You, wherever you dream of going",
  label: "Visit our office",
  heading: "Come say",
  accent: "hello.",
  directions: "Get directions",
  pageTitle: "On this page",
  visasTitle: "Our services",
  followTitle: "Follow",
  rights: "Your F1 Visa Guide. All rights reserved.",
  disclaimer: "Visa decisions are made only by embassies and immigration authorities.",
  backToTop: "Back to top",
};

/** Links to parts of the home page. "journey" targets scroll inside the passport story. */
export const pageLinks = [
  { label: "Destinations", target: { journey: "countries" } },
  { label: "How it works", target: { journey: "steps" } },
  { label: "Student stories", target: { id: "stories" } },
  { label: "About us", target: { id: "about" } },
  { label: "FAQ", target: { id: "faq" } },
] as const;

export const visaLinks = [
  { label: "USA study visa", href: SITE.usa },
  { label: "Netherlands study visa", href: SITE.europe },
  { label: "Dubai visas", href: SITE.dubai },
  { label: "Tourist visas", href: SITE.tourist },
];

export const socialLinks = [
  { label: "Instagram", icon: "instagram", color:"pink", href: "https://www.instagram.com/your_visaguide/" },
  { label: "WhatsApp", icon: "whatsapp", color:"green", href: `https://wa.me/${phone}` },
] as const;

/** Countries shown as postage stamps on the letter (first three study countries). */
export const letterStamps = countries.filter((c) => c.kind === "study").slice(2, 5);
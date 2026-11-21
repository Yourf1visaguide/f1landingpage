import type { FAQType } from "@/lib/types";
import { countries } from "../journey";
import { OFFICE } from "./about";

// Home page FAQ. Every answer here is a promise to students: check each one with the
// team before publishing, and update `checkedOn` whenever the answers are reviewed.
// Uses the same FAQType as the country pages. Keep to paragraphs / list / table here:
// `custom` (JSX) can't be included in the Google-readable FAQ data.

export type HomeFaq = FAQType & {
  /** Stable id for share links (#faq-<id>). Don't change it once published. */
  id: string;
};

const studyCountries = countries.filter((c) => c.kind === "study").map((c) => c.name);

export const faqCopy = {
  label: "05 — Questions",
  heading: "Your questions,",
  accent: "at the counter.",
  intro: "Straight answers from the counsellors who will handle your file.",
  nowServing: "Now answering",
  allQuestions: "Questions answered",
  checkedOn: "Nov 2026",
  copyLink: "Copy link to this answer",
  copied: "Link copied",
  loadMore: "Load more questions",
  askLabel: "Still have a question?",
  askHeading: "Ask our counsellor directly",
  askText: "Send your question on WhatsApp and a counsellor will answer it for your profile, not with a template.",
  askWhatsapp: "Ask on WhatsApp",
  askCall: `Call ${OFFICE.phoneDisplay}`,
  whatsappMessage: "Hi, I read the FAQ on your website and have a question about my visa:",
};

export const homeFaqs: HomeFaq[] = [
  {
    id: "guarantee",
    question: "Do you guarantee visa approval?",
    paragraphs: [
      "No. No consultant or agency can legally guarantee a visa. The decision is made only by the embassy, consulate or immigration authority.",
      "Our job is to help you prepare the strongest, most honest application possible: the right documents, checked carefully, and full preparation for any interview.",
    ],
  },
  {
    id: "countries",
    question: "Which countries do you help with?",
    paragraphs: [`For study visas we work with ${studyCountries.join(", ")}.`],
    list: ["Tourist and visitor visas for family trips, holidays and visiting relatives abroad."],
  },
  {
    id: "fees",
    question: "How much do your services cost?",
    paragraphs: [
      "It depends on the country and the service. You get the full fee in writing before you pay anything, so you know the exact amount up front.",
      "Our fee is only for our consulting and preparation work. Embassy and government fees are separate and are paid directly to the authorities.",
    ],
  },
  {
    id: "hidden-charges",
    question: "Are there any hidden charges?",
    paragraphs: ["No. You get the full fee list in writing before we start, and a receipt for every payment you make with us."],
    list: ["Embassy and government fees are paid directly to the embassy.", "No cash-only payments."],
  },
  {
    id: "refused",
    question: "My visa was refused before. Can you still help?",
    paragraphs: [
      "Yes. A refusal is not the end. We read your refusal letter and previous application, find what went wrong, and help you prepare a stronger file before you apply again.",
      "We will also tell you honestly if waiting or changing your plan would give you a better chance.",
    ],
  },
  {
    id: "timeline",
    question: "How long does the whole process take?",
    paragraphs: [
      "It depends on the country, the intake and how busy the embassy is. Admission, documents and the visa together usually take a few months.",
      "Start at least 4 to 6 months before your intake, so there is time to fix anything that comes up.",
    ],
  },
  {
    id: "english-test",
    question: "Do I need IELTS or PTE?",
    paragraphs: [
      "Most universities ask for an English test such as IELTS, PTE, TOEFL or Duolingo. The score you need depends on the university and the course.",
      "Some universities accept other proof of English. We check the exact requirement for each university on your shortlist.",
    ],
  },
  {
    id: "study-gap",
    question: "I have a study gap. Can I still apply?",
    paragraphs: [
      "Yes. Many students with a gap get admission and a visa. What matters is that the gap is explained clearly and backed by documents, such as work experience letters.",
      "We help you explain your gap honestly in your application.",
    ],
  },
  {
    id: "funds",
    question: "How much money do I need to show?",
    paragraphs: [
      "It depends on the country, the course and its length. Most countries ask you to show your first year's tuition and living costs.",
      "We give you the exact amount and a document checklist for your country before you apply. All funds must be genuine and from sources you can prove.",
    ],
  },
  {
    id: "education-loan",
    question: "Can I study abroad with an education loan?",
    paragraphs: [
      "Yes. Many students fund their studies with an education loan from a bank or a lender.",
      "We explain which documents lenders and embassies usually ask for, so your loan papers match the rest of your application.",
    ],
  },
  {
    id: "documents",
    question: "What do I need to get started?",
    paragraphs: ["To check your profile, keep these ready:"],
    list: [
      "Passport",
      "Mark sheets and certificates (10th, 12th and degree, if any)",
      "English test score, if you have one",
      "Work experience letters, if any",
      "Your budget and preferred countries",
    ],
  },
  {
    id: "work",
    question: "Can I work while studying?",
    paragraphs: [
      "In most of our study countries, students can work part-time during term and full-time in holidays. The exact hours and rules are different for each country.",
      "Plan your studies with your own and your family's funds. Part-time work should be extra, not what you depend on.",
    ],
  },
  {
    id: "tourist",
    question: "Do you help with tourist visas for parents and family?",
    paragraphs: [
      "Yes. We help with tourist and visitor visas for holidays, family trips and visiting children or relatives abroad, from the document checklist to the appointment.",
    ],
  },
  {
    id: "after-visa",
    question: "Do you help after the visa is approved?",
    paragraphs: [
      "Yes. We guide you on what to do before you fly and what to do in your first weeks after landing, so you are not on your own once the visa arrives.",
    ],
  },
  {
    id: "start",
    question: "How do I start?",
    paragraphs: [
      `Message us on WhatsApp, call ${OFFICE.phoneDisplay}, or visit our office in ${OFFICE.city}. A counsellor looks at your profile and tells you honestly which options fit.`,
    ],
  },
];

/** Plain-text answer for search engines (FAQPage structured data). */
export function faqPlainText(faq: FAQType): string {
  return [...(faq.paragraphs ?? []), ...(faq.list ?? []).map((item) => `• ${item}`)].join(" ");
}
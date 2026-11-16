import { faqPlainText, homeFaqs } from "@/data/home-page/faq";
import FaqClient from "./FaqClient";

/** FAQ with FAQPage structured data. "<" is escaped so answer text can't break out of the script tag. */
export default function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faqPlainText(faq) },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <FaqClient />
    </>
  );
}
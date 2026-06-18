import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your F1 Visa Guide | USA Study Visa Consultants in Jalandhar",
  description:
    "Get expert guidance for your USA Study Visa (F-1 Visa). University admissions, I-20 assistance, DS-160 filing, visa interview preparation, and complete support from experienced consultants in Jalandhar.",

  keywords: [
    "USA Study Visa",
    "F1 Visa",
    "F1 Visa Guide",
    "USA Visa Consultant Jalandhar",
    "Study in USA",
    "USA Student Visa",
    "F1 Visa Interview Preparation",
    "DS-160 Assistance",
    "I-20 Application",
    "Study Abroad Consultant Punjab",
    "Jalandhar Visa Consultant",
    "USA Education Consultant",
    "US University Admission",
    "SEVIS Fee Guidance",
    "Study Visa Punjab",
  ],

  authors: [{ name: "Your F1 Visa Guide" }],

  openGraph: {
    title: "Your F1 Visa Guide | USA Study Visa Experts",
    description:
      "Apply for your USA Student Visa with confidence. University admissions, visa filing, interview preparation, and complete F-1 visa guidance.",
    type: "website",
    locale: "en_US",
    siteName: "Your F1 Visa Guide",
  },

  twitter: {
    card: "summary_large_image",
    title: "Your F1 Visa Guide | USA Study Visa Experts",
    description:
      "Complete F-1 Visa guidance for students planning to study in the United States.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Education",
  metadataBase: new URL("https://yourf1visaguide.com"),

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  slug: string;
  image: string;

  noIndex?: boolean;
}

const SITE_NAME = "Your F1 Visa Guide";

const SITE_URL = "https://yourf1visaguide.com";

const COMPANY_NAME = "Your F1 Visa Guide";

export function createMetadata({
  title,
  description,
  keywords,
  slug,
  image,
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${SITE_URL}/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    keywords,

    applicationName: SITE_NAME,

    authors: [
      {
        name: COMPANY_NAME,
      },
    ],

    creator: COMPANY_NAME,

    publisher: COMPANY_NAME,

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",

      locale: "en_IN",

      url,

      siteName: SITE_NAME,

      title,

      description,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },

    category: "Education",

    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}
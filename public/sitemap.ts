import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourf1.pages.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
} 
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ebbing-law.de",
      lastModified: new Date(),
    },
    {
      url: "https://ebbing-law.de/impressum",
      lastModified: new Date(),
    },
    {
      url: "https://ebbing-law.de/datenschutz",
      lastModified: new Date(),
    },
  ];
}
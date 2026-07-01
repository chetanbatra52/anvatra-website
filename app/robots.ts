import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://anvatra.com/sitemap.xml",

    host: "https://anvatra.com",
  };
}
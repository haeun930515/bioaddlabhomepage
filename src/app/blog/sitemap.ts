import type { MetadataRoute } from "next";

import { absoluteUrl, blogPostUrl, getPublishedArticles } from "@/bioadd-blog/kit";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles();
  return [
    { url: absoluteUrl("/blog"), lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    ...articles.map((article) => ({
      url: blogPostUrl(article.slug),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

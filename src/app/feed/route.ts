import { type NextRequest } from 'next/server';

const siteUrl = 'https://www.bioaddlab.com';
const siteTitle = '바이오애드랩';
const siteDescription = 'AI 기반 헬스케어 솔루션을 제공하는 바이오애드랩의 최신 소식입니다.';

const posts = [
  {
    id: 1,
    title: '바이오애드랩, 서울 수도권 1200개 병원 설치 확정',
    description: '바이오애드랩의 AI 헬스케어 솔루션이 서울 수도권 1200개 병원에 설치됩니다.',
    date: '2025-05-15',
    slug: 'hospital-installation-announcement',
  },
];

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${siteTitle}</title>
        <link>${siteUrl}</link>
        <description>${siteDescription}</description>
        <language>ko-kr</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${posts
          .map(
            (post) => `
          <item>
            <title>${post.title}</title>
            <link>${siteUrl}/blog/${post.slug}</link>
            <description>${post.description}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
}

export const dynamic = 'force-static';

export const revalidate = 86400;

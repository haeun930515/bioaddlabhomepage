import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { FAQ_AS_OF, faqJsonLd, faqPath, getFaq, getFaqs, getRelatedFaqs } from '@/lib/faq';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getFaqs().map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getFaq(slug);
  if (!item) return {};
  return {
    title: item.question,
    description: item.answer,
    alternates: { canonical: faqPath(item) },
    openGraph: {
      title: `${item.question} | 바이오애드랩`,
      description: item.answer,
      url: faqPath(item),
      siteName: '바이오애드랩',
      images: [{ url: '/images/opengraph.png', width: 1200, height: 630, alt: '바이오애드랩' }],
      locale: 'ko_KR',
      type: 'article',
    },
  };
}

export default async function FaqPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getFaq(slug);
  if (!item) notFound();
  const related = getRelatedFaqs(item);

  return (
    <main className="min-h-screen px-4 pt-28 pb-24 text-white bg-black break-keep md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(item)) }} />
      <article className="w-full max-w-3xl mx-auto">
        <nav aria-label="위치" className="text-sm text-white/50">
          <Link href="/faq" className="hover:text-green-400">자주 묻는 질문</Link>
          <span className="mx-2">/</span>
          <Link href={`/faq#${encodeURIComponent(item.category)}`} className="hover:text-green-400">{item.category}</Link>
        </nav>

        <h1 className="mt-4 text-2xl font-bold leading-snug md:text-4xl">{item.question}</h1>
        <p className="mt-6 text-lg leading-relaxed md:text-xl text-white/90">{item.answer}</p>

        {item.points && (
          <ul className="mt-8 space-y-2 list-disc list-inside text-white/80">
            {item.points.map(p => <li key={p}>{p}</li>)}
          </ul>
        )}

        {item.table && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <caption className="mb-2 text-left text-white/50">{item.table.caption}</caption>
              <thead>
                <tr>
                  {item.table.head.map(h => <th key={h} className="py-2 pr-4 font-semibold text-green-400 border-b border-white/30">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {item.table.rows.map(row => (
                  <tr key={row.join('|')}>
                    {row.map((cell, i) => <td key={i} className="py-2 pr-4 align-top border-b border-white/10">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-10 text-xs text-white/50">
          {FAQ_AS_OF} 기준 · 출처:{' '}
          {item.sources.map((s, i) => (
            <span key={s.path}>
              {i > 0 && ', '}
              <Link href={s.path} className="underline hover:text-green-400">{s.title}</Link>
            </span>
          ))}
        </p>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="pb-3 text-lg font-bold text-green-400 border-b border-white/20">함께 보면 좋은 질문</h2>
            <ul className="divide-y divide-white/10">
              {related.map(r => (
                <li key={r.slug}>
                  <Link href={faqPath(r)} className="block py-4 hover:text-green-400">{r.question}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-wrap gap-6 mt-16 text-sm font-bold">
          <Link href="/faq" className="hover:text-green-400">← 전체 질문 보기</Link>
          <Link href="/contact" className="text-green-400 hover:underline">문의하기 →</Link>
        </div>
      </article>
    </main>
  );
}

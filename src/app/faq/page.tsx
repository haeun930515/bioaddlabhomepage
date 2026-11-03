import type { Metadata } from 'next';
import Link from 'next/link';

import { FAQ_AS_OF, faqIndexJsonLd, faqPath, getFaqCategories } from '@/lib/faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description:
    '바이오애드랩 회사 소개, AI 스마트보드, 병원 대기실 광고 집행, 병원 마케팅, 의료기기 사업에 대해 자주 묻는 질문을 질문 하나에 한 페이지로 답합니다.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: '자주 묻는 질문 | 바이오애드랩',
    description: '바이오애드랩과 AI 스마트보드에 대해 자주 묻는 질문',
    url: '/faq',
    siteName: '바이오애드랩',
    images: [{ url: '/images/opengraph.png', width: 1200, height: 630, alt: '바이오애드랩' }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function FaqIndexPage() {
  const groups = getFaqCategories();
  return (
    <main className="min-h-screen px-4 pt-28 pb-24 text-white bg-black break-keep md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqIndexJsonLd()) }} />
      <div className="w-full max-w-4xl mx-auto">
        <p className="text-sm font-bold text-green-400 font-geist">FAQ.</p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">바이오애드랩 자주 묻는 질문</h1>
        <p className="mt-5 leading-relaxed text-white/70 md:text-lg">
          바이오애드랩은 서울대병원·서울아산병원 출신 의사와 개발자들이 공동 창업한 AI 헬스케어 회사입니다. 회사와 AI 스마트보드,
          광고 집행, 병원 마케팅에 대해 자주 받는 질문을 모았습니다. ({FAQ_AS_OF} 기준)
        </p>

        <nav aria-label="분류" className="flex flex-wrap gap-2 mt-8">
          {groups.map(group => (
            <a
              key={group.name}
              href={`#${encodeURIComponent(group.name)}`}
              className="px-3 py-1 text-sm border rounded-full border-white/30 hover:border-green-400 hover:text-green-400"
            >
              {group.name}
            </a>
          ))}
        </nav>

        {groups.map(group => (
          <section key={group.name} id={encodeURIComponent(group.name)} className="mt-16 scroll-mt-24">
            <h2 className="pb-3 text-xl font-bold text-green-400 border-b md:text-2xl border-white/20">{group.name}</h2>
            <ul className="divide-y divide-white/10">
              {group.items.map(item => (
                <li key={item.slug}>
                  <Link href={faqPath(item)} className="block py-5 group">
                    <h3 className="text-lg font-semibold group-hover:text-green-400">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 line-clamp-2">{item.answer}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="p-6 mt-20 border rounded-lg border-white/20">
          <p className="font-semibold">찾는 답이 없나요?</p>
          <p className="mt-2 text-sm text-white/70">
            광고 집행, 스마트보드 설치, 병원 마케팅 문의는 문의 페이지나 02-2038-0088로 남겨 주세요.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-sm font-bold text-green-400 hover:underline">
            문의하기 →
          </Link>
        </div>
      </div>
    </main>
  );
}

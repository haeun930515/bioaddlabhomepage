import data from '@/content/faq.json';

export const SITE_URL = 'https://www.bioaddlab.com';
export const ORG_ID = `${SITE_URL}/#organization`;

export type FaqSource = { title: string; path: string };
export type FaqItem = {
  slug: string;
  category: string;
  question: string;
  answer: string;
  points?: string[];
  table?: { caption: string; head: string[]; rows: string[][] };
  related?: string[];
  sources: FaqSource[];
  // 사실 확인 전인 문답. 페이지·사이트맵·llms.txt 어디에도 나가지 않는다.
  draft?: boolean;
  // 목록·관련 질문에서만 빠진다. 상세 페이지·사이트맵·llms.txt에는 그대로 남아 검색에는 잡힌다.
  unlisted?: boolean;
};

export const FAQ_AS_OF = data.asOf;
export const FAQ_MODIFIED = data.dateModified;

const items = (data.items as FaqItem[]).filter(item => !item.draft);

const slugs = items.map(item => item.slug);
const dup = slugs.find((s, i) => slugs.indexOf(s) !== i);
if (dup) throw new Error(`faq.json: slug가 겹칩니다 (${dup})`);
for (const item of items) {
  if (!item.sources.length) throw new Error(`faq.json: ${item.slug} 에 출처가 없습니다`);
  for (const r of item.related ?? []) {
    if (!slugs.includes(r)) throw new Error(`faq.json: ${item.slug} 의 related "${r}" 가 없습니다`);
  }
}

export const getFaqs = () => items;
export const getFaq = (slug: string) => items.find(item => item.slug === slug);
export const faqPath = (item: FaqItem) => `/faq/${item.slug}`;
export const faqUrl = (item: FaqItem) => `${SITE_URL}${faqPath(item)}`;

export function getFaqCategories({ includeUnlisted = false } = {}) {
  const pool = includeUnlisted ? items : items.filter(item => !item.unlisted);
  return data.categories
    .map(name => ({ name, items: pool.filter(item => item.category === name) }))
    .filter(group => group.items.length > 0);
}

export function getRelatedFaqs(item: FaqItem, limit = 4) {
  const picked = (item.related ?? []).map(getFaq).filter((f): f is FaqItem => Boolean(f) && !f!.unlisted);
  const sameCategory = items.filter(f => !f.unlisted && f.category === item.category && f.slug !== item.slug && !picked.includes(f));
  return [...picked, ...sameCategory].slice(0, limit);
}

export function faqJsonLd(item: FaqItem) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${faqUrl(item)}#faq`,
        url: faqUrl(item),
        inLanguage: 'ko-KR',
        dateModified: FAQ_MODIFIED,
        publisher: { '@id': ORG_ID },
        about: { '@id': ORG_ID },
        mainEntity: [
          {
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '바이오애드랩', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: `${SITE_URL}/faq` },
          { '@type': 'ListItem', position: 3, name: item.question, item: faqUrl(item) },
        ],
      },
    ],
  };
}

export function faqIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/faq#page`,
    url: `${SITE_URL}/faq`,
    name: '바이오애드랩 자주 묻는 질문',
    inLanguage: 'ko-KR',
    dateModified: FAQ_MODIFIED,
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.filter(item => !item.unlisted).map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.question,
        url: faqUrl(item),
      })),
    },
  };
}

// 문답 하나를 마크다운으로. llms-full.txt 에 쓴다.
export function faqMarkdown(item: FaqItem) {
  const lines = [`## ${item.question}`, '', item.answer, ''];
  if (item.points?.length) lines.push(...item.points.map(p => `- ${p}`), '');
  if (item.table) {
    lines.push(`| ${item.table.head.join(' | ')} |`, `| ${item.table.head.map(() => '---').join(' | ')} |`);
    lines.push(...item.table.rows.map(r => `| ${r.join(' | ')} |`), '');
  }
  lines.push(`출처: ${item.sources.map(s => `[${s.title}](${SITE_URL}${s.path})`).join(', ')} · 주소: ${faqUrl(item)}`, '');
  return lines.join('\n');
}

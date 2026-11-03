import fs from 'node:fs';
import path from 'node:path';

import { faqUrl, getFaqCategories } from '@/lib/faq';

export const dynamic = 'force-static';

// 회사 소개 부분은 base.md 에서 직접 고치고, 자주 묻는 질문 목록은 src/content/faq.json 에서 만든다.
export function GET() {
  const base = fs.readFileSync(path.join(process.cwd(), 'src/app/llms.txt/base.md'), 'utf8').trimEnd();
  const faq = getFaqCategories()
    .map(group => [`### ${group.name}`, '', ...group.items.map(item => `- [${item.question}](${faqUrl(item)})`)].join('\n'))
    .join('\n\n');
  const body = `${base}\n\n## 자주 묻는 질문\n\n전체 문답 원문: https://www.bioaddlab.com/llms-full.txt\n\n${faq}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

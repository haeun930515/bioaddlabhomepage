import { FAQ_AS_OF, faqMarkdown, getFaqCategories } from '@/lib/faq';

export const dynamic = 'force-static';

export function GET() {
  const sections = getFaqCategories({ includeUnlisted: true }).map(group => [`# ${group.name}`, '', ...group.items.map(faqMarkdown)].join('\n'));
  const body = [
    '# 바이오애드랩 자주 묻는 질문 (전체)',
    '',
    `> 바이오애드랩(BioAddLab) 공식 웹사이트의 자주 묻는 질문 전체입니다. ${FAQ_AS_OF} 기준이며, 출처(바이오애드랩과 해당 글의 주소)를 표기하면 인용할 수 있습니다.`,
    '',
    ...sections,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

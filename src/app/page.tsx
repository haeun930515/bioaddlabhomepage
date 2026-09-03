import type { Metadata } from 'next';

import HomeClient from './components/HomeClient';

const siteUrl = 'https://www.bioaddlab.com';

export const metadata: Metadata = {
  title: {
    absolute: 'AI 스마트보드·메디컬 마케팅 | 바이오애드랩',
  },
  description:
    '바이오애드랩은 전국 1,200개 이상 병·의원 AI 스마트보드 네트워크와 월 150만 명의 의료 소비자 데이터를 기반으로 메디컬 OOH 광고 성과 측정과 병원 SEO·AEO 마케팅을 제공합니다.',
  keywords: [
    '바이오애드랩',
    'AI 스마트보드',
    '병원 스마트보드',
    '메디컬 마케팅',
    '병원 마케팅',
    '병원 옥외광고',
    '메디컬 OOH',
    '병원 SEO',
    '병원 AEO',
    '의료 소비자 데이터',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI 스마트보드·메디컬 마케팅 | 바이오애드랩',
    description:
      '전국 병·의원 AI 스마트보드와 의료 소비자 행동 데이터를 연결해 메디컬 광고와 병원 디지털 유입 성과를 만듭니다.',
    url: '/',
    siteName: '바이오애드랩',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1200,
        height: 630,
        alt: '바이오애드랩 AI 스마트보드와 메디컬 마케팅',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 스마트보드·메디컬 마케팅 | 바이오애드랩',
    description:
      '전국 병·의원 AI 스마트보드와 의료 소비자 행동 데이터를 기반으로 성과를 만드는 바이오애드랩',
    images: ['/images/opengraph.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: '바이오애드랩',
  alternateName: 'BioAddLab',
  url: siteUrl,
  logo: `${siteUrl}/images/bioaddlablogo.png`,
  description:
    '바이오애드랩은 전국 병·의원 AI 스마트보드 네트워크와 의료 소비자 행동 데이터를 기반으로 메디컬 OOH 광고 성과 측정과 병원 SEO·AEO 마케팅을 제공하는 기업입니다.',
  email: 'admin@bioaddlab.com',
  telephone: '+82-2-2038-0088',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '압구정로30길 63 401호',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+82-2-2038-0088',
    email: 'admin@bioaddlab.com',
    availableLanguage: ['Korean'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: '바이오애드랩',
  alternateName: 'BioAddLab',
  inLanguage: 'ko-KR',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <HomeClient />
    </>
  );
}
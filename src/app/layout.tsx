import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import GoogleAnalytics from "./googleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bioaddlab.com'),
  title: {
    default: '바이오애드랩 | AI 스마트보드·메디컬 마케팅',
    template: '%s | 바이오애드랩',
  },
  description:
    '바이오애드랩은 병·의원 AI 스마트보드 네트워크와 의료 소비자 데이터를 기반으로 메디컬 OOH 광고와 병원 디지털 마케팅 솔루션을 제공합니다.',
  applicationName: '바이오애드랩',
  category: '헬스케어·메디컬 마케팅',
  openGraph: {
    title: '바이오애드랩 | AI 스마트보드·메디컬 마케팅',
    description:
      '병·의원 AI 스마트보드 네트워크와 의료 소비자 데이터를 연결하는 메디컬 마케팅 기업',
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
    title: '바이오애드랩 | AI 스마트보드·메디컬 마케팅',
    description: '병·의원 AI 스마트보드와 데이터 기반 메디컬 마케팅',
    images: ['/images/opengraph.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="md:snap-y md:snap-mandatory scroll-pt-[62px]">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="naver-site-verification" content="edad3c1d6fa6d44fbeba0ee005ebd03257e1e975" />
        <meta name="google-site-verification" content="zrhra_u7AExEETJX6B1BWMWRMt-2r4gAVEzdXdbFsPs" />
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

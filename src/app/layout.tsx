import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import GoogleAnalytics from "./googleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://bioaddlab.com'),
  title: '바이오애드랩 - 차세대 헬스케어 솔루션',
  description: '바이오애드랩은 AI 기반의 혁신적인 헬스케어 솔루션을 제공합니다. 혈압, 맥박, 산소포화도 측정 AI 알고리즘을 통해 차세대 헬스케어를 선도합니다.',
  keywords: ['바이오애드랩', 'AI', '헬스케어', '스마트보드', '병원', '브랜드', 'AI 헬스케어', '의료기기', '바이오테크', '디지털 헬스케어', 'AI 알고리즘'],
  openGraph: {
    title: '바이오애드랩 - 차세대 헬스케어 솔루션',
    description: 'AI 기반의 혁신적인 헬스케어 솔루션을 제공하는 바이오애드랩입니다.',
    url: '/',
    siteName: '바이오애드랩',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1200,
        height: 630,
        alt: '바이오애드랩 OG 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '바이오애드랩 - 차세대 헬스케어 솔루션',
    description: 'AI 기반의 혁신적인 헬스케어 솔루션',
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
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/@vercel/geist-mono/dist/fonts/woff2/GeistMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/@vercel/geist-mono/dist/fonts/woff2/GeistMono-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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

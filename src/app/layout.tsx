import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: '바이오애드랩 | Bioaddlab',
  description: 'AI 기반 헬스케어 스마트보드, 병원·브랜드·환자를 연결하는 바이오애드랩 공식 홈페이지',
  keywords: ['바이오애드랩', 'AI', '헬스케어', '스마트보드', '병원', '브랜드'],
  openGraph: {
    title: '바이오애드랩 | Bioaddlab',
    description: 'AI 기반 헬스케어 스마트보드, 병원·브랜드·환자를 연결하는 바이오애드랩 공식 홈페이지',
    url: 'https://bioaddlab.com',
    siteName: '바이오애드랩',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '바이오애드랩 OG 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

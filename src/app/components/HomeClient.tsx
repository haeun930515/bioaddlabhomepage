'use client';

import { useRef } from 'react';

import MainSwiper from './main-swiper';
import MainIntro from './mainintro';
import MainNumber from './mainnumber';
import Timeline from './timeline';
import VideoSection from './VideoSection';

export default function HomeClient() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="w-full overflow-x-hidden bg-black">
      <h1 className="sr-only">
        바이오애드랩 AI 스마트보드와 데이터 기반 메디컬 마케팅
      </h1>
      <MainSwiper onScrollDown={handleScrollDown} />
      <div ref={nextSectionRef} className="flex flex-col">
        <div className="order-2 md:order-1">
          <MainIntro />
        </div>
        <div className="order-1 md:order-2">
          <MainNumber />
        </div>
      </div>
      <Timeline />
      <VideoSection />
    </main>
  );
}

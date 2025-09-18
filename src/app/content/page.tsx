'use client';

import { useRef, useState, useEffect } from 'react';
import CoverflowSlider from '../components/contentSwiper';
import VideoSection from '../components/VideoSection';
import StickyEyeCatch from '../components/stickyeyecatch';
import SubSwiper from '../components/sub-swiper2';

export default function CustomSlider() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = stickyWrapperRef.current;
      if (!wrapper) return;

      const { top, height } = wrapper.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // 스크롤 진행률 계산:
      // wrapper 상단이 화면 상단에 닿았을 때(top <= 0)부터 계산 시작
      // wrapper 하단이 화면 하단에 닿을 때까지(top > -scrollableHeight) 진행
      let progress = 0;
      if (top <= 0 && top > -scrollableHeight) {
        progress = Math.abs(top) / scrollableHeight;
      } else if (top <= -scrollableHeight) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 전체 페이지는 일반적인 flex-col 구조를 가집니다.
    <div className="flex flex-col items-center w-full bg-black md:min-w-[1440px] relative">

      <SubSwiper/>
      
      {/* 1. 커버플로우 슬라이더 섹션 */}
      <div className="pt-[52px]">
        <CoverflowSlider />
      </div>
      

      {/* 3. 스티키 아이캐치 섹션 */}
      {/* 이 div의 높이가 스크롤 애니메이션의 '길이'가 됩니다. 200vh = 2배 화면 높이만큼 스크롤. */}
      <div ref={stickyWrapperRef} className="relative w-full h-[300vh] md:block hidden">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <StickyEyeCatch progress={scrollProgress} />
        </div>
      </div>

      <div className='block md:hidden'>
        <StickyEyeCatch progress={scrollProgress}/>
      </div>

      {/* 2. 비디오 섹션 */}
      <VideoSection />
    </div>
  );
}
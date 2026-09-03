'use client';

import { useRef, useState, useEffect } from 'react';
import DesktopContentSwiper from '../components/contentSwiper';
import MobileContentSwiper from '../components/MobileContentSwiper';
import VideoSection from '../components/VideoSection';
import StickyEyeCatch from '../components/stickyeyecatch';
import StickyEyeCatchMobile from '../components/stickyeyecatchmobile';
import SubSwiper from '../components/sub-swiper2';

export default function CustomSlider() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = stickyWrapperRef.current;
      if (!wrapper) return;

      const { top, height } = wrapper.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

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
    <div className="flex flex-col items-center w-full bg-black md:min-w-[1440px] relative md:overflow-x-visible overflow-x-hidden">
      <h1 className="sr-only">바이오애드랩 콘텐츠 기술과 포트폴리오</h1>

      <SubSwiper/>
      
      <div className="pt-[52px]">
        {isMobile === null ? null : isMobile ? <MobileContentSwiper /> : <DesktopContentSwiper />}
      </div>
      
      <div ref={stickyWrapperRef} className="relative w-full h-[350vh] md:block hidden">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <StickyEyeCatch progress={scrollProgress} />
        </div>
      </div>

      <div className='block md:hidden'>
        <StickyEyeCatchMobile/>
      </div>

      <VideoSection />
    </div>
  );
}
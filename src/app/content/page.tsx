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
    <div className="flex flex-col items-center w-full bg-black md:min-w-[1440px] relative">

      <SubSwiper/>
      
      <div className="pt-[52px]">
        <CoverflowSlider />
      </div>
      
      <div ref={stickyWrapperRef} className="relative w-full h-[300vh] md:block hidden">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <StickyEyeCatch progress={scrollProgress} />
        </div>
      </div>

      <div className='block md:hidden'>
        <StickyEyeCatch progress={scrollProgress}/>
      </div>

      <VideoSection />
    </div>
  );
}
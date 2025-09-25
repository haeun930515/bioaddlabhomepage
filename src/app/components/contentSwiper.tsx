'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const contentItems = [
    { brand: '타이레놀', file: 'content_tyrenol.mp4' },
    { brand: '올리브영', file: 'content_olivey.mp4'},
    { brand: '티퍼런스', file: 'content_teaference.mp4'},
    { brand: '바이오더마', file: 'content_biotherma.mp4'},
    { brand: '세라젬', file: 'content_cerazem.mp4' },
    { brand: '닥터그루트', file: 'content_drgroot.mp4' },
    { brand: '밀세라', file: 'content_milcera.mp4' },
    { brand: '플랜트제로', file: 'content_plantzero.mp4' },
    { brand: '프라엘', file: 'content_prel.mp4' },
    { brand: 'VT코스메틱', file: 'content_vtcosmetic.mp4' },
    { brand: '울트라콜', file: 'content_ultracol.mp4'},
    { brand: '라인프렌즈', file: 'content_linefriends.mp4'},
    { brand: '덴티미', file: 'content_dentime.mp4'},
    { brand: 'BLACK FORET', file: 'content_blackforet.mp4' },
    { brand: '로게인폼', file: 'content_rogaine.mp4' },
    { brand: '라인프렌즈', file: 'content_linefriends2.mp4'},
    { brand: '르무통', file: 'content_rmutong.mp4'},
    { brand: '링티', file: 'content_lingt.mp4'},
];


const useBreakpoint = (breakpoint: number) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
};


export default function CoverflowSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useBreakpoint(768);
  
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    const videos = swiper.el.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeVideo = activeSlide.querySelector('video');
    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }
  };

  const desktopOptions = {
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  const mobileOptions = {
    coverflowEffect: {
      rotate: 30,     
      stretch: -10,    
      depth: 80,       
      modifier: 1,
      slideShadows: true,
    },
  };
  
  if (isMobile === null) {
    return null;
  }

  const swiperOptions = isMobile ? mobileOptions : desktopOptions;

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white md:bg-black">
      <div className='py-12 text-2xl text-black md:text-white md:text-3xl font-geist'>
        BIOADDLAB PORTFOLIO.
      </div>

      <div className="relative w-full pb-16">
        <div
          className="absolute inset-0 bg-center bg-cover -z-10 h-[1000px] w-full"
          style={{ backgroundImage: "url('/images/content/contentbg.png')" }}
        />
        <div className="relative w-full max-w-5xl mx-auto">
          <Swiper
            effect={'coverflow'} 
            {...swiperOptions}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSlideChange={handleSlideChange}
            // ✅ `onInit`으로 변경하고, 버튼 ref를 할당한 후 `update`를 호출합니다.
            onInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              // 이 명령어가 Swiper가 버튼을 다시 인식하고 클릭 이벤트를 연결하도록 합니다.
              swiper.navigation.update();
            }}
            onSwiper={(swiper: SwiperType) => {
               handleSlideChange(swiper);
            }}
            className="w-full max-w-4xl h-[480px]"
          >
            {contentItems.map((item, index) => (
              <SwiperSlide 
                key={index} 
                className={isMobile ? "!w-[75%]" : "!w-[320px]"}
              >
                <video
                  src={`/videos/${item.file}`}
                  muted
                  playsInline
                  className="object-cover w-full h-full rounded-lg aspect-[11/16]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-[-60px] z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center transition hover:bg-white/20 disabled:opacity-50 max-md:hidden"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-[-60px] z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center transition hover:bg-white/20 disabled:opacity-50 max-md:hidden"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="z-10 mt-8 text-lg font-medium text-center md:text-white text-[#ABABAB] font-suit">
          Brand: {contentItems[activeIndex].brand}
        </div>
      </div>
    </div>
  );
}
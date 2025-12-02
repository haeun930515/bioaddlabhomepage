'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const contentItems = [
    { brand: '타이레놀', file: 'content_tyrenol.mp4' },
    { brand: '올리브영', file: 'content_olivey2.mp4'},
    { brand: '올리브영', file: 'content_olivey.mp4'},
    { brand: '링티', file: 'content_lingt.mp4'},
    { brand: '세라젬', file: 'content_cerazem.mp4' },
    { brand: '닥터그루트', file: 'content_drgroot.mp4' },
    { brand: '밀세라', file: 'content_milcera.mp4' },
    { brand: '바이오더마', file: 'content_biotherma.mp4'},
    { brand: '티퍼런스', file: 'content_teaference.mp4'},
    { brand: '플랜트제로', file: 'content_plantzero.mp4' },
    { brand: '프라엘', file: 'content_prel.mp4' },
    { brand: 'VT코스메틱', file: 'content_vtcosmetic.mp4' },
    { brand: '울트라콜', file: 'content_ultracol.mp4'},
    { brand: '라인프렌즈', file: 'content_linefriends.mp4'},
    { brand: '덴티미', file: 'content_dentime.mp4'},
    { brand: 'BLACK FORET', file: 'content_blackforet.mp4' },
    { brand: '로게인폼', file: 'content_rogaine.mp4' },
    { brand: '라인프렌즈', file: 'content_linefriends2.mp4'},
    { brand: '셀트리온', file: 'content_celltrion.mp4'},
    { brand: '르무통', file: 'content_rmutong.mp4'},
    { brand: '세포랩', file: 'content_cepolab.mp4'},
    { brand: '에버콜라겐', file:'content_evercollagen.mp4'},
];

export default function DesktopContentSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  const swiperOptions = {
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    modules: [EffectCoverflow, Navigation, Autoplay],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black">
      {/* 제목 */}
      <div className="mt-8 mb-8 text-[24px] font-['Noto_Sans'] text-white">
        BIOADDLAB PORTFOLIO.
      </div>

      <div className="relative w-full pb-16">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover -z-10"
          style={{ backgroundImage: "url('/images/content/contentbg.png')" }}
        />
        
        {/* 스와이퍼 컨테이너 */}
        <div className="relative flex items-center w-full h-full max-w-5xl mx-auto">
          <Swiper
            effect={'coverflow'} 
            {...swiperOptions}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            onSlideChange={handleSlideChange}
            onInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
              }
            }}
            onSwiper={(swiper: SwiperType) => {
               handleSlideChange(swiper);
            }}
            className="w-full max-w-4xl h-[480px]"
          >
            {contentItems.map((item, index) => (
              <SwiperSlide 
                key={index} 
                className="!w-[320px]"
              >
                <video
                  src={`/videos/${item.file}`}
                  muted
                  playsInline
                  controls={false}
                  className="object-cover w-full h-full rounded-lg aspect-[11/16]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 네비게이션 버튼 */}
          <button
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-[-60px] z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center transition hover:bg-white/20 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-[-60px] z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center transition hover:bg-white/20 disabled:opacity-50"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* 브랜드명 표시 */}
        <div className="z-10 mt-6 text-lg font-medium text-center text-white font-suit">
          Brand: {contentItems[activeIndex].brand}
        </div>
      </div>
    </div>
  );
}
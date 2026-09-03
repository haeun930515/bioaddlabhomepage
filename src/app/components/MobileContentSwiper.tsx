'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const contentItems = [
    { brand: '강남언니', file: 'content_gnun.mp4'},
    { brand: '울쎄라피 프라임', file: 'content_ulthera.mp4'},
    { brand: '아정당', file: 'content_ajd.mp4'},
    { brand: '올리브영', file: 'content_olivesale.mp4'},
    { brand: '올리브영', file: 'content_olive3.mp4'},
    { brand: '올리브영', file: 'content_olivey2.mp4'},
    { brand: '올리브영', file: 'content_olivey.mp4'},
    { brand: '링티', file: 'content_lingt.mp4'},
    { brand: '세라젬', file: 'content_cerazem.mp4' },
    { brand: '닥터그루트', file: 'content_drgroot.mp4' },
    { brand: '밀세라', file: 'content_milcera.mp4' },
    { brand: '올리브영', file: 'content_olivemay.mp4'},
    { brand: '올리브영', file: 'content_olivemay2.mp4'},
    { brand: '삼쩜삼', file: 'content_samjum.mp4'},
    { brand: '쥬비스', file: 'content_juvis.mp4'},
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
    { brand: 'LBB', file: 'content_lbb.mp4'},
    { brand: '에버콜라겐', file:'content_evercollagen.mp4'},
    { brand: '타이레놀', file: 'content_tyrenol.mp4' },
];

export default function MobileContentSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      rotate: 25,     
      stretch: -15,    
      depth: 60,       
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    modules: [EffectCoverflow, Autoplay, Pagination],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black">
      {/* 제목 */}
      <h2 className="mt-6 mb-6 text-[18px] font-['Noto_Sans'] font-extrabold bg-gradient-to-r from-[#6AE266] to-[#0090EF] bg-clip-text text-transparent px-4">
        BIOADDLAB PORTFOLIO.
      </h2>

      <div className="relative w-full pb-16">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover -z-10"
          style={{ backgroundImage: "url('/images/content/contentbg.png')" }}
        />
        
        {/* 스와이퍼 컨테이너 */}
        <div className="relative flex items-center w-full h-full px-4">
          <Swiper
            effect={'coverflow'} 
            {...swiperOptions}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper: SwiperType) => {
               handleSlideChange(swiper);
            }}
            className="w-full"
          >
            {contentItems.map((item, index) => (
              <SwiperSlide 
                key={index} 
                className="!w-[75%] !h-[100%]"
              >
                <video
                  src={`/videos/${item.file}`}
                  muted
                  playsInline
                  className="object-cover w-full h-full rounded-lg aspect-[9/13]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 브랜드명 표시 */}
        <div className="z-10 mt-6 text-center font-suit text-sm text-[#ABABAB] px-4">
          Brand: {contentItems[activeIndex].brand}
        </div>
      </div>
    </div>
  );
}
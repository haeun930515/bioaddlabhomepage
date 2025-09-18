'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';


export default function SubSwiper() {
  return (
    <div className='w-full'>
      {/* ======================================================================= */}
      {/* 데스크톱 버전 (Flexbox로 수정) */}
      {/* ======================================================================= */}
      <div className="relative hidden w-full overflow-hidden mt-14 bg-white md:block rounded-bl-[34px] rounded-br-[34px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-auto min-h-[651px] bg-transparent"
        >
          <SwiperSlide className="relative w-full aspect-[16/7]">
            {/* 배경 이미지 및 그라데이션 */}
            <div className="absolute inset-0 w-full h-full">
              <video
                src="/videos/components/content1.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>

            {/* ▼▼▼ [수정] 콘텐츠를 Flexbox로 중앙 정렬 ▼▼▼ */}
            <div className="relative z-10 flex items-center justify-center w-full h-full min-h-[651px]">
              {/* 텍스트와 SVG를 담는 컨테이너 */}
                <div className="relative p-12 text-center text-white">
                {/* 텍스트 그룹 */}
                <div className="flex flex-col items-center">

                    {/* ▼▼▼ 1. h1에 relative와 padding을 추가해 기준점으로 만듭니다. ▼▼▼ */}
                    <h1 className="relative inline-block text-[39px] font-semibold px-3 py-0">
                    
                    {/* ▼▼▼ 2. SVG들을 h1 안으로 옮기고 위치를 top-0, left-0 등으로 조정합니다. ▼▼▼ */}
                    <svg
                        className="absolute top-0 left-0 w-5 h-5"
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17 0H0V19" stroke="white" strokeWidth="5" />
                    </svg>
                    
                    BIOADDLAB CONTENT
                    
                    <svg
                        className="absolute bottom-0 right-0 w-5 h-5"
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 19L17 19L17 0" stroke="white" strokeWidth="5" />
                    </svg>
                    </h1>
                    
                    <h2 className="mt-2 text-[20px] font-semibold">유익한 혜택이 가득한 메디컬 스마트보드만의 콘텐츠를 만나보세요</h2>
                </div>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ======================================================================= */}
      {/* 모바일 버전 (Flexbox로 수정) */}
      {/* ======================================================================= */}
      <div className="block md:hidden w-full h-[212px] bg-black text-center mt-[120px] flex-col">
        <div className='text-white text-[20px] mb-8 font-suit font-extrabold'>
          BIOADDLAB CONTENT<br/>
        </div>
        <div className='mb-8 leading-1'>
          유익한 혜택이 가득한<br/>메디컬 스마트보드만의 콘텐츠를<br/>만나보세요
        </div>
        <div className='flex items-end justify-center'>
          <img
            src="/images/mobile/mobiletop2.png"
            className='w-[80%] h-[120px]'
          />
        </div>
      </div>
    </div>
  );
}
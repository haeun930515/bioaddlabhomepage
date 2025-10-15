'use client';

import React, { useLayoutEffect, useRef, forwardRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function StickyEyeCatchMobile() {

  return (
    <>
    
      {/* 모바일 */}
      <div className='w-full h-[1700px] md:hidden bg-black flex flex-col items-center justify-center overflow-x-hidden'>


      <style dangerouslySetInnerHTML={{
        __html: `
          .swiper-pagination {
            position: absolute !important;
            bottom: 10px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: auto !important;
            height: auto !important;
            z-index: 10 !important;
          }
          
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            background: white !important;
            opacity: 0.5 !important;
            border-radius: 4px !important;
            margin: 0 4px !important;
            transition: all 0.3s ease !important;
            display: inline-block !important;
          }
          
          .swiper-pagination-bullet-active {
            width: 24px !important;
            height: 8px !important;
            background: white !important;
            opacity: 1 !important;
            border-radius: 4px !important;
          }
        `
      }} />
        <div className='w-[350px] h-[630px] flex flex-col items-center justify-center border-2 bg-white/10 border-[#4e5254] backdrop-blur-lg rounded-3xl relative'>
          
          {/* 아이캐치 텍스트 */}
          <div className='mt-12'>
            <h2 className='text-[20px] font-bold text-center text-white'>
              타겟의 시선고정을 위한<br/> 아이캐치
            </h2>
          </div>
          
          {/* 스와이퍼 */}
          <Swiper
            slidesPerView={1}
            className="absolute inset-0 w-full h-full"
            centeredSlides={true}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100'
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="flex items-center justify-center">
              <div className='flex items-center justify-center w-full h-full'>
                <img
                  src="/images/mobile/mobileeye1.png"
                  alt='바이오애드 이미지 1'
                  className='w-[276px] h-[462px] object-cover rounded-lg'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className='flex items-center justify-center w-full h-full'>
                <img
                  src="/images/mobile/mobileeye2.png"
                  alt='바이오애드 이미지 2'
                  className='w-[276px] h-[462px] object-cover rounded-lg'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className='flex items-center justify-center w-full h-full'>
                <img
                  src="/images/mobile/mobileeye3.png"
                  alt='바이오애드 이미지 3'
                  className='w-[276px] h-[462px] object-cover rounded-lg'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

         <div className="flex flex-col gap-4 mt-12">
           <img
             src="/images/mobile/mobilecatch1.png"
             alt='모바일 캐치1'
             className='w-[350px] h-auto object-contain'
           />
           <img
             src="/images/mobile/mobilecatch2.png"
             alt='모바일 캐치2'
             className='w-[350px] h-auto object-contain mt-12'
           />
         </div>
      </div>
    </>
  );
}
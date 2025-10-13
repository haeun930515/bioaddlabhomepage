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
            top: 10px !important;
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
        <div className='w-[350px] h-[700px] flex flex-col items-center justify-center border-2 bg-white/10 border-[#4e5254] backdrop-blur-lg rounded-3xl'>
            
          {/* 고정 이미지 */}
          <div className='w-[280px] h-[350px] mb-4'>
            <img
              src="/images/mobile/mobilecontenttop.png"
              alt='바이오애드 고정 이미지'
              className='w-[280px] h-[350px] object-cover rounded-lg'
            />
          </div>
          
          {/* 스와이퍼 */}
          <Swiper
            slidesPerView={1}
            className="w-full h-[250px]"
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
            <SwiperSlide className="flex items-center justify-center ">
              <div className='w-[350px] h-[300px] rounded-lg p-6 flex flex-col justify-center items-center'>
                  <div className="space-y-2 text-base text-white">
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>카메라 측정 기능</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>진료 대기자 수 표시</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>진료 대기 현황 표시</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center ">
              <div className='w-[350px] h-[300px]  rounded-lg p-6 flex flex-col justify-center items-center'>
                  <div className="space-y-2 text-base text-white">
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>날씨 현황 표시</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>43인치 풀 스크린 대형 광고 영역</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>이용자 관심 증대를 위한 뉴스레터 상시 노출</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center ">
              <div className='w-[350px] h-[300px]  rounded-lg p-6 flex flex-col justify-center items-center'>
                  <div className="space-y-2 text-base text-white">
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>재진 접수기능</p>
                  </div>
                  <div className="flex items-center">
                    <img src="/images/mobile/mobilecheck.png" alt='체크' className='w-4 h-4 mr-2' />
                    <p>카카오톡 연계 실손보험청구 기능</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

         <div className="flex flex-col gap-4 mt-4">
           <img
             src="/images/mobile/mobilecatch1.png"
             alt='모바일 캐치1'
             className='w-[350px] h-auto object-contain'
           />
           <img
             src="/images/mobile/mobilecatch2.png"
             alt='모바일 캐치2'
             className='w-[350px] h-auto object-contain'
           />
         </div>
      </div>
    </>
  );
}
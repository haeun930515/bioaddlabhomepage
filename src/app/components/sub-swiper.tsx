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
    <div className='bg-white'>
      {/* 데스크톱 버전 */}
      <div className="relative hidden w-full overflow-hidden mt-14 bg-white md:block rounded-bl-[34px] rounded-br-[34px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-auto min-h-[651px] bg-transparent"
        >
          <SwiperSlide className="relative w-full aspect-[16/7]">
            <div className="absolute inset-0 w-full aspect-[16/7]">
              <video
                src="/videos/components/solution1.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full min-h-[651px]">
              <div className="relative p-12 text-center text-white">
                <svg
                  className="absolute left-0 w-5 h-5 top-10"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 0H0V19" stroke="white" strokeWidth="5" />
                </svg>

                <svg
                  className="absolute w-5 h-5 right-10 bottom-10"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 19L17 19L17 0" stroke="white" strokeWidth="5" />
                </svg>

                <div className="flex flex-col items-center">
                  <h1 className="text-[39px] font-semibold">BIOADDLAB SMART BOARD</h1>
                  <h2 className="mt-2 text-[39px] font-semibold">TECHNOLOGY</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 모바일 버전 */}
      <div className="block md:hidden w-full h-[212px] bg-black text-center mt-[120px] flex-col">
        <div className='text-white text-[20px] mb-8 font-suit font-extrabold'>
          BIOADDLAB SMART BOARD<br/> TECHNOLOGY
        </div>
        <div className='flex items-end justify-center'>
          <img
            src="/images/mobile/mobiletop1.png"
            className='w-[80%] h-[120px]'
          />
        </div>
      </div>
    </div>
  );
}
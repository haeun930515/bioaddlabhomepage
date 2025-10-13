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
          className="w-full h-[90vh] bg-transparent"
        >
          <SwiperSlide className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <video
                src="/videos/components/solution1.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="relative p-12 text-center text-white">
                <svg
                  className="absolute w-5 h-5 left-5 top-10"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 0H0V19" stroke="white" strokeWidth="5" />
                </svg>

                <svg
                  className="absolute w-5 h-5 right-40 bottom-10"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 19L17 19L17 0" stroke="white" strokeWidth="5" />
                </svg>

                <div className="flex flex-col items-center font-geist">
                  <h1 className="text-[39px] font-semibold">BIOADDLAB SMART BOARD</h1>
                  <h2 className="mt-2 text-[39px] font-semibold">TECHNOLOGY</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 모바일 버전 */}
      <div className="relative block w-full overflow-hidden bg-white mt-14 md:hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-[40vh] bg-transparent"
        >
          <SwiperSlide className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <video
                src="/videos/components/solution1.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="relative p-12 text-center text-white">

                <div className="flex flex-col items-center leading-none font-geist">
                  <div className="text-[25px] font-light font-geist">BIOADDLAB</div>
                  <div className="text-[25px] font-light font-geist">SMART BOARD</div>
                  <h2 className="mt-8 text-[36px] font-['Noto_Sans'] font-extrabold bg-gradient-to-r from-[#6AE266] to-[#0090EF] bg-clip-text text-transparent">TECHNOLOGY</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
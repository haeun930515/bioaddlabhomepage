'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const slideData = {
  id: 1,
  backgroundImage: "/images/solution/topbg.png",
  hasGradient: true,
};

export default function ContentTopBanner() {
  return (
    <div>
      {/* 데스크톱 버전 */}
      <div className="relative hidden w-full overflow-hidden bg-black md:block">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-auto min-h-[651px] bg-black"
        >
          <SwiperSlide className="relative w-full">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slideData.backgroundImage}
                alt="Slide Background"
                className="object-cover w-full h-full" 
              />
              {slideData.hasGradient && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              )}
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full min-h-[651px]">
              <div className="relative p-12 text-center text-white">
                <svg
                  className="absolute top-0 left-0 w-5 h-5"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 0H0V19" stroke="white" strokeWidth="5" />
                </svg>
                <svg
                  className="absolute bottom-0 right-0 w-5 h-5"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 19L17 19L17 0" stroke="white" strokeWidth="5" />
                </svg>

                <h2 className="flex flex-col items-center">
                  <span className="text-[39px] font-semibold">BIOADDLAB CONTENT</span>
                  <span className="mt-2 text-[39px] font-semibold">TECHNOLOGY</span>
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 모바일 버전 */}
      <div className="block md:hidden w-full h-[600px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/main1-m.png"
                alt="Slide 1"
                className="object-cover w-full h-full rounded-tl-[50px] rounded-tr-[50px]"
              />
              <div className="absolute inset-0 bg-black/30 rounded-tl-[50px] rounded-tr-[50px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 text-center text-white">
              <div className="mb-8 font-sans text-xl leading-7">
                <span>
                  치아와 몸의 균형을 바로잡아,
                  <br />
                  <span className="font-bold">
                    아름다움과 건강이 조화를 이루는 삶을
                    <br />
                    함께 만들어갑니다
                  </span>
                </span>
              </div>

              <Link
                href="/about"
                className="flex items-center justify-center gap-2 px-6 py-2 text-xl font-bold text-white border border-white rounded-full"
              >
                <span>Introduction</span>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L5 5L0 10" stroke="white" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'; // 이 줄이 반드시 있어야 합니다.
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

// 슬라이드 데이터 인터페이스 (기존과 동일)
interface SlideData {
  id: number;
  backgroundImage: string | null;
  hasGradient?: boolean;
  title?: string;
  subtitle?: string;
  buttonText?: string | null;
  buttonIcon?: string;
  textColor?: string;
  buttonStyle?: string | null;
  additionalContent?: React.ReactNode;
  headerText?: string;
}

// 슬라이드 데이터 (기존과 동일)
const slideData: SlideData[] = [
  {
    id: 1,
    backgroundImage: "/images/main1.png",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
    textColor: "text-white",
  },
  {
    id: 2,
    backgroundImage: "/images/main2.png", 
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
    textColor: "text-black",
  },
  {
    id: 3,
    backgroundImage: "/images/main3.png",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
  }
];

export default function MainSwiper() {
  return (
    <div>
      {/* ======================================================================= */}
      {/* 데스크톱 버전 (수정 없음) */}
      {/* ======================================================================= */}
      <div className="hidden md:block relative w-full min-w-[1400px] overflow-hidden bg-black">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-auto min-h-[651px] bg-black"
        >
          {slideData.map((slide) => (
            <SwiperSlide key={`desktop-${slide.id}`} className="relative flex items-center justify-center w-full bg-black">
              <div className="relative w-full h-0 min-h-[651px]">
                {slide.backgroundImage && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={slide.backgroundImage}
                      alt={`Slide ${slide.id}`}
                      className="object-contain object-center w-full h-full"
                    />
                    {slide.hasGradient && (
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    )}
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
                    <div className="container relative z-10 flex flex-col justify-center h-full px-4 mx-auto">
                      <div className="max-w-4xl mx-auto text-center">
                        <h1 className="mb-6 text-3xl text-white md:text-4xl font-regular">{slide.title}</h1>
                        <p className="mb-8 text-xl font-bold text-green-500 md:text-4xl">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ======================================================================= */}
      {/* 모바일 버전 */}
      {/* ======================================================================= */}
      <div className="block md:hidden w-full h-[600px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-[656px]"
        >
          {/* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */}
          {/* 모바일 슬라이드 1 */}
          <SwiperSlide className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="/images/main1-m.png"
                alt="Slide 1"
                className="w-full h-auto object-contain object-top rounded-tl-[50px] rounded-tr-[50px]"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
              />
            </div>
            {/* 텍스트 가독성을 위한 어두운 오버레이 추가 */}
            <div className="absolute inset-0 bg-black/30 rounded-tl-[50px] rounded-tr-[50px]"></div>

            {/* 텍스트 블록 */}
            <div className="absolute left-[19px] top-[236px] w-[calc(100%-38px)] text-white text-center font-sans text-xl leading-7 font-normal">
              <span>
                <span>
                  치아와 몸의 균형을 바로잡아,
                  <br />
                </span>
                <span className="font-bold">
                  아름다움과 건강이 조화를 이루는 삶을
                  <br />
                  함께 만들어갑니다
                </span>
              </span>
            </div>

            {/* 버튼을 구성하는 요소들 */}
            <div
              className="absolute left-[91px] top-[351px] w-[152px] h-[39px] rounded-[26px] border border-solid border-white"
            ></div>
            <Link href="/about" className="absolute left-[106px] top-[359px] text-white text-center font-['Suit-Bold'] text-xl leading-[19px] font-bold">
              Introduction
            </Link>
            <svg
              className="absolute left-[218px] top-[366px]"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L5 5L0 10" stroke="white" strokeLinecap="round" />
            </svg>
          </SwiperSlide>

          {/* 모바일 슬라이드 2 (이전 Flexbox 버전 유지, 원하시면 이 또한 absolute로 변경 가능) */}
          <SwiperSlide
            className="w-full h-full flex flex-col justify-start items-start p-10 rounded-tl-[50px] rounded-tr-[50px]"
            style={{
              backgroundImage: 'url(/images/main2-m.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="pt-8" /> 
            <img
              src="/images/magicore.png"
              alt="MAGICORE"
              className="w-[281px] h-auto object-contain"
            />
            <Link href="/implant" className="mt-6 w-[125px] h-[39px] rounded-[26px] border border-black flex items-center justify-center space-x-2 text-black">
              <span className="font-['Suit-Bold'] text-xl" style={{ letterSpacing: '-0.02em' }}>
                implant
              </span>
              <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L0 10" stroke="black" strokeLinecap="round" />
              </svg>
            </Link>
          </SwiperSlide>

          {/* 모바일 슬라이드 3 */}
          <SwiperSlide className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                src="/images/main3-m.png" 
                alt="Slide 3" 
                className="w-full h-auto object-contain object-top rounded-tl-[50px] rounded-tr-[50px]"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
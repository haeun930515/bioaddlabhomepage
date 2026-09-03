'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SlideData {
  id: number;
  backgroundImage: string | null;
  imageAlt: string;
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

const slideData: SlideData[] = [
  {
    id: 1,
    backgroundImage: "/images/main5.png",
    imageAlt: "병원과 환자, 브랜드를 연결하는 바이오애드랩 AI 헬스케어 네트워크",
    hasGradient: false,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
    textColor: "text-white",
  },
  {
    id: 2,
    backgroundImage: "/images/main4.png",
    imageAlt: "병·의원 공간에 설치된 바이오애드랩 AI 스마트보드",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
    textColor: "text-black",
  },
  {
    id: 3,
    backgroundImage: "/images/main1.png",
    imageAlt: "의료 소비자 데이터를 분석하는 바이오애드랩 AI 기술",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
    textColor: "text-black",
  },
  {
    id: 4,
    backgroundImage: "/images/main2.png",
    imageAlt: "병원과 의료 소비자를 연결하는 데이터 기반 메디컬 마케팅",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
  },
  {
    id: 5,
    backgroundImage: "/images/main3.png",
    imageAlt: "제약·헬스케어 브랜드를 위한 병원 OOH 미디어 네트워크",
    hasGradient: true,
    title: "Connecting Hospitals, Patients, and World",
    subtitle: "Powered by AI.",
  }
];


interface MainSwiperProps {
  onScrollDown: () => void;
}

export default function MainSwiper({ onScrollDown }: MainSwiperProps) {
  return (
    <div>
      {/* 데스크톱 버전 */}
      <div className="relative hidden w-full overflow-hidden mt-14 bg-black md:block rounded-bl-[34px] rounded-br-[34px]">
        <div className="relative w-full aspect-[16/7]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="w-full h-full bg-black"
          >
          {slideData.map((slide) => (
            <SwiperSlide key={`desktop-${slide.id}`} className="relative flex items-center justify-center w-full bg-black">
              <div className="relative w-full h-full">
                {slide.backgroundImage && (
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={slide.backgroundImage}
                      alt={slide.imageAlt}
                      className="object-center w-full h-full"
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
                        <p className="mb-6 text-3xl font-extrabold text-white md:text-4xl font-geist">{slide.title}</p>
                        <p className="mb-8 text-xl font-extrabold text-green-500 md:text-4xl font-geist">{slide.subtitle}</p>
                      
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <button
          onClick={onScrollDown}
          className="absolute z-20 flex items-center justify-center w-12 h-12 transition-colors duration-300 -translate-x-1/2 border border-white rounded-full bottom-10 left-1/2 bg-black/20 hover:bg-white/10 animate-bounce"
          aria-label="바이오애드랩 핵심 서비스로 이동"
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* 모바일 버전 */}
        <div className="block w-full md:hidden aspect-[9/14]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          <SwiperSlide className="relative flex items-center justify-center w-full bg-black">
              <div className="relative w-full aspect-[9/14]">
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      src="/videos/components/mainmobile.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5B6972]/80 via-black/20 to-transparent"></div>
                  </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
                    <div className="container relative z-10 flex flex-col justify-center h-full px-4 mx-auto">
                      <p className="max-w-4xl mx-auto leading-none text-center">
                        <span className="block text-[30px] font-bold text-white font-['Noto_Sans']">CONNECTING</span>
                        <span className="block text-[22px] font-regular text-white font-['Noto_Sans']">HOSPITALS,</span>
                        <span className="block text-[22px] font-regular text-white font-['Noto_Sans']">PATIENTS,</span>
                        <span className="block text-[30px] font-bold text-white font-['Noto_Sans']">AND WORLD</span>
                        <span className="block mt-12 text-[50px] font-bold font-['Noto_Sans']">
                          POWERED <br/>BY <span 
                            style={{
                              background: 'linear-gradient(45deg, #32FF00, #00E1FF, #32FF00)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              color: '#32FF00',
                              backgroundSize: '200% 200%',
                              animation: 'gradientShift 3s ease-in-out infinite'
                            }}
                          >
                            AI.
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onScrollDown}
                  className="absolute z-20 flex items-center justify-center w-12 h-12 transition-colors duration-300 -translate-x-1/2 border border-white rounded-full bottom-10 left-[45%] bg-black/20 hover:bg-white/10 animate-bounce"
                  aria-label="바이오애드랩 핵심 서비스로 이동"
                >
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
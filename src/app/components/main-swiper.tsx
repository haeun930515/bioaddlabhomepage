'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                      alt={`Slide ${slide.id}`}
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
                        <h1 className="mb-6 text-3xl font-extrabold text-white md:text-4xl font-geist">{slide.title}</h1>
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
          aria-label="Scroll down"
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
                      <div className="max-w-4xl mx-auto leading-none text-center">
                        <div className="text-[30px] font-bold text-white font-['Noto_Sans']">CONNECTING</div>
                        <div className="text-[22px] font-regular text-white font-['Noto_Sans']">HOSPITALS,</div>
                        <div className="text-[22px] font-regular text-white font-['Noto_Sans']">PATIENTS,</div>
                        <div className="text-[30px] font-bold text-white font-['Noto_Sans']">AND WORLD</div>
                        <div className="mt-12 text-[50px] font-bold font-['Noto_Sans']">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onScrollDown}
                  className="absolute z-20 flex items-center justify-center w-12 h-12 transition-colors duration-300 -translate-x-1/2 border border-white rounded-full bottom-10 left-1/2 bg-black/20 hover:bg-white/10 animate-bounce"
                  aria-label="Scroll down"
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
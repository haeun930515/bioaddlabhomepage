'use client'

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const timelineData = [
    {
      year: "2026",
      events: [
        "05 블록버스터 사업화지원 선정 - 한국콘텐츠진흥원(KCON)",
        "05 민간투자주도형 기술창업지원 프로그램(TIPS) 선정 - 한국벤쳐캐피탈협회",
      ],
    },
    {
      year: "2025",
      events: ["06 혁신창업 사업화 지원기업 선정 - 중소벤처기업진흥공단"],
    },
    {
      year: "2024",
      events: ["06 혁신 스타트업 - 리틀펭귄 선정 - 신용보증기금"],
    },
    {
      year: "2023",
      events: [
        "12 스타트업 Global MOU - 아스트라제네카",
        "08 일본 오픈이노베이션 매칭 기업 선정 - 한국무역협회",
        "08 Y Combinator 연계 프로그램 선정",
        "06 초기창업 패키지 선정(서울창조경제혁신센터)",
        "05 벤처기업 등록 및 인증 완료",
        "05 한국보건산업진흥원 중개지원사업 선정 : 데일리파트너스",
        "05 한국바이오협회 바이오큐브(10차) 선정 : 블루포인트파트너스",
        "05 ICT 린벨류업 엑셀러레이팅 선정",
      ],
    },
    {
      year: "2022",
      events: ["11 바이오애드랩 주식회사 설립"],
    },
  ];

const mobileTimelineSlides = timelineData.reduce<(typeof timelineData)[]>((slides, item, index) => {
  const slideIndex = Math.floor(index / 2);
  if (!slides[slideIndex]) {
    slides[slideIndex] = [];
  }
  slides[slideIndex].push(item);
  return slides;
}, []);


export default function Timeline() {
const swiperRef = useRef<SwiperType | null>(null);
    
    return (
        <div className="relative w-full text-white">
        <div className="relative hidden mt-32 md:block bg-black/80">
          <div className="w-full h-[2px] bg-white absolute z-0 top-[205px]" />
          <div className="pt-12 pb-12 pl-12 pr-12 ">
            <h2 className="text-4xl font-bold leading-snug whitespace-pre-line">
              기술이 만든 신뢰,{"\n"}브랜드가 이끄는 미래
            </h2>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={40}
              className="mt-12"
            >
              {timelineData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-5 h-5 rounded-full border-[3px] border-white bg-black z-10" />
                      <div className="w-[2px] h-16 border-l-2 border-dotted border-white mt-1 mb-1" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="mt-8 text-left">
                      <div className="mb-2 text-2xl font-bold text-white">{item.year}</div>
                      <div className="space-y-1 text-sm leading-8 text-gray-300">
                        {item.events.map((e, ei) => (
                          <div key={ei}>{e}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="relative z-10 block h-auto bg-black/80 pt-8 md:hidden">
          <div className="px-6 pb-4 pt-2">
            <h2 className="text-xl font-bold leading-snug text-center whitespace-pre-line">
              기술이 만든 신뢰,{'\n'}브랜드가 이끄는 미래
            </h2>
          </div>

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

          <div className="relative pb-4 overflow-hidden">
             <div className="w-full h-[2px] border-white border-t-2 border-dotted absolute z-0 top-[10px] left-[25%] " />
            <Swiper
              slidesPerView={1.3}
              centeredSlides={true}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100'
              }}
              modules={[Pagination]}
              className="w-full h-auto"
            >
              {mobileTimelineSlides.map((slide, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="absolute h-[2px] border-white border-t-2 border-dotted z-0 top-[10px] w-full bg-black" />
                  <div className="pb-8 space-y-8">
                    {slide.map((item, itemIndex) => (
                      <div className="relative flex items-start" key={item.year}>
                        <div className="flex flex-col items-center mr-4">
                          <div
                            className={
                              slideIndex === 0 && itemIndex === 0
                                ? "w-5 h-5 rounded-full border-[3px] border-white bg-black z-10"
                                : "w-5 h-5 rounded-full"
                            }
                          />
                        </div>
                        <div className="mt-8 -ml-8 text-left">
                          <div className="mb-2 text-lg font-bold text-[#707070]">{item.year}</div>
                          <div className="space-y-1 text-xs leading-6 text-gray-300">
                            {item.events.map((e, ei) => (
                              <div key={ei}>{e}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    )
}

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
      year: "2025",
      events: ["서울 수도권 1200개 병원 설치 확정"],
    },
    {
      year: "2024",
      events: ["아스트라제네카 스타트업 MOU", "신용보증기금 혁신 스타트업 선정"],
    },
    {
      year: "2023",
      events: [
        "ICT콤플렉스 린벨류업 엑셀러레이팅 선정",
        "한국바이오협회 바이오큐브(10차) 선정",
        "한국보건산업진흥원 투자유치 중개사업지원 선정",
        "벤처기업등록 및 인증완료",
        "초기창업패키지 선정 (서울창조경제혁신센터)",
        "혈압, 맥박, 산소포화도 측정 AI 알고리즘 자체 개발",
        "한국 무역협회 일본 오픈이노베이션 매칭 기업 선정",
        "Y combinator 연계 프로그램 선정",
      ],
    },
  ];


export default function Timeline() {
const swiperRef = useRef<SwiperType | null>(null);
    
    return (
        <div className="relative w-full text-white">
        <div className="relative hidden mt-32 md:block bg-black/80">
          <div className="w-full h-[2px] bg-white absolute z-0 top-[205px]" />
          <div className="pt-12 pb-12 pl-12 pr-12 ">
            <div className="text-4xl font-bold leading-snug whitespace-pre-line">
              기술이 만든 신뢰,{"\n"}브랜드가 이끄는 미래
            </div>
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

        <div className="block mt-8 md:hidden bg-black/80">
          <div className="px-6 pt-8 pb-8">
            <h2 className="text-2xl font-bold leading-snug text-center whitespace-pre-line">
              기술이 만든 신뢰,{'\n'}브랜드가 이끄는 미래
            </h2>
          </div>

          <div className="relative pb-8">
            <div className="w-full h-[2px] border-white border-2 border-dotted absolute z-0 top-[10px]" />
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100'
              }}
              modules={[Pagination]}
              className="w-full h-[350px]"
            >
              {/* 첫 번째 슬라이드: 2025 + 2024 세로 배치 */}
              <SwiperSlide>
                <div className="pb-16 space-y-12">
                  <div className="relative flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-5 h-5 rounded-full border-[3px] border-white bg-black z-10" />
                    </div>
                    <div className="mt-8 text-left">
                      <div className="mb-2 text-lg font-bold text-[#707070]">{timelineData[0].year}</div>
                      <div className="space-y-1 text-xs leading-6 text-gray-300">
                        {timelineData[0].events.map((e, ei) => (
                          <div key={ei}>{e}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-5 h-5 rounded-full" />
                    </div>
                    <div className="mt-8 text-left">
                      <div className="mb-2 text-lg font-bold text-[#707070]">{timelineData[1].year}</div>
                      <div className="space-y-1 text-xs leading-6 text-gray-300">
                        {timelineData[1].events.map((e, ei) => (
                          <div key={ei}>{e}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 두 번째 슬라이드: 2023 */}
              <SwiperSlide>
                <div className="relative flex items-start justify-center pb-16">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-5 h-5 rounded-full border-[3px] border-white bg-black z-10" />
                  </div>
                  <div className="mt-8 text-left">
                    <div className="mb-2 text-lg font-bold text-[#707070]">{timelineData[2].year}</div>
                    <div className="space-y-1 text-xs leading-6 text-gray-300">
                      {timelineData[2].events.map((e, ei) => (
                        <div key={ei}>{e}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    )
}
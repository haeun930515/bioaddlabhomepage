'use client';

import Image from "next/image";
import { useState, useRef } from "react";

import MainPic from "../../public/images/main_pic.png";
import MainPiSub from "../../public/images/main_pic_sub.png";
import MainBG from "../../public/images/mainbg.png";
import MainDoc from "../../public/images/doc.png";
import MainAI from "../../public/images/ai.png";
import MainHealth from "../../public/images/health.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import LogoSlider from "./components/logoslider";
import Footer from "./components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export default function Home() {
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
    {
      year: "2022",
      events: ["바이오애드랩 설립"],
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  type StatBoxProps = {
    label: string;
    end: number;
    suffix?: string;
    separator?: string;
  };

  const StatBox: React.FC<StatBoxProps> = ({ label, end, suffix = '', separator }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <div ref={ref} className="border border-green-400 rounded-md p-4 min-w-[140px]">
        <div className="text-sm bg-green-500 text-black inline-block px-2 py-0.5 rounded-full mb-2">
          {label}
        </div>
        <div className="text-2xl font-bold text-green-500 sm:text-3xl md:text-4xl">
          {inView ? <CountUp end={end} duration={2} separator={separator} /> : '0'}{suffix}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">

      <div className="mt-40 text-center md:mt-72">
        <div className="mb-2 text-xl text-[#66E274]">Connecting Hospitals, Patients, and World</div>
        <div className="text-3xl font-bold text-[#66E274]">Powered by AI.</div>
      </div>

      <div className="mt-10 text-center h-[600px] flex flex-col justify-center">
        <div className="absolute w-full h-[600px] z-0 left-0">
          <Image src={MainBG} alt="배경" layout="fill" />
        </div>
        <div className="z-10 mb-2 text-xl text-black">서울대병원 의료진과 함께 헬스케어 스마트보드를 넘어,</div>
        <div className="z-10 text-3xl font-bold text-black">의료와 커뮤니케이션의 혁신을 AI로 이끌어갑니다.</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 -mt-40 md:flex-row md:gap-16">
        <div className="w-52 flex flex-col items-center border border-[#16330F] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
          <Image src={MainDoc} alt="의료진" width={80} height={80} />
          <div className="mt-5 text-sm leading-tight text-center">
            병원 시스템의 디지털전환을<br />이끌고 병원, 고객, 광고주<br />모두에게 이로운 솔루션 제공
          </div>
        </div>
        <div className="z-10 flex items-center justify-center">
          <Image src={MainAI} alt="AI" width={150} height={150} />
        </div>
        <div className="w-52 flex flex-col items-center border border-[#16330F] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
          <Image src={MainHealth} alt="헬스케어" width={80} height={80} />
          <div className="mt-5 text-sm leading-tight text-center">
            메디컬 스마트보드를 넘어<br />병원 운영데이터 연동 기반<br />헬스케어 플랫폼
          </div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full px-4 py-16 max-w-[1400px] mx-auto">
        <div className="relative w-full max-w-[700px] aspect-[4/3] sm:aspect-[2/2]">
          <Image src={MainPic} alt="지도" fill className="object-contain" priority />
          <div className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25vw] max-w-[300px]">
            <div className="w-full h-auto animate-subtlePing">
              <Image src={MainPiSub} alt="서브 핑 이미지" width={300} height={300} className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mt-12 text-center lg:mt-0 lg:ml-12 lg:text-left">
          <h2 className="mb-8 text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
            <span className="text-green-400">서울 수도권</span>을 중심으로<br />
            <span className="text-green-400">빠르게 확장</span>합니다
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatBox label="병의원" end={1200} suffix="개 병원 +" />
            <StatBox label="의료인" end={5000} suffix="명 +" />
            <StatBox label="월 방문객" end={1500000} suffix="명 +" />
            <StatBox label="월 노출수" end={5280000} suffix="회 +" />
          </div>
        </div>
      </div>

      <div className="relative w-full py-20 text-white bg-black">
        <div className="w-full h-[2px] bg-green-500 absolute z-0 top-[285px]" />
        <div className="ml-[200px] border-[#66E274] rounded-tl-3xl rounded-bl-3xl border border-t border-b border-l pb-12 pl-24 pt-12 pr-12 backdrop-blur-sm">
          <div className="text-4xl font-bold leading-snug whitespace-pre-line">
            기술이 만든 신뢰,{"\n"}브랜드가 이끄는 미래
          </div>
          <div className="absolute flex gap-4 top-30 right-72">
            <button onClick={() => swiperRef.current?.slidePrev()} className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
              &lt;
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
              &gt;
            </button>
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
                    <div className="w-5 h-5 rounded-full border-[3px] border-green-500 bg-black z-10" />
                    <div className="w-[2px] h-16 border-l-2 border-dotted border-green-500 mt-1 mb-1" />
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <div className="mt-8 text-left">
                    <div className="mb-2 text-2xl font-bold text-white">{item.year}</div>
                    <div className="space-y-1 text-sm text-gray-300">
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

      <div className="w-full px-4 py-20 text-white bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2 text-2xl font-bold">Our Partners & Clients</div>
          <div className="text-sm leading-relaxed">
            병원 분과 별로 맞춤 세팅, 이제 당신의 브랜드가 가장 주목받는 의료 공간에서
            가장 필요한 타깃과 만날 시간입니다
          </div>
        </div>
      </div>

      <LogoSlider />
      <div className="h-32" />
    </div>
  );
}
'use client';

import Image from "next/image";
import { useRef } from "react";

import MainPic from "../../public/images/main_pic.png";
import MainPiSub from "../../public/images/main_pic_sub.png";
import MainBG from "../../public/images/mainbg.png";
import MainDoc from "../../public/images/doc.png";
import MainAI from "../../public/images/ai.png";
import MainHealth from "../../public/images/health.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import VideoSection from "./components/VideoSection";


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
    <div className="flex z-10 flex-col justify-center items-center min-h-screen text-white bg-black">
      <div className="z-20 mt-40 text-center md:mt-72">
        <div className="mb-2 text-3xl text-[#66E274]">
          <span className="md:hidden">
            Connecting Hospitals,<br /> Patients, and World
          </span>
          <span className="hidden md:inline">
            Connecting Hospitals, Patients, and World
          </span>
        </div>
        <div className="text-5xl font-bold text-[#66E274]">Powered by AI.</div>
      </div>

      <div className="relative w-full h-[800px] -mt-32 -mb-20 text-center flex items-center justify-center">
        {/* 배경 이미지 */}
        <Image
          src={MainBG}
          alt="배경"
          fill
          className="z-0"
          priority
        />
        {/* 텍스트 박스 */}
        <div className="flex relative z-10 flex-col justify-center px-4">
          {/* 모바일용 */}
          <div className="mb-2 text-xl text-black md:hidden">
            서울대병원 의료진과 함께<br />
            헬스케어 스마트보드를 넘어,
          </div>
          <div className="text-xl font-bold text-black md:hidden">
            의료와 커뮤니케이션의 혁신을<br />
            AI로 이끌어갑니다.
          </div>
          {/* 데스크탑용 */}
          <div className="hidden mb-0 text-[25px] font-light text-black md:block">
            서울대병원 의료진과 함께 헬스케어 스마트보드를 넘어,
          </div>
          <div className="hidden text-[27px] font-extrabold text-black md:block">
            의료와 커뮤니케이션의 혁신을 AI로 이끌어갑니다.
          </div>
        </div>
      </div>

      {/* 공통 wrapper */}
      <div className="flex flex-col gap-8 justify-center items-center -mt-40 md:flex-row md:gap-16">
        {/* 모바일 전용 – 배경 이미지를 하나의 큰 카드처럼 */}
        <div className="relative w-[230px] mx-auto md:hidden">
          {/* 배경 이미지 */}
          <Image
            src="/images/mobile-ai-cover.png"
            alt="모바일 커버"
            width={340}
            height={660}
            className="w-[340px] h-auto"
          />
          {/* 오버레이 내용 - 이미지 위 정확한 위치에 배치 */}
          <div className="flex absolute top-0 left-0 flex-col justify-between items-center px-6 py-20 w-full h-full text-white">
            {/* 카드 1 */}
            <div className="flex flex-col gap-2 items-center text-center">
              <Image src={MainDoc} alt="의료진" width={80} height={80} />
              <p className="text-sm leading-tight">
                병원 시스템의 디지털전환을<br />
                이끌고 병원, 고객, 광고주<br />
                모두에게 이로운 솔루션 제공
              </p>
            </div>
            {/* 카드 2 */}
            <div className="flex flex-col gap-2 items-center text-center">
              <Image src={MainHealth} alt="헬스케어" width={80} height={80} />
              <p className="text-sm leading-tight">
                메디컬 스마트보드를 넘어<br />
                병원 운영데이터 연동 기반<br />
                헬스케어 플랫폼
              </p>
            </div>
          </div>
        </div>
        {/* ✅ 데스크탑 전용 – 기존 방식 유지 */}
        <div className="hidden flex-row gap-20 justify-center items-center md:flex">
          <div className="w-52 h-60 flex flex-col items-center border border-[#16330F] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
            <Image src={MainDoc} alt="의료진" width={80} height={80} />
            <div className="mt-5 text-sm leading-6 text-center">
              병원 시스템의 디지털전환을<br />이끌고 병원, 고객, 광고주<br />모두에게 이로운 솔루션 제공
            </div>
          </div>
          <div className="flex z-10 justify-center items-center">
            <Image src={MainAI} alt="AI" width={150} height={150} />
          </div>
          <div className="w-52 h-60 flex flex-col items-center border border-[#16330F] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
            <Image src={MainHealth} alt="헬스케어" width={80} height={80} />
            <div className="mt-10 text-sm leading-6 text-center">
              메디컬 스마트보드를 넘어<br />병원 운영데이터 연동 기반<br />헬스케어 플랫폼
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mt-32 w-full text-white bg-black">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:justify-center">

          {/* ✅ 모바일 전용 텍스트 */}
          <div className="block w-full text-center lg:hidden">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              <span className="text-green-400">서울 수도권</span>을 중심으로<br />
              <span className="text-green-400">빠르게 확장</span>합니다
            </h2>
          </div>

          {/* ✅ 지도 + 핑 */}
          <div className="relative w-full max-w-[700px] aspect-[4/3] sm:aspect-[2/2]">
            <Image src={MainPic} alt="지도" fill className="object-contain" priority />
            <div className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25vw] max-w-[300px]">
              <div className="w-full h-auto animate-subtlePing">
                <Image src={MainPiSub} alt="서브 핑 이미지" width={300} height={300} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* ✅ 데스크탑용 텍스트 + 수치 */}
          <div className="flex flex-col justify-center items-center w-full max-w-xl h-full text-start lg:items-start lg:text-left">
            {/* 데스크탑 전용 텍스트 */}
            <h2 className="hidden h-[100px] mb-8 text-2xl font-bold lg:block mt-24 sm:text-3xl md:text-4xl">
              <span className="text-green-400">서울 수도권</span>을 중심으로<br />
              <span className="text-green-400">빠르게 확장</span>합니다
            </h2>

            {/* 수치 카드 */}
            <div className="grid md:w-[500px] grid-cols-2 gap-4 h-[200px]">
            {[
      { label: '병의원', end: 1200, suffix: '개 병원 +' },
      { label: '의료인', end: 5000, suffix: '명 +' },
      { label: '월 방문객', end: 1500000, suffix: '명 +', formatted: '150만명 +' },
      { label: '월 노출수', end: 5280000, suffix: '회 +', formatted: '528만회 +' },
    ].map((item, i) => (
      <div
        key={i}
        className="md:h-[100px] h-[120px] flex flex-col justify-center border border-green-400 text-green-400 rounded-xl px-4"
      >
        {/* ✅ 라벨 */}
        <div className="px-3 py-1 mb-2 text-sm font-semibold text-black bg-green-400 rounded-full w-fit">
          {item.label}
        </div>

        {/* ✅ 모바일 전용: 완성형 문자열 출력 */}
        <div className="block text-2xl font-bold leading-tight md:hidden">
          {item.formatted || `${item.end.toLocaleString()} ${item.suffix}`}
        </div>

        {/* ✅ 데스크탑 전용: 숫자 + 수동 서픽스 출력 */}
        <div className="hidden flex-row gap-1 items-center md:flex">
          <div className="text-3xl font-extrabold tabular-nums leading-tight">
            <CountUp end={item.end} duration={1.4} separator="," />
          </div>
          <div className="text-xl">{item.suffix}</div>
        </div>
      </div>
    ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full text-white bg-black">
        {/* ✅ 데스크탑 Swiper 타임라인 */}
        <div className="hidden relative md:block">
          <div className="w-full h-[2px] bg-green-500 absolute z-0 top-[205px]" />
          <div className="ml-[200px] border-[#66E274] rounded-tl-3xl rounded-bl-3xl border border-t border-b border-l pb-12 pl-24 pt-12 pr-12 backdrop-blur-sm">
            <div className="text-4xl font-bold leading-snug whitespace-pre-line">
              기술이 만든 신뢰,{"\n"}브랜드가 이끄는 미래
            </div>

            {/* 버튼 */}
            {/* <div className="flex absolute right-72 gap-4 top-30">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex justify-center items-center w-8 h-8 rounded-full border border-white"
              >
                &lt;
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex justify-center items-center w-8 h-8 rounded-full border border-white"
              >
                &gt;
              </button>
            </div> */}

            {/* Swiper */}
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
                  <div className="flex relative items-start">
                    {/* 좌측 점선 라인 */}
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-5 h-5 rounded-full border-[3px] border-green-500 bg-black z-10" />
                      <div className="w-[2px] h-16 border-l-2 border-dotted border-green-500 mt-1 mb-1" />
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    {/* 내용 */}
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

        {/* ✅ 모바일용: 이미지 기반 타임라인 */}
        <div className="block text-center md:hidden">
          {/* 타이틀 */}
          <div className="px-6">
            <h2 className="text-2xl font-bold leading-snug whitespace-pre-line">
              기술이 만든 신뢰,{'\n'}브랜드가 이끄는 미래
            </h2>
          </div>

          {/* 배경 + 연혁 이미지 */}
          <div
            className="py-20 mt-12 w-full bg-center bg-cover"
            style={{ backgroundImage: "url('/images/mobile-years-bg.png')" }}
          >
            <div className="mx-auto w-[300px]">
              <Image
                src="/images/mobile-years.png"
                alt="모바일 연혁"
                width={300}
                height={1000} // 실제 비율로 맞춰
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <VideoSection/>
      </div>
    </div>
  );
}
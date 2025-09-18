'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP에 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

// =======================================================================
// 1. 재사용 가능한 컬럼 컴포넌트 (변경 없음)
// =======================================================================
interface ContentColumnProps {
  imageSrc: string;
  imageAlt: string;
  mainFeature: {
    title: React.ReactNode;
  };
  subFeatures: string[];
  title: string;
}

const ContentColumn: React.FC<ContentColumnProps> = ({ imageSrc, imageAlt, mainFeature, subFeatures,title }) => {
  return (
    <div className="w-[850px] flex-shrink-0 p-4">
      <div className='text-[#7d7d7d] text-left text-[28px] font-bold relative h-[27px] mb-8'>{title}</div>
      <div className="relative h-[258px] w-full mx-auto">
        <div className="relative w-full h-full grid grid-cols-[auto_1fr] bg-white rounded-[34px] shadow-[3px_1px_10px_1px_rgba(0,0,0,0.19)]">
          <div className="w-[258px] h-[258px]">
            <img
              className="object-fill rounded-tl-[34px] rounded-bl-[34px] w-full h-full"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
          <div className="flex flex-col justify-between h-full py-4 pl-8">
            <div className="text-2xl font-suit font-bold text-[#1d912a] leading-relaxed mb-4">
              {mainFeature.title}
            </div>
            <div className="w-[470px] h-[2px] bg-[#ABABAB] my-2"></div>
            <div className="grid grid-cols-2 w-[450px]">
              {subFeatures.map((featureText, index) => (
                <div key={index} className="flex text-left">
                  <span className="text-xl font-bold text-black ">•</span>
                  <p
                    className="text-base leading-relaxed text-black font-suit"
                    dangerouslySetInnerHTML={{ __html: featureText }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// =======================================================================
// 2. 메인 컴포넌트 및 데이터 (GSAP 적용)
// =======================================================================
const scrollableContentData: ContentColumnProps[] = [
  // ... (데이터는 이전과 동일)
  {
    imageSrc: "./images/solution/solution1.png",
    imageAlt: "43인치 스마트보드",
    mainFeature: { title: (<>광활한 43인치<br />세로형 대형 디스플레이</>) },
    subFeatures: ["병원별 맞춤형 컨텐츠 제공", "병원 내 스마트보드에서<br/>카카오 실손보험 청구 연계 지원", "광고+병원 안내+<br/>환자 커뮤니케이션 통합", "환자 편의성 강화, 병원 업무 부담 경감"],
    title:"헬스케어 SMART BOARD. 시스템"
  },
  {
    imageSrc: "./images/solution/solution2.png",
    imageAlt: "AI Vital Sign",
    mainFeature: { title: (<>• 성별, 연령, 시선등 측정 (노출 효과 분석)<br />• 스마트보드 유일 카카오 실손보험청구 연계</>) },
    subFeatures: ["카메라로 원격 생체데이터<br/>측정 및 AI 질환 예측 솔루션 연계", "피부나이, 산소포화도 등<br/>분과별 기술 Customize"],
    title:"카메라를 통한 AI Vital Sign. 측정"
  },
  {
    imageSrc: "./images/solution/solution3.png",
    imageAlt: "AI 공간 분석",
    mainFeature: { title: (<>측정 카메라를 통한<br />광고 성과 측정</>) },
    subFeatures: ["성별/연령/인원 수<br/>행동 패턴 데이터 수집", "AI분석으로 유형별 맞춤정보제공<br/>(광고/건강정보)"],
    title:"AI. 기반 공간 분석 솔루션"
  },
];


export default function SmartBoardFeatures() {
  // 애니메이션을 적용할 요소들을 참조하기 위해 useRef 사용
  const componentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // GSAP 컨텍스트를 사용하여 애니메이션 설정 및 정리(cleanup)를 쉽게 관리
    let ctx = gsap.context(() => {
      // track의 전체 너비에서 화면 너비를 뺀 만큼만 스크롤되도록 계산
      const scrollAmount = trackRef.current!.scrollWidth - trackRef.current!.offsetWidth+200;

      // GSAP 애니메이션 설정
      gsap.to(trackRef.current, {
        x: -scrollAmount, // x축으로 -scrollAmount 만큼 이동
        ease: "none", // 일정한 속도로
        scrollTrigger: {
          trigger: componentRef.current, // 이 컴포넌트가 트리거
          pin: true, // 스크롤 동안 화면에 고정
          scrub: 1.3, // 스크롤과 애니메이션을 부드럽게 연결 (숫자가 클수록 부드러움)
          start: "top top", // 화면 상단에 컴포넌트 상단이 닿을 때 시작
          end: `+=${scrollAmount}`, // 스크롤 양만큼 스크롤되면 종료
          invalidateOnRefresh: true, // 화면 크기 변경 시 재계산
        },
      });
    }, componentRef); // context의 스코프를 componentRef로 지정

    return () => ctx.revert(); // 컴포넌트 언마운트 시 애니메이션 정리
  }, []);

  return (
    <>
    <div ref={componentRef} className="hidden py-6 overflow-hidden bg-white md:py-32 md:block">
      {/* 가로 스크롤될 카드들을 담는 '트랙'입니다.
        화면 너비보다 훨씬 길게 만들어 좌우 스크롤 효과를 줍니다.
      */}
      <div ref={trackRef} className="flex gap-4 px-4 sm:px-6 lg:px-8">
        {scrollableContentData.map((data, index) => (
          <ContentColumn key={index} {...data} />
        ))}
      </div>
      
    </div>
    <div className='w-full h-[2000px] flex items-center justify-center md:hidden flex-col gap-8 bg-white'>
        <div className='w-[289px] h-[600px]'>
          <img
            src="/images/mobile/mobilefeature1.png"
            alt='바이오애드'
            className='w-[289px] h-[600px] object-fill'
          />
        </div>
        <div className='w-[289px] h-[657px]'>
          <img
            src="/images/mobile/mobilefeature2.png"
            alt='바이오애드'
            className='w-[289px] h-[657px] object-fill'
          />
        </div>
        <div className='w-[289px] h-[528px]'>
          <img
            src="/images/mobile/mobilefeature3.png"
            alt='바이오애드'
            className='w-[289px] h-[528px] object-fill'
          />
        </div>
      </div>

    </>

  );
}
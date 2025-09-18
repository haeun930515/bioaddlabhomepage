'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    <div className="w-[1150px] flex-shrink-0 p-4 pt-14 pl-32">
      <div className='text-[#7d7d7d] text-left text-[32px] font-geist font-extrabold relative h-[27px] mb-14'>{title}</div>
      <div className="relative h-[338px] w-full mx-auto">
        <div className="relative w-full h-full grid grid-cols-[auto_1fr] bg-white rounded-[38px] shadow-[3px_1px_10px_1px_rgba(0,0,0,0.19)]">
          <div className="w-[368px] h-[338px]">
            <img
              className="object-fill rounded-tl-[34px] rounded-bl-[34px] w-full h-full"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
          <div className="flex flex-col justify-center h-full py-4 pl-8">
            <div className="text-3xl font-suit font-bold text-[#1d912a] leading-relaxed mb-4">
              {mainFeature.title}
            </div>
            <div className="w-[470px] h-[2px] bg-[#ABABAB] my-2"></div>
            <div className="grid grid-cols-2 w-[530px]">
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

const scrollableContentData: ContentColumnProps[] = [
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollAmount = trackRef.current!.scrollWidth - trackRef.current!.offsetWidth + 200;

      gsap.to(trackRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: pinTargetRef.current,
          
          pinSpacing: true,
          scrub: 1.3,
          start: "top top",

          end: () => `+=${scrollAmount}`,
          
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={triggerRef} className="hidden bg-black md:block">
        <div ref={pinTargetRef} className="py-6 overflow-hidden h-[800px] bg-white md:py-32">
          <div ref={trackRef} className="flex gap-4 px-4 sm:px-6 lg:px-8">
            {scrollableContentData.map((data, index) => (
              <ContentColumn key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
      
      {/* 모바일 */}
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
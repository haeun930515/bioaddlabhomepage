'use client';

import React, { useLayoutEffect, useRef, forwardRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const glassBoxStyle: React.CSSProperties = {
    position: 'absolute',
    left: '60.4%', // (1160 / 1920) * 100
    top: '18.7%',  // (202 / 1080) * 100
    width: '400px', // (357 / 1920) * 100
    height: '550px',  // (454 / 1080) * 100
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.23) 0%, rgba(134, 134, 134, 0.23) 100%)',
    borderImageSlice: 1,
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
};

const MoreButton: React.FC<{ position: React.CSSProperties; color?: 'green' | 'white'; onClick?: () => void; }> = ({ position, color = 'green', onClick }) => (
  <div onClick={onClick} style={{
    position: 'absolute', ...position, display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: '91px', height: '34px', backgroundColor: color === 'green' ? '#66e274' : '#ffffff',
    borderRadius: '5px', color: '#4e5254',
    fontSize: '20px', userSelect: 'none', cursor: 'pointer', zIndex: 10
  }}>
    <span className="font-regular font-galmuri">+MORE</span>
  </div>
);


// =======================================================================
// 2. UI 섹션 컴포넌트들
// =======================================================================

// ✅ [수정] Section 1에 useState를 사용한 동적 로직을 추가했습니다.
const FirstSectionUI: React.FC = () => {
  // ✅ 1. 각 버튼에 해당하는 화면 이미지 경로를 관리합니다.
  // 🚨 주의: 이 이미지 파일들을 public 폴더 내에 실제로 만들어주셔야 합니다.
  const screenImages = {
    button1: '/images/content/uiexample1.png', // 헬스케어 시스템 화면
    button2: '/images/content/uiexample2.png', // 바이탈 사인 측정 화면
    button3: '/images/content/uiexample3.png', // AI 공간 분석 화면
  };

  // ✅ 2. 현재 활성화된 화면을 기억하기 위한 상태를 만듭니다. 기본값은 default 이미지입니다.
  const [activeScreen, setActiveScreen] = useState(screenImages.button1);
  const [isFading, setIsFading] = useState(false);

  // 3. 버튼 클릭 시 이미지 변경을 처리하는 함수
  const handleScreenChange = (newScreen: string) => {
    // 이미 같은 이미지를 보여주고 있다면 아무것도 안 함
    if (newScreen === activeScreen) return; 
    
    // Fade-out 시작
    setIsFading(true); 

    // 0.3초 뒤에 이미지 소스를 바꾸고 Fade-in 시작
    setTimeout(() => {
      setActiveScreen(newScreen);
      setIsFading(false);
    }, 300); // CSS transition 시간과 동일하게 설정
  };

  return (
    <div className="relative w-full h-full">
      {/* 👇 이 효과에 필요한 CSS를 컴포넌트 안에 직접 추가 */}
      <style>{`
        .screen-image-dynamic {
          /* 0.3초 동안 부드럽게 투명도 변경 */
          transition: opacity 0.3s ease-in-out;
        }
        .screen-image-fading-out {
          /* 투명하게 만듦 */
          opacity: 0;
        }
      `}</style>
      <div style={{ position: 'absolute', left: '15%', top: '142px', color: '#ffffff', fontSize: '2.25rem', lineHeight: '139%', fontFamily: "'Suit-Bold', sans-serif", fontWeight: 'bold' }}>
        타겟의 시선고정을 위한<br />아이캐치 장치
      </div>
      {/* ✅ 위에서 정의한 인라인 스타일 객체를 직접 적용합니다. */}
      <div style={glassBoxStyle}>
        {/* 👇👇 효과를 적용할 바로 그 이미지 👇👇 */}
        <img 
          src={activeScreen} 
          alt="UI 화면 예시" 
          // isFading 상태에 따라 클래스를 붙였다 뗐다 하면서 fade 효과를 줌
          className={`screen-image-dynamic ${isFading ? 'screen-image-fading-out' : ''}`} 
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', height: '90%', objectFit: 'contain'
          }} 
        />
      </div>
      {/* ✅ 3. 각 버튼에 onClick 이벤트를 추가하여 activeScreen 상태를 변경합니다. */}<MoreButton 
  color="green" 
  position={{ left: '33%', top: '34%' }} 
  onClick={() => handleScreenChange(screenImages.button1)} 
/>

<MoreButton 
  color="white" 
  position={{ left: '25%', top: '58%' }} 
  onClick={() => handleScreenChange(screenImages.button2)} 
/>

<MoreButton 
  color="green" 
  position={{ left: '50%', top: '50%' }} 
  onClick={() => handleScreenChange(screenImages.button3)} 
/>
    </div>
  );
};
const HorizontalScrollSection = forwardRef<HTMLDivElement>((props, ref) => {
    // 새로운 카드 디자인에 맞는 데이터 배열
    const cardData = [
      {
        title: "대기환자 시간 별 광고 반복 노출 횟수",
        mainFeatureText: "광고 반복 노출 ",
        mainFeatureHighlight: "평균 6회",
        description: "환자와 보호자는 ‘관람자’가 아닌 건강·미용·보험·금융 등에<br />관심이 높고 구매력 있는 핵심 타겟입니다.<br />그렇기에 대기시간 18분동안 평균 6회 이상 반복 노출로<br />확실한 광고 효과를 기대할 수 있습니다.",
       
        graphImageSrc: "/images/content/content-graph.png"
      },
      {
        title: "대한민국 병의원 진료 대기시간 분포",
        mainFeatureText: "진료 대기 시간 ",
        mainFeatureHighlight: "평균 18분",
        description: "병원 대기실에서는 환자들이 평균 18분 이상 머무르며, <br/>실시간 대기순번 표시 화면을 주시하게 되어 광고 회피가 어려워<br/>바이오애드랩의 스마트보드는 지하철, 엘리베이터,<br/>SNS 등 다른 매체보다 광고 인지도가 높습니다.",
        graphImageSrc: "/images/content/content-graph2.png"
      },
      // 필요에 따라 여기에 카드 데이터를 계속 추가할 수 있습니다.
    ];

    return (
        <div className="relative w-full h-full">

            {/* ✨ 1. 배경을 블러 처리할 div를 추가합니다. */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                // Webkit 브라우저 호환성을 위해 추가
                WebkitBackdropFilter: 'blur(10px)',
                backdropFilter: 'blur(10px)',
                zIndex: 0, // 콘텐츠보다 아래에 위치하도록 z-index 설정
            }}/>
            {/* 1. 고정된 왼쪽 검은색 사이드 바 */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '348px',
                height: '100%',
                backgroundColor: '#000000',
            }} className='flex items-center justify-center'>
              <img
                src="/images/content/uiframe.png"
                className='absolute w-[250px]'
              />
            </div>

            {/* 2. 스크롤되는 오른쪽 콘텐츠 영역 */}
            <div style={{
                position: 'absolute',
                left: '348px',
                top: 0,
                width: 'calc(100% - 348px)',
                height: '100%',
                overflow: 'hidden',
            }}>
                <div className="flex items-center h-full">
                    {/* GSAP이 이 track을 수평으로 움직입니다. */}
                    <div ref={ref} className="flex gap-8 px-12">
                        {cardData.map((data, index) => (
                            // 각 카드의 컨테이너
                            <div key={index} className="w-[897px] h-[430px] flex-shrink-0 relative">
                                {/* 반투명 배경 및 그래디언트 테두리 */}
                                <div
                                    className="bg-white/10 rounded-[15px] border-2 border-solid w-full h-[342px] absolute left-1/2 top-[88px] -translate-x-1/2 backdrop-blur-sm p-8 flex items-center justify-between"
                                    style={{
                                      borderImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.23) 0%, rgba(134, 134, 134, 0.23) 100%)",
                                      borderImageSlice: 1,
                                    }}
                                >
                                    {/* 왼쪽 텍스트 영역 */}
                                    <div className="flex flex-col justify-center h-full text-white">
                                        <div className="text-3xl font-extrabold leading-tight text-left font-suit">
                                            <span className="text-green-400">{data.mainFeatureText}</span>
                                            <span>{data.mainFeatureHighlight}</span>
                                        </div>
                                        <p 
                                            className="mt-6 text-base font-medium leading-loose text-left font-suit"
                                            dangerouslySetInnerHTML={{ __html: data.description }}
                                        />
                                    </div>

                                    {/* 오른쪽 그래프 이미지 플레이스홀더 */}
                                    <div className="w-[400px] h-[250px] flex-shrink-0">
                                        <img src={data.graphImageSrc} alt="반복노출" className="object-contain w-full h-full rounded-lg"/>
                                    </div>
                                </div>
                                
                                {/* 카드 상단 타이틀 */}
                                <div className="absolute top-0 w-full text-3xl font-bold text-left text-white">
                                    {data.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

HorizontalScrollSection.displayName = 'HorizontalScrollSection';

// =======================================================================
// 메인 컴포넌트: 부모로부터 progress 값을 받아 애니메이션을 '수동'으로 제어
// =======================================================================
interface StickyEyeCatchProps {
  progress: number;
}

export default function StickyEyeCatch({ progress }: StickyEyeCatchProps) {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // GSAP 타임라인을 저장하기 위한 ref
  const tl = useRef<gsap.core.Timeline | null>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current!;
    // track이 렌더링되지 않았을 경우를 대비한 방어 코드
    if (!track) return;
    const scrollAmount = track.scrollWidth - track.offsetWidth;
    const overscroll = window.innerWidth * 0.5;
    const totalScroll = scrollAmount + overscroll;

    // ✅ GSAP 타임라인을 한 번만 생성합니다.
    // paused: true로 설정하여 자동 재생을 막습니다.
    tl.current = gsap.timeline({ paused: true });
    
    tl.current
      // ✅ 1. '대기' 단계: 이 시간 동안 첫 번째 섹션이 계속 보입니다.
      .to({}, { duration: 1 }) // duration 값을 조절해 보이는 시간을 변경할 수 있습니다.
      // 2. '전환' 단계: 첫 번째 섹션이 사라지고 두 번째 섹션이 나타납니다.
      .to(firstSectionRef.current, { opacity: 0, duration: 1.5 })
      .to(secondSectionRef.current, { opacity: 1, duration: 1.5 }, "<") // "<" 기호는 앞의 애니메이션과 동시에 시작하라는 의미입니다.
      // 3. '가로 스크롤' 단계
      .to(track, {
        x: -totalScroll,
        ease: "none",
        duration: 4,
      });

    return () => {
      tl.current?.kill();
    };
  }, []);

  // ✅ 부모로부터 받은 progress 값이 변경될 때마다 실행됩니다.
  useEffect(() => {
    if (tl.current) {
      // 타임라인의 진행 상태를 progress 값에 맞춰 수동으로 업데이트합니다.
      tl.current.progress(progress);
    }
  }, [progress]);

  return (
    <>
      <div className="relative hidden w-full h-[1000px] overflow-hidden md:block">
        <img src="/images/content/catchbg.png" alt="배경" className="absolute top-0 left-0 object-cover w-full h-full" />
        
        <div ref={firstSectionRef} className="absolute top-0 left-0 w-full h-full">
          <FirstSectionUI />
        </div>

        {/* 두 번째 섹션은 초기에 투명하게 설정합니다. */}
        <div ref={secondSectionRef} className="absolute top-0 left-0 w-full h-full opacity-0">
          <HorizontalScrollSection ref={trackRef} />
        </div>
      </div>

      <div className='w-full h-[1700px] md:hidden flex items-center justify-center flex-col gap-12'>
        <div className='w-[261px] h-[626px]'>
          <img
            src="/images/mobile/mobilecontent1.png"
            alt='바이오애드'
            className='w-[261px] h-[626px] object-fill'
          />
        </div>
        <div className='w-[324px] h-[461px]'>
          <img
            src="/images/mobile/mobilecontent2.png"
            alt='바이오애드'
            className='w-[324px] h-[461px] object-fill'
          />
        </div>
        <div className='w-[320px] h-[400px]'>
          <img
            src="/images/mobile/mobilecontent3.png"
            alt='바이오애드'
            className='w-[320px] h-[400px] object-fill'
          />
        </div>
      </div>
    </>
  );
}
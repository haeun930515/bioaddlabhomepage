'use client';

import React, { useLayoutEffect, useRef, forwardRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const glassBoxStyle: React.CSSProperties = {
    position: 'absolute',
    left: '60.4%', 
    top: '18.7%',  
    width: '400px',
    height: '550px',  
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


const FirstSectionUI: React.FC = () => {
  const screenImages = {
    button1: '/images/content/uiexample1.png', 
    button2: '/images/content/uiexample2.png', 
    button3: '/images/content/uiexample3.png', 
  };

  const [activeScreen, setActiveScreen] = useState(screenImages.button1);
  const [isFading, setIsFading] = useState(false);

  const handleScreenChange = (newScreen: string) => {
    if (newScreen === activeScreen) return; 
    
    setIsFading(true); 

    setTimeout(() => {
      setActiveScreen(newScreen);
      setIsFading(false);
    }, 300); 
  };

  return (
    <div className="relative w-full h-full">
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
      <div style={glassBoxStyle}>
        <img 
          src={activeScreen} 
          alt="UI 화면 예시" 
          className={`screen-image-dynamic ${isFading ? 'screen-image-fading-out' : ''}`} 
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '90%', height: '90%', objectFit: 'contain'
          }} 
        />
      </div>
      <MoreButton 
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
};const HorizontalScrollSection = forwardRef<HTMLDivElement, { blurRef: React.Ref<HTMLDivElement> }>(({ blurRef }, ref) => {
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
    ];

    return (
        <div className="relative w-full h-full">
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

            <div style={{
                position: 'absolute',
                left: '348px',
                top: 0,
                width: 'calc(100% - 348px)',
                height: '100%',
                overflow: 'hidden',
            }}>
                <div className="flex items-center h-full">
                    
                    <div ref={ref} className="flex gap-8 px-12">
                        {cardData.map((data, index) => (
                            <div key={index} className="w-[897px] h-[430px] flex-shrink-0 relative">
                                <div
                                    className="bg-white/10 rounded-[15px] border-2 border-solid w-full h-[342px] absolute left-1/2 top-[88px] -translate-x-1/2 backdrop-blur-sm p-8 flex items-center justify-between"
                                    style={{
                                      borderImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.23) 0%, rgba(134, 134, 134, 0.23) 100%)",
                                      borderImageSlice: 1,
                                    }}
                                >
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

                                    <div className="w-[400px] h-[250px] flex-shrink-0">
                                        <img src={data.graphImageSrc} alt="반복노출" className="object-contain w-full h-full rounded-lg"/>
                                    </div>
                                </div>
                                
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

interface StickyEyeCatchProps {
  progress: number;
}

export default function StickyEyeCatch({ progress }: StickyEyeCatchProps) {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current!;
    if (!track) return;
    const scrollAmount = track.scrollWidth - track.offsetWidth;
    const overscroll = window.innerWidth * 0.5;
    const totalScroll = scrollAmount + overscroll;

    tl.current = gsap.timeline({ paused: true });
    
    tl.current
      .to({}, { duration: 1 })
      .to(firstSectionRef.current, { opacity: 0, duration: 1.5 })
      .to(secondSectionRef.current, { opacity: 1, duration: 1.5 }, "<") 
      .to(track, {
        x: -totalScroll,
        ease: "none",
        duration: 4,
      });

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (tl.current) {
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

        <div ref={secondSectionRef} className="absolute top-0 left-0 w-full h-full opacity-0">
          <HorizontalScrollSection ref={trackRef}  blurRef={blurRef}  />
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
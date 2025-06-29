'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function ServicePage() {
  const containerRef = useRef(null);
  // useScroll 훅을 하나로 통일합니다.
  // 이제 전체 컴포넌트의 스크롤 진행 상황을 추적합니다.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [selectedTheme, setSelectedTheme] = useState<'white' | 'black'>('white');

  const desktopImages =
    selectedTheme === 'white'
      ? ['/images/solution/white1.png', '/images/solution/white2.png', '/images/solution/white3.png', '/images/solution/white4.png', '/images/solution/white5.png', '/images/solution/white6.png']
      : ['/images/solution/black1.png', '/images/solution/black2.png', '/images/solution/black3.png', '/images/solution/black4.png', '/images/solution/black5.png', '/images/solution/black6.png'];

  const mobileImages =
    selectedTheme === 'white'
      ? [
          '/images/solution/mobilewhite1.png',
          '/images/solution/mobilewhite2.png',
          '/images/solution/mobilewhite3.png',
          '/images/solution/white4.png',
          '/images/solution/white5.png',
          '/images/solution/white6.png',
        ]
      : [
          '/images/solution/mobileblack1.png',
          '/images/solution/mobileblack2.png',
          '/images/solution/mobileblack3.png',
          '/images/solution/black4.png',
          '/images/solution/black5.png',
          '/images/solution/black6.png',
        ];

  const total = desktopImages.length;
  // 이미지 opacity 애니메이션도 통합된 scrollYProgress를 사용합니다.
  const opacities = desktopImages.map((_, i) =>
    useTransform(scrollYProgress, [(i - 0.5) / total, i / total, (i + 0.5) / total], [0, 1, 0])
  );

  const titleOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);

  return (
  <div ref={containerRef} className="relative sm:h-[600vh] text-white">
    <div className='h-[90vh] text-white snap-start snap-always hidden sm:block'>
      </div>
    <div className='h-[85vh] text-white snap-start snap-always hidden sm:block'>
      </div>
    <div className='h-[81vh] text-white snap-start snap-always hidden sm:block'>
      </div>
    <div className='h-[81vh] text-white snap-start snap-always hidden sm:block'>
      </div>
      <div className='h-[80vh] text-white snap-start snap-always hidden sm:block'>
      </div>
      <div className='h-[80vh] text-white snap-start snap-always hidden sm:block'>
      </div>
      <div className='h-[215vh] text-white snap-end snap-always hidden sm:block'>
      </div>
      <div
        className="fixed top-0 left-0 z-0 w-screen h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/images/solution/solutionbg.png')" }}
      />
      
      <motion.div
        style={{ opacity: titleOpacity }}
        className="hidden fixed top-40 left-1/2 z-30 text-center -translate-x-1/2 sm:block"
      >
        <h2 className="text-2xl font-extrabold text-green-400 sm:text-3xl md:text-4xl">
          BIOADDLAB SMART BOARD
        </h2>
        <h3 className="mt-2 text-sm font-semibold tracking-widest text-white sm:text-base md:text-xl">
          TECHNOLOGY
        </h3>
      </motion.div>

      <div className="fixed z-50 flex flex-col gap-3 top-[80vh] right-4 sm:right-8 md:right-12 lg:right-20">
        <motion.button
          onClick={() => setSelectedTheme('white')}
          className={`w-7 h-7 rounded-full border border-white bg-white shadow-md ${
            selectedTheme === 'white' ? 'ring-2 ring-green-400' : ''
          }`}
          style={{ opacity: titleOpacity }}
          aria-label="Switch to white theme"
        />
        <motion.button
          onClick={() => setSelectedTheme('black')}
          className={`w-7 h-7 rounded-full border border-white bg-black shadow-md ${
            selectedTheme === 'black' ? 'ring-2 ring-green-400' : ''
          }`}
          style={{ opacity: titleOpacity }}
          aria-label="Switch to black theme"
        />
      </div>

      <motion.div
        className="
          hidden sm:flex
          fixed top-[550px] left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90vw] max-w-[700px] h-auto
          rounded-2xl overflow-hidden z-20 items-center justify-center
        "
      >
        <div className="relative w-full aspect-[7/6] ">
          {desktopImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="object-contain absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              style={{ opacity: opacities[i] }}
            />
          ))}
        </div>
      </motion.div>


      {/* --- 모바일 뷰 (변경 없음) --- */}
      <div className="block relative z-10 px-4 pt-20 pb-40 space-y-16 sm:hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-lg font-bold leading-snug text-green-400">
            BIOADDLAB <br /> SMART BOARD
          </h2>
          <h3 className="mt-1 text-xs font-semibold tracking-wider text-white">
            TECHNOLOGY
          </h3>
        </div>

        {mobileImages.map((src, i) => (
          <div key={i} className="flex flex-col gap-4 items-center">
            <img src={src} alt={`mobile-image-${i}`} className="w-[240px] h-auto rounded-xl" />
            {i === 0 && (
              <>
                <div className="mb-2 text-base font-bold text-center text-green-400">광활한 43인치 세로형<br />대형 디스플레이</div>
                <div className="w-[240px] mx-auto px-4 py-4 text-left text-white text-xs leading-relaxed space-y-1 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/5">
                  <div className="mb-2 font-bold text-center text-green-400">헬스케어<br />SMART BOARD 시스템</div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>병원별 맞춤형 디지털 사이니지</li>
                    <li>광고+병원 안내+<br />환자 커뮤니케이션 통합</li>
                    <li>병원 내 스마트보드에서<br />카카오 실손보험 청구 연계 지원</li>
                    <li>환자 편의성 강화, 병원 업무 부담 경감</li>
                  </ul>
                </div>
              </>
            )}
            {i === 1 && (
              <>
                <ul className="mb-3 space-y-1 text-left text-gray-200 text-[13px] list-disc list-inside">
                  <li>
                    성별, 연령, 시선 등 측정<br />
                    <span className="text-green-400 font-semibold ml-[-1.2em] block pl-4">노출 효과 분석</span>
                  </li>
                  <li>
                    스마트보드 유일<br />
                    <span className="text-green-400 font-semibold ml-[-1.2em] block pl-4">카카오 실손보험청구 연계</span>
                  </li>
                </ul>
                <div className="w-[240px] mx-auto px-4 py-4 rounded-2xl border border-green-300/70 backdrop-blur-md bg-white/10">
                  <div className="font-bold text-center text-green-400 text-[15px] mb-3">카메라를 통한<br />AI Vital Sign 측정</div>
                  <ul className="mt-2 space-y-1 text-left text-white text-[12px] pl-4">
                    <li className="relative" style={{listStyle:'none'}}><span className="absolute left-[-1.2em] text-green-200">●</span>카메라로 원격 생체데이터 측정 통한<br />혈압, 산소포화도, 심박수 등의 측정</li>
                    <li className="relative" style={{listStyle:'none'}}><span className="absolute left-[-1.2em] text-green-200">●</span>피부나이, 산소포화도 등<br />분과별 기술 Customize</li>
                  </ul>
                </div>
              </>
            )}
            {i === 2 && (
              <>
                <ul className="mb-3 space-y-1 text-left text-gray-200 text-[13px] list-disc list-inside">
                  <li>
                    측정 카메라를 통한<br />
                    <span className="text-green-400 font-semibold ml-[-1.2em] block pl-4">광고 성과 측정</span>
                  </li>
                  <li>
                    비접촉 카메라로<br />
                    <span className="text-green-400 font-semibold ml-[-1.2em] block pl-4">생체데이터 측정</span>
                  </li>
                </ul>
                <div className="w-[240px] mx-auto px-4 py-4 rounded-2xl border border-green-300/70 backdrop-blur-md bg-white/10">
                  <div className="font-bold text-center text-green-400 text-[15px] mb-2">AI 기반 공간 분석 솔루션</div>
                  <ul className="mb-3 space-y-1 text-left text-white text-[12px] pl-4">
                    <li className="relative" style={{listStyle:'none'}}><span className="absolute left-[-1.2em] text-green-200">●</span>성별/연령/인원수/행동<br />패턴 데이터 수집</li>
                    <li className="relative" style={{listStyle:'none'}}><span className="absolute left-[-1.2em] text-green-200">●</span>AI 분석으로 유형별 맞춤 정보 제공<br />(광고/건강정보)</li>
                  </ul>
                  <div className="font-bold text-center text-green-400 text-[15px] mb-2">EMR 연계 SaaS 플랫폼<br />(준비 중)</div>
                  <ul className="space-y-1 text-left text-white text-[12px] pl-4">
                    <li className="relative" style={{listStyle:'none'}}><span className="absolute left-[-1.2em] text-green-200">●</span>병원 EMR 데이터 연동 ⟶<br />개인 맞춤형 건강정보 제공</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
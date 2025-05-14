'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const contentItems = [
  { brand: 'BLACK FORET', file: 'content_blackforet.mp4' },
  { brand: '세라젬', file: 'content_cerazem.mp4' },
  { brand: '닥터그루트', file: 'content_drgroot.mp4' },
  { brand: '밀세라', file: 'content_milcera.mp4' },
  { brand: '플랜트제로', file: 'content_plantzero.mp4' },
  { brand: '프라엘', file: 'content_prel.mp4' },
  { brand: '로게인폼', file: 'content_rogaine.mp4' },
  { brand: '타이레놀', file: 'content_tyrenol.mp4' },
  { brand: 'VT코스메틱', file: 'content_vtcosmetic.mp4' },
];

export default function CustomSlider() {
  const [centerIndex, setCenterIndex] = useState(2);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const total = contentItems.length;

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === centerIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [centerIndex]);

  const getWrappedIndex = (index: number) => {
    return (index + total) % total;
  };

  const renderSlides = () => {
    const slides = [];
    for (let offset = -2; offset <= 2; offset++) {
      const idx = getWrappedIndex(centerIndex + offset);
      const isCenter = offset === 0;

      const style = {
        transform: `translateX(${offset * 130}px) scale(${isCenter ? 1.2 : 0.8}) translateY(${Math.abs(offset) * 60}px)`,
        zIndex: isCenter ? 20 : 10,
      };

      slides.push(
        <div
          key={idx}
          className={`absolute top-0 left-0 ml-[calc(50%-90px)] transition-all duration-300 w-[180px] aspect-[10/16] ${
            isCenter ? 'opacity-100 blur-none w-[250px]' : 'opacity-100 blur-sm'
          }`}
          style={style}
        >
          <video
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            
            src={`/videos/${contentItems[idx].file}`}
            muted
            playsInline
            className="object-cover w-full h-full rounded"
          />
        </div>
      );
    }
    return slides;
  };

  const handlePrev = () => {
    setCenterIndex((prev) => getWrappedIndex(prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => getWrappedIndex(prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-[120px]">
      {/* 상단 제목 */}
      <div className="z-10 text-center h-[300px] flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold text-green-400">BIOADDLAB CONTENT</h2>
        <p className="mt-2 text-lg text-white">
          유익한 혜택이 가득한 메디컬 스마트보드만의 콘텐츠를 만나보세요
        </p>
      </div>

      {/* ✅ 배경 이미지 */}
      <div
        className="absolute left-0 z-0 w-screen h-screen bg-center bg-cover top-[500px]"
        style={{
          backgroundImage: "url('/images/content/contentbg.png')",
        }}
      />
      {/* 슬라이더 */}
      <div className="relative w-full max-w-[800px] h-[480px] overflow-visible -pl-24 mt-12">
        {renderSlides()}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-30 flex items-center justify-center w-8 h-8 text-white -translate-y-1/2 border border-white rounded-full top-1/2"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 z-30 flex items-center justify-center w-8 h-8 text-white -translate-y-1/2 border border-white rounded-full top-1/2"
        >
          {'>'}
        </button>
      </div>

      {/* 브랜드명 */}
      <div className="z-10 mt-16 text-lg font-medium text-white">
        Brand {contentItems[centerIndex].brand}
      </div>

      {/* 아이캐치 장치 이미지 */}
      <div className="flex flex-col items-center w-full mt-[400px] z-10">
        <p className="mb-24 text-4xl text-center text-white">
          타겟의 시선고정을 위한 <span className="font-semibold text-green-400">아이캐치</span> 장치
        </p>
        <img
          src="/images/content/content-kiosk.png"
          alt="아이캐치 장치 설명 이미지"
          className="w-full max-w-[800px] h-auto"
        />
      </div>

      {/* 진료대기시간 그래프 + 설명 */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-4 mt-48 md:flex-row">
        <div className="relative w-full max-w-md aspect-[4/3]">
          <Image
            src="/images/content/content-graph.png"
            alt="진료대기시간 그래프"
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-md text-sm leading-relaxed text-white">
          <p className="mb-2 text-xl font-normal text-white">대한민국 병의원 진료대기 시간 분포</p>
          <h3 className="mb-1 text-4xl font-bold text-white">진료대기시간</h3>
          <p ref={ref1} className="mb-4 text-4xl font-bold text-green-400">
            {inView1 ? <CountUp end={18} duration={2} /> : '0'}분
          </p>
          <p className="mb-1">병원 대기실에서는 환자들이 평균 18분 이상 머무르며,</p>
          <p className="mb-1">실시간 대기순번 표시 화면을 주시하게 되어 광고 회피가 어려워</p>
          <p className="mb-1">바이오애드랩의 스마트보드는 지하철, 엘리베이터,</p>
          <p>SNS 등 다른 매체보다 광고 인지도가 높습니다.</p>
        </div>
      </div>

      {/* 광고 반복 노출 + 설명 */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-4 mt-32 md:flex-row-reverse">
        <div className="relative w-full max-w-md aspect-[4/3]">
          <Image
            src="/images/content/content-graph2.png"
            alt="광고 반복 노출 그래프"
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-md text-sm leading-relaxed text-white">
          <p className="mb-2 text-xl text-white">대기환자 시간 별 광고 반복 노출 횟수</p>
          <h3 className="mb-1 text-4xl font-bold text-white">광고 반복 노출</h3>
          <p ref={ref2} className="mb-4 text-4xl font-bold text-green-400">
            {inView2 ? <CountUp end={6} duration={2} /> : '0'}회
          </p>
          <p className="mb-1">환자의 보호자는 '환자'가 아닌 건강·미용·보험·금융 등에</p>
          <p className="mb-1">관심이 높고 구매력 있는 핵심 타깃입니다.</p>
          <p>그들에게 대기시간 18분동안 평균 6회 이상의 반복 노출로</p>
          <p>확실한 광고 효과를 기대할 수 있습니다.</p>
        </div>
      </div>
      <div className="h-40" /> 
    </div>
  );
}

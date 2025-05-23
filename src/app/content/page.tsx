'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const contentItems = [
  { brand: 'BLACK FORET', file: 'content_blackforet.mp4' },
  { brand: '로게인폼', file: 'content_rogaine.mp4' },
  { brand: '타이레놀', file: 'content_tyrenol.mp4' },
  { brand: '세라젬', file: 'content_cerazem.mp4' },
  { brand: '닥터그루트', file: 'content_drgroot.mp4' },
  { brand: '밀세라', file: 'content_milcera.mp4' },
  { brand: '플랜트제로', file: 'content_plantzero.mp4' },
  { brand: '프라엘', file: 'content_prel.mp4' },
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
        transform: `translateX(${offset * 130}px) scale(${
          isCenter ? 1.2 : Math.abs(offset) === 1 ? 1 : 0.8
        }) translateY(${Math.abs(offset) * 60}px)`,
        zIndex: isCenter ? 20 : Math.abs(offset) === 1 ? 15 : 10,
      };

      slides.push(
        <div
          key={idx}
          className={`absolute top-0 left-0 ml-[calc(50%-90px)] transition-all duration-300 w-[180px] aspect-[11/16] ${
            isCenter ? 'opacity-100 blur-none w-[240px]' : 'opacity-100 blur-sm'
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black pt-[120px] overflow-x-hidden">
      <div className="z-10 text-center h-[300px] flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold text-green-400">BIOADDLAB CONTENT</h2>
        <p className="mt-2 text-lg text-white">
          유익한 혜택이 가득한 메디컬 스마트보드만의 콘텐츠를 만나보세요
        </p>
      </div>

      <div className="relative z-0 pt-24 w-full">
        <div
          className="absolute inset-0 bg-center bg-cover -z-10 mt-32 h-[1000px] w-full"
          style={{ backgroundImage: "url('/images/content/contentbg.png')" }}
        />
        <div className="relative w-full max-w-[800px] h-[480px] mx-auto">
          {renderSlides()}
          <button
            onClick={handlePrev}
            className="flex absolute left-0 top-1/2 z-30 justify-center items-center w-8 h-8 text-white rounded-full border border-white -translate-y-1/2"
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className="flex absolute right-0 top-1/2 z-30 justify-center items-center w-8 h-8 text-white rounded-full border border-white -translate-y-1/2"
          >
            {'>'}
          </button>
        </div>
      </div>

      <div className="z-10 mt-16 text-lg font-medium text-white">
        Brand {contentItems[centerIndex].brand}
      </div>

      {/* 아이캐치 장치 이미지 */}
      <div className="flex flex-col items-center w-full mt-[400px] z-10">
        <p className="mb-24 text-2xl text-center text-white md:text-4xl">
          타겟의 시선고정을 위한 <span className="font-semibold text-green-400">아이캐치</span> 장치
        </p>
        <img
          src="/images/content/content-kiosk.png"
          alt="아이캐치 장치 설명 이미지"
          className="w-full max-w-[800px] h-auto"
        />
      </div>

      {/* 진료대기시간 그래프 + 설명 */}
      <div className="flex flex-col gap-12 justify-center items-center px-4 mt-48 w-full max-w-6xl md:flex-row">
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
      <div className="flex flex-col gap-12 justify-center items-center px-4 mt-32 w-full max-w-6xl md:flex-row-reverse">
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
{/* ✅ 데스크탑 전용 비디오 영역 */}
<div className="hidden relative mt-24 w-full md:block">
  {/* 비디오 */}
  <video
    src="/videos/collection.mp4"
    autoPlay
    muted
    playsInline
    className="object-cover w-full h-auto aspect-video"
  />

  {/* 텍스트 오버레이 */}
<div className="flex absolute inset-0 justify-center items-center text-center">
  <div className="text-4xl font-extrabold leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
    지금도 많은 <span className="text-green-400">병원과 브랜드가</span><br />
    <span className="text-green-400">바이오애드랩과 함께</span>하고 있습니다
  </div>
</div>
</div>


    </div>
  );
}

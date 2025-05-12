'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function ServicePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [selectedTheme, setSelectedTheme] = useState<'white' | 'black'>('white');

  const whiteImages = Array.from({ length: 6 }, (_, i) => `/images/solution/white${i + 1}.png`);
  const blackImages = Array.from({ length: 6 }, (_, i) => `/images/solution/black${i + 1}.png`);
  const images = selectedTheme === 'white' ? whiteImages : blackImages;
  const total = images.length;

  // 이미지 페이드 전환
  const opacities = images.map((_, i) =>
    useTransform(scrollYProgress, [(i - 1) / total, i / total, (i + 1) / total], [0, 1, 0])
  );

  // 상단 타이틀 페이드아웃
  const titleOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] text-white overflow-hidden">

      {/* ✅ 배경 이미지 */}
      <div
        className="fixed top-0 left-0 z-0 w-screen h-screen bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/solution/solutionbg.png')",
        }}
      />

      {/* ✅ 상단 타이틀 */}
      <motion.div
        style={{ opacity: titleOpacity }}
        className="fixed z-20 text-center -translate-x-1/2 top-32 left-1/2"
      >
        <h2 className="text-3xl font-bold text-green-400">BIOADDLAB SMART BOARD</h2>
        <h3 className="mt-1 text-xl font-semibold tracking-widest text-white">TECHNOLOGY</h3>
      </motion.div>

      {/* ✅ 반응형 테마 전환 버튼 */}
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
          fixed top-[550px] left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[90vw] max-w-[700px] h-[500px] sm:h-[600px] md:h-[700px]
          rounded-2xl overflow-hidden z-10 flex items-center justify-center
        "
      >
        <div className="relative w-full h-full">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`slide ${i}`}
              className="absolute object-contain max-w-full max-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              style={{ opacity: opacities[i] }}
            />
          ))}
        </div>
      </motion.div>


      {/* ✅ 푸터 공간 확보 */}
      <div className="h-[400vh]" />
    </div>
  );
}

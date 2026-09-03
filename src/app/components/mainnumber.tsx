'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    label: '인프라 구축',
    end: 1200,
    unit: '개+',
    description: '협력 병·의원',
    citeText: '전국 1,200개 이상 병·의원에 AI 스마트보드 운영',
  },
  {
    label: '데이터 분석 규모',
    end: 5000,
    unit: '명+',
    description: '의료진 네트워크',
    citeText: '5,000명 이상 의료진·전문가 네트워크 데이터 분석',
  },
  {
    label: '월간 분석 타겟',
    end: 1500000,
    unit: '명+',
    description: '유효 소비자',
    citeText: '월 150만 명 이상 유효 의료 소비자 행동 데이터 분석',
  },
  {
    label: 'AI 미디어 스크린',
    end: 5280000,
    unit: '회+',
    description: '월간 센싱 노출',
    citeText: '월 528만 회 이상 AI 시선·센싱 노출 데이터 수집',
  },
] as const;

const statsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '바이오애드랩 AI 스마트보드·메디컬 마케팅 핵심 지표',
  description:
    '바이오애드랩(BioAddLab)은 전국 병·의원 AI 스마트보드 네트워크와 의료 소비자 행동 데이터를 기반으로 메디컬 OOH 광고와 병원 디지털 마케팅 성과를 측정합니다.',
  itemListElement: stats.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    description: item.citeText,
  })),
};

type StatItem = (typeof stats)[number];

function StatCard({
  item,
  index,
  variant,
}: {
  item: StatItem;
  index: number;
  variant: 'desktop' | 'mobile';
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  if (variant === 'desktop') {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="group relative flex h-full min-h-[228px] w-full flex-col items-center overflow-hidden rounded-xl border border-[#868686] bg-white/10 p-5 text-center text-white backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#66E274]/70 hover:shadow-[0_0_32px_rgba(102,226,116,0.15)]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(102,226,116,0.12) 0%, transparent 65%)',
          }}
        />

        <h3 className="relative flex min-h-[56px] w-full items-center justify-center text-xl font-bold leading-snug break-keep">
          {item.label}
        </h3>

        <div className="relative mt-1 flex w-full flex-1 flex-col items-center">
          <div className="flex h-[44px] items-center justify-center gap-1">
            <p className="text-[28px] font-extrabold leading-none tabular-nums text-[#66E274] xl:text-3xl">
              {inView ? <CountUp end={item.end} duration={2.2} separator="," /> : '0'}
            </p>
            <span className="font-suit text-[28px] font-extrabold leading-none xl:text-3xl">
              {item.unit}
            </span>
          </div>

          <p className="mt-1 min-h-[20px] text-sm font-bold text-gray-300">{item.description}</p>

          <p className="mt-auto min-h-[40px] pt-3 text-xs leading-5 text-gray-400 break-keep">
            {item.citeText}
          </p>
        </div>
      </motion.article>
    );
  }

  if (variant === 'mobile') {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden rounded-2xl border border-[#3a3a3a] bg-white/10 p-4 text-center text-white backdrop-blur-sm"
      >
        <h3 className="text-[14px] font-bold leading-snug text-gray-300 break-keep">
          {item.label}
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-1 gap-y-0">
          <p className="text-[clamp(1.125rem,5vw,1.375rem)] font-extrabold leading-none tabular-nums text-[#66E274]">
            {inView ? <CountUp end={item.end} duration={2.2} separator="," /> : '0'}
          </p>
          <span className="font-suit text-[clamp(1rem,4.5vw,1.25rem)] font-extrabold leading-none">
            {item.unit}
          </span>
        </div>

        <p className="mt-1 text-[12px] font-bold text-gray-300">{item.description}</p>

        <p className="mt-2 text-[11px] leading-[1.6] text-gray-400 break-keep">
          {item.citeText}
        </p>
      </motion.article>
    );
  }

  return null;
}

export default function MainNumber() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { ref: inViewRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);

    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.92', 'start 0.35'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  const startWidth = prefersReducedMotion ? 100 : isMobile ? 88 : 50;
  const contentWidth = useTransform(smoothProgress, (progress) => {
    const width = startWidth + progress * (100 - startWidth);
    return `${width}%`;
  });
  const contentOpacity = useTransform(smoothProgress, [0, 0.4, 1], [0.88, 0.96, 1]);

  return (
    <section
      ref={setSectionRef}
      aria-labelledby="main-number-heading"
      className="relative z-10 flex w-full flex-col justify-center overflow-hidden py-10 text-white md:min-h-[600px] md:px-4 md:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 right-0 -z-10 hidden justify-center md:flex"
      >
        <motion.div
          style={{ width: contentWidth, opacity: contentOpacity }}
          className="relative h-full overflow-hidden will-change-[width,opacity]"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/components/main1.mp4"
            autoPlay
            playsInline
            loop
            muted
          />
        </motion.div>
      </div>

      <div className="z-10 flex w-full justify-center py-2 md:min-h-[600px] md:px-4 md:py-16">
        <motion.div
          style={{ width: contentWidth, opacity: contentOpacity }}
          className="mx-auto flex w-full flex-col items-center will-change-[width,opacity]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col items-center px-2 text-center md:px-4"
          >
            <p className="font-suit text-[10px] font-bold tracking-[0.12em] text-[#66E274] sm:text-[11px] md:text-[13px] md:tracking-[0.14em]">
              BIOADDLAB INFRASTRUCTURE METRICS
            </p>

            <h2
              id="main-number-heading"
              className="z-10 mt-3 text-[18px] font-bold leading-snug break-keep sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl"
            >
              전국적인 메디컬 인프라를 바탕으로
              <br />
              의료 소비자의 니즈를 가장 깊이 연구합니다
            </h2>

            <p className="mt-3 max-w-[760px] text-[13px] leading-6 text-gray-300 break-keep sm:text-sm sm:leading-7 md:mt-0 md:text-base">
              <strong className="font-bold text-white">바이오애드랩(BioAddLab)</strong>은 전국
              병·의원 AI 스마트보드 네트워크와 의료진·환자 행동 데이터를 결합해, 메디컬 OOH
              광고 성과와 병원 SEO·AEO 디지털 마케팅을 데이터로 측정합니다.
            </p>
          </motion.div>

          <div className="mt-8 hidden w-full grid-cols-2 items-stretch gap-4 px-2 font-suit sm:px-4 md:grid xl:grid-cols-4">
            {stats.map((item, i) => (
              <StatCard key={item.label} item={item} index={i} variant="desktop" />
            ))}
          </div>

          <div className="mt-5 flex w-full flex-col gap-3 px-2 md:hidden">
            {stats.map((item, i) => (
              <StatCard key={item.label} item={item} index={i} variant="mobile" />
            ))}
          </div>

          <p className="sr-only">
            바이오애드랩 핵심 지표: 전국 1,200개 이상 협력 병·의원 AI 스마트보드, 5,000명 이상
            의료진 네트워크, 월 150만 명 이상 유효 의료 소비자 분석, 월 528만 회 이상 AI 센싱
            노출 데이터.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

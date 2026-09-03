'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const revealEase = [0.16, 1, 0.3, 1] as const;
const revealTransition: Transition = { duration: 0.85, ease: revealEase };

const trackSections = [
  {
    id: 'smartboard-ooh',
    eyebrow: 'TRACK 01 · AI SMARTBOARD OOH MEDIA',
    title: (
      <>
        원내 옥외광고의 성과를 데이터로
        <br />
        증명합니다.
      </>
    ),
    image: '/images/content/content-kiosk.png',
    imageAlt: '바이오애드랩 AI 스마트보드 옥외광고 측정 기능',
    imageClassName: 'object-contain object-center p-8 md:p-10',
    body: '바이오애드랩의 AI 스마트보드는 병·의원 대기 공간에 설치된 43인치 미디어 인프라입니다. 단순 노출형 디스플레이를 넘어 카메라 기반 컴퓨터 비전으로 시선, 관심, 반응 데이터를 측정해 브랜드 광고주의 ROAS를 정량화합니다.',
    bullets: [
      '병·의원 대기실 기반 고관여 타겟 접점',
      '환자 시선·반응 데이터 기반 광고 효과 측정',
      '제약·헬스케어 브랜드를 위한 원내 미디어 네트워크',
    ],
  },
  {
    id: 'medical-marketing',
    eyebrow: 'TRACK 02 · MEDICAL GROWTH MARKETING',
    title: (
      <>
        병원의 디지털 유입 길목을
        <br />
        선점합니다.
      </>
    ),
    image: '/images/marketing-right.jpeg',
    imageAlt: '병원 디지털 유입·메디컬 마케팅 성장 전략',
    imageClassName: 'object-cover object-center',
    body: '스마트보드로 축적된 의료 소비자의 행동 데이터를 바탕으로 환자가 실제로 검색하고 비교하는 니즈를 분석합니다. 이를 병원별 포지셔닝, SEO, AEO, 로컬 지도 최적화, 콘텐츠 전략으로 연결해 원장님의 병원이 선택받는 구조를 만듭니다.',
    bullets: [
      '시장·환자 니즈 기반 병원 포지셔닝 설계',
      'SEO, AEO, 로컬 지도 최적화 중심 유입 전략',
      '원장님의 전문성과 병원 스토리를 살린 콘텐츠 마케팅',
    ],
  },
] as const;

type TrackSection = (typeof trackSections)[number];

function IntroHeader({ variant }: { variant: 'mobile' | 'desktop' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, filter: 'blur(12px)', y: 20 };
  const visible = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, filter: 'blur(0px)', y: 0 };

  if (variant === 'mobile') {
    return (
      <motion.div
        ref={ref}
        initial={hidden}
        animate={inView ? visible : hidden}
        transition={{ duration: 0.9, ease: revealEase }}
        className="mb-6 flex w-full flex-col justify-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.28em' }}
          animate={inView ? { opacity: 1, letterSpacing: '0.08em' } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: revealEase }}
          className="font-suit text-[13px] text-[#66E274] break-keep"
        >
          AI 기술이 읽은 환자의 니즈
        </motion.p>
        <h2 className="mt-2 font-suit text-[19px] font-extrabold leading-snug text-white break-keep [text-wrap:balance]">
          성공적인 메디컬 마케팅
          <br />
          생태계로 연결됩니다.
        </h2>
        <p className="mt-3 font-suit text-[12px] leading-[1.65] text-gray-300 break-keep [text-wrap:pretty]">
          바이오애드랩은 원내 AI 스마트보드 인프라와 고도화된 디지털 마케팅 기술을 결합하여, 메디컬
          시장의 새로운 패러다임을 제시합니다.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration: 0.9, ease: revealEase }}
      className="relative z-10 flex max-w-[920px] flex-col justify-center text-center text-white"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.32em' }}
        animate={inView ? { opacity: 1, letterSpacing: '0.12em' } : {}}
        transition={{ duration: 0.75, delay: 0.12, ease: revealEase }}
        className="font-suit text-[25px] text-[#66E274]"
      >
        AI 기술이 읽은 환자의 니즈
      </motion.p>
      <h2 className="mt-3 font-suit text-[30px] font-extrabold">
        성공적인 메디컬 마케팅 생태계로 연결됩니다.
      </h2>
      <p className="mt-5 font-suit text-[17px] leading-8 text-gray-300">
        바이오애드랩은 원내 AI 스마트보드 인프라와 고도화된 디지털 마케팅 기술을 결합하여 메디컬
        시장의 새로운 패러다임을 제시합니다.
      </p>
    </motion.div>
  );
}

function TrackImage({
  section,
  inView,
  variant,
}: {
  section: TrackSection;
  inView: boolean;
  variant: 'mobile' | 'desktop';
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const clipHidden = prefersReducedMotion
    ? { opacity: 0 }
    : { clipPath: 'inset(100% 0 0 0 round 0px)' };
  const clipVisible = prefersReducedMotion
    ? { opacity: 1 }
    : { clipPath: 'inset(0% 0 0 0 round 0px)' };

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden bg-black/30 ${
        variant === 'mobile' ? 'h-[240px] w-full' : 'h-full min-h-[360px] lg:min-h-[420px]'
      }`}
    >
      <motion.div
        initial={clipHidden}
        animate={inView ? clipVisible : clipHidden}
        transition={revealTransition}
        className="relative h-full w-full"
      >
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : parallaxY }}
          className={`relative w-full ${variant === 'desktop' ? 'h-[112%] -top-[6%]' : 'h-[108%] -top-[4%]'}`}
        >
          <Image src={section.image} alt={section.imageAlt} fill className={section.imageClassName} />
        </motion.div>
      </motion.div>
      <div
        className={`pointer-events-none absolute inset-0 ${
          variant === 'mobile'
            ? 'bg-gradient-to-t from-black/50 via-black/10 to-transparent'
            : 'bg-gradient-to-r from-black/35 via-transparent to-black/20'
        }`}
      />
    </div>
  );
}

function TrackCard({
  section,
  index,
  variant,
}: {
  section: TrackSection;
  index: number;
  variant: 'mobile' | 'desktop';
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 });
  const prefersReducedMotion = useReducedMotion();
  const textFromX = index % 2 === 0 ? 40 : -40;

  if (variant === 'mobile') {
    return (
      <motion.div
        ref={ref}
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.08, ease: revealEase }}
        className="w-full overflow-hidden rounded-2xl border border-[#555555] bg-white/[0.04] text-white backdrop-blur-lg"
      >
        <TrackImage section={section} inView={inView} variant="mobile" />
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18 + index * 0.08, ease: revealEase }}
          className="px-5 py-5"
        >
          <p className="text-[10px] font-bold tracking-[0.12em] text-[#66E274]">{section.eyebrow}</p>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.28 + index * 0.08, ease: revealEase }}
            className="mt-2 block h-px w-10 origin-left bg-[#66E274]/80"
          />
          <h3 className="mt-3 text-left text-[18px] font-extrabold leading-snug break-keep">
            {section.title}
          </h3>
          <p className="mt-3 text-left text-[12px] leading-[1.65] text-gray-300 break-keep">
            {section.body}
          </p>
          <ul className="mt-4 space-y-2">
            {section.bullets.map((bullet, bulletIndex) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.32 + index * 0.08 + bulletIndex * 0.07,
                  ease: revealEase,
                }}
                className="flex gap-2 text-[11px] leading-[1.55] text-gray-200 break-keep"
              >
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#66E274]" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <section
      ref={ref}
      className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-[#3a3a3a] bg-white/10 text-white backdrop-blur-lg lg:grid-cols-2"
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <TrackImage section={section} inView={inView} variant="desktop" />
      </div>

      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: textFromX, filter: 'blur(6px)' }
        }
        animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: revealEase }}
        className="flex flex-col justify-center px-8 py-10 lg:px-12"
      >
        <p className="font-suit text-[13px] font-bold tracking-[0.16em] text-[#66E274]">
          {section.eyebrow}
        </p>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.35, ease: revealEase }}
          className="mt-3 block h-px w-16 origin-left bg-[#66E274]"
        />
        <h3 className="mt-5 text-left font-suit text-[28px] font-extrabold leading-tight break-keep lg:text-[34px]">
          {section.title}
        </h3>
        <p className="mt-6 text-left font-suit text-[16px] leading-8 text-gray-300">{section.body}</p>
        <ul className="mt-7 space-y-3">
          {section.bullets.map((bullet, bulletIndex) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.42 + bulletIndex * 0.08,
                ease: revealEase,
              }}
              className="flex gap-3 font-suit text-[15px] leading-6 text-gray-100"
            >
              <span className="mt-[9px] h-2 w-2 flex-shrink-0 rounded-full bg-[#66E274]" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default function MainIntro() {
  return (
    <>
      {/* 모바일 */}
      <div className="relative mx-auto mt-16 flex min-h-0 w-full flex-col items-center justify-start pb-16 md:hidden">
        <div className="absolute bottom-0 left-0 h-full w-full">
          <Image
            src="/images/content/contentbg.png"
            fill
            alt="바이오애드랩 2트랙 메디컬 마케팅 배경"
            className="z-0 object-cover"
          />
        </div>

        <div className="relative z-10 mx-4 w-full max-w-[340px] rounded-2xl border border-[#3b3b3b] bg-white/[0.08] px-5 py-8 backdrop-blur-lg">
          <IntroHeader variant="mobile" />
          <div className="flex w-full flex-col gap-6 text-white">
            {trackSections.map((section, index) => (
              <TrackCard key={section.id} section={section} index={index} variant="mobile" />
            ))}
          </div>
        </div>
      </div>

      {/* 데스크톱 */}
      <div className="relative mx-auto my-14 hidden min-h-[1080px] w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-6 py-24 md:flex lg:px-10">
        <div className="fixed top-12 h-full w-full">
          <Image
            src="/images/content/contentbg.png"
            fill
            alt="바이오애드랩 메디컬 마케팅 생태계 배경"
            className="z-0 object-cover"
          />
        </div>

        <IntroHeader variant="desktop" />

        <div className="relative z-10 flex w-full max-w-[1180px] flex-col gap-10 text-white">
          {trackSections.map((section, index) => (
            <TrackCard key={section.id} section={section} index={index} variant="desktop" />
          ))}
        </div>
      </div>
    </>
  );
}

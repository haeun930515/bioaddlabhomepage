'use client';

import Image from "next/image";
import { useRef } from "react";

import MainPic from "../../public/images/main_pic.png";
import MainPiSub from "../../public/images/main_pic_sub.png";
import MainFixedBG from "../../public/images/content/contentbg.png"
import MainBG from "../../public/images/mainbg.png";
import MainDoc from "../../public/images/doc.png";
import MainAI from "../../public/images/ai.png";
import MainHealth from "../../public/images/health.png";

import VideoSection from "./components/VideoSection";
import MainSwiper from "./components/main-swiper";
import MainIntro from "./components/mainintro";
import MainNumber from "./components/mainnumber";
import Timeline from "./components/timeline";


export default function Home() {
  
  // 1. 스크롤 목적지를 가리킬 ref 생성
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // 2. 스크롤을 실행할 함수 정의
  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: 'smooth', // 부드럽게 스크롤
      block: 'start',     // 목적지 상단에 맞춤
    });
  };

  
  return (
    <div className="bg-black md:min-w-[1440px]">
      <MainSwiper onScrollDown={handleScrollDown}/>
      <div ref={nextSectionRef}>
      <MainIntro/>
      </div>
      <MainNumber/>
      <Timeline/>
      <VideoSection/>
    </div>
  );
}
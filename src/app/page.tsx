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
  
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',     
    });
  };

  
  return (
    <div className="bg-black md:min-w-[1440px] md:snap-y md:snap-mandatory">
      <div className="md:snap-start md:h-screen">
        <MainSwiper onScrollDown={handleScrollDown}/>
      </div>
      <div ref={nextSectionRef} className="md:snap-start md:h-screen">
        <MainIntro/>
      </div>
      <div className="md:snap-start md:h-screen">
        <MainNumber/>
      </div>
      <div className="md:snap-start md:h-screen">
        <Timeline/>
      </div>
      <div className="md:snap-start md:h-screen">
        <VideoSection/>
      </div>
    </div>
  );
}
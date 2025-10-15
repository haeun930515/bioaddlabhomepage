import React from "react";
import Image from "next/image";


export default function MainIntro() {
    return (
        <>
        {/* 모바일 */}
          <div className="relative w-full h-[700px] mx-auto md:hidden flex flex-col items-center justify-start mt-16">
            <div className="absolute w-full h-[450px] bottom-0 left-0 ">
            <Image
              src="/images/content/contentbg.png"
              fill 
              alt="고정백그라운드"
              className="z-0 object-cover"
            />
            </div>

            <div className="w-[300px] h-[468px]  border-[#3b3b3b] border-[1px] bg-white/[0.08] flex flex-col items-center justify-center py-10 backdrop-blur-lg rounded-2xl">
            <div className="relative z-10 flex flex-col justify-center mt-5 mb-10 text-center">
              <div className="text-[18px] font-suit text-white">
                의료와 커뮤니케이션의 혁신을
              </div>
              <div className="text-[22px] font-suit font-extrabold text-white">
                AI로 이끌어갑니다.
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-[280px] h-[300px] text-white">
              <div className="flex flex-col items-center justify-center border w-full mb-4 h-[140px] border-[#555555] bg-white/[0.02] px-6 py-10 backdrop-blur-lg rounded-2xl">
                <div className="text-[15px] text-center">
                  병원 시스템의 디지털전환을 이끌고<br />
                  병원, 고객, 광고주<br />
                  모두에게 이로운 솔루션 제공
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-[140px] border border-[#555555] bg-white/[0.02] px-6 py-10 backdrop-blur-lg rounded-2xl">
                <p className="text-[15px] text-center">
                  메디컬 스마트보드를 넘어<br />
                  병원 운영데이터 연동 기반<br />
                  헬스케어 플랫폼
                </p>
              </div>
            </div>
            </div >
          </div>

          {/* 데스크톱 */}
          <div className="flex-col items-center justify-center hidden w-[1440px] gap-12 my-14 md:flex h-[660px] mx-auto relative"> 
            <div className="fixed w-full h-full top-12 ">
            <Image
              src="/images/content/contentbg.png"
              fill 
              alt="고정백그라운드"
              className="z-0 object-cover" 
            />
            </div>

            <div className="relative z-10 flex flex-col justify-center text-center item-center">
              <div className="text-[25px] font-suit">
                서울대병원 의료진과 함께 헬스케어 스마트보드를 넘어,
              </div>
              <div className="text-[30px] font-suit font-extrabold">
                의료와 커뮤니케이션의 혁신을 AI로 이끌어갑니다.
              </div>
            </div>

            <div className="relative z-10 flex flex-row gap-20">
              <div className="w-[289px] h-[234px] flex flex-col items-center justify-center border border-[#3a3a3a] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
                <div className="text-[17px] leading-6 text-center">
                  병원 시스템의<br />디지털전환을 이끌고<br />병원, 고객, 광고주<br /><span className="font-extrabold">모두에게 이로운 솔루션 제공</span>
                </div>
              </div>
              <div className="w-[289px] h-[234px] flex flex-col items-center justify-center border border-[#3b3b3b] bg-white/10 px-6 py-10 backdrop-blur-lg rounded-3xl">
                <div className="text-[17px] leading-6 text-center ">
                  메디컬 스마트보드를 넘어<br /><span className="font-extrabold">병원 운영데이터 연동</span> 기반<br />헬스케어 플랫폼
                </div>
              </div>
            </div>
          </div>
        </>

    )
}

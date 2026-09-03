'use client';
import Image from 'next/image';
import LogoSlider from './logoslider';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <footer className="relative w-full overflow-x-hidden text-white bg-black">
      <div className="w-full">

        {/* 데스크탑 버전 */}
        <div className="hidden w-full px-4 py-20 text-white bg-[#373737] md:block">
          <div className="max-w-6xl mx-auto">
            <div className="mb-2 text-2xl font-extrabold font-geist">Our Partners & Clients</div>
            <div className="text-sm leading-relaxed">
              병원 분과 별로 맞춤 세팅, 이제 당신의 브랜드가 가장 주목받는 의료 공간에서
              가장 필요한 타깃과 만날 시간입니다
            </div>
          </div>
        </div>

        {/* 모바일 버전 */}
        <div className="relative block w-full py-8 pt-12 text-white bg-center bg-cover md:hidden" style={{ backgroundImage: 'url(/images/logobgmobile.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-4 font-extrabold text-[22px] px-12 font-suit text-center" style={{
              background: 'linear-gradient(45deg, #32FF00, #00E1FF, #32FF00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease-in-out infinite'
            }}>Our Partners & Clients</div>
            <div className="mb-6 text-[14px] leading-relaxed px-12 text-center">
              병원 분과 별로 맞춤 세팅,<br />
              이제 당신의 브랜드가 가장 주목받는<br />
              의료 공간에서 가장 필요한 타깃과<br />
              만날 시간입니다
            </div>
            <LogoSlider />
          </div>
        </div>

        {/* 데스크탑용 로고슬라이더 */}
        <div className="hidden md:block">
          <LogoSlider />
        </div>

        {/* 데스크탑 버전 */}
        <div className="hidden w-full md:grid md:grid-cols-2">
          <a href="http://pf.kakao.com/_pDByG" target="_blank" rel="noopener noreferrer" className="group/consult">
            <div className="bg-[#66E274] px-6 pr-[58px] py-12 text-black flex items-center justify-center text-left h-full">
              <div className="flex flex-row-reverse items-center justify-start w-full max-w-4xl gap-8 mr-24">
                <Image
                  src="/images/message.png"
                  alt="상담 아이콘"
                  width={80}
                  height={60}
                  className="w-[80px] h-[60px]"
                />
              
                <div className="relative">
                  <div className="transition-transform duration-300 group-hover/consult:-translate-y-6">
                    <div className="mb-3 text-lg font-extrabold font-suit">
                      설치하고 싶은 병원이라면
                    </div>
                    <div className="mr-24 text-sm font-medium leading-relaxed">
                      "병원 부담 없이, 분위기는 새롭게!"<br />
                      지금 바이오애드랩과 상담하세요.
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-[85%] invisible px-6 py-2 text-sm text-white bg-black rounded-full shadow-lg opacity-0 whitespace-nowrap transition-all duration-300 translate-y-0 block group-hover/consult:opacity-100 group-hover/consult:visible">
                    문의 / 제안
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="/contact" target="_blank" rel="noopener noreferrer" className="group/partner">
            <div className="bg-[#1E1E1E] px-6 py-12 text-white h-full overflow-visible">
              <div className="flex items-start w-full max-w-4xl pl-12 mx-auto overflow-visible">
                <div className="flex items-start gap-[100px]">
                  <div className="relative pb-6">
                    <div className="text-left transition-transform duration-300 group-hover/partner:-translate-y-6">
                      <div className="mb-1 text-lg font-extrabold">파트너가 되고 싶다면</div>
                      <div className="text-sm font-medium leading-relaxed text-gray-300">
                        1000명 이상의 의료인이 선택한 바이오애드랩과 함께,<br />
                        효과적이고 효율적인 광고 전략을 경험하세요.
                      </div>
                    </div>
                  
                    <div className="absolute bottom-0 left-0 invisible block px-6 py-2 text-sm text-white transition-all duration-300 translate-y-0 bg-black rounded-full shadow-lg opacity-0 whitespace-nowrap group-hover/partner:opacity-100 group-hover/partner:visible">
                      문의 / 제안
                    </div>
                  </div>
                  
                  <Image
                    src="/images/friend.png"
                    alt="파트너 아이콘"
                    width={70}
                    height={60}
                    className="w-[70px] h-[60px] shrink-0"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* 모바일 버전 */}
        <div className="block w-full md:hidden">
          <a href="http://pf.kakao.com/_pDByG" target="_blank" rel="noopener noreferrer" className="group/consult">
            <div className="bg-[#66E274] m-4 rounded-2xl py-4 text-black flex items-center justify-center text-center h-full">
              <div className="flex items-center justify-between w-full max-w-4xl px-4 mx-auto">
                <div className="relative">
                  <div className="mb-2 text-[16px] text-left ml-2 font-extrabold font-suit">
                    설치하고 싶은 병원이라면
                  </div>
                  <div className="text-[13px] font-medium leading-relaxed font-suit">
                    "병원 부담 없이, 분위기는 새롭게!<br />
                    지금 바이오애드랩과 상담하세요.""
                  </div>
                </div>
                <Image
                  src="/images/message.png"
                  alt="상담 아이콘"
                  width={54}
                  height={42}
                  className="w-[54px] h-[42px] mr-4"
                />
              </div>
            </div>
          </a>

          <a href="/contact" target="_blank" rel="noopener noreferrer" className="group/partner">
            <div className="bg-[#5B5B5B] m-4 rounded-2xl py-4 text-white h-full overflow-visible">
              <div className="flex items-center justify-between w-full max-w-4xl px-4 mx-auto">
                <div className='relative'>
                <div className="mb-2 text-[16px] font-suit ml-2 font-extrabold">파트너가 되고 싶다면</div>
                    
                    <div className="text-[13px] text-left font-medium font-suit leading-relaxed text-gray-300">
                      
                      "효과와 효율을 동시에! 1000명<br />
                      이상 의료인의 선택 바이오애드랩"
                    </div>

                </div>
                <Image
                  src="/images/friend.png"
                  alt="파트너 아이콘"
                  width={54}
                  height={52}
                  className="w-[52px] h-[52px] mr-4"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      
      <div className="flex flex-col items-start justify-between w-full gap-8 px-6 py-10 mx-auto bg-[#2D2D2D] md:bg-black md:max-w-6xl md:px-6 md:flex-row relative z-10">
        {/* 탑 버튼 */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-0 right-4 w-10 h-10 bg-[#5B5B5B] hover:bg-[#6B6B6B] transition-colors duration-200 flex items-center justify-center"
          aria-label="맨 위로 이동"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19l0-14"/>
            <path d="M5 12l7-7 7 7"/>
          </svg>
        </button>
        
        <div className="flex flex-col max-w-md gap-4 text-[#8E8E8E]">

          <div className="flex items-center gap-2 text-white">
            바이오애드랩 통합상품소개서 
            <Image
              src="/images/icon1.png"
              alt="아이콘"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
          <div className="w-[120px]">
            <Image
              src="/images/logogray.png"
              alt="bioaddlab logo"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
        
          <div className="space-y-1 text-[12px] md:text-base">
            <div className="flex gap-2">
              <span className="font-bold w-14">이메일</span>
              <span>admin@bioaddlab.com</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-14">Biz No.</span>
              <span>261-86-02932</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-14">주소</span>
              <span>서울시 강남구 압구정로 30길 63 401호</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-start w-full md:mt-[98px] gap-2 md:gap-0 md:text-lg  text-[12px] font-extrabold md:font-medium font-suit md:items-start md:w-[600px] text-[#8E8E8E]">
          <div>전화번호 : 02 - 2038 - 0088</div>
          <div className="mt-2 md:mt-0 md:text-lg text-[12px] font-medium font-suit">
            Copyright ⓒ bioadd lab. All Rights Reserved.
          </div>
        </div>

      </div>

    </footer>
  );
}

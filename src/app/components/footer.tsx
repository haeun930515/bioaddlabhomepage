'use client';
import Image from 'next/image';
import LogoSlider from './logoslider';

export default function Footer() {
  return (
    <footer className="relative z-50 text-white bg-black md:min-w-[1440px]">
      <div className="w-full">

        <div className="w-full px-4 py-20 text-white bg-[#373737]">
          <div className="max-w-6xl mx-auto">

            <div className="hidden md:block">
              <div className="mb-2 text-2xl font-extrabold font-geist">Our Partners & Clients</div>
              <div className="text-sm leading-relaxed">
                병원 분과 별로 맞춤 세팅, 이제 당신의 브랜드가 가장 주목받는 의료 공간에서
                가장 필요한 타깃과 만날 시간입니다
              </div>
            </div>

            <div className="block px-10 md:hidden">
              <div className="mb-6 md:text-3xl md:font-extrabold font-extrabold text-[20px] font-suit md:font-geist">Our Partners & Clients</div>
              <div className="md:text-lg text-[14px] leading-relaxed">
                병원 분과 별로 맞춤 세팅,<br />
                이제 당신의 브랜드가 가장 주목받는<br />
                의료 공간에서 가장 필요한 타깃과<br />
                만날 시간입니다
              </div>
            </div>
          </div>
        </div>

        <LogoSlider />

        <div className="grid w-full md:grid-cols-2">
          <a href="http://pf.kakao.com/_pDByG" target="_blank" rel="noopener noreferrer" className="group/consult">
            <div className="bg-[#66E274] md:px-6 md:m-0 m-4 md:pr-[50px] md:py-12 text-black flex items-center justify-center text-center md:text-left h-full">
              <div className="flex flex-row-reverse items-center justify-center w-full max-w-4xl gap-2 mx-auto md:gap-8 md:mr-24 md:justify-start">
                <Image
                  src="/images/message.png"
                  alt="상담 아이콘"
                  width={60}
                  height={60}
                  className="w-[60px] h-[48px] md:w-[80px] md:h-[60px]"
                />
              
                <div className="relative">
                  <div className="md:transition-transform md:duration-300 md:group-hover/consult:-translate-y-6">
                    <div className="mb-3 text-[14px] font-extrabold md:text-lg font-suit">
                      설치하고 싶은 병원이라면
                    </div>
                    <div className="text-[10px] md:hidden font-medium leading-relaxed font-suit">
                      "병원 부담 없이, 분위기는 새롭게!"<br />
                      지금 바이오애드랩과 상담하세요.
                    </div>
                    <div className="hidden mr-24 text-sm font-medium leading-relaxed md:block">
                      "병원 부담 없이, 분위기는 새롭게!"<br />
                      지금 바이오애드랩과 상담하세요.
                    </div>
                  </div>
                  
                  <div className="hidden absolute left-0 top-[85%] invisible px-6 py-2 text-sm text-white bg-black rounded-full shadow-lg opacity-0 whitespace-nowrap md:transition-all md:duration-300 md:translate-y-0 md:block md:group-hover/consult:opacity-100 md:group-hover/consult:visible">
                    문의 / 제안
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="/contact" target="_blank" rel="noopener noreferrer"  className="group/partner">
            <div className="bg-[#1E1E1E] px-2 md:px-6 py-6 md:py-12 text-white h-full overflow-visible">
              
              <div className="flex flex-col items-center text-center md:hidden">
                <Image
                  src="/images/friend.png"
                  alt="파트너 아이콘"
                  width={60}
                  height={60}
                  className="mb-4 w-[60px] h-[60px]"
                />
                
                <div className="mb-2 text-[14px] font-suit font-extrabold">파트너가 되고 싶다면</div>
                    
                <div className="text-[10px] text-left font-medium font-suit leading-relaxed text-gray-300">
                  1000명 이상의 의료인이 선택한<br />
                  바이오애드랩과 함께,<br />
                  효과적이고 효율적인<br />
                  광고 전략을 경험하세요.
                </div>
              </div>

              <div className="items-start hidden w-full max-w-4xl pl-12 mx-auto overflow-visible md:flex">
                <div className="flex items-start gap-[100px]">
                  <div className="relative pb-6">
                    <div className="text-left md:transition-transform md:duration-300 md:group-hover/partner:-translate-y-6">
                      
                      <div className="mb-1 text-lg font-extrabold">파트너가 되고 싶다면</div>
                      
                      <div className="text-sm font-medium leading-relaxed text-gray-300">
                        1000명 이상의 의료인이 선택한 바이오애드랩과 함께,<br />
                        효과적이고 효율적인 광고 전략을 경험하세요.
                      </div>
                    </div>
                  
                    <div className="absolute bottom-0 left-0 invisible hidden px-6 py-2 text-sm text-white bg-black rounded-full shadow-lg opacity-0 whitespace-nowrap md:transition-all md:duration-300 md:translate-y-0 md:block md:group-hover/partner:opacity-100 md:group-hover/partner:visible">
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
      </div>
      
      <div className="flex flex-col items-start justify-between w-full gap-8 px-6 py-20 mx-auto bg-black md:max-w-6xl md:px-0 md:flex-row">
        <div className="flex flex-col max-w-md gap-4">
          <div className="w-[120px]">
            <Image
              src="/images/bioaddlablogo.png"
              alt="bioaddlab logo"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
        
          <div className="space-y-1 text-[12px] text-gray-300 md:text-base">
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">이메일</span>
              <span>admin@bioaddlab.com</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">Biz No.</span>
              <span>261-86-02932</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">주소</span>
              <span>서울시 강남구 압구정로 30길 63 401호</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-start w-full gap-2 md:text-lg text-[12px] font-extrabold text-white font-suit md:items-end md:w-auto">
          <div>전화번호 : 02 - 2038 - 0088</div>
          <div className="mt-2 md:text-lg text-[12px] font-medium text-white font-suit">
            Copyright ⓒ bioadd lab. All Rights Reserved.
          </div>
        </div>

      </div>

    </footer>
  );
}

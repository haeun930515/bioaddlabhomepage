'use client';
import Image from 'next/image';
import LogoSlider from './logoslider';

export default function Footer() {
  return (
    <footer className="relative z-50 text-white bg-black">
    {/* 상단 배너 */}
    <div className="w-full">

    <div className="px-4 py-20 w-full text-white bg-black">
  <div className="mx-auto max-w-6xl">

    {/* ✅ 데스크탑용 */}
    <div className="hidden md:block">
      <div className="mb-2 text-2xl font-bold">Our Partners & Clients</div>
      <div className="text-sm leading-relaxed">
        병원 분과 별로 맞춤 세팅, 이제 당신의 브랜드가 가장 주목받는 의료 공간에서
        가장 필요한 타깃과 만날 시간입니다
      </div>
    </div>

    {/* ✅ 모바일용 */}
    <div className="block px-10 md:hidden">
      <div className="mb-2 text-3xl font-bold">Our Partners & Clients</div>
      <div className="text-lg leading-relaxed">
        병원 분과 별로 맞춤 세팅,<br />
        이제 당신의 브랜드가 가장 주목받는<br />
        의료 공간에서 가장 필요한 타깃과<br />
        만날 시간입니다
      </div>
    </div>

  </div>
</div>

      <LogoSlider />
      <div className="grid grid-cols-2 w-full">
        {/* 초록 박스 */}
        <a href="http://pf.kakao.com/_pDByG/chat" target="_blank" rel="noopener noreferrer" className="group/consult">
          <div className="bg-[#66E274] px-2 md:px-6 py-6 md:py-12 text-black flex items-center justify-center text-center md:text-left h-full">
            <div className="flex flex-col gap-2 items-center mx-auto w-full max-w-4xl md:flex-row-reverse md:items-center md:gap-8 md:mr-24">
              <Image
                src="/images/message.png"
                alt="상담 아이콘"
                width={60}
                height={60}
                className="w-[60px] h-[60px] md:w-[80px] md:h-[60px]"
              />
              <div className="relative">
                <div className="md:transition-transform md:duration-300 md:group-hover/consult:-translate-y-6">
                  <div className="mb-1 text-xs font-extrabold md:text-lg">
                    설치하고 싶은 병원이라면
                  </div>
                  {/* ✅ 모바일: 줄바꿈 */}
                  <div className="text-[10px] md:hidden font-medium leading-relaxed">
                    "병원 부담 없이,<br />분위기는 새롭게!"<br />
                    지금 바이오애드랩과 상담하세요.
                  </div>
                  {/* ✅ 데스크탑: 한 줄 */}
                  <div className="hidden mr-24 text-sm font-medium leading-relaxed md:block">
                    "병원 부담 없이, 분위기는 새롭게!"<br />
                    지금 바이오애드랩과 상담하세요.
                  </div>
                </div>
                {/* 데스크탑 호버 시 보일 네모난 뷰 */}
                <div className="hidden absolute left-0 top-[85%] invisible px-6 py-2 text-sm text-white bg-black rounded-full shadow-lg opacity-0 whitespace-nowrap md:transition-all md:duration-300 md:translate-y-0 md:block md:group-hover/consult:opacity-100 md:group-hover/consult:visible">
                  문의 / 제안
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* 회색 박스 */}
        <a href="http://pf.kakao.com/_pDByG/chat" target="_blank" rel="noopener noreferrer"  className="group/partner">
          <div className="bg-[#1E1E1E] px-2 md:px-6 py-6 md:py-12 text-white h-full overflow-visible">
            {/* ✅ 모바일: 세로형 그대로 유지 */}
            <div className="flex flex-col items-center text-center md:hidden">
              <Image
                src="/images/friend.png"
                alt="파트너 아이콘"
                width={60}
                height={60}
                className="mb-4 w-[60px] h-[60px]"
              />
                    <div className="mb-2 text-xs font-extrabold">파트너가 되고 싶다면</div>
                    <div className="text-[10px] font-medium leading-relaxed text-gray-300">
                      1000명 이상의 의료인이 선택한<br />
                      바이오애드랩과 함께,<br />
                      효과적이고 효율적인<br />
                      광고 전략을 경험하세요.
                    </div>
                  </div>

            {/* ✅ 데스크탑: 텍스트 블록 + 아이콘 수평 정렬 */}
            <div className="hidden overflow-visible items-start pl-24 mx-auto w-full max-w-4xl md:flex">
              {/* 텍스트 + 아이콘 묶기 */}
              <div className="flex items-start gap-[100px]">
                {/* 텍스트 */}
                <div className="relative pb-6">
                  <div className="text-left md:transition-transform md:duration-300 md:group-hover/partner:-translate-y-6">
                    <div className="mb-1 text-lg font-extrabold">파트너가 되고 싶다면</div>
                    <div className="text-sm font-medium leading-relaxed text-gray-300">
                      1000명 이상의 의료인이 선택한 바이오애드랩과 함께,<br />
                      효과적이고 효율적인 광고 전략을 경험하세요.
                    </div>
                  </div>
                  {/* 데스크탑 호버 시 보일 네모난 뷰 */}
                  <div className="hidden absolute bottom-0 left-0 invisible px-6 py-2 text-sm text-white whitespace-nowrap bg-black rounded-full shadow-lg opacity-0 md:transition-all md:duration-300 md:translate-y-0 md:block md:group-hover/partner:opacity-100 md:group-hover/partner:visible">
                    문의 / 제안
                  </div>
                </div>
                {/* 아이콘 - 텍스트 블록 옆에 딱 붙이기 */}
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
      {/* ✅ 하단 본문 푸터 */}
    <div className="flex flex-col gap-8 justify-between items-start px-6 py-20 mx-auto w-full max-w-screen-xl md:flex-row">
      {/* 왼쪽: 로고 + 회사정보 */}
      <div className="flex flex-col gap-4 max-w-md">
        <div className="w-[120px]">
          <Image
            src="/images/bioaddlablogo.png"
            alt="bioaddlab logo"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>
        <div className="space-y-1 text-gray-300">
          <div className="flex gap-2">
            <span className="w-14 font-bold text-white">이메일</span>
            <span>admin@bioaddlab.com</span>
          </div>
          <div className="flex gap-2">
            <span className="w-14 font-bold text-white">Biz No.</span>
            <span>261-86-02932</span>
          </div>
          <div className="flex gap-2">
            <span className="w-14 font-bold text-white">주소</span>
            <span>서울시 강남구 압구정로 30길 63 401호</span>
          </div>
        </div>
      </div>

      {/* 오른쪽: 연락처 + 카피라이트 */}
      <div className="flex flex-col gap-2 items-start w-full text-lg font-extrabold text-gray-400 md:items-end md:w-auto">
        <div>전화번호 : 02 - 2038 - 0088</div>
        <div className="mt-2 text-lg text-gray-500">
          Copyright ⓒ bioadd lab. All Rights Reserved.
        </div>
      </div>
    </div>
    </footer>
  );
}

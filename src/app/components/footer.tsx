'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-50 text-white bg-black">
    {/* 상단 배너 */}
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 왼쪽: 초록 */}
        <div className="bg-[#66E274] py-10 flex items-end">
          <div className="flex justify-end w-full">
            <div className="text-black w-[500px]">
              <div className="mb-2 text-sm font-bold">설치하고 싶은 병원이라면</div>
              <div className="text-sm font-medium leading-relaxed">
                “병원 부담 없이, 분위기는 새롭게!”<br />
                지금 바이오애드랩과 상담하세요.
              </div>
            </div>
            <div className='absolute mr-12'>
              <Image
                src="/images/message.png"
                alt="상담 아이콘"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
  
        {/* 오른쪽: 회색 */}
        <div className="bg-[#1E1E1E] py-10 flex items-start">
          <div className="flex justify-start w-full ">
            <div className='w-[400px] ml-24'>
              <div className="mb-2 text-sm font-bold">파트너가 되고 싶다면</div>
              <div className="text-sm font-medium leading-relaxed text-gray-300">
                1000명 이상의 의료인이 선택한 바이오애드랩과 함께,<br />
                효과적이고 효율적인 광고 전략을 경험하세요.
              </div>
            </div>
            <Image
              src="/images/friend.png"
              alt="파트너 아이콘"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
      {/* ✅ 하단 본문 푸터 */}
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        {/* 왼쪽: 로고 + 회사정보 */}
        <div className="flex flex-col gap-4 w-[750px] py-10">
          <div className="w-[120px]">
            <Image
              src="/images/bioaddlablogo.png"
              alt="bioaddlab logo"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="pl-4 space-y-1 text-gray-300">
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">이메일</span>
              <span className='pl-24'>admin@bioaddlab.com</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">Biz No.</span>
              <span className='pl-24'>261-86-02932</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-white w-14">주소</span>
              <span className='pl-24'>서울시 강남구 압구정로 30길 63 401호</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 연락처 + 카피라이트 */}
        <div className="flex flex-col items-start gap-2 text-gray-400 md:items-start">
          <div>전화번호 : 02 - 2038 - 0088</div>
          <div className="mt-2 text-xs text-gray-500">
            Copyright ⓒ bioadd lab. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

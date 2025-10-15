import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function MainNumber() {
  type StatBoxProps = {
    label: string;
    end: number;
    suffix?: string;
    separator?: string;
  };

  const StatBox: React.FC<StatBoxProps> = ({ label, end, suffix = '', separator }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <div ref={ref} className="border rounded-md p-4 min-w-[140px]">
        <div className="text-sm text-black inline-block px-2 py-0.5 rounded-full mb-2">
          {label}
        </div>
        <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {inView ? <CountUp end={end} duration={2} separator={separator} /> : '0'}{suffix}
        </div>
      </div>
    );
  };

  return (
    
    <div className="z-10 w-full md:px-4 md:py-16 text-white md:min-h-[600px] h-[400px] md:h-auto flex flex-col justify-center relative">
      <video
        className="absolute top-0 left-0 hidden object-cover w-full h-full -z-10 md:block"
        src="/videos/components/main1.mp4"
        autoPlay
        playsInline
        loop
        muted
      />

      <div className="w-full md:min-h-[600px] md:px-4 md:py-16 text-white flex flex-col items-center justify-center z-10">
        
      <div className="w-full md:h-[250px] h-[120px] text-center justify-center items-center flex md:hidden">
          <h2 className="absolute z-10 text-[20px] font-regular sm:text-3xl">
            <span className="mb-3 font-bold text-white">서울 수도권</span>을 중심으로<br />
            <span className="text-white">빠르게 확장</span>합니다
          </h2>
      </div>

      <h2 className="z-10 hidden mb-12 text-4xl font-bold text-center md:block">
        <span className="text-white">서울 수도권</span>을 중심으로 빠르게 확장합니다
      </h2>

      <div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-4 font-suit">
        {[
          { label: '병의원', end: 1200, suffix: '개 병원 +' },
          { label: '의료인', end: 5000, suffix: '명 +' },
          { label: '월 방문객', end: 1500000, suffix: '명 +', formatted: '150만명 +' },
          { label: '월 노출수', end: 5280000, suffix: '회 +', formatted: '528만회 +' },
        ].map((item, i) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <div
              ref={ref} 
              key={i}
              className="h-[141px] w-[200px] md:w-[272px] flex flex-col justify-center items-center bg-white/10 border border-[#868686] backdrop-blur-sm text-white p-4 rounded-md"
            >
              <div className="text-xl font-bold text-white">
                {item.label}
              </div>

              <div className="flex items-center gap-1 mt-2">
                <div className="text-3xl font-extrabold leading-tight tabular-nums">
                  {inView ? <CountUp end={item.end} duration={2} separator="," /> : '0'}
                </div>
                <div className="text-3xl font-extrabold font-suit">{item.suffix?.split(' ')[1] ? item.suffix.split(' ')[0].replace(/\d/g, '') + ' ' + item.suffix.split(' ')[1] : item.suffix}</div>
              </div>
            </div>
          );
        })}
      </div>
        {/* 모바일 */}
      <div className="flex flex-col items-center w-full gap-4 px-4 md:hidden">
        {[
          { label: '병의원', end: 1200, suffix: '개 병원 +' },
          { label: '월 방문객', end: 1500000, suffix: '명 +' },
          { label: '의료인', end: 5000, suffix: '명 +' },
          { label: '월 노출수', end: 5280000, suffix: '회 +' },
        ].map((item, i) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <div
              ref={ref} 
              key={i}
              className="h-[60px] w-full max-w-[320px] flex flex-row items-center bg-white/10 rounded-full border border-[#3a3a3a] backdrop-blur-sm text-white p-4 "
            >
              <div className="w-24 pl-2 text-lg font-bold text-[#7b7b7b]">
                {item.label}
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <div className="text-[25px] font-extrabold leading-tight tabular-nums">
                  {inView ? <CountUp end={item.end} duration={2} separator="," /> : '0'}
                </div>
                <div className="text-[25px] font-extrabold font-suit">{item.suffix}</div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
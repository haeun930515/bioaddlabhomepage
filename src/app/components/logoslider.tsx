'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function LogoSlider() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const allLogos = [
    'lg', 'astrazeneca', 'blackforet', 'cellmed', 'celltrion', 'ceragem',
     'daedamo', 'drgroot', 'ibdental', 'johnson',
    'lingt', 'maeil', 'medicalutd', 'medihub', 'pharmgen', 'plant',
    'rogaine', 'sejongmedical', 'selex', 'shinwon', 'tyrenol', 'ultrav',
    'vtcosmetics', 'woosungmedics', 'ac', 'chunganmedical', 'dentime','drplus','isoi',
    'oliveyoung','teaference'
  ];

  const mid = Math.ceil(allLogos.length / 2);
  const topLogos = allLogos.slice(0, mid);
  const bottomLogos = allLogos.slice(mid).reverse();

  const repeatedBottomLogos = Array(4).fill(bottomLogos).flat();

  return (
    <div
  className="overflow-hidden py-10 w-full bg-black bg-center bg-cover md:py-20"
  style={{ backgroundImage: 'url(/images/logobg.png)' }}
>
  {/* 상단 로고 */}
  <div className="overflow-hidden whitespace-nowrap">
    <div
      className="flex gap-12 md:gap-16 animate-[scroll-left_70s_linear_infinite]"
      style={{ width: 'max-content' }}
    >
      {[...topLogos, ...topLogos].map((name, idx) => (
        <div key={`top-${idx}`} className="flex justify-center items-center px-4 md:px-6">
          <Image
            src={`/images/logos/${name}.png`}
            alt={`logo-top-${name}`}
            width={160}
            height={60}
            className="object-contain md:w-[140px] md:h-[100px]"
          />
        </div>
      ))}
    </div>
  </div>

  {/* 하단 로고 */}
  <div className="overflow-hidden mt-8 whitespace-nowrap md:mt-12">
    <div
      className="flex gap-12 md:gap-16 animate-[scroll-right_70s_linear_infinite]"
      style={{
        width: 'max-content',
        transform: 'translateX(-50%)',
      }}
    >
      {repeatedBottomLogos.map((name, idx) => (
        <div key={`bottom-${idx}`} className="flex justify-center items-center px-4 md:px-6">
          <Image
            src={`/images/logos/${name}.png`}
            alt={`logo-bottom-${name}`}
            width={160}
            height={60}
            className="object-contain md:w-[140px] md:h-[100px]"
          />
        </div>
      ))}
    </div>
  </div>
</div>
  );
}

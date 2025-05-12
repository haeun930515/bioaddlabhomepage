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
    'chungan', 'daedamo', 'drgroot', 'drplus', 'ibdental', 'johnson',
    'lingt', 'maeil', 'medicalutd', 'medihub', 'pharmgen', 'plant',
    'rogaine', 'sejongmedical', 'selex', 'shinwon', 'tyrenol', 'ultrav',
    'vtcosmetics', 'woosungmedics', 'ac'
  ];

  const mid = Math.ceil(allLogos.length / 2);
  const topLogos = allLogos.slice(0, mid);
  const bottomLogos = allLogos.slice(mid).reverse();

  const repeatedBottomLogos = Array(4).fill(bottomLogos).flat();

  return (
    <div
      className="w-full py-20 overflow-hidden bg-black bg-center bg-cover"
      style={{ backgroundImage: 'url(/images/logobg.png)' }}
    >
      {/* 상단 로고 (왼쪽 이동) */}
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="flex gap-16 animate-[scroll-left_70s_linear_infinite]"
          style={{ width: 'max-content' }}
        >
          {[...topLogos, ...topLogos].map((name, idx) => (
            <div key={`top-${idx}`} className="flex items-center justify-center px-6">
              <Image
                src={`/images/logos/${name}.png`}
                alt={`logo-top-${name}`}
                width={240}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 하단 로고 (오른쪽 이동) */}
      <div className="mt-12 overflow-hidden whitespace-nowrap">
        <div
          className="flex gap-16 animate-[scroll-right_70s_linear_infinite]"
          style={{
            width: 'max-content',
            transform: 'translateX(-50%)',
          }}
        >
          {repeatedBottomLogos.map((name, idx) => (
            <div key={`bottom-${idx}`} className="flex items-center justify-center px-6">
              <Image
                src={`/images/logos/${name}.png`}
                alt={`logo-bottom-${name}`}
                width={240}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

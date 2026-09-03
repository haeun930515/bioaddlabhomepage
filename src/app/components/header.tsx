'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // 모바일 메뉴가 열렸을 때 body 스크롤 막기
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full text-white md:bg-black">
      <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto md:justify-center md:flex-row">
        <div className="flex justify-between w-full md:w-auto">
          <Link href="/" className="block md:hidden">
            <Image
              src="/images/bioaddlablogo.png"
              alt="Bioaddlab Logo"
              width={140}
              height={30}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden focus:outline-none"
          >
            <Image
              src="/images/hamburger.png"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        <nav className="items-center hidden gap-16 text-lg font-extrabold md:flex font-geist">
          <Link href="/" className={isActive('/') ? 'text-green-400' : 'hover:text-green-400'}>HOME.</Link>
          <Link href="/service" className={isActive('/service') ? 'text-green-400' : 'hover:text-green-400'}>SOLUTIONS.</Link>
          <Link href="/content" className={isActive('/content') ? 'text-green-400' : 'hover:text-green-400'}>CONTENT.</Link>
          <Link href="/contact" className={isActive('/contact') ? 'text-green-400' : 'hover:text-green-400'}>CONTACT.</Link>
        </nav>
      </div>

      {/* 모바일 전체 화면 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-start justify-center gap-8 px-16 text-[20px] text-black bg-white font-['Noto Sans'] md:hidden animate-fadeIn">
          {/* X 닫기 버튼 */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute text-4xl transition-colors top-6 right-6 hover:text-green-400"
          >
            ×
          </button>
          
          {/* 로고 */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="mb-8">
            <Image
              src="/images/logoblack.png"
              alt="Bioaddlab Logo"
              width={200}
              height={50}
            />
          </Link>
          
          {/* 메뉴 항목들 */}
          <Link href="/service" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 transition-colors hover:text-green-400">
            <span className="font-['Noto Sans']" style={{fontWeight: 900}}>SOLUTIONS.</span>
            <span className="text-lg font-normal">↗</span>
          </Link>
          <Link href="/content" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 transition-colors hover:text-green-400">
            <span className="font-['Noto Sans']" style={{fontWeight: 900}}>CONTENT.</span>
            <span className="text-lg font-normal">↗</span>
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 transition-colors hover:text-green-400">
            <span className="font-['Noto Sans']" style={{fontWeight: 900}}>CONTACT.</span>
            <span className="text-lg font-normal">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}

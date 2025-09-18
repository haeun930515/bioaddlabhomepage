'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  // 메뉴 아이템 활성화 여부 확인 함수
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full text-white md:bg-black">
  <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto md:justify-center md:flex-row">
    {/* 모바일에선 로고 오른쪽, 햄버거 왼쪽 */}
    <div className="flex justify-between w-full md:w-auto">
      {/* 모바일 햄버거 버튼 */}
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

      {/* 로고 */}
      <Link href="/" className="block ml-auto md:hidden">
        <Image
          src="/images/bioaddlablogo.png"
          alt="Bioaddlab Logo"
          width={140}
          height={30}
        />
      </Link>
    </div>

    {/* PC 메뉴 */}
    <nav className="items-center hidden gap-16 text-lg font-extrabold md:flex font-geist">
      <Link href="/" className={isActive('/') ? 'text-green-400' : 'hover:text-green-400'}>HOME.</Link>
      <Link href="/service" className={isActive('/service') ? 'text-green-400' : 'hover:text-green-400'}>SOLUTIONS.</Link>
      <Link href="/content" className={isActive('/content') ? 'text-green-400' : 'hover:text-green-400'}>CONTENT.</Link>
      <Link href="/contact" className={isActive('/contact') ? 'text-green-400' : 'hover:text-green-400'}>CONTACT.</Link>
    </nav>
  </div>

  {/* 모바일 드롭다운 메뉴 */}
  {menuOpen && (
    <div className="flex flex-col gap-4 px-6 py-4 overflow-hidden text-[12px] font-suit font-extrabold text-black bg-white shadow-md md:hidden w-[143px]">
      <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
      <Link href="/service" onClick={() => setMenuOpen(false)}>SOLUTIONS</Link>
      <Link href="/content" onClick={() => setMenuOpen(false)}>CONTENT</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
    </div>
  )}
</header>
  );
}

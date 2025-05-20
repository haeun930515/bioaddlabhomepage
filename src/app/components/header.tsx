'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full text-white bg-black">
  <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto md:flex-row">
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
      <Link href="/" className="ml-auto md:ml-0">
        <Image
          src="/images/bioaddlablogo.png"
          alt="Bioaddlab Logo"
          width={140}
          height={30}
        />
      </Link>
    </div>

    {/* PC 메뉴 */}
    <nav className="items-center hidden gap-12 text-lg font-bold md:flex">
      <Link href="/" className="text-green-400">HOME</Link>
      <Link href="/service" className="hover:text-green-400">SOLUTIONS</Link>
      <Link href="/content" className="hover:text-green-400">CONTENT</Link>
      <Link href="/contact" className="hover:text-green-400">CONTACT</Link>
    </nav>
  </div>

  {/* 모바일 드롭다운 메뉴 */}
  {menuOpen && (
    <div className="flex flex-col w-full gap-4 px-6 py-4 overflow-hidden text-lg font-bold text-black bg-green-400 shadow-md md:hidden max-w-screen">
      <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
      <Link href="/service" onClick={() => setMenuOpen(false)}>SOLUTIONS</Link>
      <Link href="/content" onClick={() => setMenuOpen(false)}>CONTENT</Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
    </div>
  )}
</header>
  );
}

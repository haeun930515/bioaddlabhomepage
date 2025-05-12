'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-center w-full px-8 py-4 text-white bg-black">
      {/* 로고 */}
      <Link href="/">
        <Image src="/images/bioaddlablogo.png" alt="Bioaddlab Logo" width={140} height={30} />
      </Link>

      {/* 네비게이션 */}
      <nav className="flex items-center gap-12 text-lg font-bold ml-72">
        <Link href="/" className="text-green-400">HOME</Link>
        <Link href="/service" className="hover:text-green-400">SOLUTION</Link>
        <Link href="/content" className="hover:text-green-400">CONTENT</Link>
        <Link href="/contact" className="hover:text-green-400">CONTACT</Link>
      </nav>

    </header>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (file) formData.append('file', file);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    setIsSending(false);

    if (res.ok) {
      setResult('success');
      form.reset();
      setFile(null);
    } else {
      setResult('error');
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen px-4 py-20 text-white bg-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/videos/components/contact1.mp4"
          muted
          loop
          autoPlay
          playsInline
          className="absolute z-0 object-cover w-full h-full"
        />
        <div 
          className="absolute z-[1] w-full h-full bg-black/80" 
          style={{ top: 0, left: 0 }}
        ></div>
      </div>
      <div className="relative z-10 w-full max-w-3xl mt-8 mb-12 md:mt-24">
        {/* 데스크톱 버전 */}
        <div className="hidden md:flex md:flex-row md:items-end md:justify-between">
          <div className="text-base text-green-400 md:text-4xl font-geist">SEND A MESSAGE.</div>
          <div className="right-0 text-xs font-bold text-green-400">* <span className='text-white'>필수</span></div>
        </div>
        {/* 모바일 버전 */}
        <div className="flex flex-col items-center md:hidden">
          <Image
            src="/images/message-icon.png"
            alt="메시지 아이콘"
            width={30}
            height={30}
            className="w-[30px] h-[30px] mb-2"
          />
          <div className="text-[22px] font-semibold  font-geist text-green-400">SEND A MESSAGE</div>
          <div className="self-end mt-2 text-xs font-bold text-green-400">* <span className='text-white'>필수</span></div>
        </div>
      </div>

      {/* 데스크탑 버전 Form */}
      <form onSubmit={handleSubmit} className="z-10 hidden w-full max-w-3xl space-y-8 font-bold md:block">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm">성함 (Name)<span className="text-green-400"> *</span></label>
            <input name="name" type="text" required
              className="py-2 bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">연락받으실 메일 (E-mail)<span className="text-green-400"> *</span></label>
            <input name="email" type="email" required
              className="py-2 bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm">회사명 (Company name)</label>
            <input name="company" type="text"
              className="py-2 bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">직함 (Position)</label>
            <input name="position" type="text"
              className="py-2 bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm">전화번호 (Phone number)<span className="text-green-400"> *</span></label>
            <input name="phone" type="tel" required
              className="py-2 bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm">문의 내용 (Questions)</label>
          <textarea name="message"
            className="bg-black border border-white rounded-md p-4 min-h-[150px] focus:outline-none focus:border-green-400"
            placeholder="문의 내용을 적어주세요."></textarea>
        </div>

        <div className="flex items-center justify-end gap-4">
          <label htmlFor="file-upload-desktop" className="px-4 py-2 text-sm border border-white rounded cursor-pointer hover:border-green-400">
            파일 업로드
          </label>
          <input
            id="file-upload-desktop"
            name="file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {file && <div className="text-xs text-gray-300">{file.name}</div>}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-3 mt-8 font-bold rounded transition text-[24px] ${
            isSending
              ? 'bg-gray-600 cursor-not-allowed text-white'
              : 'bg-white hover:bg-white text-black'
          }`}
        >
          {isSending ? '전송 중...' : '문의하기'}
        </button>
        {result === 'success' && (
          <div className="mt-4 text-center text-green-400">
            메일이 전송되었습니다 ✅
          </div>
        )}
        {result === 'error' && (
          <div className="mt-4 text-center text-red-400">
            메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요 ❌
          </div>
        )}
      </form>

      {/* 모바일 버전 Form */}
      <form onSubmit={handleSubmit} className="z-10 w-full max-w-3xl space-y-6 font-bold md:hidden">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm">성함 (Name)<span className="text-green-400"> *</span></label>
            <input name="name" type="text" required
              className="py-3 text-base bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">연락받으실 메일 (E-mail)<span className="text-green-400"> *</span></label>
            <input name="email" type="email" required
              className="py-3 text-base bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">회사명 (Company name)</label>
            <input name="company" type="text"
              className="py-3 text-base bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">직함 (Position)</label>
            <input name="position" type="text"
              className="py-3 text-base bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">전화번호 (Phone number)<span className="text-green-400"> *</span></label>
            <input name="phone" type="tel" required
              className="py-3 text-base bg-black border-b border-white focus:outline-none focus:border-green-400" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm">문의 내용 (Questions)</label>
          <textarea name="message"
            className="bg-black border border-white rounded-md p-4 min-h-[120px] focus:outline-none focus:border-green-400 text-base"
            placeholder="문의 내용을 적어주세요."></textarea>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="file-upload-mobile" className="px-4 py-3 text-sm text-center border border-white rounded cursor-pointer hover:border-green-400">
            파일 업로드
          </label>
          <input
            id="file-upload-mobile"
            name="file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {file && <div className="text-xs text-center text-gray-300">{file.name}</div>}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full py-4 mt-6 font-bold rounded transition text-lg ${
            isSending
              ? 'bg-gray-600 cursor-not-allowed text-white'
              : 'bg-white hover:bg-white text-black'
          }`}
        >
          {isSending ? '전송 중...' : '문의하기'}
        </button>
        {result === 'success' && (
          <div className="mt-4 text-center text-green-400">
            메일이 전송되었습니다 ✅
          </div>
        )}
        {result === 'error' && (
          <div className="mt-4 text-center text-red-400">
            메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요 ❌
          </div>
        )}
      </form>
    </div>
  );
}
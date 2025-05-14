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
    <div className="flex flex-col items-center px-4 py-20 text-white bg-black">
      {/* 상단 타이틀 */}
      <div className="relative w-full max-w-3xl mb-12">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/images/message-icon.png"
            alt="Message Icon"
            width={48}
            height={48}
            className="mb-1"
          />
          <div className="text-4xl font-extrabold text-green-400">SEND A MESSAGE</div>
        </div>
        <div className="absolute top-[100px] font-bold right-0 text-xs text-green-400">* <span className='text-white'>필수</span></div>
      </div>

      {/* 입력 폼 */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-8 font-bold">
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

        {/* 파일 업로드 */}
        <div className="flex items-center justify-end gap-4">
          <label htmlFor="file-upload" className="px-4 py-2 text-sm border border-white rounded cursor-pointer hover:border-green-400">
            파일 업로드
          </label>
          <input
            id="file-upload"
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
            className={`w-full py-3 mt-8 font-bold rounded transition ${
              isSending
                ? 'bg-gray-600 cursor-not-allowed text-white'
                : 'bg-green-500 hover:bg-green-400 text-black'
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
      {/* 하단 배경 이미지: 스크린 전체 너비 꽉 채움 */}
<div className="w-screen px-0">
  <Image
    src="/images/contactbg.png"
    alt="Contact Background"
    width={1920}
    height={200}
    className="object-cover w-full h-auto"
  />
</div>
    </div>
  );
}

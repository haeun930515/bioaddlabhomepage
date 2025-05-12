'use client';

import { useState } from 'react';
import Footer from '../components/footer';

export default function ContactPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
      {/* 상단 타이틀 */}
      <div className="text-center mb-12">
        <div className="text-green-400 text-2xl font-bold mb-2">SEND A MESSAGE</div>
        <div className="text-xs text-gray-400">* 필수</div>
      </div>

      {/* 입력 폼 */}
      <form className="w-full max-w-3xl flex flex-col gap-8">
        {/* 이름, 이메일 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm">성함 (Name) *</label>
            <input
              type="text"
              className="bg-black border-b border-white focus:outline-none focus:border-green-400 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">연락받으실 메일 (E-mail) *</label>
            <input
              type="email"
              className="bg-black border-b border-white focus:outline-none focus:border-green-400 py-2"
              required
            />
          </div>
        </div>

        {/* 회사명, 직급 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm">회사명 (Company name)</label>
            <input
              type="text"
              className="bg-black border-b border-white focus:outline-none focus:border-green-400 py-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">직급 (Position)</label>
            <input
              type="text"
              className="bg-black border-b border-white focus:outline-none focus:border-green-400 py-2"
            />
          </div>
        </div>

        {/* 전화번호 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">전화번호 (Phone number) *</label>
          <input
            type="tel"
            className="bg-black border-b border-white focus:outline-none focus:border-green-400 py-2"
            required
          />
        </div>

        {/* 문의 내용 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">문의 내용 (Questions)</label>
          <textarea
            className="bg-black border border-white rounded-md p-4 min-h-[150px] focus:outline-none focus:border-green-400"
            placeholder="문의 내용을 적어주세요."
          ></textarea>
        </div>

        {/* 파일 업로드 */}
        <div className="flex items-center gap-4">
          <label htmlFor="file-upload" className="text-sm border px-4 py-2 cursor-pointer">
            파일 업로드
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {file && <div className="text-xs">{file.name}</div>}
        </div>

        {/* 문의하기 버튼 */}
        <button
          type="submit"
          className="mt-8 bg-green-500 text-black font-bold py-3 rounded w-full hover:bg-green-400 transition"
        >
          문의하기
        </button>
      </form>
    </div>
  );
}

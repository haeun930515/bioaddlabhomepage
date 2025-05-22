'use client';

export default function VideoSection() {
  return (
    <div className="relative hidden w-full mt-24 md:block">
      <video
        src="/videos/collection.mp4"
        autoPlay
        muted
        playsInline
        className="object-cover w-full h-auto aspect-video"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-4xl font-extrabold leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          지금도 많은 <span className="text-green-400">병원과 브랜드가</span><br />
          <span className="text-green-400">바이오애드랩과 함께</span>하고 있습니다
        </div>
      </div>
    </div>
  );
} 
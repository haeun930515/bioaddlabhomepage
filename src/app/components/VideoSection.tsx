'use client';

export default function VideoSection() {
  return (
    <div className="relative mt-24 w-full">
      <video
        src="/videos/collection.mp4"
        autoPlay
        muted
        playsInline
        className="object-cover w-full h-auto aspect-video"
      />
      <div className="flex absolute inset-0 justify-center items-center px-4 text-center">
        <div className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          지금도 많은 <span className="text-green-400">병원과 브랜드가</span><br />
          <div className="mt-4"><span className="text-green-400">바이오애드랩과 함께</span>하고 있습니다</div>
        </div>
      </div>
    </div>
  );
} 
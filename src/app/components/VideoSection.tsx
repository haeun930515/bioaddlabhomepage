'use client';

export default function VideoSection() {
  return (
    <div className="relative w-full p-4 overflow-hidden md:p-12 md:pt-24 rounded-3xl bg-black/80">
      <video
        src="/videos/collection.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        className="object-fill w-full h-auto aspect-video rounded-3xl"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <div className="text-[20px] md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          지금도 많은 <span className="text-white">병원과 브랜드가</span><br />
          <div className="md:mt-4"><span className="text-white">바이오애드랩과 함께</span>하고 있습니다</div>
        </div>
      </div>
    </div>
  );
} 
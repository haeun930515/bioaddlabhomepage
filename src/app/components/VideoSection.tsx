'use client';

export default function VideoSection() {
  return (
    <div className="relative w-full p-4 py-12 overflow-hidden md:p-12 md:pt-24 md:py-12 rounded-3xl bg-black/80">
      <video
        src="/videos/collection.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        className="object-fill w-full h-auto aspect-video rounded-3xl"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h2 className="text-[16px] md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          <span className="block leading-6 md:hidden">
            지금도 많은 병원과 브랜드가<br />
            바이오애드랩과<br/> 함께하고 있습니다
          </span>
          <span className="hidden md:block">
            지금도 많은 병원과 브랜드가<br />
            <span className="block md:mt-4"><span className="text-white">바이오애드랩과 함께</span>하고 있습니다</span>
          </span>
        </h2>
      </div>
    </div>
  );
} 
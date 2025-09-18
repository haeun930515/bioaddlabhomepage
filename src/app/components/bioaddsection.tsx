"use client";

import React from 'react';

// 컴포넌트 및 라이브러리 import
import ImageCard from './imagecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper.js CSS import
import 'swiper/css';
import 'swiper/css/navigation';
import MobileImageCard from './mobileimagecard';

// 이미지 import (경로는 실제 프로젝트에 맞게 수정해주세요)
const backgroundImage = '/videos/components/solution2.mp4';
const cardImage1 = '/images/content/bioadd1.png';
const cardImage2 = '/images/content/bioadd2.png';
const cardImage3 = '/images/content/bioadd3.png';
const cardImage4 = '/images/content/bioadd4.png';
const cardImage5 = '/images/content/bioadd5.png';
const cardImage6 = '/images/content/bioadd6.png';



// 화살표 버튼 컴포넌트


interface ArrowButtonProps {
  direction?: 'left' | 'right';
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction = 'right', className }) => {
  return (
    <button
      className={`bg-[#232323] border-2 border-white rounded-full w-[37px] h-[37px] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${className}`}
      aria-label={direction === 'right' ? '다음 슬라이드' : '이전 슬라이드'}
    >
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d={direction === 'right' ? "M1.47412 1.4082L8.56086 9.0001L1.47412 16.592" : "M8.52588 16.5918L1.43914 8.9999L8.52588 1.408"}
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

const BioaddSection = () => {
  const cardData = [
    { imgSrc: cardImage1, imgAlt: '바이오애드 활용 사례 1' },
    { imgSrc: cardImage2, imgAlt: '바이오애드 활용 사례 2'},
    { imgSrc: cardImage3, imgAlt: '바이오애드 활용 사례 3'},
    { imgSrc: cardImage4, imgAlt: '바이오애드 활용 사례 4'},
    { imgSrc: cardImage5, imgAlt: '바이오애드 활용 사례 5'},
    { imgSrc: cardImage6, imgAlt: '바이오애드 활용 사례 6'},
  ];

  return (
    <>
    <section className="bg-black relative w-full py-24 min-h-[789px] overflow-hidden hidden md:block">
      <video
        src={backgroundImage}
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover w-full h-full "
      />

      {/* 1. container, mx-auto를 제거하여 전체 너비를 사용하도록 변경 */}
      <div className="relative z-10 flex w-full h-full">

        {/* 2. 왼쪽 컨텐츠 영역: 화면 크기에 따라 적절한 왼쪽 여백(padding)을 줌 */}
        <div className="flex-shrink-0 w-[450px] self-start pt-16 pl-4 sm:pl-6 lg:pl-24 pr-12">
          <h2 className="mb-8 text-3xl font-normal leading-tight text-white">
            BIOADD.
            <br />
            이렇게 사용되고 있어요
          </h2>
          <div className="flex gap-3">
            <ArrowButton direction="left" className="custom-prev-button" />
            <ArrowButton direction="right" className="custom-next-button" />
          </div>
        </div>

        {/* 3. 오른쪽 슬라이더 영역: 화면 오른쪽 끝까지 확장됨 */}
        <div className="self-start flex-grow min-w-0 pt-16 pr-4 overflow-hidden sm:pr-6 lg:pr-24">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next-button',
              prevEl: '.custom-prev-button',
            }}
            // 4. slidesPerView를 'auto'로, spaceBetween을 32로 설정
            slidesPerView={'auto'}
            spaceBetween={32}
            loop={true}
            className="w-full"
          >
            {cardData.map((card, index) => (
              // 5. 각 슬라이드에 명시적인 너비 지정
              <SwiperSlide key={index} style={{ width: '305px' }}>
                <ImageCard
                  imgSrc={card.imgSrc}
                  imgAlt={card.imgAlt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    <div className='block md:hidden'>
      <div className="self-start flex-shrink-0 w-full pt-16 text-center">
          <h2 className="mb-8 text-[20px] font-extrabold font-suit leading-tight text-white">
            BIOADD.
            <br />
            이렇게 사용되고 있어요
          </h2>
        </div>

      <div className="w-full min-w-0 pb-8 overflow-hidden">
            <Swiper
              // navigation 모듈은 유지하되, 버튼은 아래에 추가합니다.
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              // --- 1. slidesPerView 값을 숫자로 변경 ---
              slidesPerView={1.25} 
              // --- 2. spaceBetween 값을 줄여 간격 최적화 ---
              spaceBetween={16}
              className="w-full"
            >
              {cardData.map((card, index) => (
                // 3. 각 슬라이드의 너비를 화면의 80%로 설정합니다.
                <SwiperSlide key={index} className="object-contain ">
                  <MobileImageCard
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

    </div>

    </>
  );
};

export default BioaddSection;
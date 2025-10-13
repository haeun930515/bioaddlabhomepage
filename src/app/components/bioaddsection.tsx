"use client";

import React from 'react';
import ImageCard from './imagecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MobileImageCard from './mobileimagecard';

const backgroundImage = '/videos/components/solution2.mp4';
const cardImage1 = '/images/content/bioadd1.jpg';
const cardImage2 = '/images/content/bioadd2.jpg';
const cardImage3 = '/images/content/bioadd3.jpg';
const cardImage4 = '/images/content/bioadd4.jpg';
const cardImage5 = '/images/content/bioadd5.jpg';
const cardImage6 = '/images/content/bioadd6.jpg';

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
    <section className="bg-black relative w-full py-24 min-h-[889px] overflow-hidden hidden md:block">
      <video
        src={backgroundImage}
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-fill w-full h-full "
      />

      <div className="relative z-10 flex w-full h-full">

        <div className="flex-shrink-0 w-[450px] self-start pt-16 pl-4 sm:pl-6 lg:pl-24 pr-12">
          <h2 className="mb-8 text-3xl font-extrabold leading-tight text-white">
            BIOADD.
            <br />
            이렇게 사용되고 있어요
          </h2>
          <div className="flex gap-3">
            <ArrowButton direction="left" className="custom-prev-button" />
            <ArrowButton direction="right" className="custom-next-button" />
          </div>
        </div>

        <div className="self-start flex-grow min-w-0 pt-16 pr-4 overflow-hidden sm:pr-6 lg:pr-24">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next-button',
              prevEl: '.custom-prev-button',
            }}
            slidesPerView={'auto'}
            spaceBetween={32}
            loop={true}
            className="w-full"
          >
            {cardData.map((card, index) => (
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
    <div className='block py-16 bg-black md:hidden'>
      <div className="self-start flex-shrink-0 w-full pt-8 text-center">
          <h2 className="mb-8 text-[20px] font-extrabold font-suit leading-tight text-white">
            BIOADD.
            <br />
            이렇게 사용되고 있어요
          </h2>
        </div>

      <div className="w-full min-w-0 px-4 pb-8 overflow-hidden">
            <Swiper
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              slidesPerView={1.25} 
              spaceBetween={16}
              className="w-full"
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
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
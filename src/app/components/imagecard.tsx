import React, { CSSProperties } from 'react';

interface ImageCardProps {
  imgSrc: string;
  imgAlt: string;
  imgStyle?: CSSProperties;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgSrc, imgAlt, imgStyle }) => {
  return (
    <div className="bg-white rounded-2xl w-[305px] h-[428px] overflow-hidden shadow-lg flex-shrink-0">
      <img
        className="object-cover w-full h-full"
        src={imgSrc}
        alt={imgAlt}
        style={imgStyle}
      />
    </div>
  );
};

export default ImageCard;
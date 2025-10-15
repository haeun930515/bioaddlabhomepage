import React from 'react';

const MobileImageCard: React.FC<{ imgSrc: string; imgAlt: string }> = ({ imgSrc, imgAlt }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl aspect-[4/6] bg-black">
      <img
        className="object-cover w-full h-full"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

export default MobileImageCard;
import React from 'react';

const MobileImageCard: React.FC<{ imgSrc: string; imgAlt: string }> = ({ imgSrc, imgAlt }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg aspect-[4/5] bg-black">
      <img
        className="object-contain w-full h-full"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

export default MobileImageCard;
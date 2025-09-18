import React from 'react';

const MobileImageCard: React.FC<{ imgSrc: string; imgAlt: string }> = ({ imgSrc, imgAlt }) => {
  return (
    // 1. 이미지가 꽉 차지 않을 때 남는 공간을 위해 배경색(bg-black)을 추가합니다.
    <div className="w-full overflow-hidden rounded-lg aspect-[4/5] bg-black">
      <img
        // 2. object-cover를 object-contain으로 변경합니다.
        className="object-contain w-full h-full"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};

export default MobileImageCard;
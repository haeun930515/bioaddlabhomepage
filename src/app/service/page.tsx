
import BioaddSection from '../components/bioaddsection';
import SmartBoardFeatures from '../components/smartBoardFeatures';
import SubSwiper from '../components/sub-swiper';

export default function ServicePage() {
  return (
   <div className="relative md:min-w-[1440px]">
      <h1 className="sr-only">바이오애드랩 스마트보드 기술 서비스</h1>
      <SubSwiper/>
      <SmartBoardFeatures/>
      <BioaddSection/>
      
    </div>
  );
}
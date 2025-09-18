
import BioaddSection from '../components/bioaddsection';
import SmartBoardFeatures from '../components/smartBoardFeatures';
import SubSwiper from '../components/sub-swiper';

export default function ServicePage() {
  return (
   <div className="relative md:min-w-[1440px]">
      <SubSwiper/>
      <SmartBoardFeatures/>
      <BioaddSection/>
      
    </div>
  );
}
import { HeroCarousel } from '@/components/carousel';
import { carouselData } from '../constant';

const Recommendation = async () => {
  return (
    <div>
      <HeroCarousel list={carouselData} />
    </div>
  );
};

export default Recommendation;

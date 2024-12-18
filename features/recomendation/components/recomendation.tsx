import { BookList } from '@/components/book';
import { HeroCarousel } from '@/components/carousel';
import { BookType } from '@/types/book';
import { carouselData } from '../constant';

interface IRecommendationProps {
  books: BookType[];
}

const Recommendation = ({ books }: IRecommendationProps) => {
  return (
    <div>
      <HeroCarousel list={carouselData} />
      <BookList books={books} />
    </div>
  );
};

export default Recommendation;

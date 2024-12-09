import { BookList } from '@/components/book';
import BookListSkeleton from '@/components/book/book-list-skeleton';
import { HeroCarousel } from '@/components/carousel';
import { getSearch } from '@/services/search';
import { Suspense } from 'react';
import { carouselData } from '../constant';

const Recommendation = async () => {
  const data = await getSearch();
  return (
    <div>
      <HeroCarousel list={carouselData} />
      <Suspense fallback={<BookListSkeleton />}>
        {data && <BookList books={data.items} />}
      </Suspense>
    </div>
  );
};

export default Recommendation;

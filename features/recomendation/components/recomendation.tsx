'use client';

import BookListSkeleton from '@/components/book/book-list-skeleton';
import { HeroCarousel } from '@/components/carousel';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { carouselData } from '../constant';
import { useGetRecommendation } from '../queries/useGetRecomendation';

const BookList = dynamic(() =>
  import('@/components/book').then((mod) => mod.BookList)
);

const Recommendation = () => {
  const { data } = useGetRecommendation();

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

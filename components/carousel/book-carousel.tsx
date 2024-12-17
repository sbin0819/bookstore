'use client';

import { BookType } from '@/types/book';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BookItem } from '../book';

interface BookCarouselProps {
  title: string;
  books: BookType[];
}

const BookCarousel = ({ title, books }: BookCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateButtonVisibility = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + offsetWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtonVisibility();

    const container = carouselRef.current;
    container?.addEventListener('scroll', updateButtonVisibility);

    return () => {
      container?.removeEventListener('scroll', updateButtonVisibility);
    };
  }, []);

  const scrollToPosition = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.offsetWidth;

      let targetScrollLeft = container.scrollLeft;

      if (direction === 'right') {
        targetScrollLeft += scrollAmount;
      } else {
        targetScrollLeft -= scrollAmount;
      }

      const threshold =
        Math.round(targetScrollLeft / scrollAmount) * scrollAmount;

      container.scrollTo({
        left: threshold,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full">
      <h3 className="px-6 py-6 text-2xl font-semibold">{title}</h3>
      <div className="relative w-full px-4">
        {/* 왼쪽 버튼 */}
        {showLeftButton && (
          <button
            onClick={() => scrollToPosition('left')}
            className="absolute left-1 top-1/3 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* Carousel 컨테이너 */}
        <div
          ref={carouselRef}
          className="relative flex w-full flex-nowrap items-center overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {books.map((book) => (
            <div
              key={book.isbn}
              className="relative mr-2 aspect-[9/16] w-[calc((100%/5)_-_8px)] flex-shrink-0 last:mr-0"
            >
              <div className="h-full w-full">
                <BookItem book={book} />
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 버튼 */}
        {showRightButton && (
          <button
            onClick={() => scrollToPosition('right')}
            className="absolute right-2 top-1/3 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCarousel;

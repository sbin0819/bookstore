'use client';

import { BookType } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  book: BookType;
}

const BookItem = ({ book }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <Link href={`/book/${book.isbn}`}>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <Image
            src={book.image}
            alt={book.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </Link>
      <div>
        <h2 className="line-clamp-2 pb-1">{book.title}</h2>
        <p className="line-clamp-2 text-sm text-gray-500">
          {book.author.replace('^', ', ')}
        </p>
      </div>
    </div>
  );
};

export default BookItem;

'use client';

import { BookItem } from '@/types/book';
import Image from 'next/image';

interface BookProps {
  book: BookItem;
}

const Book = ({ book }: BookProps) => {
  return (
    <div>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="line-clamp-2 pb-1">{book.title}</h2>
        <p className="text-sm text-gray-500">{book.author}</p>
      </div>
    </div>
  );
};

export default Book;

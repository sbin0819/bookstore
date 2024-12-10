'use client';

import { BookType } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  book: BookType;
}

const BookItem = ({ book }: Props) => {
  return (
    <div>
      <Link href={`/book/${book.isbn}`}>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div>
        <h2 className="line-clamp-2 pb-1">{book.title}</h2>
        <p className="text-sm text-gray-500">{book.author}</p>
      </div>
    </div>
  );
};

export default BookItem;

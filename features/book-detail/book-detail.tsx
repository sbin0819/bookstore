import { getSearch } from '@/services/search';
import Image from 'next/image';

interface Props {
  isbn: string;
}

const BookDetail = async ({ isbn }: Props) => {
  const book = await getSearch({
    query: isbn,
    display: 1,
  }).then((res) => res.items[0]);

  return (
    <div className="mt-6">
      <div className="flex items-start gap-8 md:gap-24">
        <div className="relative aspect-[3/4] w-80 flex-shrink-0 overflow-hidden rounded-lg border md:w-96">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-8">
          <h2 className="pb-1 text-4xl">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="text-sm text-gray-500">{book.publisher}</p>
          <p className="text-sm text-gray-500">{book.pubdate}</p>
          <p className="text-sm text-gray-500">{book.discount}</p>
          <p className="text-sm text-gray-500">{book.isbn}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

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
        <div className="relative aspect-[3/4] w-40 flex-shrink-0 overflow-hidden rounded-lg border md:w-52">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-8">
          <h2 className="pb-1 text-3xl font-bold">{book.title}</h2>
          <p className="text-sm text-gray-500">
            {book.author.replace('^', ', ')}
          </p>
          <p className="text-sm text-gray-500">{book.publisher}</p>
          <p className="text-sm text-gray-500">{book.pubdate}</p>
          <p className="text-sm text-gray-500">{book.discount}</p>
          <p className="text-sm text-gray-500">{book.isbn}</p>
        </div>
      </div>
      <div>
        <h3 className="mt-8 text-xl font-bold">책 소개</h3>
        <p className="mt-2 text-sm text-gray-500">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;

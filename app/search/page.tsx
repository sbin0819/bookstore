import BookDetail from '@/features/book-detail';
import { getSearch } from '@/services/search';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const query = (await searchParams).q;
  const book = await getSearch({
    query,
    display: 1,
  }).then((res) => res.items[0]);

  return (
    <>
      {!book && (
        <div className="py-8 text-xl text-gray-500">검색 결과가 없습니다.</div>
      )}
      {book && <BookDetail isbn={book.isbn} />}
    </>
  );
};

export default SearchPage;

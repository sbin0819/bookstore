import { BookCarousel } from '@/components/carousel';
import { getSearch } from '@/services/search';

const EventPage = async () => {
  const book1 = await getSearch({
    query: '한강',
    display: 20,
  });

  const book2 = await getSearch({
    query: '셜록',
    display: 20,
  });

  const book3 = await getSearch({
    query: '히가시노 게이고',
    display: 20,
  });

  return (
    <div className="flex flex-col gap-4">
      <BookCarousel title="노벨문학상 수상 작가 한강" books={book1.items} />
      <BookCarousel title="셜록 홈즈 시리즈" books={book2.items} />
      <BookCarousel title="히가시노 게이고의 베스트셀러" books={book3.items} />
    </div>
  );
};

export default EventPage;

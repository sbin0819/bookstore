import { BookList } from '@/components/book';
import { getSearch } from '@/services/search';

const queryMap = {
  '300': '컴퓨터',
  '400': '자기계발',
  '500': '경영',
  '600': '소설',
  '700': '인문',
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const queryMapKey = slug.split('-').pop() as keyof typeof queryMap;

  const data = await getSearch({
    query: queryMap[queryMapKey],
    display: 20,
  });

  return <BookList books={data.items} />;
};

export default Page;

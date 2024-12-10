import { getSearch } from '@/services/search';

interface Props {
  isbn: string;
}

const BookDetail = async ({ isbn }: Props) => {
  const data = await getSearch({
    query: isbn,
    display: 1,
  }).then((res) => res.items[0]);

  return <div>{data.title}</div>;
};

export default BookDetail;

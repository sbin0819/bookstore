import BookDetail from '@/features/book-detail';

const BookDetailPage = async ({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) => {
  const isbn = (await params).isbn;

  return <BookDetail isbn={isbn} />;
};

export default BookDetailPage;

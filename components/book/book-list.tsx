import { BookType } from '@/types/book';
import BookItem from './book-item';

interface BookListProps {
  books: BookType[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
    </ul>
  );
};

export default BookList;

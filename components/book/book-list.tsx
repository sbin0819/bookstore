import { BookItem } from '@/types/book';
import Book from './book';

interface BookListProps {
  books: BookItem[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
      {books.map((book) => (
        <Book key={book.isbn} book={book} />
      ))}
    </ul>
  );
};

export default BookList;

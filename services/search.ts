import { baseApiInstance } from './base';
import { BookListResponse } from '@/types/book';

const apiPrefix = '/search';

export const getSearch = () => baseApiInstance.get<BookListResponse>(apiPrefix);

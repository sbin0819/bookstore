import { BookListResponse } from '@/types/book';
import { baseApiInstance } from './base';

const apiPrefix = '/search';

export const getSearch = () =>
  baseApiInstance.get<BookListResponse>(`${apiPrefix}?query=javascript`);

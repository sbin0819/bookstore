import { BookListResponse } from '@/types/book';
import { baseApiInstance } from './base';

const apiPrefix = '/search';

interface SearchQueryParams {
  query: string;
  display?: number;
  start?: number;
}

export const getSearch = (query: SearchQueryParams) =>
  baseApiInstance.get<BookListResponse>(`${apiPrefix}`, {
    params: query,
  });

import { BookListResponse } from '@/types/book';
import { baseApiInstance } from './base';

const apiPrefix = '/recommendation';

export const getRecommendations = () =>
  baseApiInstance.get<BookListResponse>(apiPrefix);

import { CategoryListResponse } from '@/types/category';
import { baseApiInstance } from './base';

const apiPrefix = '/categories';

export const getCategories = () =>
  baseApiInstance.get<CategoryListResponse>(apiPrefix);

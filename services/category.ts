import { CategoryListResponse } from '@/types/category';
import { baseApiInstance } from './base';

const apiPrefix = '/category';

export const getCategories = () =>
  baseApiInstance.get<CategoryListResponse>(apiPrefix);

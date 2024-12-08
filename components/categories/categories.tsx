'use client';

import { cn } from '@/lib/utils';
import { useGetCategories } from '@/queries/useGetCategories';
import Category from './category';
import Loading from './loading';

const Categories = () => {
  const { data, isLoading } = useGetCategories();

  if (isLoading || !data) return <Loading />;

  return (
    <ul
      className={cn(
        'flex items-center overflow-auto py-4 [&::-webkit-scrollbar]:hidden'
      )}
    >
      {data.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;

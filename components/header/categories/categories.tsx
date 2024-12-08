'use client';

import { useGetCategories } from '@/queries/useGetCategories';
import Category from './category';
import Loading from './loading';

const Categories = () => {
  const { data, isLoading } = useGetCategories();

  if (isLoading || !data) return <Loading />;

  return (
    <ul className="flex items-center gap-4 overflow-auto py-4 [&::-webkit-scrollbar]:hidden">
      {data.categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;

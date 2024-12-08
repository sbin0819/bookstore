// Categories.tsx
'use client';

import { getCategories } from '@/services/category';
import { CategoryItem } from '@/types/category';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import Category from './category';
import Loading from './loading';

const Categories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then((res) => {
        if (res.data.categories.length === 0) {
          notFound();
        }
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.error(err);
        setError('카테고리를 불러오는 중 오류가 발생했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <ul className="flex items-center gap-4 overflow-auto py-4 [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;

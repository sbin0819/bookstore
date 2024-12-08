'use client';

import { getCategories } from '@/services/category';
import { Fragment, useEffect, useState } from 'react';
import Category from './category';
import { notFound } from 'next/navigation';
import { CategoryItem } from '@/types/category';

const Categories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    getCategories().then((res) => {
      if (res.data.categories.length === 0) {
        notFound();
      }

      setCategories(res.data.categories);
    });
  }, []);

  return (
    <ul className="flex items-center gap-4 py-4">
      {categories.map((category) => (
        <Fragment key={category.id}>
          <Category category={category} />
        </Fragment>
      ))}
    </ul>
  );
};

export default Categories;

import { getCategories } from '@/services/category';
import { Fragment } from 'react';
import Category from './category';

const fetchData = async () => {
  const res = await getCategories();
  return res.data;
};

const Categories = async () => {
  const categories = await fetchData();

  return (
    <ul className="flex items-center gap-4 py-4">
      {categories.categories.map((category) => (
        <Fragment key={category.id}>
          <Category category={category} />
        </Fragment>
      ))}
    </ul>
  );
};

export default Categories;

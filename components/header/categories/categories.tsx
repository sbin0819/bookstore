import { getCategories } from '@/services/category';

const fetchData = async () => {
  const res = await getCategories();
  return res.data;
};

const Categories = async () => {
  // const categories = await fetchData();
  // console.log(categories);
  return <div className="flex items-center gap-4 py-4">category</div>;
};

export default Categories;

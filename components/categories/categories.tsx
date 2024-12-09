import { cn } from '@/lib/utils';
import { getCategories } from '@/services/category';
import Category from './category';

const Categories = async () => {
  const data = await getCategories();

  return (
    <ul
      className={cn(
        'flex items-center overflow-auto py-4 [&::-webkit-scrollbar]:hidden'
      )}
    >
      {data.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;

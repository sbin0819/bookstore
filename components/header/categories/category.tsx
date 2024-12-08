'use client';

import { cn } from '@/lib/utils';
import { CategoryItem } from '@/types/category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryProps {
  category: CategoryItem;
}

const Category = ({ category }: CategoryProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(category.slug);

  const activeCategory = isActive
    ? 'bg-blue-500 text-white py-2 px-4 rounded-full hover:text-white'
    : '';

  return (
    <li
      className={cn(
        'text flex-shrink-0 text-lg font-semibold hover:text-blue-500',
        activeCategory
      )}
    >
      <Link
        className={isActive ? 'cursor-default' : ''}
        href={`/books/${category.slug}`}
      >
        {category.name}
      </Link>
    </li>
  );
};

export default Category;

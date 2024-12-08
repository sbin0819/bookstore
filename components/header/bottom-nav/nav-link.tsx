'use client';

import { cn } from '@/lib/utils';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './constant';

interface Props {
  item: (typeof navItems)[number];
}

const NavLink = ({ item }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes(item.value);

  const activeCategory = isActive ? 'text-blue-500 hover:text-blue-500' : '';

  return (
    <li
      className={cn(
        'text flex-shrink-0 text-lg font-semibold transition-colors hover:text-gray-400',
        activeCategory
      )}
    >
      <Link className={isActive ? 'cursor-default' : ''} href={item.slug}>
        {item.name}
      </Link>
    </li>
  );
};

export default NavLink;

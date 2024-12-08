import { cn } from '@/lib/utils';
import { navItems } from './constant';
import NavLink from './nav-link';

const BottomNavigation = () => {
  return (
    <ul
      className={cn(
        'flex items-center gap-8 overflow-auto py-2 [&::-webkit-scrollbar]:hidden'
      )}
    >
      {navItems.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BottomNavigation;

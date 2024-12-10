import { Suspense } from 'react';
import BottomNav from './bottom-nav';
import Logo from './logo';
import Menu from './menu';
import Searchbar from './searchbar';

const Header = () => {
  return (
    <header className="border-b bg-white px-4">
      <nav className="grid grid-cols-[1fr_auto] items-center justify-between gap-x-2 pb-2 pt-4 md:grid-cols-[1fr_auto_auto] md:pt-7">
        <Logo />
        <Suspense>
          <Searchbar />
        </Suspense>
        <Menu />
      </nav>
      <BottomNav />
    </header>
  );
};

export default Header;

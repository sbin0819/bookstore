import Categories from './categories';
import Logo from './logo';
import Menu from './menu';
import Searchbar from './searchbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b px-4">
      <nav className="grid grid-cols-[1fr_auto] items-center justify-between gap-x-2 pb-2 pt-4 md:grid-cols-[1fr_auto_auto]">
        <Logo />
        <Searchbar />
        <Menu />
      </nav>
      <Categories />
    </header>
  );
};

export default Header;

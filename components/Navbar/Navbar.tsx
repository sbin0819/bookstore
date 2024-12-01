import Header from './Header';
import Search from './Search';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <Header />
      <Search />
    </header>
  );
};

export default Navbar;

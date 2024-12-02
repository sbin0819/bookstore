import Categories from './Categories/Categories';
import Header from './Header';
import Search from './Search';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="px-6">
        <Header />
        <Search />
      </div>
      <hr className="my-8" />
      <div className="px-6">
        <Categories />
      </div>
    </header>
  );
};

export default Navbar;

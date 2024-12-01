import Link from 'next/link';
import HeaderDropdown from './Dropdown';
import LocaleDialog from './LocaleDialog';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Link href="/host/homes" className="cursor-pointer">
            <div>당신의 공간을 에어비엔비하세요.</div>
          </Link>
          <LocaleDialog />
          <HeaderDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;

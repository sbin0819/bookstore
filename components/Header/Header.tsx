import Image from 'next/image';
import HeaderDropdown from './Dropdown';
import TranslateDialog from './TranslateDialog';

const Header = () => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/icons/logo.png" alt="logo" width={30} height={42} />
        </div>
        <div className="flex items-center gap-4">
          <div>당신의 공간을 에어비엔비하세요.</div>
          <TranslateDialog />
          <HeaderDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;

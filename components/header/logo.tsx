import Link from 'next/link';
import { IoBookOutline } from 'react-icons/io5';
const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <IoBookOutline className="text-4xl text-blue-500" />
        <span className="text-2xl font-bold text-blue-500">BookStore</span>
      </div>
    </Link>
  );
};

export default Logo;

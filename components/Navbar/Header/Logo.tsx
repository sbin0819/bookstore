import Image from 'next/image';
import Link from 'next/link';

const Logo = async () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Image src="/icons/logo.png" alt="logo" width={30} height={42} />
    </Link>
  );
};

export default Logo;

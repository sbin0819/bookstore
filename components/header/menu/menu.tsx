'use client';
import { useGetMe } from '@/queries/useGetMe';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { IoLibraryOutline } from 'react-icons/io5';

const Menu = () => {
  const { data } = useGetMe();

  return (
    <div>
      <ul className="flex gap-4">
        {data ? (
          <>
            <li>
              <BsBell className="cursor-pointer text-[26px] text-gray-500" />
            </li>
            <li>
              <AiOutlineShoppingCart className="cursor-pointer text-[26px] text-gray-500" />
            </li>
            <li>
              <IoLibraryOutline className="cursor-pointer text-[26px] text-gray-500" />
            </li>
            <Link href="/profile">
              <li>
                <AiOutlineUser className="cursor-pointer text-[26px] text-gray-500" />
              </li>
            </Link>
          </>
        ) : (
          <Link href="/signin">로그인</Link>
        )}
      </ul>
    </div>
  );
};

export default Menu;

import { BsBell } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';

const Menu = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <BsBell className="cursor-pointer text-[26px] text-gray-500" />
        </li>
        <li>
          <AiOutlineShoppingCart className="cursor-pointer text-[26px] text-gray-500" />
        </li>
        <li>
          <IoLibraryOutline className="cursor-pointer text-[26px] text-gray-500" />
        </li>
        <li>
          <AiOutlineUser className="cursor-pointer text-[26px] text-gray-500" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;

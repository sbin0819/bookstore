import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser } from 'lucide-react';
import { RxHamburgerMenu } from 'react-icons/rx';

const HeaderDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-4 rounded-full border px-4 py-3">
          <RxHamburgerMenu size={24} />
          <CircleUser size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer font-semibold">
          회원 가입
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">로그인</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          당신의 공간을 에어비앤비하세요
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          체험 호스팅하기
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          도움말 센터
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropdown;

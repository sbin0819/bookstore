'use client';

import { logout } from '@/services/auth';

const Page = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <div
          className="cursor-pointer bg-blue-300 px-4 py-2"
          onClick={handleLogout}
        >
          logout
        </div>
      </div>
    </div>
  );
};

export default Page;

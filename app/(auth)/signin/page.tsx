'use client';

import { BASE_API_URL } from '@/services/base';

const Page = () => {
  const handleSignInWithGoogle = () => {
    const googleLoginUrl = `${BASE_API_URL}/auth/google`;
    window.location.href = googleLoginUrl;
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1
        onClick={handleSignInWithGoogle}
        className="cursor-pointer text-blue-500"
      >
        Google Login
      </h1>
    </div>
  );
};

export default Page;

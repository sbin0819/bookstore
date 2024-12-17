'use client';

import { baseApiInstance } from '@/services/base';

const Page = () => {
  const handleSignIn = () => {
    const googleLoginUrl = `http://localhost:4000/auth/google`;
    window.location.href = googleLoginUrl;
  };

  const handleSignUp = async () => {
    const res = await baseApiInstance.post('/auth/signup', {
      email: 'test4@gmail.com',
      password: '123456',
      username: 'test4',
    });

    console.log(res);
  };

  const handleLogin = async () => {
    await baseApiInstance.post('/auth/login', {
      email: 'test@gmail.com',
      password: '123456',
    });
  };

  const handleProfile = async () => {
    const res = await baseApiInstance.get('/auth/profile');
    console.log(res);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 onClick={handleSignIn}>Google login</h1>
      <div onClick={handleSignUp} className="bg-[gold] px-2 py-2">
        sign up
      </div>
      <div onClick={handleLogin} className="bg-[gold] px-2 py-2">
        login
      </div>
      <div onClick={handleProfile} className="bg-[gold] px-2 py-2">
        profile
      </div>
    </div>
  );
};

export default Page;

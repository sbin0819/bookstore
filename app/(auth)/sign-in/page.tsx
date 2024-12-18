'use client';

import { baseApiInstance } from '@/services/base';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    // Initialize token from localStorage if available
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      baseApiInstance.setAccessToken(storedToken);
    }
  }, []);

  const handleSignIn = () => {
    const googleLoginUrl = `http://localhost:4000/auth/google`;
    window.location.href = googleLoginUrl;
  };

  const handleSignUp = async () => {
    try {
      const res: { access_token: string } = await baseApiInstance.post(
        '/auth/signup',
        {
          email: 'test44@gmail.com',
          password: '123456',
          username: 'test44',
        }
      );
      console.log(res);
      if (res?.access_token) {
        baseApiInstance.setAccessToken(res.access_token);
      }
    } catch (error) {
      console.error('SignUp Error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const res: { access_token: string } = await baseApiInstance.post(
        '/auth/login',
        {
          email: 'test@gmail.com',
          password: '123456',
        }
      );
      if (res.access_token) {
        console.log(res.access_token);
        baseApiInstance.setAccessToken(res.access_token);
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleProfile = async () => {
    try {
      const res = await baseApiInstance.get('/auth/profile');
      console.log(res);
    } catch (error) {
      console.error('Profile Error:', error);
    }
  };

  const handleRefreshTokens = async () => {
    try {
      const userId = 1; // Replace with actual user ID
      const refreshToken = 'existing_refresh_token'; // Retrieve refresh token appropriately
      const res: { access_token: string } = await baseApiInstance.post(
        '/auth/refresh',
        {
          userId,
          refreshToken,
        }
      );
      if (res.access_token) {
        baseApiInstance.setAccessToken(res.access_token);
      }
    } catch (error) {
      console.error('Refresh Tokens Error:', error);
    }
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
      <div onClick={handleRefreshTokens} className="bg-[gold] px-2 py-2">
        refresh tokens
      </div>
    </div>
  );
};

export default Page;

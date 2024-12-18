// src/pages/page.tsx (Adjust the path as needed)
'use client';

import { baseApiInstance } from '@/services/base';
import { useEffect, useState } from 'react';

const Page = () => {
  const [profile, setProfile] = useState<string | null>(null);

  useEffect(() => {
    // Initialize token from localStorage if available
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      baseApiInstance.setAccessToken(storedToken);
    } else {
      // Attempt to refresh tokens if access_token is not present
      const initializeAuth = async () => {
        try {
          const res: { access_token: string } =
            await baseApiInstance.post('/auth/refresh');
          if (res.access_token) {
            baseApiInstance.setAccessToken(res.access_token);
          }
        } catch (error) {
          console.error('Refresh Error:', error);
        }
      };

      initializeAuth();
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
      console.log('SignUp Response:', res);
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
        console.log('Login Response:', res.access_token);
        baseApiInstance.setAccessToken(res.access_token);
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleProfile = async () => {
    try {
      const res = await baseApiInstance.get('/auth/profile');
      console.log('Profile Response:', res);
      setProfile('success');
    } catch (error) {
      console.error('Profile Error:', error);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 onClick={handleSignIn} className="cursor-pointer text-blue-500">
        Google Login
      </h1>
      <div
        onClick={handleSignUp}
        className="cursor-pointer bg-[gold] px-4 py-2"
      >
        Sign Up
      </div>
      <div onClick={handleLogin} className="cursor-pointer bg-[gold] px-4 py-2">
        Login
      </div>
      <div
        onClick={handleProfile}
        className="cursor-pointer bg-[gold] px-4 py-2"
      >
        Profile
      </div>
      {/* Removed handleRefreshTokens */}
      {/* Optional: Display user profile */}
      {profile && (
        <div className="mt-4 rounded border p-4">
          <h2 className="text-xl">User Profile</h2>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Page;

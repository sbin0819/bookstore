'use client';

import { baseApiInstance } from '@/services/base';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GoogleCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');

      if (accessToken) {
        baseApiInstance.setAccessToken(accessToken);

        router.replace('/');
      }
    };

    handleCallback();
  }, [router]);

  return null;
};

export default GoogleCallbackPage;

'use client';
import { BASE_API_URL } from '@/services/base';

const GoogleSignIn = () => {
  const handleSignInWithGoogle = () => {
    const googleLoginUrl = `${BASE_API_URL}/auth/google`;
    window.location.href = googleLoginUrl;
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="mt-52 rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;

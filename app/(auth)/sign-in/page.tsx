'use client';

const Page = () => {
  const handleSignIn = () => {
    const googleLoginUrl = `http://localhost:4000/auth/google`;
    window.location.href = googleLoginUrl;
  };

  return (
    <div>
      <h1 onClick={handleSignIn}>Google login</h1>
    </div>
  );
};

export default Page;

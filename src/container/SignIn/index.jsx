import React from 'react';
import SignInForm from './SignInForm';

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-color-palette-1 relative">
      <div className="flex flex-col container mx-auto justify-center items-center w-full h-full">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;

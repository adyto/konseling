import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-color-palette-1 relative">
      <div className="flex flex-col container mx-auto justify-center items-center w-full h-full">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;

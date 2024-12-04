import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our community of property seekers"
      type="signup"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
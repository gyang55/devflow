"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  username: string;
}

const SignUp = () => {
  const defaultValues: SignUpFormValues = {
    email: "",
    password: "",
    name: "",
    username: "",
  };

  const handleSignUp = async (data: SignUpFormValues) => {
    // Replace with your real sign-up logic
    console.log("Sign up data:", data);
    return { success: true };
  };

  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={defaultValues}
      onSubmit={handleSignUp}
    />
  );
};

export default SignUp;

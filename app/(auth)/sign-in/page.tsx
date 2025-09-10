"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const defaultValues: SignInFormValues = { email: "", password: "" };

  const handleSignIn = async (data: SignInFormValues) => {
    // Replace with your real sign-in logic
    console.log("Sign in data:", data);
    return { success: true };
  };

  return (
    <AuthForm
      formType="SIGN_IN"
      defaultValues={defaultValues}
      onSubmit={handleSignIn}
    />
  );
};

export default SignIn;

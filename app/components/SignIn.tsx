import React from "react";
import CredentialsForm from "./CredentialsForm";

export function SignIn() {
  return (
    <div className="w-fulll flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        <span className="text-2xl font-semibold text-white text-center mt-8"></span>
        <CredentialsForm />
      </div>
    </div>
  );
}

export default SignIn;

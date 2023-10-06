"use client";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 text-xl transition-colors duration-300 bg-white border-2 border-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <FcGoogle />
      <span className="ml-4"> Continue with Google</span>
    </button>
  );
}

export function GithubSignInButton() {
  const handleClick = () => {
    signIn("github");
  };
  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 text-xl transition-colors duration-300 bg-white border-2 border-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <BsGithub />
      <span className="ml-4"> Continue with Github</span>
    </button>
  );
}

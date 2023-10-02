"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
  csrfToken?: string;
}

export default function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      //redirect to homepage
      router.push("/");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Email or Password is wrong!");
    }
  };
  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
      onSubmit={(e) => handleSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-whhite bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <input
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button
        className="w-full h-12 px-6 mt-4 text-lg text-white transition bg-green-800 rounded-lg focus:shadow-outline hover:bg-green-900"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

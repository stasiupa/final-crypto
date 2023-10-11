"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log({ response });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };
  return (
    <form
      className="flex flex-col mx-auto gap-2 max-w-md mt-10"
      onSubmit={handleSubmit}
    >
      <input
        name="email"
        className="m-2 p-2 border border-black"
        type="email"
        placeholder="Enter email"
      />
      <input
        name="password"
        className="m-2 p-2 border border-black"
        type="password"
        placeholder="Enter password"
      />
      <button className="bg-green-500 m-2 p-2" type="submit">
        Login
      </button>
    </form>
  );
}

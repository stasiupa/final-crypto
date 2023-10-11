"use client";

import { FormEvent, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:8000/api/user/create-user/`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log({ response });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        onChange={handleInputChange}
      />
      <input
        name="password"
        className="m-2 p-2 border border-black"
        type="password"
        placeholder="Enter password"
        onChange={handleInputChange}
      />
      <input
        name="name"
        className="m-2 p-2 border border-black"
        type="name"
        placeholder="Enter name"
        onChange={handleInputChange}
      />
      <button className="bg-green-500 m-2 p-2" type="submit">
        Register
      </button>
    </form>
  );
}

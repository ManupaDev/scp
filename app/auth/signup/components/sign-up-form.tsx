"use client";

import { ChangeEvent, useState } from "react";
import { signUpUser } from "@/firebase/authenticate";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //* [name] is a dynamic key, changed element's name is used as key it updates
    //* the relevant firld of the formData object with the value
  };
  const handleSignUp = async () => {
    if (formData.password === formData.confirmPassword) {
      await signUpUser(formData.email, formData.password);
    }
  };

  return (
    <div className=" font-sans border-black mt-4">
      <div>
        <h1 className="font-semibold text-xl">Username</h1>
        <input
          type="text"
          name="username"
          value={formData["username"]}
          className="border border-black rounded text-xl"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-xl">Email</h1>
        <input
          type="email"
          name="email"
          value={formData["email"]}
          className="border border-black rounded text-xl"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-xl">Password</h1>
        <input
          type="password"
          name="password"
          value={formData["password"]}
          className="border border-black rounded text-xl"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-xl">Confirm Password</h1>
        <input
          type="password"
          name="confirmPassword"
          value={formData["confirmPassword"]}
          className="border border-black rounded text-xl"
          onChange={handleFormDataChange}
        />
      </div>
      <button
        type="button"
        className="border border-black rounded px-2 py-2"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;

"use client";

import { ChangeEvent, useState } from "react";
import { loginUser, logoutUser } from "@/firebase/authenticate";
import { useRouter } from "next/navigation";

function LogInForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //* [name] is a dynamic key, changed element's name is used as key it updates
    //* the relevant firld of the formData object with the value
  };
  const handleLogin = async () => {
    await loginUser(formData.email, formData.password);
    router.push("/");
  };

  return (
    <div className=" font-sans border-black mt-4">
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

      <button
        type="button"
        className="border border-black rounded px-2 py-2"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
}

export default LogInForm;

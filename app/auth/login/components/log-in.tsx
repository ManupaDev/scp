"use client";

import { ChangeEvent, useState } from "react";

function LogInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //* [name] is a dynamic key, changed element's name is used as key it updates
    //* the relevant firld of the formData object with the value
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

      <button type="button" className="border border-black rounded px-2 py-2">
        Log In
      </button>
    </div>
  );
}

export default LogInForm;

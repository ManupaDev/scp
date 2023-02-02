"use client";

import { ChangeEvent, useState } from "react";

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

  return (
    <div className="border font-sans border-black mt-4">
      <div>
        <h1 className="font-semibold text-xl">Username</h1>
        <input
          type="text"
          name="username"
          value={formData["username"]}
          onChange={handleFormDataChange}
        />
      </div>
      <div>
        <h1 className="font-semibold text-xl">Password</h1>
        <input
          type="password"
          name="password"
          value={formData["password"]}
          onChange={handleFormDataChange}
        />
      </div>
      <div>
        <h1 className="font-semibold text-xl">Confirm Password</h1>
        <input
          type="confirmPassword"
          name="confirmPassword"
          value={formData["confirmPassword"]}
          onChange={handleFormDataChange}
        />
      </div>
    </div>
  );
}

export default SignUpForm;

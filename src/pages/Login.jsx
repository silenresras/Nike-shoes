import { Mail, User } from "lucide-react";
import React, { useState } from "react";

import Button from "../Components/Button";
import Input from "../Components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send login request to server with email and password
  };

  return (
    <div className="items-center justify-center flex flex-grow mt-10">
      <div className="max-w-md w-full bg-slate-200 bg-opacity-50  rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-coral-red">
            Welcome Back
          </h2>
          <form>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={User}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button label="submit" type="submit" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

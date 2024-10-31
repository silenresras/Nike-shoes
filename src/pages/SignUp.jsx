import React, { useState } from "react";
import { Loader, Mail, User } from "lucide-react";

import Input from "../Components/Input";
import Button from "../Components/Button";
import { useAuthStore } from "../Components/Store/AuthStore";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(name, email, password);
      navigate("/verify-email");
    } catch (error) {}
  };

  return (
    <div className="items-center justify-center flex flex-grow mt-10">
      <div className="max-w-md w-full bg-slate-200 bg-opacity-50  rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-coral-red">
            Create an Account
          </h2>
          <form>
            <Input
              icon={User}
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
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

            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}

            <Button
              label="submit"
              type="submit"
              onClick={handleSubmit}
              isLoading={isLoading}
              loader={Loader}
            />
          </form>
        </div>
        <div className="px-8 py-4 bg-slate-300 bg-opacity-50 flex justify-center font-semibold">
          <p className="text-sm text-red-500">
            Already Have an Account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:underline font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

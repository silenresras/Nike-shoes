import { Loader, Mail, User } from "lucide-react";
import React, { useState, useEffect } from "react";

import Button from "../Components/Button";
import Input from "../Components/Input";
import { useAuthStore } from "../Components/Store/AuthStore";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading, clearError  } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    clearError()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    clearError()

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}

            <div className="flex items-center mb-2 pl-5">
              <Link
                to="/forgot-password"
                className="text-sm text-red-500 hover:underline font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
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
            Don't Have an Account?{" "}
            <Link
              to="/signup"
              className="text-green-400 hover:underline font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

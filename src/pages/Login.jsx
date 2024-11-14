import { EyeIcon, EyeOffIcon, Loader, Mail, User } from "lucide-react";
import React, { useState, useEffect } from "react";

import Button from "../Components/Button";
import Input from "../Components/Input";
import { useAuthStore } from "../Components/Store/AuthStore";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { login, error, isLoading, clearError } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    clearError();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    clearError();

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
            <div className="relative mb-4">
              <Input
                icon={Mail}
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <Input
                icon={User}
                type={visible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                // Clear password field on click
                onClick={() => setVisible(!visible)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-400 font-bold"
              >
                {visible ? <EyeIcon /> : <EyeOffIcon />}
              </div>
            </div>
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

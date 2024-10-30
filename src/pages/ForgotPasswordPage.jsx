import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Mail } from "lucide-react";
import { useAuthStore } from "../Components/Store/AuthStore";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };
  return (
    <div className="items-center justify-center flex flex-grow mt-10">
      <div className="max-w-md w-full bg-slate-200 bg-opacity-50  rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-coral-red">
            Forgot Password
          </h2>
          {!isSubmitted ? (
            <form>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button label="submit" type="submit" onClick={handleSubmit} />
            </form>
          ) : (
            <div className="text-center">
              <div className="flex justify-center items-center">
                <Mail className="h-12 w-12 text-slate-600 font-bold" />
              </div>
              <p className="text-red-500 font-semibold">
                If an account exists for {email}, you will receive a password
                reset link shortly
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

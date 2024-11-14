import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { EyeIcon, EyeOffIcon, Loader, User } from "lucide-react";
import { useAuthStore } from "../Components/Store/AuthStore";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { resetPassword, error, message, isLoading } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await resetPassword(token, password);

      toast.success("Password Reset Success, redirecting to login page....");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("error reset password, try again later");
    }
  };
  return (
    <div className="items-center justify-center flex flex-grow mt-10">
      <div className="max-w-md w-full bg-slate-200 bg-opacity-50  rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-coral-red">
            Reset Password
          </h2>
          <form>
            <div className="relative mb-3">
              <Input
                icon={User}
                type={visible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-400 font-bold"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeIcon /> : <EyeOffIcon />}
              </div>
            </div>
            <div className="relative mb-3">
              <Input
                icon={User}
                type={visible ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-400 font-bold"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeIcon /> : <EyeOffIcon />}
              </div>
            </div>

            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
            {message && (
              <p className="text-green-500 text-sm mb-4">{message}</p>
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
      </div>
    </div>
  );
};

export default ResetPasswordPage;

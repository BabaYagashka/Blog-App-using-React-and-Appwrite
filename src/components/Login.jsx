import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-10 bg-gray-100 rounded-xl  ">
      {/* LEFT SECTION */}
      <div className="hidden md:flex flex-col justify-center px-16 bg-gray-200 rounded-xl gap-4">
        <img
          src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1000&auto=format&fit=crop"
          alt="Modern Aesthetic Logo"
          className="w-200 h-70 object-cover border-4 border-gray-200 rounded-2xl shadow-lg shadow-gray-900 overflow-hidden"
        />

        <h2 className="mt-6 text-4xl font-bold text-gray-800">Welcome back!</h2>

        <p className="mt-3 text-lg text-gray-600 max-w-md">
          Sign in to continue writing, reading, and managing your blog posts.
        </p>

        <ul className="mt-5 space-y-4 text-gray-600 text-base">
          <li>• Focused writing experience</li>
          <li>• Discover quality content</li>
          <li>• Secure authentication with Appwrite</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center px-6 sm:px-12  bg-gray-100 rounded-xl">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Log in to your account!.
          </h2>

          <p className="mt-2 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {error && (
            <p className="mt-6 text-center text-sm text-red-500 bg-red-50 py-2 rounded-lg">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-6">
              <Input
                label="Email"
                placeholder="you@example.com"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value,
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="●●●●●●●●"
                {...register("password", {
                  required: true,
                })}
              />

              <Button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition active:scale-[0.98]"
              >
                Log in
              </Button>
            </div>
          </form>
          <p className="mt-8 text-center text-xs text-slate-500 uppercase tracking-widest">
            Powered by Appwrite & React
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

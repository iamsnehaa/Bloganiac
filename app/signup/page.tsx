"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Boxes } from "@/components/footerbg";
const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-940 px-4">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Boxes className="h-full w-full scale-100 opacity-80" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-black shadow-2xl rounded-lg p-8 w-full max-w-md"
      >
        <button
          onClick={() => router.back()}
          className="absolute top-3 right-3 text-gray-600 text-xl hover:text-gray-800"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-white mb-4">
          {isSignUp ? "Create an Account" : "Welcome Back!"}
        </h2>

        {isSignUp ? (
          <SignUpForm toggle={() => setIsSignUp(false)} />
        ) : (
          <LoginForm toggle={() => setIsSignUp(true)} />
        )}
      </motion.div>
    </div>
  );
};

const SignUpForm = ({ toggle }: { toggle: () => void }) => {
  return (
    <form className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" type="text" placeholder="John" />
      </div>

      <div>
        <Label htmlFor="middle-name">Middle Name (Optional)</Label>
        <Input
          id="middle-name"
          type="text"
          placeholder="Middle Name"
          required={false}
        />
      </div>

      <div>
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" type="text" placeholder="Doe" />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="example@mail.com" />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="********" />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1234567890" />
      </div>

      <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
        Sign Up
      </button>

      <p className="text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <span
          className="text-blue-600 font-semibold cursor-pointer"
          onClick={toggle}
        >
          Login
        </span>
      </p>
    </form>
  );
};

const LoginForm = ({ toggle }: { toggle: () => void }) => {
  return (
    <form className="flex flex-col space-y-4">
      <div>
        <Label htmlFor="login">Username or Email</Label>
        <Input
          id="login"
          type="text"
          placeholder="Enter your username or email"
        />
      </div>

      <div>
        <Label htmlFor="login-password">Password</Label>
        <Input id="login-password" type="password" placeholder="********" />
      </div>

      <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
        Login
      </button>

      <p className="text-sm text-gray-600 text-center">
        Don’t have an account?{" "}
        <span
          className="text-blue-600 font-semibold cursor-pointer"
          onClick={toggle}
        >
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default AuthCard;

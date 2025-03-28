"use client";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");

  const handleSignUp = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Sign-up successful for: ${email}`);
    setEmail(""); 
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="bg-gray-100 py-16 flex justify-center">
      <div className="max-w-lg w-full px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us Today!</h2>
        <p className="text-gray-600 mb-6">Sign up to get the latest updates and offers.</p>

        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSignUp}
            className="bg-yellow-500 text-black px-5 py-3 rounded-r-lg font-medium hover:bg-yellow-400 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

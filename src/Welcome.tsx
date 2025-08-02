import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center">
      <div className="text-center px-6 py-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to <span className="text-yellow-300">Brainly</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Your learning companion for smarter study and faster solutions.
        </p>
        <Link
          to="/login"
          className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl shadow-md transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

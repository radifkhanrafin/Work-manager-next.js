"use client";
import React from "react";

const CallToAction = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/Tx3c8HcX/Whats-App-Image-2025-05-4f4d9df5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-100 bg-opacity-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-black">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Organized?</h2>
        <p className="mb-6 text-lg">
          Start managing your work like a pro. Simplify, track, and achieve more—today.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-black font-medium rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

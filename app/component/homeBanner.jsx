"use client";
import React from "react";

const Banner = () => {
    return (
        <section className="mt-5 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-6">

            <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Simplify Your Workflow <br />
                        with <span className="text-blue-600 dark:text-blue-400">Work Manager</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Organize tasks, track progress, and boost productivity—all in one place.
                    </p>
                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                        alt="Task Management"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>

        </section>
    );
};

export default Banner;

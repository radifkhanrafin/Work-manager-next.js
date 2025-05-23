"use client";
import React from "react";
import { CheckCircle, Clock, Users, ListChecks } from "lucide-react"; // Optional icons

const features = [
  {
    title: "Task Management",
    description: "Easily create, update, and organize your tasks to stay on top of your work.",
    icon: <ListChecks className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Real-time Collaboration",
    description: "Collaborate with your team and share updates instantly.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Time Tracking",
    description: "Track the time you spend on tasks and improve your productivity.",
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Project Completion",
    description: "Monitor task progress and get notified when projects are complete.",
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
  },
];

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Powerful Features to Boost Productivity
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Everything you need to manage your work effectively.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4  flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

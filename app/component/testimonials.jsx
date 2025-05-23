"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    message:
      "Work Manager transformed our workflow. Task delegation and tracking is now super smooth!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Brian Smith",
    role: "Team Lead",
    message:
      "An essential tool for managing distributed teams. I love the UI and functionality.",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Clara Williams",
    role: "Freelancer",
    message:
      "This app has made it so easy to track my client work and deadlines. Highly recommend!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What Our Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Trusted by teams, freelancers, and professionals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 dark:text-gray-200 italic mb-3">
                  “{testimonial.message}”
                </p>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;

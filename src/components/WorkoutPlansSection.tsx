"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function WorkoutPlansSection() {
  const workoutPlans = [
    {
      icon: "solar:heart-pulse-2-bold",
      title: "Cardio Training",
      description:
        "Boost endurance and heart health with high-energy cardio sessions designed to keep you moving",
    },
    {
      icon: "solar:dumbbell-large-bold",
      title: "Strength Build",
      description:
        "Develop power and resilience through expert-guided strength training tailored to all fitness levels.",
    },
    {
      icon: "solar:fire-bold",
      title: "Fat Loss",
      description:
        "Shed unwanted fat with dynamic workout routines and fat-burning strategies that deliver lasting results.",
    },
    {
      icon: "solar:lightning-bold",
      title: "HIIT Workouts",
      description:
        "Maximize calorie burn and improve fitness with short, intense high-intensity interval training sessions.",
    },
    {
      icon: "solar:stretching-bold",
      title: "Flexibility & Mobility",
      description:
        "Improve range of motion and prevent injuries with targeted stretching and mobility exercises.",
    },
    {
      icon: "solar:meditation-bold",
      title: "Mind-Body Connection",
      description:
        "Enhance mental clarity and reduce stress through yoga, meditation, and mindfulness practices.",
    },
    {
      icon: "solar:stopwatch-bold",
      title: "Endurance Training",
      description:
        "Build stamina and athletic performance with progressive endurance and conditioning programs.",
    },
    {
      icon: "solar:running-round-bold",
      title: "Functional Movement",
      description:
        "Master everyday movements and improve quality of life with functional fitness training.",
    },
  ];

  return (
    <section className="relative pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-800 to-accent-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center text-orange-100">
          <h2 className="font-cabinet-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-wider">
            Discover
          </h2>
          <h2 className="font-cabinet-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            Y
            <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -ml-2 md:-ml-2 inline-block relative">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
              />
            </span>
            ur Perfect Workout
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto font-medium">
            We Deliver A Fitness Experience That&apos;s Truly One-Of-A-Kind.
            Explore How
            <br />
            We Help You Achieve Your Goals Faster And Smarter.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="workout-plans-swiper !py-16 !px-4 md:!px-12"
          >
            {workoutPlans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="group p-6 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-100/20 h-[240px] flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-orange-100/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100/30 transition-all duration-300">
                    <Icon
                      icon={plan.icon}
                      className="text-orange-100 text-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-cabinet-grotesk font-bold text-xl mb-3 group-hover:text-orange-100 transition-colors duration-300">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-orange-100/40 hover:bg-orange-100/10 transition-all duration-300 group">
            <Icon
              icon="solar:arrow-left-bold"
              className="text-white text-xl group-hover:text-orange-100 transition-colors duration-300"
            />
          </button>

          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-orange-100/40 hover:bg-orange-100/10 transition-all duration-300 group">
            <Icon
              icon="solar:arrow-right-bold"
              className="text-white text-xl group-hover:text-orange-100 transition-colors duration-300"
            />
          </button>
        </div>
      </div>

      {/* Custom styles for swiper pagination and navigation */}
      <style jsx global>{`
        .workout-plans-swiper .swiper-pagination {
          bottom: 16px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 12px !important;
          z-index: 10 !important;
        }

        .custom-bullet {
          width: 40px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.2) !important;
          border-radius: 20px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
          opacity: 1 !important;
          position: relative !important;
          overflow: hidden !important;
          backdrop-filter: blur(4px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        .custom-bullet::before {
          content: "" !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          ) !important;
          transform: translateX(-100%) !important;
          transition: transform 0.6s ease !important;
        }

        .custom-bullet:hover {
          background: rgba(240, 56, 22, 0.3) !important;
          border-color: rgba(240, 56, 22, 0.3) !important;
          transform: scale(1.05) !important;
          box-shadow: 0 4px 12px rgba(240, 56, 22, 0.2) !important;
        }

        .custom-bullet:hover::before {
          transform: translateX(100%) !important;
        }

        .custom-bullet-active {
          background: linear-gradient(90deg, #d4533a, #e06549) !important;
          border-color: rgba(212, 83, 58, 0.4) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(212, 83, 58, 0.4) !important;
          width: 50px !important;
        }

        .custom-bullet-active::before {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          ) !important;
          animation: shimmer 2s infinite !important;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .custom-prev.swiper-button-disabled,
        .custom-next.swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  );
}

export default WorkoutPlansSection;

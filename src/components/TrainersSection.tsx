"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TrainersSection() {
  const trainers = [
    {
      name: "Blake Hunter",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "Strength Training",
    },
    {
      name: "Liam Crossfit",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "CrossFit Expert",
    },
    {
      name: "Logan Torque",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "Body Building",
    },
    {
      name: "Marcus Steel",
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "HIIT Specialist",
    },
    {
      name: "Damon Flex",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "Athletic Performance",
    },
    {
      name: "Rico Pump",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      specialty: "Functional Training",
    },
  ];

  return (
    <section className="relative pb-20 px-4 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-800 to-accent-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center text-orange-100">
          <h2 className="font-cabinet-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-wider">
            Y
            <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -ml-2 md:-ml-2 inline-block relative">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
              />
            </span>
            ur Fitness
          </h2>
          <h2 className="font-cabinet-grotesk text-orange-100 font-black text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            Goals, Their Expertise
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto font-medium">
            Our Team Of Certified Trainers Brings Unparalleled Expertise To Help
            You Achieve Your Fitness Goals.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "custom-trainer-bullet",
              bulletActiveClass: "custom-trainer-bullet-active",
            }}
            navigation={{
              nextEl: ".custom-trainer-next",
              prevEl: ".custom-trainer-prev",
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
                slidesPerView: 3,
              },
            }}
            className="trainers-swiper !py-16"
          >
            {trainers.map((trainer, index) => (
              <SwiperSlide key={index}>
                <div className="group flex flex-col items-center">
                  {/* Octagon Image Container */}
                  <div className="relative mb-6">
                    {/* Primary octagon shape */}
                    <div className="octagon-container relative w-80 h-80 md:w-96 md:h-96">
                      <div className="octagon-shape relative w-full h-full overflow-hidden bg-gradient-to-br from-orange-100/20 to-orange-100/40 transition-all duration-500 group-hover:from-orange-100/30 group-hover:to-orange-100/50">
                        <Image
                          src={trainer.image}
                          alt={trainer.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-125"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 octagon-shape bg-orange-100/0 group-hover:bg-orange-100/10 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-100/20"></div>
                    </div>
                  </div>

                  {/* Trainer Info */}
                  <div className="text-center">
                    <h3 className="font-cabinet-grotesk text-orange-100 font-bold text-2xl md:text-3xl mb-2 transition-colors duration-300">
                      {trainer.name}
                    </h3>
                    <p className="text-white/70 text-lg font-medium">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-trainer-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-orange-100/40 hover:bg-orange-100/10 transition-all duration-300 group">
            <Icon
              icon="solar:arrow-left-bold"
              className="text-white text-xl group-hover:text-orange-100 transition-colors duration-300"
            />
          </button>

          <button className="custom-trainer-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-orange-100/40 hover:bg-orange-100/10 transition-all duration-300 group">
            <Icon
              icon="solar:arrow-right-bold"
              className="text-white text-xl group-hover:text-orange-100 transition-colors duration-300"
            />
          </button>
        </div>
      </div>

      {/* Custom styles for octagon and swiper */}
      <style jsx global>{`
        .octagon-shape {
          clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            70% 100%,
            30% 100%,
            0% 70%,
            0% 30%
          );
          transform: rotate(0deg);
        }

        .trainers-swiper .swiper-pagination {
          bottom: 16px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 12px !important;
          z-index: 10 !important;
        }

        .custom-trainer-bullet {
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

        .custom-trainer-bullet::before {
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

        .custom-trainer-bullet:hover {
          background: rgba(240, 56, 22, 0.3) !important;
          border-color: rgba(240, 56, 22, 0.3) !important;
          transform: scale(1.05) !important;
          box-shadow: 0 4px 12px rgba(240, 56, 22, 0.2) !important;
        }

        .custom-trainer-bullet:hover::before {
          transform: translateX(100%) !important;
        }

        .custom-trainer-bullet-active {
          background: linear-gradient(90deg, #d4533a, #e06549) !important;
          border-color: rgba(212, 83, 58, 0.4) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(212, 83, 58, 0.4) !important;
          width: 50px !important;
        }

        .custom-trainer-bullet-active::before {
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

        .custom-trainer-prev.swiper-button-disabled,
        .custom-trainer-next.swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  );
}

export default TrainersSection;

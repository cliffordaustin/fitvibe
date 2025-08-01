import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

function FeaturesSection() {
  const features = [
    {
      icon: "solar:leaf-bold",
      title: "Nutrition Guidance",
      description: "Personalized meal plans and nutritional advice",
    },
    {
      icon: "solar:user-bold",
      title: "Expert Trainers",
      description: "Certified professionals to guide your journey",
    },
    {
      icon: "solar:chart-2-bold",
      title: "Progress Tracking",
      description: "Monitor your improvements and celebrate milestones",
    },
    {
      icon: "solar:crown-bold",
      title: "Premium Membership",
      description: "Exclusive access to premium features and content",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900 via-background to-accent-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 text-orange-100">
          <h2 className="font-cabinet-grotesk font-black text-5xl md:text-6xl lg:text-7xl tracking-wider mb-2">
            Inspired to
          </h2>
          <h2 className="font-cabinet-grotesk font-black text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4">
            Inspire Y
            <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -ml-2 md:-ml-3 inline-block relative">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
              />
            </span>
            ur Best Self
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            We&apos;re Your Partner In Achieving A Healthier, Stronger, And More
            Confident You.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-100/20"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-100/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100/30 transition-all duration-300">
                  <Icon
                    icon={feature.icon}
                    className="text-orange-100 text-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-cabinet-grotesk font-bold text-xl mb-3 group-hover:text-orange-100 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/gym-girl.png"
                alt="Fitness transformation"
                fill
                className="object-cover object-top"
              />

              {/* Color overlay */}
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating stats card */}
              <div className="absolute bottom-8 w-full md:w-[80%] left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-b from-white/15 via-white/10 to-transparent rounded-2xl backdrop-blur-md shadow-xl shadow-black/40 p-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-orange-100 font-cabinet-grotesk font-black text-3xl mb-1">
                        1000+
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        Transformations
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-100 font-cabinet-grotesk font-black text-3xl mb-1">
                        98%
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        Success Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-100 font-cabinet-grotesk font-black text-3xl mb-1">
                        24/7
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

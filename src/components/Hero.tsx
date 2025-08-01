import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <section className="relative h-[680px] w-full overflow-hidden">
      <div className="absolute top-28 w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-cabinet-grotesk text-orange-100 font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl tracking-wider">
            Sculpt{" "}
            <span className="">
              Y
              <span className="w-10 h-10 bg-primary rounded-full -ml-3 inline-block relative">
                <Icon
                  icon="fluent:flash-16-filled"
                  className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
                />
              </span>
              ur
            </span>{" "}
            Body,
          </h1>
          <h1 className="font-cabinet-grotesk text-orange-100 font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl tracking-wider">
            Elevate Your Spirit
          </h1>
        </div>

        <div className="relative -mt-8 md:-mt-20 h-[600px] w-[400px] mx-auto">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            className="w-full h-full"
            fill
          />

          {/* Workout Hours Card */}
          <div className="absolute top-[15%] -rotate-12 -left-2 sm:-left-4 w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 flex flex-col items-center justify-center p-3 sm:p-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f03816]/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Icon
                icon="solar:clock-circle-bold"
                className="text-[#f03816] text-lg sm:text-xl"
              />
            </div>
            <div className="text-white text-xs font-medium mb-1">Hours</div>
            <div className="text-white text-xl sm:text-2xl font-cabinet-grotesk font-extrabold">
              2.5
            </div>
          </div>

          {/* Exercises Card */}
          <div className="absolute top-[20%] rotate-12 -right-2 sm:-right-4 w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 flex flex-col items-center justify-center p-3 sm:p-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f03816]/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Icon
                icon="solar:running-round-bold"
                className="text-[#f03816] text-lg sm:text-xl"
              />
            </div>
            <div className="text-white text-xs font-medium mb-1">Exercises</div>
            <div className="text-white text-xl sm:text-2xl font-cabinet-grotesk font-extrabold">
              12
            </div>
          </div>

          {/* Calories Card */}
          <div className="absolute bottom-[20%] -rotate-12 -right-8 sm:-right-12 w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 flex flex-col items-center justify-center p-3 sm:p-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f03816]/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Icon
                icon="solar:fire-bold"
                className="text-[#f03816] text-lg sm:text-xl"
              />
            </div>
            <div className="text-white text-xs font-medium mb-1">Kcal</div>
            <div className="text-white text-xl sm:text-2xl font-cabinet-grotesk font-extrabold">
              480
            </div>
          </div>

          {/* Sets Card */}
          <div className="absolute bottom-[25%] rotate-12 -left-10 sm:-left-16 w-[100px] h-[110px] sm:w-[120px] sm:h-[130px] -z-10 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 flex flex-col items-center justify-center p-3 sm:p-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f03816]/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
              <Icon
                icon="solar:dumbbell-large-bold"
                className="text-[#f03816] text-lg sm:text-xl"
              />
            </div>
            <div className="text-white text-xs font-medium mb-1">Sets</div>
            <div className="text-white text-xl sm:text-2xl font-cabinet-grotesk font-extrabold">
              8
            </div>
          </div>
        </div>
      </div>
      {/* Happy Members Review Section */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex flex-col gap-1.5">
        {/* Profile Images Stack */}
        <div className="relative flex items-center">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face"
              alt="Happy member"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg -ml-2 sm:-ml-3">
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=150&h=150&fit=crop&crop=face"
              alt="Happy member"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg -ml-2 sm:-ml-3">
            <Image
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=150&fit=crop&crop=face"
              alt="Happy member"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg -ml-2 sm:-ml-3">
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&h=150&fit=crop&crop=face"
              alt="Happy member"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Review Text */}
        <div className="flex items-center gap-2">
          <div className="text-white font-cabinet-grotesk font-extrabold text-xl sm:text-2xl">
            10k+
          </div>
          <div className="text-white/80 text-sm font-medium">Happy Spirits</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

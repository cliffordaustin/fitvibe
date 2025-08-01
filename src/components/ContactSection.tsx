"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "solar:phone-bold",
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 6AM-10PM",
    },
    {
      icon: "solar:letter-bold",
      title: "Email Us",
      info: "hello@fitvibe.com",
      description: "We'll respond within 24h",
    },
    {
      icon: "solar:map-point-bold",
      title: "Visit Us",
      info: "123 Fitness Street",
      description: "Tema, Ghana",
    },
    {
      icon: "solar:clock-circle-bold",
      title: "Hours",
      info: "24/7 Access",
      description: "Open every day",
    },
  ];

  return (
    <section className="relative pb-20 px-4 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-800 to-accent-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center text-orange-100 mb-16">
          <h2 className="font-cabinet-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-wider">
            Get In Touch
          </h2>
          <h2 className="font-cabinet-grotesk text-orange-100 font-black text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            Start Y
            <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -ml-2 md:-ml-2 inline-block relative">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
              />
            </span>
            ur Journey
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto font-medium">
            Ready to transform your life? Contact us today and let&apos;s begin
            your fitness journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 p-8">
            <h3 className="font-cabinet-grotesk text-white font-bold text-2xl mb-6 flex items-center gap-3">
              <Icon
                icon="solar:letter-bold"
                className="text-orange-100 text-3xl"
              />
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-100/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-100/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white/80 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-100/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-100/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your fitness goals..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary font-cabinet-grotesk font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Icon icon="solar:paper-plane-bold" className="text-xl" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 sm:space-y-8 lg:order-first">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-6 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-100/20"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-100/30 transition-all duration-300">
                    <Icon
                      icon={item.icon}
                      className="text-orange-100 text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-white font-cabinet-grotesk font-bold text-base sm:text-lg mb-2 group-hover:text-orange-100 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/90 font-semibold mb-1 text-sm sm:text-base">
                    {item.info}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

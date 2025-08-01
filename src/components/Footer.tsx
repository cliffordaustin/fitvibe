"use client";

import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    services: [
      { name: "Personal Training", href: "#" },
      { name: "Group Classes", href: "#" },
      { name: "Nutrition Coaching", href: "#" },
      { name: "Membership Plans", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Help Center", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Equipment Guide", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Membership Agreement", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "mdi:instagram", href: "#", label: "Instagram" },
    { icon: "ic:outline-facebook", href: "#", label: "Facebook" },
    { icon: "ri:twitter-x-line", href: "#", label: "Twitter" },
    { icon: "mdi:youtube", href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-accent-900 via-background to-accent-800 border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-6 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-2xl flex items-center justify-center glow-primary">
                  <Icon
                    icon="fluent:flash-16-filled"
                    className="text-white text-xl sm:text-2xl"
                  />
                </div>
                <h3 className="font-cabinet-grotesk text-white font-black text-xl sm:text-2xl tracking-wider">
                  FitVibe
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Transform your life with FitVibe. We&apos;re your partner in
                achieving a healthier, stronger, and more confident you through
                expert guidance and cutting-edge facilities.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Icon
                    icon="solar:map-point-bold"
                    className="text-primary text-base sm:text-lg"
                  />
                  <span className="text-xs sm:text-sm">
                    123 Fitness Street, Tema, Ghana
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Icon
                    icon="solar:phone-bold"
                    className="text-primary text-base sm:text-lg"
                  />
                  <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Icon
                    icon="solar:letter-bold"
                    className="text-primary text-base sm:text-lg"
                  />
                  <span className="text-xs sm:text-sm">hello@fitvibe.com</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Company */}
              <div>
                <h4 className="font-cabinet-grotesk text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Company
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-cabinet-grotesk text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Services
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-cabinet-grotesk text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Support
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      {link.href.startsWith("#") ? (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-white/70 hover:text-primary transition-colors duration-300 text-xs sm:text-sm text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-cabinet-grotesk text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Legal
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10">
          <div className="bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-cabinet-grotesk text-white font-bold text-2xl mb-3 flex items-center gap-3">
                  <Icon
                    icon="solar:letter-bold"
                    className="text-primary text-3xl"
                  />
                  Stay Motivated
                </h3>
                <p className="text-white/70">
                  Get weekly fitness tips, workout routines, and exclusive
                  member offers delivered to your inbox.
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-cabinet-grotesk font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 glow-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} FitVibe. All rights reserved. Built with passion
              for fitness.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white/60 text-xs sm:text-sm mr-1 sm:mr-2">
                Follow us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:scale-110 glow-primary"
                >
                  <Icon
                    icon={social.icon}
                    className="text-primary text-base sm:text-lg group-hover:scale-125 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

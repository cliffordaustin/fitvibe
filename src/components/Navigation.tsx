"use client";

import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import Button from "./Button";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Workouts",
      href: "#workouts",
    },
    {
      label: "Trainers",
      href: "#trainers",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const handleGetStartedClick = () => {
    scrollToSection("#contact");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
          isScrolled ? "top-2" : "top-5"
        }`}
      >
        <div
          className={`flex rounded-full bg-white/5 backdrop-blur-md items-center justify-between py-3 px-4 sm:px-6 lg:px-12 transition-all duration-300 ${
            isScrolled ? "bg-white/10" : "bg-white/5"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-primary size-5 sm:size-6"
              />
              <h1 className="text-lg sm:text-xl font-cabinet-grotesk font-black text-white ml-2">
                FITVIBE
              </h1>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  className="text-white hover:text-primary transition-colors font-medium"
                  onClick={() => scrollToSection(item.href)}
                  key={item.label}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Button size="md" onClick={handleGetStartedClick}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon
              icon={
                isMenuOpen
                  ? "solar:close-circle-bold"
                  : "solar:hamburger-menu-bold"
              }
              className="text-primary text-xl transition-transform duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-accent-900 to-background backdrop-blur-xl border-l border-white/10 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-primary size-6"
              />
              <h1 className="text-xl font-cabinet-grotesk font-black text-white ml-2">
                FITVIBE
              </h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300"
              aria-label="Close mobile menu"
            >
              <Icon
                icon="solar:close-circle-bold"
                className="text-primary text-lg"
              />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-4 mb-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white hover:text-primary transition-colors font-medium py-3 px-4 rounded-2xl hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Button size="lg" fullWidth onClick={handleGetStartedClick}>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navigation;

"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

function FAQSection() {
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes FitVibe different from other gyms?",
      answer:
        "FitVibe combines cutting-edge equipment, expert personal trainers, and a supportive community environment. We offer 24/7 access, personalized workout plans, nutrition guidance, and a variety of classes to suit all fitness levels. Our holistic approach focuses on both physical and mental wellness.",
    },
    {
      question: "Do I need to have experience to join?",
      answer:
        "Absolutely not! FitVibe welcomes members of all fitness levels, from complete beginners to advanced athletes. Our certified trainers will assess your current fitness level and create a personalized plan that's perfect for you. We provide comprehensive onboarding and ongoing support.",
    },
    {
      question: "What equipment and facilities do you offer?",
      answer:
        "We feature state-of-the-art cardio machines, free weights, resistance training equipment, functional fitness areas, group exercise studios, locker rooms with showers, and recovery zones. Our facilities are regularly updated with the latest fitness technology and maintained to the highest standards.",
    },
    {
      question: "What are your membership options and pricing?",
      answer:
        "We offer flexible membership plans including monthly, quarterly, and annual options. Our plans range from basic gym access to premium packages that include personal training, nutrition coaching, and unlimited classes. Contact us for current pricing and special promotions.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes! Our certified personal trainers specialize in various areas including strength training, weight loss, sports performance, and rehabilitation. We offer both one-on-one sessions and small group training. All trainers create customized workout plans based on your goals and fitness level.",
    },
    {
      question: "What types of classes do you offer?",
      answer:
        "We offer a wide variety of classes including HIIT, yoga, Pilates, cycling, boxing, dance fitness, strength training, and more. Our class schedule accommodates different time preferences with early morning, lunch, and evening options. All classes are led by certified instructors.",
    },
    {
      question: "Are there any joining fees or hidden costs?",
      answer:
        "We believe in transparent pricing. Some membership plans may include a one-time enrollment fee, but this will be clearly explained upfront. There are no hidden costs - we'll discuss all fees and what's included in your membership before you sign up.",
    },
    {
      question: "Can I freeze or cancel my membership?",
      answer:
        "Yes, we offer flexible options for freezing or canceling memberships. Life happens, and we understand that circumstances change. We have reasonable freeze policies for vacations, medical reasons, or other situations. Cancellation terms vary by membership type and will be explained when you join.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative pb-20 px-4 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-800 to-accent-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center text-orange-100 mb-16">
          <h2 className="font-cabinet-grotesk font-black text-4xl md:text-5xl lg:text-6xl tracking-wider">
            Frequently Asked
          </h2>
          <h2 className="font-cabinet-grotesk text-orange-100 font-black text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            Questi
            <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -ml-2 md:-ml-1 inline-block relative">
              <Icon
                icon="fluent:flash-16-filled"
                className="text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7"
              />
            </span>
            ns
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Get answers to the most common questions about FitVibe memberships,
            facilities, and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-white/10 hover:border-orange-100/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="font-cabinet-grotesk text-white font-bold text-lg md:text-xl pr-4 group-hover:text-orange-100 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 bg-orange-100/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index ? "rotate-180 bg-orange-100/30" : ""
                  }`}
                >
                  <Icon
                    icon="ci:chevron-down"
                    className="text-orange-100 text-xl transition-transform duration-300"
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-100/20 to-transparent mb-4"></div>
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-orange-100/20 to-orange-100/30 rounded-3xl backdrop-blur-md shadow-xl shadow-black/40 border border-orange-100/20 p-8">
          <Icon
            icon="solar:question-circle-bold"
            className="text-orange-100 text-4xl mx-auto mb-4"
          />
          <h3 className="font-cabinet-grotesk text-white font-bold text-xl mb-3">
            Still Have Questions?
          </h3>
          <p className="text-white/80 mb-6">
            Our friendly team is here to help! Get in touch and we&apos;ll
            answer any questions you have.
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-cabinet-grotesk font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

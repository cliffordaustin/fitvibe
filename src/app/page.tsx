import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import FeaturesSection from "@/components/FeaturesSection";
import WorkoutPlansSection from "@/components/WorkoutPlansSection";
import TrainersSection from "@/components/TrainersSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="lg:px-12">
        <Navigation />
        <section id="home">
          <Hero />
        </section>
      </div>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="workouts">
        <WorkoutPlansSection />
      </section>
      <section id="trainers">
        <TrainersSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

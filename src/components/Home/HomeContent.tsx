"use client";
import dynamic from "next/dynamic";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Statistics from "@/components/Home/Statistics";
import TaxCalculation from "@/components/Home/TaxCalculation";
import WhyUs from "@/components/WhyUs";
import "@/styles/animations.css";

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
});

const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
];

export default function HomeContent() {
  return (
    <main>
      <div className="fade-in">
        <Slider
          title="Home"
          description="Unlock your financial potential with expert guidance"
          images={images}
          btnText="Get Started"
          btnHref="contact/get-a-consultation"
        />
      </div>

      <div className="fade-in fade-in-delay-1">
        <AboutSection />
      </div>

      <div className="fade-in fade-in-delay-2">
        <ServicesSection />
      </div>

      <div className="fade-in fade-in-delay-3">
        <Statistics />
      </div>

      <div className="fade-in fade-in-delay-4">
        <TaxCalculation />
      </div>

      <div className="fade-in fade-in-delay-4">
        <WhyUs />
      </div>

      <div className="fade-in fade-in-delay-5">
        <Slider
          description="Building wealth, creating futures."
          images={["/contact/GettyImages-1440181617-scaled.jpg"]}
        />
      </div>

      <div className="fade-in fade-in-delay-6">
        <Slider
          title="Team"
          description="Get to know the incredible individuals behind our company"
          images={["/team/GettyImages-1407840013-scaled.jpg"]}
          btnText="Our People"
          btnHref="about"
        />
      </div>
    </main>
  );
} 
"use client";
import React, { useEffect, useState } from "react";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Slider from "@/components/Slider";
import Statistics from "@/components/Home/Statistics";
import TaxCalculation from "@/components/Home/TaxCalculation";
import WhyUs from "@/components/WhyUs";

const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
];

export default function Home() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return isBrowser ? (
    <main className="min-h-screen pb-40 space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider
        title="Home"
        description="Unlock your financial potential with expert guidance"
        images={images}
        btnText="Get Started"
        btnHref="contact/get-a-consultation"
      />
      <AboutSection />
      <ServicesSection />
      <TaxCalculation />
      <Slider
        description="Building wealth, creating futures."
        images={["/contact/GettyImages-1440181617-scaled.jpg"]}
      />
      <Statistics />
      <WhyUs />
      <Slider
        title="Team"
        description="Get to know the incredible individuals behind our company"
        images={["/team/GettyImages-1407840013-scaled.jpg"]}
        btnText="Our People"
        btnHref="about"
      />
    </main>
  ) : null;
}

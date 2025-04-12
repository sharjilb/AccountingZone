"use client"
import dynamic from "next/dynamic"
import AboutSection from "@/components/Home/AboutSection"
import ServicesSection from "@/components/Home/ServicesSection"
import Statistics from "@/components/Home/Statistics"
import TaxCalculation from "@/components/Home/TaxCalculation"
import WhyUs from "@/components/WhyUs"
import "@/styles/animations.css"

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
})

const images = [
  "/consultation/consultation1.jpg",
  "/consultation/consultation2.jpg",
  "/consultation/consultation3.jpg",
  "/consultation/consultation4.jpg",
  "/consultation/consultation5.jpg",
]

export default function HomeContent() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="fade-in">
        <Slider
          title="Home"
          description="Unlock your financial potential with expert guidance"
          images={images}
          btnText="Get Started"
          btnHref="contact/get-a-consultation"
        />
      </section>

      {/* About Section with light background */}
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-1">
        <AboutSection />
      </section>

      {/* Services Section with subtle background */}
      <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-2">
        <ServicesSection />
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-3">
        <Statistics />
      </section>

      {/* Tax Calculation Section */}
      <section className="py-16 md:py-24 bg-gray-50 fade-in fade-in-delay-4">
        <TaxCalculation />
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-white fade-in fade-in-delay-4">
        <WhyUs />
      </section>

      {/* Building Wealth Slider */}
      <section className="fade-in fade-in-delay-5">
        <Slider
          description="Building wealth, creating futures."
          images={["/contact/GettyImages-1440181617-scaled.jpg"]}
        />
      </section>

      {/* Team Slider */}
      <section className="fade-in fade-in-delay-6 mb-16 md:mb-24">
        <Slider
          title="Team"
          description="Get to know the incredible individuals behind our company"
          images={["/team/GettyImages-1407840013-scaled.jpg"]}
          btnText="Our People"
          btnHref="about"
        />
      </section>
    </main>
  )
}

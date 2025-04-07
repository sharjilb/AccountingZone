"use client";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";
import AboutSection from "@/components/Home/AboutSection";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const taxPlanningCards = [
  {
    title: "Financial Accounting",
    description:
      "Crafting accurate financial statements, maintaining ledgers, and offering payroll services.",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Ensuring seamless reconciliation, real-time reporting, cloud based bookkeeping solutions.",
  },
  {
    title: "Tax",
    title2: "Planning",
    description:
      "Optimizing taxes with strategic planning, compliance, and advisory tailored to your needs.",
  },
  {
    title: "Business",
    title2: "Advisory",
    description:
      "Providing expert guidance in financial strategy, risk mgt, and performance optimization.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Helping businesses navigate complex legal requirements with ease and efficiency.",
  },
];

const ourClientsCard = [
  {
    title: "Small and Medium Enterprises (SMEs)",
  },
  {
    title: "Startups",
  },
  {
    title: "Corporations",
  },
  {
    title: "Non-Profit Organizations",
  },
  {
    title: "Individual Professionals",
  },
];

const ourCommitmentsCard = [
  {
    title: "Delivering exceptional service with integrity and professionalism.",
  },
  {
    title:
      "Continuously innovating to meet the dynamic needs of the financial landscape.",
  },
  {
    title: "Empowering our clients to make sound financial decisions.",
  },
];

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <article className="overflow-hidden w-full my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] pt-[40px] pb-0 px-[60px] sm:pt-[60px] sm:pb-0 sm:px-[80px] lg:pt-[100px] lg:pb-0 lg:px-[120px] xl:pt-[150px] xl:pb-0 xl:px-[200px]">
        <header className="my-[50px]">
          <div className="container mx-auto">
            <h1 className="m-0 text-3xl font-bold sm:text-5xl xl:text-6xl">
              About Accountings Zone
            </h1>

            <p className="text-lg text-gray-500 sm:text-xl mt-20">
              Welcome to Accountings Zone, your trusted partner in financial
              management, bookkeeping, tax planning, and business advisory
              services. Established with the goal of simplifying complex
              financial processes, we pride ourselves on delivering customized
              solutions that empower businesses and individuals to achieve their
              financial goals.
            </p>
          </div>
        </header>

        <AboutSection />

        <section className="my-[80px] container mx-auto md:my-[120px] lg:mt-[160px] xl:mt-[210px]">
          <div className="relative pt-[90px] gap-x-4 xl:pt-0 container mx-auto flex">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                Our Mission
              </h2>
            </header>
            <div>
              <div
                className="mb-[40px] text-gray-500 text-base leading-[1.6] sm:mb-[80px] sm:text-xl"
                data-aos="fade"
              >
                <p className="m-0">
                  To provide accurate, reliable, and innovative financial
                  services that help our clients make informed decisions and
                  drive sustainable growth.
                </p>
              </div>

              {/* <blockquote
                className="relative text-gray-500 m-0 pl-[64px] lg:pl-0 before:absolute before:top-1/4 before:-left-20 before:w-[42px] before:h-[32px] before:transform-translate-y-1/2 before:bg-no-repeat before:bg-auto before:bg-[url('/quote.svg')]"
                data-aos="fade"
              >
                I knew everything…been there, done that. She was in the moment,
                <br />I was in the past. She was mindful. I was mindless.
              </blockquote> */}
            </div>
          </div>
          <div className="relative pt-[90px] gap-x-4 xl:pt-0 container mx-auto flex">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                Our Vision
              </h2>
            </header>
            <div>
              <div
                className="mb-[40px] text-gray-500 text-base leading-[1.6] sm:mb-[80px] sm:text-xl"
                data-aos="fade"
              >
                <p className="m-0">
                  To be recognized as a leading accountings and financial
                  advisory firm, fostering trust and excellence in every client
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-[80px] container mx-auto md:my-[120px] lg:mt-[160px] xl:mt-[210px]">
          <div className="relative pt-[90px] xl:pt-0 container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[220px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                What We Do
              </h2>
            </header>
            <div className="container mx-auto" data-aos="fade">
              <p className="mt-[30px] text-gray-500 text-base leading-[1.6] sm:mb-[80px] sm:text-xl">
                At Accountings Zone, we specialize in:
              </p>

              <ul className="mt-[30px] mb-0 xl:pt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-8">
                {taxPlanningCards.map((item, index) => (
                  <li key={index}>
                    <FSCard
                      title={item.title}
                      title2={item.title2}
                      description={item.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="my-[80px] container mx-auto md:my-[120px] lg:mt-[160px] xl:mt-[210px]">
          <div className="relative pt-[90px] xl:pt-0 container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[250px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                Why Choose Us?
              </h2>
            </header>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Our team comprises seasoned professionals with in-depth knowledge of accounting, tax laws, and financial strategy.",
                  },
                  {
                    title: "Tailored Solutions",
                    description:
                      "We understand that every client is unique. Our services are customized to meet specific needs and goals.",
                  },
                  {
                    title: "Technology-Driven",
                    description:
                      "Leveraging the latest tools and software, we ensure accuracy, efficiency, and security in all our processes.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "Your success is our priority. We build lasting relationships based on trust, transparency, and excellence.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="my-12 last:mb-0 sm:mb-0"
                    data-aos="fade"
                    data-aos-delay={index * 200}
                  >
                    <h3 className="mt-[30px] text-2xl mb-5 font-semibold">
                      {service.title}
                    </h3>
                    <div className="sm:max-w-[272px] text-base sm:text-lg text-gray-500">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="my-[80px] container mx-auto md:my-[120px] lg:mt-[160px] xl:mt-[210px]">
          <div className="relative pt-[90px] xl:pt-0 container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[250px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                Our Clients
              </h2>
            </header>
            <div className="container mx-auto">
              <p className="mt-[30px] text-gray-500 text-base leading-[1.6] sm:mb-[60px] sm:text-xl">
                We serve a diverse clientele, including:
              </p>
              <ul className="space-y-[30px] px-4">
                {ourClientsCard.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-500 list-disc my-12 last:mb-0 sm:mb-0 text-lg"
                    data-aos="fade"
                    data-aos-delay={index * 200}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="my-[80px] container mx-auto md:my-[120px] lg:mt-[160px] xl:mt-[210px]">
          <div className="relative pt-[90px] xl:pt-0 container">
            <header
              className="mb-[50px] lg:mb-[100px] xl:max-w-[250px] xl:mr-[64px] xl:mb-0 xl:flex-shrink-0"
              data-aos="fade"
            >
              <h2 className="relative m-0 md:text-2xl before:absolute before:left-[-90px] before:top-[14px] before:w-[45px] before:border-t-2 before:border-[#fbc710] before:transform-translate-x-full sm:before:w-[70px] xl:before:left-[-100px] text-lg font-bold sm:text-xl xl:text-3xl">
                Our Commitment
              </h2>
            </header>
            <div className="container mx-auto">
              <p className="mt-[30px] text-gray-500 text-base leading-[1.6] sm:mb-[60px] sm:text-xl">
                At Accountings Zone, we are committed to:
              </p>
              <ul className="text-gray-500 space-y-[30px] px-4">
                {ourCommitmentsCard.map((service, index) => (
                  <li
                    key={index}
                    className="list-disc my-12 last:mb-0 sm:mb-0 text-lg"
                    data-aos="fade"
                    data-aos-delay={index * 200}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-[60px] text-gray-500 text-base leading-[1.6] sm:mb-[60px] sm:text-xl">
              Join us on the journey to financial clarity and growth. Whether
              you&apos;re an entrepreneur, an established business, or an
              individual seeking financial guidance, Accountings Zone is here to
              support you every step of the way.
            </p>
          </div>
        </section>

        <ServicesFooter text="Contact us today to learn more about how we can help you achieve your financial goals." />
      </article>
    </main>
  );
}

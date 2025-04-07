import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="flex flex-wrap sm:flex-col mx-auto container">
      <h2
        className="w-full md:w-1/2 flex lg:w-[60%] mx-auto mb-4 md:mb-8 text-[#fbc710] uppercase font-semibold tracking-widest text-sm lg:text-base"
        data-aos="fade"
      >
        WHY US
      </h2>
      <div className="w-full md:w-1/2 flex gap-20 lg:w-[60%] mx-auto mb-8 md:mb-0">
        <div className="mb-6 sm:mb-14 flex flex-col gap-3" data-aos="fade">
          <h3 className="text-2xl sm:text-3xl font-semibold lg:text-4xl">
            Trusted experts with
            <span className="text-[#fbc710]"> years of experience</span> and
            <span className="text-[#fbc710]"> industry accreditations</span>
          </h3>

          <div className="flex flex-col gap-3">
            <p>
              At Accountings Zone, we are dedicated to guiding you on your
              financial journey with expertise, integrity, and a personalized
              approach. Our team of experienced financial consultants is
              committed to helping you unlock your full financial potential, one
              step at a time.
            </p>
            <p>
              Our mission is to empower you with the knowledge and tools to make
              informed decisions, secure your financial stability, and achieve
              lasting success.
            </p>
          </div>
        </div>

        <div className="relative w-full mx-auto">
          <Image
            src="/why-us/why-us-man.svg"
            width="800"
            height="800"
            alt="Why Us"
            className="max-w-full h-auto"
            data-aos="fade"
          />
        </div>
      </div>
    </section>
  );
}

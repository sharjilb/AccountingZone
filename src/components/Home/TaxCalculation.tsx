import React from "react";
import Image from "next/image";

export default function TaxCalculation() {
  return (
    <section className="flex mx-10 flex-wrap md:mx-auto w-full text-center container">
      <header
        className="font-bold mx-auto w-full container mb-8 md:mb-12 lg:mb-16 fade-in"
      >
        <h2 className="text-4xl xl:text-5xl mb-4 md:mb-0">
          <span className="text-[#fbc710]">Tax Planning Software</span>
          <br />
          to Build a More Profitable Firm
        </h2>
      </header>

      <div className="container max-w-full lg:max-w-[1830px] fade-in fade-in-delay-1">
        <div className="mx-auto relative overflow-hidden list-none p-0 z-10">
          <div className="relative w-full h-full z-10 flex justify-center transition-transform">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[100px]">
              <li className="flex flex-col gap-y-5">
                <Image
                  src="/Calculate-Tax.svg"
                  alt="Calculate Taxes Owed"
                  width="115"
                  height="78"
                />
                <div className="text-2xl font-semibold">
                  Calculate <br />
                  Taxes Owed
                </div>
              </li>
              <li className="flex flex-col gap-y-5">
                <Image
                  src="/Analyze Any Tax Scenario.svg"
                  alt="Analyze Any Tax Scenario"
                  width="115"
                  height="78"
                />
                <div className="text-2xl font-semibold">
                  Analyze Any <br />
                  Tax Scenario
                </div>
              </li>
              <li className="flex flex-col gap-y-5">
                <Image
                  src="/Apply Tax Planning Strategies.svg"
                  alt="Apply Tax Planning Strategies"
                  width="115"
                  height="78"
                />
                <div className="text-2xl font-semibold">
                  Apply Tax <br />
                  Planning <br />
                  Strategies
                </div>
              </li>
              <li className="flex flex-col gap-y-5">
                <Image
                  src="/Create a Tax Plan.svg"
                  alt="Create a Tax Plan"
                  width="115"
                  height="78"
                />
                <div className="text-2xl font-semibold">
                  Create a <br />
                  Tax Plan
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

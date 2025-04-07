import React from "react";

export default function Statistics() {
  return (
    <div className="py-12 mx-20 md:mx-auto container w-full lg:w-1/2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="flex items-center gap-2 text-center mb-8 sm:mb-0 fade-in"
        >
          <div className="mb-1 sm:mb-0 sm:mr-6 text-6xl font-bold text-[#fbc710]">
            <span data-end-value="10">10</span>
          </div>
          <div className="text-base font-bold text-start uppercase">
            YEARS OF <br /> EXPERIENCE
          </div>
        </div>

        <div
          className="flex items-center gap-2 text-center mb-8 sm:mb-0 fade-in fade-in-delay-1"
        >
          <div className="mb-1 sm:mb-0 sm:mr-6 text-6xl font-bold text-[#fbc710]">
            <span data-end-value="43k+">43k+</span>
          </div>
          <div className="text-base font-bold text-start uppercase">
            CUSTOMERS
          </div>
        </div>

        <div className="flex gap-2 items-center text-center fade-in fade-in-delay-2">
          <div className="mb-1 lg:mb-0 lg:mr-6 text-6xl font-bold text-[#fbc710]">
            <span data-end-value="20+">20+</span>
          </div>
          <div className="text-base font-bold text-start uppercase">
            SPECIALISTS
          </div>
        </div>
      </div>
    </div>
  );
}

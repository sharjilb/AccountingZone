import React from "react";
import Image from "next/image";
import Slider from "@/components/Slider";

const images = ["/accounting/accounting1.jpg"];

export default function ConsultingForQuickBooks() {
  return (
    <main className="min-h-screen space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
      <Slider title="Consulting for QuickBooks®" images={images} />

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-16">
        <section
          id="quickbooks"
          className="container mx-auto px-8 sm:w-[1300px] flex flex-col md:items-center lg:flex-row gap-20"
        >
          <div className="relative w-full py-10 md:py-16 lg:py-28">
            <h2
              className="mb-4 md:mb-12 text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
              data-aos="fade"
            >
              Get Solutions to Your Problems with
              <span className="text-yellow-500"> QuickBooks</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700" data-aos="fade">
              We&apos;ve gathered our knowledge of QuickBooks across multiple
              years, multiple versions, multiple companies, and multiple
              industries. Knowing QuickBooks is our business, and we can help
              you quickly spot and solve your issues with QuickBooks, saving you
              time and money.
            </p>
          </div>

          <div
            className="container hidden sm:block mb-10 mx-auto lg:max-w-[480px]"
            data-aos="fade"
          >
            <Image
              src="/accounting/accounting1.jpg"
              alt="About Hero"
              width={1200}
              height={500}
              className="block w-full h-auto"
            />
          </div>
        </section>
      </div>

      <section
        id="quickBooks-software"
        className="overflow-hidden mb-8 md:mb-12 mx-auto px-52 py-10 bg-yellow-50 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] shadow-lg"
      >
        <div className="relative py-10 md:py-16 mx-auto lg:py-28">
          <div className="mb-8 md:mb-12" data-aos="fade">
            <h2
              className="text-xl sm:text-2xl md:text-3xl mx-auto lg:text-4xl font-semibold"
              data-aos="fade"
            >
              Some of the ways we can help you make the most out of your
              <span className="text-yellow-500"> QuickBooks software </span>
              include:
            </h2>
          </div>

          <div className="space-y-6 mb-6 sm:mb-14">
            <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:shadow-lg *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
              <li data-aos="fade">
                Data and file analysis and troubleshooting, in case you&apos;re
                experiencing error messages or problems
              </li>
              <li data-aos="fade">
                Installation, setup, and customization for your specific
                business needs
              </li>
              <li data-aos="fade">
                Cleanup if your CPA can&apos;t do your tax return
              </li>
              <li data-aos="fade">Speeding up a slow file</li>
              <li data-aos="fade">
                Correcting account balances or reports that don&apos;t make
                sense
              </li>
              <li data-aos="fade">
                Training and support for you or your bookkeepers to save you
                valuable time and money
              </li>
              <li data-aos="fade">
                Helping you choose the right version so you get started on the
                right foot
              </li>
              <li data-aos="fade">
                Customized reports to get you the business intelligence you need
              </li>
              <li data-aos="fade">
                Helping you choose the right version so you get started on the
                right foot
              </li>
              <li data-aos="fade">
                Add-ons and upgrades, in case you need more functionality
              </li>
              <li data-aos="fade">And much more.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

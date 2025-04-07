import React from "react";
import Image from "next/image";
import FSCard from "@/components/services/FSCard";

const taxPlansProposalsCards = [
  {
    title: "Customizable strategy letter",
  },
  {
    title: "Prior year estimated overpayment (optional)",
  },
  {
    title: "Current and future year estimated savings",
  },
  {
    title:
      "Detailed listing of recommended strategies with supporting documents",
  },
  {
    title: "Estimated savings by strategy",
  },
];

export default function TaxPlansProposals() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Tax Plans & Proposals
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mt-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Tax Plans & Proposals That Show Clients Your Value
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone automates the tax plan creation process
                      for you by gathering your client&apos;s data, recommending
                      tax saving strategies and creating professional,
                      custom-branded tax plans and proposals you&apos;ll be
                      proud to present. With clear tax savings, you&apos;ll be
                      able to show your clients the value you offer like never
                      before.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] max-w-[600px] justify-self-center lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting3.jpg"
                      width={600}
                      height={600}
                      alt="Tax Planning Strategies"
                      className="w-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                    Create Professional Tax Plans for Your Clients —
                    Automatically
                  </h3>
                  <div className="space-y-8 lg:space-y-16">
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <p className="text-lg text-gray-500">
                        Accountings Zone tax planning software for accountants
                        compiles your customized tax planning strategies and
                        recommendations into a fully customizable, ready-to-send
                        PDF file that contains:
                      </p>
                    </div>

                    <div className="pt-6 lg:pt-12">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {taxPlansProposalsCards.map((item, index) => (
                          <li key={index}>
                            <FSCard title={item.title} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                      Set Your Firm Apart With Professional Tax Plan Proposals
                      for Prospects
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      <p className="text-lg text-gray-500">
                        Before someone decides to work with you on a tax plan,
                        you can enter some basic information into our tax
                        planning software and create a professional proposal to
                        help you more easily sell your tax planning service. The
                        proposal will show clients:
                      </p>
                      <ul className="list-disc text-gray-500 flex flex-col gap-1 md:gap-2">
                        <li>How much they overpaid in the previous year</li>
                        <li>How much you can save them in the current year</li>
                        <li>
                          How much you can save them every year going forward
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Scan Tax Returns to Generate Beautiful Presentations
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      <p className="text-lg text-gray-500">
                        Accountings Zone allows you to easily scan your
                        client&apos;s tax returns and import their data to
                        reduce manual input and make your firm more efficient.
                      </p>
                      <p className="text-lg text-gray-500">
                        Each client&apos;s data will automatically populate
                        insightful presentations, showing:
                      </p>
                      <ul className="list-disc text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                        <li>Income</li>
                        <li>Marginal brackets</li>
                        <li>Deductions and credits</li>
                        <li>AGI income tiers</li>
                        <li>Taxes</li>
                        <li>Bar charts, pie graphs and more</li>
                        <li>Effective and marginal tax rates</li>
                      </ul>
                      <p className="text-sm text-gray-500">
                        Support for years 2019, 2020, 2021, 2022
                        <br />
                        Support for forms 1040, Schedule C, 1120, 1120S, 1065
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Federal, State & Local Coverage in Your Tax Plans
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      <p className="text-lg text-gray-500">
                        With over 1,500 federal, state and local tax saving
                        strategies, you can include supporting documentation for
                        every strategy you recommend. Confidently stand behind
                        your tax plans with automatically populated tax strategy
                        information, calculations, IRS, state code and court
                        case references across multiple years.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Retirement & Entity Comparison Tables
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      <p className="text-lg text-gray-500">
                        Become a trusted advisor and help your clients make
                        important decisions about their retirement and business
                        structure with retirement and entity comparison tables
                        right in the tax plan. Easily compare the advantages and
                        disadvantages of these two tax saving strategies.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Customize Your Tax Plans With Your Branding
                    </h3>
                    <div className="space-y-4 lg:space-y-6">
                      <p className="text-lg text-gray-500">
                        Present professional tax plans with customized colors
                        and your firm&apos;s logo. Corvee automatically creates
                        a tax plan with 10 to hundreds of slides, depending on
                        the client&apos;s case, and allows you to customize each
                        element to give clients the exact deliverable you
                        envision. Your clients will think you spent hours on
                        their customized tax plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

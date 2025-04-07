import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Tax Savings",
    description:
      "Strategic planning helps reduce the amount of capital gains tax owed, freeing up more of your profits for reinvestment, personal use, or growth.",
  },
  {
    title: "Optimized Investment Strategies",
    description:
      "Helps you time the sale of assets in ways that minimize tax exposure, maximizing your investment returns and enhancing overall financial performance.",
  },
  {
    title: "Enhanced Financial Flexibility",
    description:
      "By managing capital gains taxes effectively, businesses and individuals gain more financial flexibility to reinvest or allocate funds toward other opportunities.",
  },
  {
    title: "Tax Deferral Strategies",
    description:
      "Provides guidance on deferring capital gains taxes, allowing you to postpone tax payments and keep more funds working for you over the long term.",
  },
  {
    title: "Compliance with Tax Regulations",
    description:
      "Ensures all strategies and transactions comply with tax laws, reducing the risk of penalties, fines, or audits from incorrect tax filings.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "Helps you make well-informed decisions regarding asset sales, purchases, and other investment strategies by fully understanding the tax implications of each action.",
  },
];

const CoreComponentsCards = [
  {
    title: "Tax Rate Analysis",
    description:
      "Reviews the different tax rates applicable to short-term vs. long-term capital gains, helping you determine the best strategy for holding assets to minimize taxes.",
  },
  {
    title: "Capital Gains Exemption",
    description:
      "Advises on utilizing available exemptions and deductions, such as primary residence exclusions or the capital gains exclusion for certain investments, to reduce taxable gains.",
  },
  {
    title: "Tax-Loss Harvesting",
    description:
      "Involves strategically selling investments at a loss to offset gains, reducing the overall capital gains tax liability and enhancing financial efficiency.",
  },
  {
    title: "Retirement Account Planning",
    description:
      "Guides on how to leverage tax-deferred accounts (such as IRAs or 401(k)s) to manage the timing of capital gains taxes, deferring tax payments until retirement.",
  },
  {
    title: "Asset Allocation and Timing",
    description:
      "Offers advice on the timing of asset sales, considering factors such as market conditions and holding periods, to minimize tax impact.",
  },
  {
    title: "Deferral Strategies",
    description:
      "Suggests investment vehicles or strategies (such as 1031 exchanges for real estate) that allow you to defer capital gains taxes by reinvesting in similar assets.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Minimize Tax Liability",
    description:
      "Helps reduce your tax burden by employing strategies that minimize taxable capital gains, increasing after-tax profits.",
  },
  {
    title: "Maximize Investment Returns",
    description:
      "By aligning asset sales with tax-efficient strategies, you can keep more of your investment gains.",
  },
  {
    title: "Deferring Taxes",
    description:
      "Allows you to defer taxes and keep more funds working for you, which can be reinvested for future growth.",
  },
  {
    title: "Compliance and Risk Reduction",
    description:
      "Ensures that all actions comply with current tax laws, reducing the risk of costly penalties or audits.",
  },
  {
    title: "Better Financial Planning",
    description:
      "Capital gains tax planning ensures your financial strategy aligns with long-term goals, maximizing efficiency.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Tax Assessment",
    description:
      "We begin by assessing your current capital gains situation, reviewing your investment portfolio, and identifying potential tax liabilities based on your assets and holdings.",
  },
  {
    heading: "Customized Tax Strategy",
    description:
      "We develop a tailored tax strategy designed to minimize capital gains taxes, using a combination of exemptions, deductions, and deferral methods that align with your financial objectives.",
  },
  {
    heading: "Timing and Investment Recommendations",
    description:
      "We provide recommendations on the best timing for asset sales, taking into account market conditions, tax implications, and your personal financial goals.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We provide continuous monitoring and updates to your tax strategy as market conditions change, ensuring that your capital gains tax strategy remains optimized.",
  },
  {
    heading: "Education and Guidance",
    description:
      "We offer education and guidance on how capital gains taxes work, empowering you to make informed decisions regarding your investments and taxes.",
  },
];

export default function CapitalGainsTaxPlanning() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation1.jpg"]}
        title="Financial Clarity"
        description="Simplifying Your Finances, Amplifying Your Growth."
      />

      <article className="overflow-hidden mb-[80px] md:mb-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <div className="flex flex-col mst-7 dsm:mts-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mst-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Capital Gains Tax Planning
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Capital Gains Tax Planning is the process of strategically
                      managing the sale of assets to minimize tax liabilities
                      related to capital gains. Capital gains tax is levied on
                      the profit from the sale of assets such as stocks, real
                      estate, or other investments. Effective tax planning helps
                      businesses and individuals optimize their tax strategies,
                      reduce capital gains taxes, and align sales with long-term
                      financial goals. This service involves understanding the
                      tax implications of various investments and devising
                      strategies to manage or defer taxes while complying with
                      regulations.
                    </p>
                  </div>

                  <ServicesGrid
                    title="Key Benefits"
                    gridCards={KeyBenefitsCards}
                  />

                  <ServicesGrid
                    title="Our Core Components"
                    gridCards={CoreComponentsCards}
                  />

                  <ServicesGrid
                    title="Why You Need Capital Gains Tax Planning"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter text="We are here to address any questions you may have as you implement your plan. Additionally, for clients seeking an ongoing partnership." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

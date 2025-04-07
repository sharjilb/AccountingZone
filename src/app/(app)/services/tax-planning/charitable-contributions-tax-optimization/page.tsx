import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Maximized Tax Deductions",
    description:
      "Ensures that charitable contributions are fully optimized for tax savings by helping individuals and businesses claim the maximum allowable deductions on their tax returns.",
  },
  {
    title: "Enhanced Giving Strategy",
    description:
      "Guides on how to structure charitable donations in ways that provide the most significant tax benefits while supporting causes that align with personal or business values.",
  },
  {
    title: "Increased Cash Flow",
    description:
      "By reducing taxable income, charitable contributions lower tax liability, freeing up additional cash that can be reinvested in other business initiatives or personal financial goals.",
  },
  {
    title: "Long-Term Financial Planning",
    description:
      "Helps incorporate charitable giving into long-term tax and financial planning strategies, providing a consistent and tax-efficient way of supporting charitable organizations.",
  },
  {
    title: "Compliance with IRS Guidelines",
    description:
      "Ensures that charitable donations comply with IRS regulations, including record-keeping requirements, eligible charity qualifications, and limitations on deductions, to avoid penalties or disallowed deductions.",
  },
  {
    title: "Improved Reputation and Branding",
    description:
      "By reducing taxable income, charitable contributions lower tax liability, freeing up additional cash that can be reinvested in other business initiatives or personal financial goals.",
  },
];

const CoreComponentsCards = [
  {
    title: "Tax-Effective Donation Planning",
    description:
      "Identifies and implements strategies to maximize tax deductions, such as timing donations, using appreciated assets, or donating through tax-advantaged accounts like donor-advised funds.",
  },
  {
    title: "Donor-Advised Funds (DAFs)",
    description:
      "By reducing taxable income, charitable contributions lower tax liability, freeing up additional cash that can be reinvested in other business initiatives or personal financial goals.",
  },
  {
    title: "Appreciated Asset Donations",
    description:
      "Encourages the donation of appreciated assets (stocks, real estate, etc.) instead of cash, which can result in both a charitable deduction and the avoidance of capital gains tax.",
  },
  {
    title: "Corporate Giving Programs",
    description:
      "Assists businesses in establishing formal corporate giving programs that align with business goals and offer tax benefits, such as matching employee donations or sponsoring charitable events.",
  },
  {
    title: "Charitable Remainder Trusts (CRTs)",
    description:
      "For larger gifts, helps individuals use charitable remainder trusts, which allow for tax savings, income generation, and a final charitable donation upon the trust’s termination.",
  },
  {
    title: "Documentation and Recordkeeping",
    description:
      "Ensures that all charitable contributions are properly documented with receipts, acknowledgment letters, and other necessary records to meet IRS requirements and ensure maximum deductions.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Maximized Tax Benefits",
    description:
      "Helps you leverage charitable donations to reduce taxable income and maximize tax deductions, ultimately lowering your overall tax burden.",
  },
  {
    title: "Effective Philanthropy",
    description:
      "Optimizes your charitable contributions strategy, ensuring that you give in a way that provides the most benefit to both the recipient and your financial situation.",
  },
  {
    title: "Increased Savings and Liquidity",
    description:
      "Reducing taxable income can increase available funds for personal or business use, enhancing cash flow and supporting other financial goals.",
  },
  {
    title: "Compliance and Peace of Mind",
    description:
      "Ensures all donations are compliant with IRS rules and regulations, protecting you from potential audits, fines, and other tax-related penalties.",
  },
  {
    title: "Strategic Financial Integration",
    description:
      "Charitable contributions can be integrated into your broader tax strategy, providing long-term financial benefits and aligning with your personal or business goals.",
  },
];

const OurApproachCards = [
  {
    heading: "Custom Charitable Giving Strategy",
    description:
      "We assess your financial situation and philanthropic goals to develop a tailored giving strategy that optimizes your tax benefits, aligns with your objectives, and supports the causes you care about.",
  },
  {
    heading: "Tax-Efficient Donation Planning",
    description:
      "We help you structure charitable donations using tax-advantaged methods, such as donor-advised funds, appreciated asset gifts, and charitable remainder trusts, to maximize tax deductions.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "As your financial situation evolves, we provide ongoing guidance to adjust your charitable giving strategy, ensuring that your donations remain tax-efficient and aligned with your long-term financial plans.",
  },
  {
    heading: "Full Documentation and Reporting",
    description:
      "We assist with gathering and organizing all required documentation for charitable contributions, ensuring accuracy and that you are fully prepared for tax filing and IRS reporting requirements.",
  },
];

export default function CharitableContributionsTaxOptimization() {
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
                    Charitable Contributions Tax Optimization
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Charitable Contributions Tax Optimization focuses on
                      helping businesses and individuals make the most of
                      charitable donations while maximizing their tax benefits.
                      Charitable contributions are often tax-deductible,
                      allowing taxpayers to reduce their taxable income. This
                      service involves strategically planning charitable giving,
                      ensuring that donations align with financial goals, while
                      ensuring compliance with tax regulations to optimize tax
                      savings and philanthropic impact.
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
                    title="Why You Need Charitable Contributions Tax Optimization"
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

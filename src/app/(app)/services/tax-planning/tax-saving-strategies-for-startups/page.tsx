import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Reduced Tax Liability",
    description:
      "Helps startups minimize their tax burden by identifying available tax-saving opportunities, including deductions, credits, and incentives.",
  },
  {
    title: "Increased Cash Flow",
    description:
      "By lowering the tax liability, startups can free up more cash to reinvest in business operations, innovation, and expansion efforts.",
  },
  {
    title: "Compliance with Tax Laws",
    description:
      "Ensures that tax-saving strategies are in full compliance with current tax regulations, greatly reducing the risk of penalties or audits.",
  },
  {
    title: "Maximized Deductions and Credits",
    description:
      "Guides startups on how to take full advantage of tax deductions, credits, and exemptions available to them, ensuring they don’t miss out on potential savings.",
  },
  {
    title: "Long-Term Financial Health",
    description:
      "Implementing tax-saving strategies early helps startups manage finances effectively and establishes good financial habits for sustainable growth.",
  },
  {
    title: "Minimized Risk of Audit",
    description:
      "Helps ensure that all deductions and credits claimed are legitimate and properly substantiated, minimizing the risk of IRS scrutiny and audits.",
  },
];

const CoreComponentsCards = [
  {
    title: "Startup Tax Credits",
    description:
      "Identifies federal and state tax credits specifically available for startups, such as the Research and Development (R&D) Tax Credit or Small Business Health Care Tax Credit.",
  },
  {
    title: "Section 179 Deduction",
    description:
      "Helps startups take advantage of Section 179 to deduct the full purchase price of qualifying equipment, allowing for immediate tax savings.",
  },
  {
    title: "Qualified Business Income (QBI) Deduction",
    description:
      "Advises on how to qualify for the 20% QBI deduction, which allows startups to deduct a portion of their income, reducing taxable income and tax liability.",
  },
  {
    title: "Retirement Plans for Employees",
    description:
      "Recommends tax-advantageous retirement plans (such as SEP IRAs or 401(k)s) to help startups reduce taxable income while providing benefits that enhance retention",
  },
  {
    title: "Business Expense Deductions",
    description:
      "Guides startups on what business expenses are deductible, from operational costs like rent, utilities, and supplies to employee-related expenses like wages and training.",
  },
  {
    title: "Tax Deferral Strategies",
    description:
      "Advises on strategies for deferring taxes, such as making contributions to retirement plans or using investment vehicles that allow tax deferrals, helping preserve cash flow.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Maximized Savings",
    description:
      "Helps startups identify and utilize every possible tax-saving opportunity, reducing their overall tax burden.",
  },
  {
    title: "Increased Cash Flow for Growth",
    description:
      "Tax savings provide more liquidity for reinvestment into the business, supporting expansion and product development.",
  },
  {
    title: "Long-Term Sustainability",
    description:
      "By building tax strategies from the outset, startups set themselves up for long-term financial stability and growth.",
  },
  {
    title: "Compliance and Risk Management",
    description:
      "Ensures that your startup stays compliant with tax laws, avoiding potential penalties and audits.",
  },
];

const OurApproachCards = [
  {
    heading: "Tailored Tax Strategy",
    description:
      "We begin by analyzing your startup's financial situation, identifying eligible tax-saving opportunities, and developing a customized strategy to minimize tax liability.",
  },
  {
    heading: "Ongoing Tax Optimization",
    description:
      "We continuously monitor your financial situation and tax position, recommending adjustments to ensure you continue to benefit from available tax-saving strategies as your business grows.",
  },
  {
    heading: "Tax Filing and Documentation",
    description:
      "We assist with tax filings, ensuring all deductions and credits are properly claimed and substantiated, reducing the risk of audit and ensuring compliance with tax laws.",
  },
  {
    heading: "Education and Support",
    description:
      "We provide education on how tax-saving strategies work and offer ongoing support to ensure your startup is always maximizing its tax-saving potential.",
  },
];

export default function TaxSavingStrategiesForStartups() {
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
                    Tax Saving Strategies for Startups
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Tax Saving Strategies for Startups focuses on helping new
                      businesses minimize their tax liability while optimizing
                      their financial resources. Navigating the complexities of
                      taxes can be challenging for startups, and effective tax
                      planning is essential for long-term success. This service
                      includes identifying eligible deductions, credits, and tax
                      strategies tailored to the unique financial needs and
                      challenges of startups. By leveraging these strategies,
                      startups can save money, reinvest in growth, and establish
                      a solid financial foundation.
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
                    title="Why You Need Tax Saving Strategies for Startups"
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

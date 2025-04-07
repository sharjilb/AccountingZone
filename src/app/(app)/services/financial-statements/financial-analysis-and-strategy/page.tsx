import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Improved Decision Making",
    description:
      "Provides data-driven insights to help businesses make informed decisions about investments, expenditures, and resource allocation.",
  },
  {
    title: "Enhanced Profitability",
    description:
      "Identifies key areas for cost reduction, margin improvement, and revenue maximization, ultimately leading to significantly higher overall profitability.",
  },
  {
    title: "Risk Management",
    description:
      "Helps businesses assess financial risks and implement strategies to mitigate them, ensuring financial stability in uncertain conditions.",
  },
  {
    title: "Growth Planning",
    description:
      "Develops financial strategies that support business expansion, enabling businesses to allocate resources effectively for growth initiatives.",
  },
  {
    title: "Financial Efficiency",
    description:
      "Optimizes the management of assets, liabilities, and working capital to improve financial efficiency and reduce unnecessary costs.",
  },
  {
    title: "Strategic Alignment",
    description:
      "Ensures that financial strategies are aligned with the company’s overall business objectives, driving long-term success, growth, and sustainability.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Performance Analysis",
    description:
      "Analyzing financial statements, key performance indicators (KPIs), and trends to assess the company's financial health and performance over time.",
  },
  {
    title: "Budgeting and Forecasting",
    description:
      "Developing detailed budgets and financial forecasts that align with strategic goals, projecting future revenues, costs, and cash flows effectively.",
  },
  {
    title: "Profitability Analysis",
    description:
      "Identifying areas for improvement in profitability by evaluating margins, pricing strategies, cost structures, and revenue streams.",
  },
  {
    title: "Cash Flow Management",
    description:
      "Ensuring efficient management of cash inflows and outflows, improving liquidity, and ensuring the business can meet its financial obligations.",
  },
  {
    title: "Debt and Equity Strategy",
    description:
      "Advising on the optimal mix of debt and equity financing, helping businesses raise capital, manage existing debt, and optimize financial structure.",
  },
  {
    title: "Strategic Financial Planning",
    description:
      "Crafting long-term financial strategies that align with business goals, market conditions, growth opportunities, and financial sustainability.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Informed Business Decisions",
    description:
      "Accurate financial analysis provides the data necessary for making strategic decisions that drive business success.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Strategic financial planning ensures that resources are used efficiently to support long-term growth.",
  },
  {
    title: "Risk Reduction",
    description:
      "Financial strategies help businesses identify potential risks and put systems in place to avoid them.",
  },
  {
    title: "Optimized Performance",
    description:
      "Helps businesses refine their operations and processes to maximize profitability and overall financial efficiency.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Analysis",
    description:
      "We conduct an in-depth review of your financial statements, KPIs, and operational data to identify areas for improvement and growth.",
  },
  {
    heading: "Customized Strategies",
    description:
      "Based on a comprehensive analysis, we develop tailored financial strategies that align with your unique business objectives, ensuring long-term success and growth.",
  },
  {
    heading: "Ongoing Support",
    description:
      "We offer continuous monitoring and strategic adjustments to ensure that your financial strategies remain relevant and effective.",
  },
];

export default function FinancialAnalysisAndStrategy() {
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
                    Financial Analysis and Strategy
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Financial Analysis and Strategy is the process of
                      evaluating a business&apos;s financial health and
                      performance to develop actionable strategies that align
                      with business goals. By thoroughly analyzing financial
                      data, businesses can identify trends, assess risk, and
                      implement strategies for long-term growth. This service
                      provides businesses with in-depth financial insights that
                      aid in making informed decisions, optimizing financial
                      performance, and achieving sustainable success.
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
                    title="Why You Need Financial Analysis and Strategy"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter
                    href="/services/bookkeeping"
                    service="Bookkeeping Services"
                    text="We are here to address any questions you may have as you implement your plan. Additionally, for clients seeking an ongoing partnership, we provide comprehensive"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

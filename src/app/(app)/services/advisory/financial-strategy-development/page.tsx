import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Long-Term Financial Stability",
    description:
      "Develops a financial plan that ensures long-term sustainability, helping businesses navigate economic fluctuations and market challenges.",
  },
  {
    title: "Goal Alignment",
    description:
      "Aligns financial strategies with business goals, ensuring that every financial decision supports overall business objectives, such as growth, expansion, or profitability.",
  },
  {
    title: "Improved Resource Allocation",
    description:
      "Helps businesses allocate resources effectively, ensuring that capital is used in the most efficient and productive ways to drive growth.",
  },
  {
    title: "Risk Management",
    description:
      "Identifies potential financial risks and develops strategies to mitigate those risks, ensuring that the business remains resilient in the face of unforeseen challenges.",
  },
  {
    title: "Enhanced Profitability",
    description:
      "Provides a roadmap to optimize financial performance, including strategies for cost reduction, revenue growth, and improving profit margins.",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Leverages financial data and analytics to guide business decisions, ensuring that strategies are based on accurate and up-to-date financial information.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Position Analysis",
    description:
      "A review of the company's financial health, including cash flow, profit margins, debt levels, and performance for strategy development.",
  },
  {
    title: "Budgeting and Forecasting",
    description:
      "Creating detailed budgets and financial forecasts that project future revenue, expenses, and cash flow, helping the business plan for growth.",
  },
  {
    title: "Capital Structure Planning",
    description:
      "Evaluating the optimal mix of debt and equity financing for the business, helping manage costs, maximize returns, and ensure sufficient liquidity for operations.",
  },
  {
    title: "Cost Management and Efficiency",
    description:
      "Analyzing costs and identifying opportunities for cost reduction and operational efficiency, improving profitability without compromising quality.",
  },
  {
    title: "Growth and Expansion Strategies",
    description:
      "Developing financial strategies that support business growth and expansion, including strategies for scaling operations, entering new markets, or launching new products.",
  },
  {
    title: "Financial Risk Assessment",
    description:
      "Assessing potential financial risks, including market volatility, currency fluctuations, and economic downturns, and developing strategies to minimize these risks.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Sustainable Growth",
    description:
      "Helps ensure that your business grows in a financially sustainable way, reducing the risk of cash flow issues or financial instability in the long term.",
  },
  {
    title: "Goal-Oriented Approach",
    description:
      "Aligns your financial decisions with your broader business goals, making it easier to track progress and make adjustments as needed.",
  },
  {
    title: "Informed Decision Making",
    description:
      "Provides a data-driven framework for making informed financial decisions, ensuring that all choices are based on sound financial analysis.",
  },
  {
    title: "Efficiency and Profitability",
    description:
      "Optimizes resource allocation, reduces waste, and improves profitability by ensuring that capital is allocated efficiently and used in the most effective ways.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Proactively identifies potential financial risks and develops strategies to minimize them, allowing businesses to weather economic challenges.",
  },
  {
    title: "Clear Financial Vision",
    description:
      "Provides a clear financial roadmap, offering businesses a sense of direction and confidence in achieving their long-term financial goals.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Financial Review",
    description:
      "We begin by conducting a detailed assessment of your business's current financial position, analyzing key financial statements and identifying areas for improvement.",
  },
  {
    heading: "Customized Financial Strategy",
    description:
      "Based on your business goals and financial needs, we develop a tailored financial strategy that focuses on maximizing profitability, improving cash flow, and ensuring long-term growth.",
  },
  {
    heading: "Implementation Support",
    description:
      "We assist in the implementation of your financial strategy, offering guidance on budgeting, forecasting, capital raising, and cost management to ensure that the plan is effectively executed.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We provide continuous monitoring of your financial performance, making adjustments to your strategy as necessary to keep it aligned with evolving market conditions and business objectives.",
  },
  {
    heading: "Strategic Financial Reporting",
    description:
      "We provide regular financial reports and analyses to track progress, offering insights for improvement and recommendations to optimize performance.",
  },
];

export default function FinancialStrategyDevelopment() {
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
                    Financial Strategy Development
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Financial Strategy Development involves creating a
                      comprehensive, long-term financial plan that aligns with a
                      business&apos;s goals, growth aspirations, and market
                      conditions. This service helps businesses analyze their
                      current financial position, set clear objectives, and
                      develop a robust strategy to achieve those objectives
                      while maximizing profitability and ensuring financial
                      sustainability. A well-crafted financial strategy not only
                      provides direction but also ensures that resources are
                      allocated effectively to achieve business success.
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
                    title="Why You Need Financial Strategy Development"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter text="No matter what your tax, accounting, business, or financial issue is, feel free to give us a call so we can get started helping you today with our accounting advisory services for businesses and individuals." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

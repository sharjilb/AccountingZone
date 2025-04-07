import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Clear Financial Roadmap",
    description:
      "Develops a comprehensive financial plan that outlines your start-up’s financial goals, key milestones, and strategies to achieve long-term success, helping to keep your business on track.",
  },
  {
    title: "Cash Flow Management",
    description:
      "Ensures that cash flow is effectively managed from day one, helping you avoid common pitfalls such as running out of working capital or being unable to meet short-term obligations.",
  },
  {
    title: "Accurate Budgeting and Forecasting",
    description:
      "Establishes realistic budgets and financial forecasts, helping start-ups make informed decisions, allocate resources effectively, avoid overspending, and ensure long-term financial stability.",
  },
  {
    title: "Access to Funding",
    description:
      "Assists in identifying and securing the right funding sources, whether through venture capital, loans, or grants, ensuring that the business has enough capital to sustain operations and grow.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Helps identify potential financial risks early and provides strategies to mitigate these risks, such as diversifying revenue streams or creating a financial cushion for unexpected costs.",
  },
  {
    title: "Strategic Financial Decision-Making",
    description:
      "Equips entrepreneurs with essential financial insights to make informed decisions about pricing, expenses, investment opportunities, profitability, and strategies for long-term business growth.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Goal Setting",
    description:
      "We help define clear, actionable financial goals for your start-up, focusing on areas such as profitability, cash flow, and capital requirements, ensuring alignment with your business’s mission and vision.",
  },
  {
    title: "Business Budgeting & Cash Flow Forecasting",
    description:
      "We create detailed budgets and cash flow forecasts that give a clear picture of expected revenues, expenses, and cash needs, helping you plan for both short-term and long-term financial requirements.",
  },
  {
    title: "Funding Strategy & Capital Requirements",
    description:
      "We analyze your capital needs and explore funding options, including personal savings, loans, angel investors, venture capital, or crowdfunding, ensuring access to necessary funds for growth.",
  },
  {
    title: "Expense Management & Cost Control",
    description:
      "We help identify essential expenses, streamline operations, and implement cost control measures to ensure that your start-up stays within budget and maintains positive cash flow.",
  },
  {
    title: "Profitability & Break-Even Analysis",
    description:
      "We perform a detailed analysis of your start-up’s profitability and break-even point, helping you understand when your business will become profitable and how to plan for growth.",
  },
  {
    title: "Tax Planning & Compliance",
    description:
      "We guide you through the tax implications of running a start-up, helping ensure compliance with local, state, and federal tax laws, and offering strategies to minimize your tax liability.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Sustainable Growth",
    description:
      "Effective financial planning ensures that your start-up has the resources necessary to grow sustainably, avoiding cash flow shortages and financial pitfalls.",
  },
  {
    title: "Informed Decision Making",
    description:
      "Helps entrepreneurs make informed decisions by providing clear financial insights, from funding needs to pricing strategies and investment opportunities.",
  },
  {
    title: "Access to Funding",
    description:
      "Assists in identifying and securing funding by providing potential investors, lenders, or partners with a solid financial plan that outlines the start-up’s growth potential.",
  },
  {
    title: "Risk Reduction",
    description:
      "Proactively addresses financial risks by identifying challenges early and putting mitigation strategies in place, allowing you to adapt as needed.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Helps streamline operations and manage expenses, ensuring that capital is used efficiently and effectively to fuel business growth.",
  },
  {
    title: "Tax Efficiency",
    description:
      "Ensures that your start-up remains tax-compliant while minimizing tax liabilities, which can save money and improve profitability in the long term.",
  },
];

const OurApproachCards = [
  {
    heading: "Initial Financial Assessment",
    description:
      "We begin by conducting an in-depth review of your start-up’s financial situation, including your revenue model, expenses, cash flow, and capital needs.",
  },
  {
    heading: "Customized Financial Plan",
    description:
      "We create a tailored financial plan that aligns with your start-up’s goals, focusing on budgeting, forecasting, funding, and risk management to ensure a strong financial foundation.",
  },
  {
    heading: "Cash Flow Management and Forecasting",
    description:
      "We help you manage cash flow, ensuring that funds are available when needed, and provide accurate forecasts to predict future cash needs and ensure operational continuity.",
  },
  {
    heading: "Funding Strategy and Investor Relations",
    description:
      "We assist in crafting a funding strategy, identifying suitable capital sources, and preparing pitch materials for investors, lenders, or partners to secure the necessary funding for growth.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We provide ongoing support to monitor financial performance, making adjustments to your plan as your business evolves, ensuring strategies stay aligned with your goals.",
  },
  {
    heading: "Training and Financial Education",
    description:
      "We offer training to you and your team on key financial principles, ensuring that you have the tools and knowledge to manage your business’s finances effectively as it grows.",
  },
];

export default function StartUpFinancialPlanning() {
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
                    Start-Up Financial Planning
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Start-Up Financial Planning is a critical process that
                      helps new businesses lay a strong financial foundation for
                      long-term success. It involves creating a detailed
                      financial roadmap that covers budgeting, forecasting, cash
                      flow management, and funding strategies. Effective
                      financial planning for start-ups ensures that businesses
                      are well-prepared to navigate the challenges of their
                      early stages, secure the necessary funding, manage
                      expenses, and position themselves for growth and
                      profitability.
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
                    title="Why You Need Start-Up Financial Planning"
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

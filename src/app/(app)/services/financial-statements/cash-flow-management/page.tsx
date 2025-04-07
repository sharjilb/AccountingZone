import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Improved Liquidity",
    description:
      "Ensures businesses always have sufficient cash readily available to effectively meet their operational needs, preventing potential liquidity crises and financial strain.",
  },
  {
    title: "Optimized Working Capital",
    description:
      "Helps businesses manage their short-term assets and liabilities efficiently, maximizing the funds available for day-to-day operations.",
  },
  {
    title: "Early Risk Detection",
    description:
      "Identifies potential cash shortages or financial gaps early, allowing businesses to take corrective action before facing disruptions.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "Provides a clear picture of cash inflows and outflows, enabling management to make data-driven decisions regarding investments and expenditures.",
  },
  {
    title: "Strategic Planning",
    description:
      "Facilitates the planning of long-term financial strategies by ensuring cash flow forecasts align with business goals and expansion plans.",
  },
  {
    title: "Enhanced Profitability",
    description:
      "Effective cash flow management helps identify key cost-saving opportunities, significantly improving profit margins and overall financial health.",
  },
];

const CoreComponentsCards = [
  {
    title: "Cash Flow Forecasting",
    description:
      "Predicting future cash inflows and outflows based on historical data and expected business activities, ensuring that the business can plan accordingly.",
  },
  {
    title: "Invoicing and Receivables Management",
    description:
      "Streamlining invoicing processes and significantly improving receivables collection systems to effectively reduce delays in payments, ensuring steady cash inflows.",
  },
  {
    title: "Expense Management",
    description:
      "Monitoring and controlling business expenses to avoid unnecessary costs and optimize cash outflows, keeping operations within budget.",
  },
  {
    title: "Cash Flow Monitoring",
    description:
      "Tracking daily, weekly, and monthly cash movements to maintain a real-time understanding of the business's financial position.",
  },
  {
    title: "Payment Scheduling",
    description:
      "Scheduling payments in a way that maintains cash flow stability while taking advantage of payment terms and minimizing cash shortages.",
  },
  {
    title: "Cash Reserves Management",
    description:
      "Building and carefully maintaining a sufficient cash reserve to provide a cushion against unforeseen expenses, economic downturns, or emergencies.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Financial Stability",
    description:
      "Helps maintain a healthy balance between income and expenditures, ensuring the business has enough cash to operate.",
  },
  {
    title: "Debt Management",
    description:
      "Prevents late payments or defaulting on loans, avoiding penalties and maintaining a strong credit profile.",
  },
  {
    title: "Business Continuity",
    description:
      "Ensures the business can meet its short-term obligations, even during seasonal downturns or unexpected changes in the market.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Analysis",
    description:
      "We thoroughly assess and analyze your cash flow, carefully identifying patterns, trends, potential gaps, and opportunities for improvement.",
  },
  {
    heading: "Personalized Strategy",
    description:
      "We develop tailored cash flow management plans that fit your business model and objectives, helping you achieve optimal liquidity.",
  },
  {
    heading: "Ongoing Monitoring",
    description:
      "We offer continuous monitoring and adjustment of your cash flow strategy to adapt to changing market conditions and business needs.",
  },
];

export default function CashFlowManagement() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation2.jpg"]}
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
                    Cash Flow Management
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Cash Flow Management is a critical element for maintaining
                      financial stability within a business. It involves
                      tracking, analyzing, and optimizing the movement of cash
                      in and out of the business. Effective cash flow management
                      ensures that a business has enough liquidity to meet its
                      obligations while also facilitating growth opportunities.
                      This service helps businesses manage their day-to-day
                      finances, avoid cash shortages, and plan for future
                      financial needs.
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
                    title="Why You Need Cash Flow Management"
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

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Immediate Insights",
    description:
      "Offers instant access to financial performance data, enabling businesses to make timely and informed decisions based on the most current information.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Empowers business owners and managers with real-time data to guide strategic decisions, such as budget adjustments and cost management.",
  },
  {
    title: "Improved Financial Control",
    description:
      "Provides ongoing visibility into cash flow, accounts, and overall financial health, allowing businesses to manage their finances more effectively and avoid surprises.",
  },
  {
    title: "Increased Operational Efficiency",
    description:
      "Reduces the time spent on generating reports, automating data entry, and eliminating the need for updates, allowing for greater focus on core business activities.",
  },
  {
    title: "Timely Compliance",
    description:
      "Ensures that businesses are always prepared for audits or regulatory reporting by providing real-time, accurate data that meets compliance requirements.",
  },
  {
    title: "Greater Transparency",
    description:
      "Fosters greater accountability within the organization, as financial data is available to multiple stakeholders at all times, increasing transparency and trust.",
  },
];

const CoreComponentsCards = [
  {
    title: "Profit and Loss (P&L) Statements",
    description:
      "Provides real-time access to profit and loss statements that reflect the current financial performance, helping businesses track revenue, expenses, and overall profitability.",
  },
  {
    title: "Balance Sheets",
    description:
      "Offers up-to-the-minute balance sheets, showcasing the business’s assets, liabilities, and equity, providing a snapshot of financial health at any given moment.",
  },
  {
    title: "Cash Flow Statements",
    description:
      "Tracks the inflow and outflow of cash in real time, enabling businesses to monitor liquidity and ensure they have the funds needed to meet obligations.",
  },
  {
    title: "Key Performance Indicators (KPIs)",
    description:
      "Displays real-time KPIs, such as gross profit margins, operating expenses, return on investment (ROI), allowing businesses to track performance against set goals.",
  },
  {
    title: "Budget vs. Actual Comparisons",
    description:
      "Compares actual performance against budgeted projections, allowing businesses to adjust forecasts and strategies as needed to stay on track.",
  },
  {
    title: "Custom Financial Dashboards",
    description:
      "Offers customizable dashboards that provide a quick, comprehensive view of critical financial data, allowing decision-makers to focus on areas that need attention.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Timely and Informed Decisions",
    description:
      "Provides up-to-date financial insights, enabling businesses to make quick, well-informed decisions that can improve profitability and reduce risks.",
  },
  {
    title: "Improved Cash Flow Management",
    description:
      "Helps businesses stay on top of their cash position by providing immediate visibility into cash flows, helping avoid potential liquidity issues.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Automates the generation of detailed financial reports, freeing up time for employees to focus on other strategic activities.",
  },
  {
    title: "Enhanced Forecasting",
    description:
      "By having real-time access to data, businesses can adjust forecasts, projections, and budgets based on current performance and trends.",
  },
  {
    title: "Transparency and Accountability",
    description:
      "Keeps the business, stakeholders, and investors informed, enhancing trust and encouraging transparency in financial management.",
  },
];

const OurApproachCards = [
  {
    heading: "Tailored Reporting Systems",
    description:
      "We implement real-time financial reporting systems customized to your business's needs, integrating with your existing accounting tools to deliver accurate and instant insights.",
  },
  {
    heading: "Continuous Monitoring and Adjustments",
    description:
      "We continuously monitor financial performance and adjust reports as needed, ensuring the data reflects current business conditions.",
  },
  {
    heading: "Comprehensive Support and Training",
    description:
      "We provide training to your team, ensuring they can fully utilize the reporting system and interpret the data to make informed decisions.",
  },
  {
    heading: "Real-Time Dashboards",
    description:
      "We set up real-time dashboards that consolidate key metrics, providing an accessible view of your business's financial performance at any time.",
  },
];

export default function RealTimeFinancialReporting() {
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
                    Real-Time Financial Reporting
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Real-Time Financial Reporting provides businesses with
                      instant access to up-to-date financial data, allowing for
                      more informed decision-making and enhanced visibility into
                      the financial health of the organization. By using
                      cloud-based or integrated accounting solutions, businesses
                      can track income, expenses, profits, and other key
                      financial metrics as they occur, ensuring that the data is
                      always current and accurate.
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
                    title="Why You Need Real-Time Financial Reporting"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter
                    href="/services/tax-planning"
                    service="Tax Planning"
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

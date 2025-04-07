import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Automated Data Flow",
    description:
      "Reduces the need for manual data entry by automatically transferring financial data between systems, minimizing errors and saving time.",
  },
  {
    title: "Real-Time Financial Insights",
    description:
      "Ensures that financial data is updated in real-time, providing immediate access to accurate reports and financial metrics for better decision-making.",
  },
  {
    title: "Improved Accuracy and Efficiency",
    description:
      "Reduces human errors and eliminates the need for duplicate data entry, ensuring that your financial records are accurate and consistent.",
  },
  {
    title: "Seamless Workflow",
    description:
      "Integrates your accounting software with other business systems (e.g., CRM, payroll, inventory management) to create a seamless flow of data across platforms.",
  },
  {
    title: "Time and Cost Savings",
    description:
      "Saves time by automating routine tasks and eliminates the need for manual reconciliation, reducing operational costs and improving productivity.",
  },
  {
    title: "Better Financial Control",
    description:
      "Provides a unified view of your financial data, enabling better tracking of cash flow, accounts payable/receivable, and overall business performance.",
  },
];

const CoreComponentsCards = [
  {
    title: "Bank Account Integration",
    description:
      "Automatically syncs bank transactions with your accounting software, ensuring accurate reconciliation and up-to-date cash flow tracking.",
  },
  {
    title: "Invoice and Payment Automation",
    description:
      "Syncs invoicing and payment systems with accounting software, streamlining the billing process and reducing the time spent on manual invoicing and payment entry.",
  },
  {
    title: "Expense Tracking and Categorization",
    description:
      "Integrates expense management tools with your accounting software to automatically categorize and track business expenses, improving cost control.",
  },
  {
    title: "Payroll System Integration",
    description:
      "Syncs payroll data with your accounting software, ensuring accurate recording of wages, taxes, and deductions, and simplifying payroll reporting.",
  },
  {
    title: "Real-Time Financial Reporting",
    description:
      "Provides automated, real-time reports that consolidate data from different sources, ensuring that financial statements and metrics are always up-to-date.",
  },
  {
    title: "Tax Filing Integration",
    description:
      "Connects tax preparation software to your accounting system, ensuring accurate tax reporting, deductions, and filings without the need for manual data entry.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Increased Efficiency",
    description:
      "Automates repetitive tasks, reducing manual effort and freeing up time for more strategic activities.",
  },
  {
    title: "Accurate and Timely Financial Data",
    description:
      "Ensures that all financial data is updated in real-time, providing accurate insights and reports whenever needed.",
  },
  {
    title: "Cost Reduction",
    description:
      "Reduces the risk of errors, rework, and inefficiencies, saving time and reducing operational costs.",
  },
  {
    title: "Streamlined Operations",
    description:
      "Integrates business functions (such as sales, payroll, and inventory) with accounting, improving workflow and efficiency.",
  },
  {
    title: "Improved Decision-Making",
    description:
      "With all your financial data in one place, you can make more informed decisions based on real-time data.",
  },
];

const OurApproachCards = [
  {
    heading: "System Assessment and Integration Strategy",
    description:
      "We assess your current systems and recommend the best accounting software integrations that suit your business needs, ensuring a smooth and efficient connection.",
  },
  {
    heading: "Customization and Setup",
    description:
      "We customize the integration process to ensure that your accounting software works seamlessly with other business tools, automating workflows and ensuring data consistency.",
  },
  {
    heading: "Ongoing Support and Monitoring",
    description:
      "We provide continuous support to ensure that your integrations remain functional, troubleshoot issues as they arise, and help you optimize the integration for maximum benefit.",
  },
  {
    heading: "Training and Education",
    description:
      "We offer training to your team on how to use the integrated systems effectively, ensuring they understand the full functionality and benefits of the system.",
  },
];

export default function IntegrationWithAccountingSoftware() {
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
                    Integration with Accounting Software
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Integration with Accounting Software involves connecting
                      your financial systems with accounting software tools to
                      streamline data flow, reduce manual data entry, and
                      improve overall efficiency. This service ensures that all
                      financial transactions, such as invoicing, payments, and
                      expense tracking, are automatically synchronized with your
                      accounting system. Integration allows for real-time
                      updates, accurate financial reporting, and enhanced
                      decision-making, making it a vital tool for businesses
                      looking to optimize their financial management processes.
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
                    title="Why You Need Integration with Accounting Software"
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

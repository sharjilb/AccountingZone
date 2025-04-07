import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Cost Control",
    description:
      "Helps businesses monitor and control spending, ensuring that expenses do not exceed budget limits and preventing unnecessary costs from accumulating.",
  },
  {
    title: "Improved Cash Flow",
    description:
      "By managing expenses efficiently, businesses can improve cash flow by reducing over-expenditure and ensuring that funds are allocated to essential areas.",
  },
  {
    title: "Detailed Expense Insights",
    description:
      "Provides a clear breakdown of where and how money is being spent, allowing businesses to make informed decisions about cost-cutting and resource allocation.",
  },
  {
    title: "Accurate Financial Reporting",
    description:
      "Ensures that expense data is correctly recorded and categorized, improving the accuracy of financial reports, tax filings, and compliance.",
  },
  {
    title: "Increased Profit Margins",
    description:
      "Identifying areas of inefficiency or overspending helps businesses reduce costs, thereby increasing profitability and improving bottom-line performance.",
  },
  {
    title: "Budget Alignment",
    description:
      "Ensures that all expenses are in line with the business’s financial goals and compliance requirements, enabling better budget tracking and forecasting.",
  },
];

const CoreComponentsCards = [
  {
    title: "Expense Categorization",
    description:
      "Classifies expenses into appropriate categories (e.g., operational, administrative, travel, marketing) for easier tracking and analysis.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Tracks expenses as they occur, providing real-time data on spending patterns and trends, helping businesses stay within budget limits.",
  },
  {
    title: "Expense Approval Workflows",
    description:
      "Implements workflows for expense approval to ensure that all expenditures are reviewed and approved before payment, reducing unauthorized spending.",
  },
  {
    title: "Recurring Expense Management",
    description:
      "Identifies and manages recurring expenses such as subscriptions, utilities, and leases, allowing businesses to forecast and budget for them accurately.",
  },
  {
    title: "Vendor and Supplier Management",
    description:
      "Tracks payments to suppliers and vendors, ensuring that discounts, payment terms, and contractual agreements are adhered to, while avoiding late fees or penalties.",
  },
  {
    title: "Tax Compliance and Reporting",
    description:
      "Ensures that all business expenses are properly documented and categorized for tax reporting, simplifying tax returns and minimizing errors during audits.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Efficient Cash Flow Management",
    description:
      "Helps businesses prevent overspending, improving their ability to manage cash flow and ensure they have the funds to meet obligations.",
  },
  {
    title: "Improved Financial Planning",
    description:
      "Provides detailed expense data that helps with accurate budgeting and forecasting, ensuring the business remains financially healthy.",
  },
  {
    title: "Expense Visibility",
    description:
      "Offers transparency into business spending patterns, helping decision-makers understand cost drivers and identify opportunities for significant savings.",
  },
  {
    title: "Compliance and Accuracy",
    description:
      "Ensures all expenses are properly categorized and documented, reducing the risk of non-compliance and inaccuracies in financial statements.",
  },
];

const OurApproachCards = [
  {
    heading: "Customized Expense Tracking System",
    description:
      "We implement an expense tracking system that fits your business's needs, ensuring all costs are properly recorded and monitored.",
  },
  {
    heading: "Regular Monitoring and Alerts",
    description:
      "We provide ongoing monitoring of your expenses, sending alerts when you approach budget limits or when irregular spending is detected.",
  },
  {
    heading: "Detailed Reporting and Analysis",
    description:
      "We offer regular reports on spending patterns, helping you track how money is being spent and where cost-cutting measures can be applied.",
  },
  {
    heading: "Training and Support",
    description:
      "We provide training for your team to ensure they are fully equipped to manage and approve expenses efficiently, with ongoing support for any questions or concerns.",
  },
];

export default function ExpenseTrackingAndManagement() {
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
                    Expense Tracking and Management
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Expense Tracking and Management is the process of
                      monitoring and controlling the costs incurred by a
                      business to ensure financial health and profitability. By
                      tracking every expense in detail, businesses can gain
                      insights into where money is being spent, identify
                      potential savings, and ensure that expenses align with
                      budgetary constraints. This service helps businesses
                      optimize their spending, improve cash flow, and make
                      informed financial decisions.
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
                    title="Why You Need Expense Tracking and Management"
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

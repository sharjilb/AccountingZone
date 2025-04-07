import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Accurate Financial Records",
    description:
      "Cleans up any discrepancies or errors in historical financial data, ensuring that past records are accurate, reliable, and aligned with current standards.",
  },
  {
    title: "Improved Tax Filing and Compliance",
    description:
      "Ensures that all historical financial records are in compliance with tax laws and regulations, making tax filing easier and reducing the risk of penalties.",
  },
  {
    title: "Clearer Financial Insights",
    description:
      "Organizes and streamlines historical data, providing clearer insights into past financial performance, which is crucial for decision-making.",
  },
  {
    title: "Enhanced Audit Readiness",
    description:
      "Ensures that all historical records are well-organized and compliant, making it easier to pass audits and reducing the risk of penalties or scrutiny.",
  },
  {
    title: "Streamlined Reporting",
    description:
      "Ensures that financial reports are based on accurate and complete data, allowing for consistent, reliable, and transparent reporting going forward.",
  },
  {
    title: "Improved Cash Flow Management",
    description:
      "Identifies and addresses past errors or inconsistencies that could have impacted cash flow, leading to a better understanding of financial health.",
  },
];

const CoreComponentsCards = [
  {
    title: "Account Reconciliation",
    description:
      "Reviewing past accounts and reconciling discrepancies between records, such as bank statements, ledgers, and accounts payable/receivable.",
  },
  {
    title: "Transaction Categorization",
    description:
      "Properly categorizing and organizing transactions that may have been misclassified or overlooked, ensuring that each entry aligns with the correct account.",
  },
  {
    title: "Depreciation and Asset Management Cleanup",
    description:
      "Ensuring fixed assets and depreciation are accurately recorded and aligned with accounting standards, correcting any past mistakes.",
  },
  {
    title: "Tax Record Review and Correction",
    description:
      "Reviewing and correcting any tax-related entries, including deductions, credits, and tax liabilities, ensuring compliance with tax laws and regulations.",
  },
  {
    title: "Backlog Cleanup",
    description:
      "Addressing any backlog in financial data entry and organizing past financial records to eliminate outdated, redundant, or irrelevant data for clarity.",
  },
  {
    title: "Financial Statement Adjustment",
    description:
      "Adjusting past financial statements to reflect the correct financial position, ensuring that balance sheets, profit and loss statements, and cash flow statements are accurate.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accuracy and Compliance",
    description:
      "Ensures that your past financial records are accurate, compliant, and up-to-date, reducing the risk of legal issues or audit problems.",
  },
  {
    title: "Better Decision-Making",
    description:
      "Clean and accurate historical records provide valuable insights that can guide future business decisions and growth strategies.",
  },
  {
    title: "Streamlined Financial Operations",
    description:
      "Having all financial records in order allows for smoother operations, enhanced decision-making, and better overall financial management moving forward.",
  },
  {
    title: "Reduced Risk of Penalties",
    description:
      "Correcting past bookkeeping errors ensures you are compliant with tax and financial regulations, reducing the risk of fines or penalties.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Financial Review",
    description:
      "We thoroughly review your historical financial records to identify and correct any discrepancies, errors, missing information, or incomplete data.",
  },
  {
    heading: "Customized Cleanup Plan",
    description:
      "We develop a tailored cleanup strategy that addresses your specific needs, ensuring that past transactions are accurately categorized, reconciled, and reported.",
  },
  {
    heading: "Ongoing Monitoring",
    description:
      "After the cleanup process, we provide continuous monitoring and support to ensure that your financial records remain accurate and up-to-date.",
  },
  {
    heading: "Training and Best Practices",
    description:
      "We offer training to your team on how to avoid future bookkeeping errors, ensuring that best practices are followed in the future.",
  },
];

export default function HistoricalBookkeepingCleanup() {
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
                    Historical Bookkeeping Cleanup
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Historical Bookkeeping Cleanup is the process of
                      reviewing, correcting, and organizing a business&apos;s
                      financial records from previous periods. This service
                      helps businesses bring their financial records up to date,
                      fix inaccuracies, and ensure that their bookkeeping
                      practices comply with accounting standards. Historical
                      cleanup ensures that past financial transactions are
                      accurately recorded, which is essential for creating
                      reliable financial reports, preparing for audits, and
                      making informed business decisions.
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
                    title="Why You Need Historical Bookkeeping Cleanup"
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

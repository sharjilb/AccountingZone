import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Accurate Financial Records",
    description:
      "Ensures that accounts payable and receivable balances align with actual transactions, providing accurate and up-to-date financial records.",
  },
  {
    title: "Improved Cash Flow Management",
    description:
      "Regular reconciliation helps businesses manage their cash flow by identifying overdue payments, improving collections, and ensuring timely payments.",
  },
  {
    title: "Prevention of Errors and Fraud",
    description:
      "Helps detect and resolve discrepancies, preventing errors and reducing the risk of fraudulent activities within the accounts payable and receivable process.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Accurate reconciliation provides clear visibility into outstanding balances, enabling better decisions regarding cash flow, budgeting, and financial planning.",
  },
  {
    title: "Better Supplier and Customer Relations",
    description:
      "Timely reconciliation of payables and receivables fosters stronger relationships with suppliers and customers, as payments are tracked efficiently.",
  },
  {
    title: "Compliance and Audit-Ready",
    description:
      "Regular reconciliation ensures compliance with accounting standards and prepares financial records for audits, reducing the risk of discrepancies during the audit process.",
  },
];

const CoreComponentsCards = [
  {
    title: "Verification of Transactions",
    description:
      "Cross-checking all transactions between accounts payable, receivable, and bank statements to ensure accuracy and completeness.",
  },
  {
    title: "Matching Payments and Invoices",
    description:
      "Ensuring that invoices from suppliers match payments made accurately and that customer payments align with outstanding invoices.",
  },
  {
    title: "Aging Report Review",
    description:
      "Analyzing aging reports for both payables and receivables to identify overdue amounts effectively and prioritize collection or payment efforts.",
  },
  {
    title: "Discrepancy Identification",
    description:
      "Identifying and investigating discrepancies between accounts payable/receivable records and actual transactions, correcting errors promptly.",
  },
  {
    title: "Payment Terms Monitoring",
    description:
      "Ensuring that payments to suppliers are made on time to avoid late fees and that customer payments are collected according to terms.",
  },
  {
    title: "Reconciliation Reports",
    description:
      "Generating detailed reports that provide a clear summary of reconciled accounts, highlighting any discrepancies and adjustments made.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accuracy and Transparency",
    description:
      "Regular reconciliation ensures your financial records are accurate, which is crucial for informed decision-making and reporting.",
  },
  {
    title: "Financial Control",
    description:
      "Helps maintain control over outstanding payables and receivables, ensuring that cash flow remains steady and predictable.",
  },
  {
    title: "Error Prevention",
    description:
      "Identifies discrepancies and potential errors early, allowing for quick corrections and minimizing financial risks.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that your accounts are in compliance with accounting standards, preparing your business for audits and financial reviews.",
  },
];

const OurApproachCards = [
  {
    heading: "Thorough Review",
    description:
      "We conduct a detailed review of your accounts payable and receivable records, identifying any discrepancies or issues.",
  },
  {
    heading: "Custom Reconciliation Process",
    description:
      "We develop a tailored reconciliation process that aligns with your needs and financial systems, ensuring accuracy and efficiency.",
  },
  {
    heading: "Ongoing Monitoring and Support",
    description:
      "We provide ongoing reconciliation services, ensuring that your accounts are continuously accurate and up-to-date.",
  },
];

export default function AccountsReconciliation() {
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
                    Accounts Payable/Receivable Reconciliation
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accounts Payable/Receivable Reconciliation is the process
                      of ensuring that the amounts recorded in a company&apos;s
                      accounts payable and accounts receivable are accurate and
                      match the corresponding financial statements, including
                      bank records. Proper reconciliation is crucial for
                      maintaining accurate financial records, preventing fraud,
                      and ensuring that cash flow is properly managed. This
                      service helps businesses identify discrepancies, correct
                      errors, and improve the efficiency of their financial
                      processes.
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
                    title="Why You Need Accounts Payable/Receivable Reconciliation"
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

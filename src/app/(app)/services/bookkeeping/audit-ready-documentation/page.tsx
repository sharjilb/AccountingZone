import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Streamlined Audit Process",
    description:
      "Having organized and comprehensive documentation simplifies the audit process, reducing the time and effort required for auditors to review your records.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that all financial documentation is compliant with accounting standards, tax regulations, and requirements, reducing the risk of non-compliance.",
  },
  {
    title: "Reduced Audit Stress",
    description:
      "Having all necessary documents prepared in advance alleviates stress during audits, helping your team stay focused on day-to-day operations.",
  },
  {
    title: "Improved Financial Transparency",
    description:
      "Well-organized documentation enhances transparency in your financial records, increasing trust with stakeholders, auditors, and regulatory authorities.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Proper documentation helps identify and address potential issues early, reducing the risk of discrepancies or penalties during an audit.",
  },
  {
    title: "Increased Efficiency",
    description:
      "Reduces the need for back-and-forth communication during audits, improving efficiency and allowing auditors to work faster and more effectively.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Statement Preparation",
    description:
      "Ensures all financial statements (balance sheets, income statements, cash flow statements) are complete, accurate, and compliant with accounting standards.",
  },
  {
    title: "Transaction Documentation",
    description:
      "Organizes records of all transactions, including invoices, receipts, bank statements, and payment records, ensuring all are accounted for and easily accessible.",
  },
  {
    title: "Supporting Schedules and Workpapers",
    description:
      "Prepares supporting schedules for key financial data, such as fixed assets, liabilities, and equity, to back up figures in the financial statements.",
  },
  {
    title: "Tax Documentation",
    description:
      "Ensures that all tax-related documents, including returns, deductions, and credits, are accurately recorded and available for auditors.",
  },
  {
    title: "Internal Control Documentation",
    description:
      "Provides documentation of internal controls and procedures to demonstrate how financial data is managed and protected within the organization.",
  },
  {
    title: "Audit Trail and Logs",
    description:
      "Maintains an audit trail that records all changes to financial data, ensuring that all transactions are traceable and easily verified during an audit.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Efficient Audits",
    description:
      "Well-organized documentation speeds up the audit process, reducing the time spent on gathering and reviewing records.",
  },
  {
    title: "Reduced Compliance Risks",
    description:
      "Ensures that your business meets all legal and regulatory requirements, reducing the risk of penalties or legal issues.",
  },
  {
    title: "Increased Confidence",
    description:
      "Proper documentation shows auditors and stakeholders that your business is financially transparent and well-managed.",
  },
  {
    title: "Stress-Free Audits",
    description:
      "Reduces the stress and disruption of the audit process by providing everything auditors need in one place, at the right time.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Documentation Systems",
    description:
      "We implement a tailored system to organize your financial records, ensuring that all necessary documents are categorized, stored, and easy to retrieve.",
  },
  {
    heading: "Ongoing Monitoring and Updates",
    description:
      "We regularly review and update your documentation to ensure it remains accurate and up to date, so your business is always prepared for an audit.",
  },
  {
    heading: "Audit Preparation Support",
    description:
      "We assist in preparing for the audit by helping to compile and review all necessary documents, addressing any issues before the auditors arrive.",
  },
  {
    heading: "Training and Education",
    description:
      "We provide training to your team to ensure they understand how to keep audit-ready documentation in place, making future audits smoother and faster.",
  },
];

export default function AuditReadyDocumentation() {
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
                    Audit-Ready Documentation
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Audit-Ready Documentation refers to the systematic
                      organization and preparation of financial records and
                      supporting documents that ensure a business is fully
                      prepared for an audit. This service ensures that all
                      necessary documentation is accurate, complete, and readily
                      accessible, allowing for a smooth audit process. Properly
                      organized audit-ready documentation not only helps
                      businesses pass audits but also strengthens internal
                      controls and improves financial transparency.
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
                    title="Why You Need Audit-Ready Documentation"
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

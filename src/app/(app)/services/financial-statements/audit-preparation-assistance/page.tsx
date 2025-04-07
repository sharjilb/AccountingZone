import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Enhanced Accuracy",
    description:
      "Ensures financial records are thorough and accurate, reducing the chances of discrepancies or errors during the audit.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Helps businesses stay compliant with accounting standards, tax laws, & industry requirements, preventing legal issues.",
  },
  {
    title: "Streamlined Audit Process",
    description:
      "Organizes financial records, documentation, and supporting materials to make the audit process faster and less stressful.",
  },
  {
    title: "Reduced Audit Risk",
    description:
      "Identifies potential concerns in financial records, helping businesses address them before the audit and minimizing risks.",
  },
  {
    title: "Improved Financial Transparency",
    description:
      "Demonstrates commitment to transparency and sound financial management, crucial for stakeholders and investors.",
  },
  {
    title: "Cost Savings",
    description:
      "Efficient preparation reduces the time spent on audits, leading to lower fees and minimizing disruptions to operations.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Statement Review",
    description:
      "A thorough review of balance sheets, income statements, and cash flow statements to ensure accuracy and compliance with accounting standards.",
  },
  {
    title: "Documentation Organization",
    description:
      "Assisting in organizing, categorizing, and managing financial documents, contracts, and other relevant materials required for the audit.",
  },
  {
    title: "Internal Control Assessment",
    description:
      "Reviewing internal financial controls to identify weaknesses and recommending improvements to ensure better financial management practices.",
  },
  {
    title: "Tax Filing and Compliance Check",
    description:
      "Ensuring all tax filings are accurate, timely, and up-to-date, helping businesses avoid discrepancies during tax-related audits and penalties.",
  },
  {
    title: "Audit Readiness Checklist",
    description:
      "Creating a comprehensive checklist of all necessary documents, information, and processes required to prepare for the audit efficiently.",
  },
  {
    title: "Liaison with Auditors",
    description:
      "Acting as an intermediary between the business and the auditors, ensuring clear communication and addressing any questions or concerns promptly.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accuracy and Compliance",
    description:
      "Proper preparation ensures your financial statements are correct, mitigating the risk of audit adjustments or penalties.",
  },
  {
    title: "Smooth Audit Process",
    description:
      "Having organized and complete documentation minimizes audit delays and disruptions.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Identifies potential areas of concern in advance, reducing the risk of issues during the audit.",
  },
  {
    title: "Stakeholder Confidence",
    description:
      "A well-prepared audit demonstrates transparency and enhances trust with stakeholders and investors.",
  },
];

const OurApproachCards = [
  {
    heading: "Customized Audit Plan",
    description:
      "We tailor the audit preparation plan based on your business's size, industry, and specific audit requirements.",
  },
  {
    heading: "Thorough Review and Organization",
    description:
      "We conduct a comprehensive review of your financial documents and ensure everything is in place for a smooth audit.",
  },
  {
    heading: "Proactive Communication",
    description:
      "We maintain open communication with auditors, addressing concerns before the audit begins, ensuring a smooth process.",
  },
];

export default function AuditPreparationAssistance() {
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
                    Audit Preparation Assistance
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Audit Preparation Assistance is designed to help
                      businesses prepare for internal or external audits by
                      ensuring all financial records are accurate, complete, and
                      compliant with relevant regulations. Proper audit
                      preparation helps streamline the audit process, reduce the
                      risk of errors, and ensure that businesses can demonstrate
                      financial transparency. This service supports businesses
                      in maintaining accurate financial records and
                      understanding the requirements for a successful audit
                      outcome.
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
                    title="Why You Need Audit Preparation Assistance"
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

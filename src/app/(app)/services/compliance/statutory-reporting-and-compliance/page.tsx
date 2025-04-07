import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Avoidance of Penalties and Fines",
    description:
      "Timely and accurate statutory reporting ensures that your business remains in full compliance with regulatory requirements, avoiding costly penalties and legal issues.",
  },
  {
    title: "Enhanced Reputation and Trust",
    description:
      "Demonstrating compliance with regulatory obligations enhances your business's reputation, fostering trust with customers, investors, and stakeholders.",
  },
  {
    title: "Regulatory Risk Mitigation",
    description:
      "Proactively addressing statutory reporting requirements reduces the risk of legal challenges, audits, and compliance-related disputes.",
  },
  {
    title: "Streamlined Operations",
    description:
      "Implementing efficient systems for statutory reporting reduces administrative burden, enabling smoother operations and more time for strategic initiatives.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "Accurate compliance data provides business owners and managers with key insights that support strategic decision-making, ensuring alignment with regulatory expectations.",
  },
  {
    title: "Up-to-Date with Legal Changes",
    description:
      "Keeps your business updated on changes in laws and regulations, ensuring reporting practices evolve with updated regulatory requirements.",
  },
];

const CoreComponentsCards = [
  {
    title: "Financial Reporting Compliance",
    description:
      "We assist in preparing and filing financial statements, including income statements, balance sheets, and cash flow statements, ensuring compliance with accounting standards and legal requirements.",
  },
  {
    title: "Tax Compliance Reporting",
    description:
      "We ensure your business adheres to tax reporting requirements, including income tax returns, VAT/GST filings, payroll taxes, and other relevant filings, reducing the risk of audits and penalties.",
  },
  {
    title: "Corporate Filings",
    description:
      "We assist with necessary corporate filings, such as annual reports, shareholder information, and company registration updates, ensuring timely submission to relevant authorities.",
  },
  {
    title: "Labor and Employment Compliance",
    description:
      "We ensure compliance with employment laws and labor regulations by managing reports related to wages, benefits, employee health and safety, and other labor-related requirements.",
  },
  {
    title: "Environmental & Industry Compliance",
    description:
      "For businesses in specific industries, we ensure compliance with environmental regulations, health and safety standards, and other sector-specific statutory reporting requirements.",
  },
  {
    title: "Internal Controls and Audits",
    description:
      "We help establish robust internal controls to ensure compliance with reporting obligations, provide detailed guidance, and assist in preparing for both internal and external audits efficiently and effectively.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Legal Protection",
    description:
      "Ensures your business operates within legal bounds, minimizing the risk of legal issues, penalties, and reputational damage.",
  },
  {
    title: "Avoiding Financial Penalties",
    description:
      "Timely and accurate reporting prevents financial penalties and late fees, which can significantly affect your bottom line.",
  },
  {
    title: "Improved Governance",
    description:
      "Demonstrates strong governance practices to stakeholders, enhancing your business’s credibility and investor confidence.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Streamlines reporting processes, reducing administrative work and allowing your team to focus on value-generating activities.",
  },
  {
    title: "Risk Management",
    description:
      "Proactively managing statutory reporting reduces the risk of non-compliance and associated legal and financial risks.",
  },
  {
    title: "Strategic Compliance",
    description:
      "Keeps you ahead of regulatory changes, helping your business stay agile and responsive to evolving legal requirements.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Regulatory Review",
    description:
      "We begin by thoroughly assessing your business’s regulatory landscape to identify all applicable statutory reporting obligations at the federal, state, and local levels.",
  },
  {
    heading: "Customized Reporting Solutions",
    description:
      "We develop customized reporting processes tailored to your business needs, ensuring that your statutory reporting is streamlined, accurate, and timely.",
  },
  {
    heading: "Timely and Accurate Filings",
    description:
      "We handle the preparation and submission of all necessary filings, ensuring compliance with deadlines and avoiding late submissions that could result in penalties.",
  },
  {
    heading: "Ongoing Compliance Monitoring",
    description:
      "We provide continuous monitoring of your business’s compliance status, ensuring that changes in laws and regulations are promptly incorporated into your reporting practices.",
  },
  {
    heading: "Training and Support",
    description:
      "We provide training and support to your team on compliance requirements, ensuring they are equipped to handle statutory reporting and stay informed about regulatory changes.",
  },
  {
    heading: "Audit Support and Representation",
    description:
      "We assist in preparing for audits and can represent your business during audit processes, ensuring compliance and minimizing any audit-related risks.",
  },
];

export default function StatutoryReportingAndCompliance() {
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
                    Statutory Reporting and Compliance
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Statutory Reporting and Compliance refers to the process
                      of ensuring that a business meets all legal and regulatory
                      requirements set forth by government authorities, industry
                      bodies, and regulatory agencies. This service involves
                      preparing and submitting the required reports, filings,
                      and documentation in accordance with local, state, and
                      federal laws. Compliance with statutory reporting
                      obligations is critical for avoiding penalties, protecting
                      the company&apos;s reputation, and ensuring smooth
                      business operations. This service ensures that businesses
                      stay up-to-date with ever-changing laws and regulations,
                      minimizing legal risks and operational disruptions.
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
                    title="Why You Need Statutory Reporting and Compliance"
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

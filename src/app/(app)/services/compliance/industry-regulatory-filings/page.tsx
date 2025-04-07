import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Regulatory Compliance Assurance",
    description:
      "Ensures that all industry-specific filings are completed accurately and on time, reducing the risk of non-compliance and associated fines or penalties.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Helps businesses identify and mitigate potential risks associated with non-compliance, such as operational disruptions, legal challenges, or reputational damage.",
  },
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamlines the process of gathering, preparing, and submitting required documents, freeing up resources and time for other critical business functions.",
  },
  {
    title: "Enhanced Reputation",
    description:
      "Demonstrates to stakeholders, regulators, and customers that the business adheres to industry regulations and best practices, fostering trust and credibility.",
  },
  {
    title: "Reduced Legal and Financial Exposure",
    description:
      "Ensures that the business is operating within the bounds of industry-specific regulations, reducing the risk of legal or financial repercussions due to improper filings.",
  },
  {
    title: "Timely Filing",
    description:
      "Provides a system for tracking deadlines and submission schedules, ensuring that filings are completed on time and avoiding late fees or penalties.",
  },
];

const CoreComponentsCards = [
  {
    title: "Industry-Specific Compliance Review",
    description:
      "We conduct a comprehensive review of your industry’s regulatory requirements to identify necessary filings, ensuring your business is aware of every obligation and remains compliant with all regulations and standards.",
  },
  {
    title: "Document Preparation and Submission",
    description:
      "We assist with the preparation and submission of required regulatory filings, such as environmental reports, financial disclosures, health and safety compliance forms, and more.",
  },
  {
    title: "Compliance Monitoring and Tracking",
    description:
      "We track and monitor regulatory deadlines to ensure that all filings are completed on time, helping you avoid missed deadlines, associated penalties, and potential disruptions to your business operations.",
  },
  {
    title: "Industry-Specific Reporting",
    description:
      "We prepare and submit specialized reports, such as environmental impact assessments, labor reports, and financial disclosures, depending on the requirements of your industry.",
  },
  {
    title: "Audit and Inspection Support",
    description:
      "We support businesses in preparation for audits or inspections related to regulatory compliance, ensuring that all necessary documentation and records are readily available.",
  },
  {
    title: "Regulatory Update Alerts",
    description:
      "We monitor changes in industry-specific regulations and keep you updated on new or amended laws, ensuring that your business is always in compliance with the latest requirements.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Avoid Penalties",
    description:
      "Ensures that your business stays compliant with industry regulations, avoiding costly fines, penalties, legal issues, and reputational damage that could harm your operations.",
  },
  {
    title: "Risk Reduction",
    description:
      "Identifies and mitigates risks related to non-compliance, protecting your business from potential legal, financial, and reputational repercussions.",
  },
  {
    title: "Operational Focus",
    description:
      "By outsourcing the task of regulatory filings, you can focus on your business's core operations while ensuring full compliance with industry regulations and standards.",
  },
  {
    title: "Stakeholder Trust",
    description:
      "Demonstrates to investors, customers, and regulators that your business is dedicated to operating ethically and in compliance with all relevant laws.",
  },
  {
    title: "Timely Compliance",
    description:
      "Ensures that your business consistently meets regulatory deadlines, preventing late fees and keeping your operations running smoothly.",
  },
  {
    title: "Peace of Mind",
    description:
      "Provides confidence that your business is fully compliant with industry-specific regulations, reducing the stress of managing complex legal requirements.",
  },
];

const OurApproachCards = [
  {
    heading: "Industry-Specific Regulatory Assessment",
    description:
      "We begin by assessing your business's specific industry regulations to identify all applicable filing requirements and deadlines.",
  },
  {
    heading: "Customized Filing Solutions",
    description:
      "Based on your industry's needs, we tailor a compliance strategy that ensures accurate, timely filings and reporting in line with the regulatory bodies governing your sector.",
  },
  {
    heading: "Document Preparation and Filing",
    description:
      "We handle the preparation and submission of all necessary regulatory filings, ensuring that each document is compliant with the relevant industry standards and legal requirements.",
  },
  {
    heading: "Deadline Management and Alerts",
    description:
      "We track regulatory deadlines and provide reminders, ensuring that filings are submitted on time to avoid penalties and maintain compliance.",
  },
  {
    heading: "Ongoing Monitoring and Updates",
    description:
      "We continuously monitor changes in industry regulations and keep you informed of any updates, ensuring that your business is always prepared for new compliance requirements.",
  },
  {
    heading: "Audit and Inspection Support",
    description:
      "We provide assistance during audits or inspections, helping ensure that your business's compliance documentation is in order and readily available for review.",
  },
];

export default function IndustrySpecificRegulatoryFilings() {
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
                    Industry-Specific Regulatory Filings
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Industry-Specific Regulatory Filings involve the
                      submission of reports and documents required by regulatory
                      bodies within a particular industry. Each industry is
                      subject to unique rules and regulations that govern its
                      operations, including safety, environmental impact,
                      financial disclosures, and operational practices. This
                      service helps businesses ensure that they are in full
                      compliance with their industry&apos;s regulatory
                      requirements, avoiding penalties, legal challenges, and
                      reputational damage. By managing these filings, businesses
                      can focus on their core operations while ensuring they
                      meet the necessary legal obligations.
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
                    title="Why You Need Industry-Specific Regulatory Filings"
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

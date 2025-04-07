import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Enhanced Risk Management",
    description:
      "Strengthens risk management by identifying and mitigating financial, operational, and compliance risks through proactive internal control systems.",
  },
  {
    title: "Fraud Prevention",
    description:
      "Helps detect and prevent fraud, mismanagement, and errors by implementing effective checks and balances across business operations and financial processes.",
  },
  {
    title: "Accurate Financial Reporting",
    description:
      "Ensures that financial reporting is accurate, transparent, and compliant with industry regulations, reducing the risk of errors or omissions in financial statements.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Improves business operations by identifying inefficiencies, streamlining processes, and reducing resource wastage, contributing to better profitability and performance.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Assists in meeting legal and regulatory requirements, ensuring compliance with tax laws, financial standards, and regulations, reducing penalties risk.",
  },
  {
    title: "Stakeholder Confidence",
    description:
      "Strengthens stakeholder trust by demonstrating commitment to transparency, governance, and sound financial practices for investors and customers.",
  },
];

const CoreComponentsCards = [
  {
    title: "Internal Control Design & Implementation",
    description:
      "We help design and implement internal controls, including segregation of duties, access controls, and financial authorization protocols, safeguarding assets and ensuring process integrity.",
  },
  {
    title: "Risk Assessment & Mitigation",
    description:
      "We conduct risk assessments to identify potential areas of vulnerability within business operations, advising on strategies to mitigate risks through stronger internal controls and procedures.",
  },
  {
    title: "Financial & Operational Audits",
    description:
      "We perform thorough financial and operational audits to assess the effectiveness of internal controls, detect any inefficiencies or discrepancies, and recommend corrective actions.",
  },
  {
    title: "Compliance Audits",
    description:
      "We ensure that your business complies with industry regulations and standards by conducting compliance audits, including reviewing adherence to tax laws, labor regulations, environmental laws, and more.",
  },
  {
    title: "Fraud Detection & Prevention",
    description:
      "We implement fraud detection tools and techniques, such as data analytics and forensic auditing, to identify and prevent fraudulent activities in financial transactions and business operations.",
  },
  {
    title: "Internal Control Monitoring & Reporting",
    description:
      "We provide ongoing monitoring and reporting of internal control effectiveness, ensuring that controls are functioning as intended and recommending improvements where necessary.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Fraud Prevention and Protection",
    description:
      "Effective internal controls and auditing help prevent fraudulent activities, safeguarding your business from financial losses and reputational damage.",
  },
  {
    title: "Improved Financial Accuracy",
    description:
      "Ensures the accuracy of financial reports, enabling more informed decision-making and better financial forecasting for business growth.",
  },
  {
    title: "Enhanced Risk Management",
    description:
      "Helps identify potential risks early, enabling you to proactively address vulnerabilities and minimize disruptions, operational failures, and any negative impacts on performance.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Helps businesses stay compliant with industry regulations and standards, avoiding costly penalties and maintaining a good reputation with regulators.",
  },
  {
    title: "Increased Operational Efficiency",
    description:
      "By optimizing internal processes, businesses can reduce inefficiencies, improve productivity, and significantly enhance profitability.",
  },
  {
    title: "Investor and Stakeholder Trust",
    description:
      "Strong internal controls and audits build confidence among investors and stakeholders, demonstrating your commitment to governance.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Internal Control Evaluation",
    description:
      "We begin by assessing your existing internal control framework, identifying areas of weakness or vulnerability, and developing an action plan to strengthen controls across your organization.",
  },
  {
    heading: "Tailored Risk Management Strategy",
    description:
      "Based on the risk assessment, we design a customized risk management strategy, implementing measures to reduce potential risks and enhance overall business resilience.",
  },
  {
    heading: "Financial and Operational Auditing",
    description:
      "We conduct thorough audits of your financial statements, operations, and internal controls to ensure accuracy and compliance with applicable regulations and best practices.",
  },
  {
    heading: "Fraud Prevention Systems",
    description:
      "We implement fraud prevention mechanisms, including regular monitoring, fraud detection tools, and training, to reduce the likelihood of fraudulent activities within the business.",
  },
  {
    heading: "Ongoing Internal Control Monitoring",
    description:
      "We provide continuous monitoring of your internal controls to ensure that they remain effective, adjusting and improving systems as your business evolves and grows.",
  },
  {
    heading: "Audit Support and Reporting",
    description:
      "We offer detailed audit reports and guidance during external audits, helping you understand findings, address discrepancies, and ensure legal compliance.",
  },
];

export default function InternalControlsAndAuditing() {
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
                    Internal Controls and Auditing
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Internal Controls and Auditing are critical components of
                      a robust financial and operational governance framework.
                      Internal controls help businesses safeguard their assets,
                      ensure the accuracy and reliability of financial
                      reporting, and prevent fraud and errors. Auditing, on the
                      other hand, provides an independent evaluation of the
                      effectiveness of these controls and assesses compliance
                      with regulatory standards. This service helps businesses
                      enhance their internal processes, identify weaknesses, and
                      implement strategies to ensure operational efficiency and
                      financial integrity.
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
                    title="Why You Need Internal Controls and Auditing"
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

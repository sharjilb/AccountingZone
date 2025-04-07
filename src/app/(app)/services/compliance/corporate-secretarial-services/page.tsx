import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that your company adheres to all applicable corporate laws, regulations, and industry standards, minimizing the risk of legal issues, penalties, and protecting your business's reputation and assets.",
  },
  {
    title: "Efficient Governance Management",
    description:
      "Helps manage and streamline corporate governance processes, such as board meetings, resolutions, and shareholder communication, ensuring efficient and transparent decision-making.",
  },
  {
    title: "Accurate and Timely Filings",
    description:
      "Handles all statutory filings and regulatory documentation, ensuring corporate records are accurately maintained in compliance with both local and international requirements.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Reduces the risk of corporate governance-related issues by ensuring that the company complies with regulatory requirements, keeping all necessary documentation and records up to date.",
  },
  {
    title: "Enhanced Corporate Reputation",
    description:
      "Demonstrates your business's commitment to good governance, transparency, and regulatory compliance, enhancing the confidence of investors, shareholders, and other stakeholders.",
  },
  {
    title: "Time and Resource Savings",
    description:
      "By managing administrative and compliance tasks, we free up time for business leaders, allowing management to focus on strategic goals and operational initiatives for business growth.",
  },
];

const CoreComponentsCards = [
  {
    title: "Corporate Governance Support",
    description:
      "We assist with the implementation and monitoring of corporate governance practices, ensuring that board activities, decision-making, and shareholder communications follow industry standards and regulations.",
  },
  {
    title: "Board & Shareholder Meeting Support",
    description:
      "We provide full support for the organization of board meetings, including the preparation of agendas, board papers, minutes, and resolutions. We also manage shareholder meetings, ensuring proper documentation and compliance with legal requirements.",
  },
  {
    title: "Statutory Filings & Documentation",
    description:
      "We ensure that your business complies with all statutory filing obligations, including the filing of annual reports, financial statements, and regulatory documents required by local, state, and federal authorities, safeguarding your business from potential penalties.",
  },
  {
    title: "Corporate Record Keeping",
    description:
      "We maintain your company's statutory books and records, including the register of directors and shareholders, minutes of meetings, and other corporate documents, ensuring that all records are accurate, up-to-date, and easily accessible.",
  },
  {
    title: "Director & Shareholder Services",
    description:
      "We assist in managing directors and shareholders, including appointments, resignations, share issuance and transfers, and other shareholder services, ensuring compliance with company bylaws and relevant legal requirements.",
  },
  {
    title: "Regulatory Updates & Monitoring",
    description:
      "We monitor changes in corporate law and regulations, ensuring that your business stays informed and compliant with the latest legal requirements, helping you avoid legal risks, penalties, and ensuring seamless business operations in the long run.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Ensure Legal Compliance",
    description:
      "Corporate secretarial services help ensure that your business remains in compliance with all corporate governance and regulatory requirements, reducing the risk of penalties or legal issues.",
  },
  {
    title: "Streamline Governance Processes",
    description:
      "Professional secretarial services help organize and manage board meetings, shareholder meetings, and corporate records, allowing for smoother decision-making and transparent governance.",
  },
  {
    title: "Accurate & Up-to-Date Filings",
    description:
      "Ensures that all statutory filings and corporate records are maintained accurately and filed on time, preventing compliance breaches, legal disruptions, and minimizing potential legal and financial risks.",
  },
  {
    title: "Risk Reduction",
    description:
      "Reduces the risk of governance-related issues, such as failed filings, improper documentation, or overlooked deadlines, which could lead to financial penalties or reputational damage.",
  },
  {
    title: "Improved Corporate Reputation",
    description:
      "Demonstrates a commitment to good governance and legal compliance, which enhances the reputation of your business with investors, clients, and other stakeholders.",
  },
  {
    title: "Focus on Strategic Growth",
    description:
      "By outsourcing administrative and regulatory compliance tasks, your business can focus more on strategic and operational initiatives, enhancing overall efficiency and improving long-term performance.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Governance Review",
    description:
      "We begin by assessing your business’s governance structure and processes to identify areas for improvement and ensure compliance with relevant laws and regulations.",
  },
  {
    heading: "Tailored Secretarial Services",
    description:
      "Based on your company’s specific needs, we develop a tailored approach to corporate secretarial services, ensuring that all legal and governance requirements are met efficiently.",
  },
  {
    heading: "Meeting Management and Documentation",
    description:
      "We handle the preparation of board and shareholder meetings, ensuring that agendas are prepared, minutes are taken, and resolutions are properly documented and filed.",
  },
  {
    heading: "Statutory Filings and Compliance Monitoring",
    description:
      "We manage all statutory filings on your behalf, ensuring that documents are submitted on time and that your business remains compliant with ongoing regulatory changes.",
  },
  {
    heading: "Ongoing Support and Advice",
    description:
      "We provide ongoing support and advice on corporate governance, legal updates, and compliance requirements, ensuring your business stays informed and prepared.",
  },
  {
    heading: "Record-Keeping and Reporting",
    description:
      "We maintain accurate and up-to-date corporate records and reports, ensuring that all company documentation is accessible and in full compliance with regulatory requirements.",
  },
];

export default function CorporateSecretarialServices() {
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
                    Corporate Secretarial Services
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Corporate Secretarial Services involve the provision of
                      professional support to ensure that businesses comply with
                      statutory and regulatory requirements related to corporate
                      governance. These services are essential for maintaining
                      legal and administrative compliance in areas such as
                      corporate documentation, board meetings, shareholder
                      relations, and regulatory filings. A corporate secretary
                      ensures that the company&apos;s governance framework
                      operates smoothly, reducing the risk of non-compliance and
                      fostering trust among stakeholders. Whether it&apos;s
                      preparing legal documents, managing board processes, or
                      assisting with regulatory filings, corporate secretarial
                      services play a crucial role in maintaining the integrity
                      of the organization.
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
                    title="Why You Need Corporate Secretarial Services"
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

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Improved Accountability",
    description:
      "Strengthens the company's leadership structures, ensuring that decision-making is transparent and accountability is maintained at all levels of the organization.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Helps businesses identify and address governance-related risks, such as conflicts of interest or regulatory non-compliance, reducing legal or financial challenges.",
  },
  {
    title: "Enhanced Investor Confidence",
    description:
      "Strong corporate governance practices increase investor trust by showing the company is well-managed and committed to long-term value.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures the company's governance practices align with local and international laws, regulations, and standards, reducing the risk of legal issues and fines.",
  },
  {
    title: "Effective Decision-Making",
    description:
      "Provides a framework for clear decision-making, ensuring that business strategies are well-aligned with corporate values, goals, and stakeholder expectations.",
  },
  {
    title: "Sustainable Long-Term Growth",
    description:
      "Strong governance practices support strategic planning, ensuring decisions benefit both the company and stakeholders, contributing to growth.",
  },
];

const CoreComponentsCards = [
  {
    title: "Board Structure & Composition",
    description:
      "We assist in defining the appropriate structure and composition of the board of directors, ensuring diversity, independence, and expertise to guide strategic decision-making.",
  },
  {
    title: "Governance Policies & Procedures",
    description:
      "We help create and implement corporate governance policies and procedures that cover areas such as risk management, ethics, compliance, and conflict resolution, ensuring alignment with best practices.",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "We develop strategies for effective engagement with key stakeholders, such as investors, employees, regulators, and customers, ensuring transparency and alignment of interests.",
  },
  {
    title: "Risk Management & Internal Controls",
    description:
      "We advise on establishing effective risk management frameworks and internal controls that help mitigate financial, operational, and reputational risks for business stability.",
  },
  {
    title: "Ethical & Social Responsibility Practices",
    description:
      "We help businesses implement ethical practices and corporate social responsibility (CSR) programs that align with stakeholder expectations, enhance brand image, and build a positive reputation.",
  },
  {
    title: "Compliance & Regulatory Standards",
    description:
      "We ensure that corporate governance practices align with local, regional, and international regulations, helping businesses stay compliant with laws, rules, and corporate governance codes.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Build Trust and Credibility",
    description:
      "Strong governance structures instill confidence in investors, partners, and customers, reinforcing the company’s reputation as trustworthy.",
  },
  {
    title: "Risk Reduction",
    description:
      "Helps identify and mitigate risks early, ensuring the company’s operations are secure and compliant with legal and regulatory standards.",
  },
  {
    title: "Effective Leadership",
    description:
      "Ensures that the board and executive management are aligned, resulting in better decision-making and leadership that drives sustainable growth.",
  },
  {
    title: "Compliance & Accountability",
    description:
      "Ensures compliance with evolving governance regulations, reducing the risk of legal challenges, regulatory fines, and operational disruptions.",
  },
  {
    title: "Investor Relations",
    description:
      "Investors and stakeholders are more likely to invest in businesses that have strong governance practices, as they demonstrate stability, transparency, and strategic vision.",
  },
  {
    title: "Long-Term Success",
    description:
      "By embedding sound corporate governance practices, businesses are better equipped to adapt to challenges, seize opportunities, and maintain long-term value creation.",
  },
];

const OurApproachCards = [
  {
    heading: "Initial Governance Assessment",
    description:
      "We conduct a thorough review of your company’s existing governance structures, practices, and policies, identifying areas for improvement and alignment with best practices.",
  },
  {
    heading: "Custom Governance Framework",
    description:
      "Based on our assessment, we design and implement a tailored corporate governance framework that addresses your business needs, stakeholder interests, and compliance requirements.",
  },
  {
    heading: "Board Composition and Role Definition",
    description:
      "We help define the optimal board structure, roles, and responsibilities, ensuring the right mix of skills, experience, and independence to guide decision-making effectively.",
  },
  {
    heading: "Risk and Compliance Strategy Development",
    description:
      "We assist in creating a comprehensive risk management and compliance strategy, including governance controls, internal auditing, and regulatory reporting to safeguard the company.",
  },
  {
    heading: "Ongoing Monitoring and Review",
    description:
      "We provide continuous monitoring of governance practices, ensuring they evolve in response to changing business environments, legal frameworks, and stakeholder expectations.",
  },
  {
    heading: "Training and Education",
    description:
      "We offer training sessions for board members and senior leadership on corporate governance best practices, helping them stay informed and equipped to lead the company effectively.",
  },
];

export default function CorporateGovernanceAdvisory() {
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
                    Corporate Governance Advisory
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Corporate Governance Advisory focuses on providing
                      strategic guidance to businesses to help them establish
                      and maintain strong governance frameworks. Corporate
                      governance is critical for ensuring that businesses
                      operate transparently, ethically, and in compliance with
                      legal and regulatory requirements. This service helps
                      businesses implement best practices in corporate
                      governance, aligning leadership with the company&apos;s
                      values, stakeholders&apos; interests, and long-term goals.
                      Effective corporate governance enhances decision-making,
                      reduces risks, and builds investor confidence, ensuring
                      the business is well-positioned for sustainable success.
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
                    title="Why You Need Corporate Governance Advisory"
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

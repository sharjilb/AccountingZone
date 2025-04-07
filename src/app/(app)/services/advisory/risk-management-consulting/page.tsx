import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Proactive Risk Identification",
    description:
      "Helps businesses identify potential risks early, enabling proactive measures to be implemented before they escalate into significant problems or challenges.",
  },
  {
    title: "Minimized Operational Disruptions",
    description:
      "Reduces the impact of unforeseen risks on day-to-day operations by implementing effective mitigation strategies and contingency plans.",
  },
  {
    title: "Financial Stability and Protection",
    description:
      "Ensures that businesses are financially protected from risk events such as fraud, lawsuits, or significant market shifts that could cause financial harm.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Provides insights into potential risks and their impact, enabling more informed decision-making that aligns with business goals while minimizing exposure.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Helps businesses ensure they comply with industry regulations, legal requirements, and standards, reducing the risk of penalties or legal issues.",
  },
  {
    title: "Reputation Protection",
    description:
      "Safeguards the company’s reputation by managing risks related to brand, customer trust, and public perception, ensuring continued stakeholder confidence.",
  },
];

const CoreComponentsCards = [
  {
    title: "Risk Identification and Assessment",
    description:
      "Involves identifying key risks-financial, operational, legal, or external-that could affect the business, assessing their likelihood and impact, and prioritizing them for action.",
  },
  {
    title: "Risk Mitigation Strategies",
    description:
      "Develops strategies to reduce the probability and impact of risks, including implementing controls, diversifying investments, or transferring risk through insurance.",
  },
  {
    title: "Crisis Mgt and Contingency Planning",
    description:
      "Prepares businesses for unexpected risk events by developing crisis management and contingency plans, ensuring rapid and effective responses to emergencies.",
  },
  {
    title: "Legal and Regulatory Compliance",
    description:
      "Assesses the business’s compliance with applicable laws, industry standards, and regulations, and helps implement processes to ensure ongoing compliance.",
  },
  {
    title: "Cybersecurity Risk Management",
    description:
      "Helps businesses identify and manage cybersecurity risks, such as data breaches and cyber-attacks, by recommending security measures and recovery plans.",
  },
  {
    title: "Insurance and Risk Transfer",
    description:
      "Advises on the appropriate insurance coverage to mitigate risks, including liability, property, health, and life insurance, ensuring that the business is adequately protected.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Proactive Protection",
    description:
      "Identifying and addressing risks before they materialize allows businesses to avoid financial losses, operational disruptions, and reputational damage.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "By understanding potential risks, businesses can make decisions that maximize opportunities while minimizing exposure to adverse events.",
  },
  {
    title: "Financial Security",
    description:
      "Risk management ensures that businesses are financially protected from unforeseen events, ensuring long-term stability and protecting assets.",
  },
  {
    title: "Compliance Assurance",
    description:
      "Helps businesses stay compliant with legal and regulatory standards, minimizing the risk of fines, lawsuits, legal consequences, and damage to reputation.",
  },
  {
    title: "Operational Continuity",
    description:
      "By preparing for potential crises, businesses can continue operations smoothly in the face of unexpected events, ensuring minimal downtime.",
  },
  {
    title: "Reputation Safeguarding",
    description:
      "Managing risks associated with reputation, customer trust, and public perception helps businesses protect their brand image and maintain stakeholder confidence.",
  },
];

const OurApproachCards = [
  {
    heading: "Risk Assessment and Analysis",
    description:
      "We conduct a thorough risk assessment to identify potential risks, evaluate their impact, and prioritize them for mitigation based on their likelihood and potential consequences.",
  },
  {
    heading: "Custom Risk Management Framework",
    description:
      "We develop a tailored risk management framework that aligns with your business goals, addressing the most critical risks and providing strategies for mitigation.",
  },
  {
    heading: "Implementation of Mitigation Strategies",
    description:
      "We assist with the implementation of risk mitigation strategies, ensuring that the right controls, processes, and procedures are in place to manage risks effectively.",
  },
  {
    heading: "Crisis Management Planning",
    description:
      "We help develop crisis management and contingency plans, preparing your business to handle emergencies swiftly and efficiently, ensuring continuity in the face of unexpected events.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We monitor risk levels and the effectiveness of strategies, adjusting the approach as needed to adapt to changing business environments and new challenges.",
  },
  {
    heading: "Training and Education",
    description:
      "We provide training for your team on risk awareness and management best practices, ensuring that your organization is equipped to identify and address risks at all levels.",
  },
];

export default function RiskManagementConsulting() {
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
                    Risk Management Consulting
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Risk Management Consulting involves identifying,
                      analyzing, and mitigating potential risks that could
                      impact a business&apos;s operations, financial stability,
                      or reputation. This service helps businesses proactively
                      manage risks across various domains, including financial,
                      operational, legal, cybersecurity, and market risks. By
                      implementing a comprehensive risk management framework,
                      businesses can minimize the likelihood of negative events,
                      protect assets, and ensure long-term sustainability.
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
                    title="Why You Need Risk Management Consulting"
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

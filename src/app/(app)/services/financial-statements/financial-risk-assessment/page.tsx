import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Risk Identification",
    description:
      "Helps businesses identify potential financial risks early, including market fluctuations, credit defaults, and liquidity shortfalls, enabling proactive management.",
  },
  {
    title: "Informed Risk Mitigation Strategies",
    description:
      "Develops tailored strategies to mitigate identified risks, ensuring businesses can minimize financial disruptions and avoid costly losses.",
  },
  {
    title: "Improved Financial Stability",
    description:
      "By understanding and managing financial risks, businesses can improve their overall financial stability and avoid sudden, unexpected financial setbacks.",
  },
  {
    title: "Strategic Planning",
    description:
      "Incorporates risk assessment into the broader financial strategy, allowing businesses to allocate resources efficiently and navigate market uncertainties.",
  },
  {
    title: "Investor Confidence",
    description:
      "Demonstrates a commitment to managing financial risks effectively, increasing trust among investors, creditors, and other stakeholders.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Provides a solid foundation for decision-making by factoring in risk analysis, ensuring that business strategies are both ambitious and financially sound.",
  },
];

const CoreComponentsCards = [
  {
    title: "Market Risk Analysis",
    description:
      "Assessing the potential impact of market fluctuations, such as changes in interest rates, commodity prices, or exchange rates, on the business’s financial performance.",
  },
  {
    title: "Credit Risk Assessment",
    description:
      "Evaluating the risk of default by customers or partners, including assessing the creditworthiness of clients and suppliers to reduce the likelihood of bad debt.",
  },
  {
    title: "Liquidity Risk Assessment",
    description:
      "Analyzing the business's ability to meet short-term financial obligations, ensuring there is adequate cash flow to handle unexpected expenses.",
  },
  {
    title: "Operational Risk Analysis",
    description:
      "Identifying risks related to the internal processes of the business, such as management decisions, technology failures, or supply chain disruptions.",
  },
  {
    title: "Regulatory and Compliance Risk",
    description:
      "Evaluating potential risks related to changes in laws, regulations, or compliance requirements that may affect the business’s financial standing or operations.",
  },
  {
    title: "Risk Mitigation and Contingency Planning",
    description:
      "Developing strategies to reduce or eliminate risks, including insurance, hedging, or diversification, and creating contingency plans to address potential disruptions.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Proactive Risk Management",
    description:
      "Identifies potential risks before they materialize, enabling businesses to take proactive steps to minimize financial harm.",
  },
  {
    title: "Informed Strategy Development",
    description:
      "Helps create a well-rounded business strategy that factors in both opportunities and risks, improving financial planning.",
  },
  {
    title: "Protection Against Uncertainty",
    description:
      "Provides a safety net by assessing risks related to market volatility, economic downturns, and unforeseen events.",
  },
  {
    title: "Compliance and Reputation Management",
    description:
      "Ensures that your business remains compliant with regulatory standards, protecting its reputation and long-term viability.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Risk Identification",
    description:
      "We analyze your business's internal and external environment to identify potential financial risks that could affect profitability.",
  },
  {
    heading: "Tailored Risk Mitigation Plans",
    description:
      "Based on the risk assessment, we develop specific strategies and action plans to manage or mitigate each identified risk.",
  },
  {
    heading: "Ongoing Monitoring and Support",
    description:
      "We offer continuous risk monitoring, adjusting strategies as needed to keep your business resilient to emerging financial risks.",
  },
];

export default function FinancialRiskAssessment() {
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
                    Financial Risk Assessment
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Financial Risk Assessment involves identifying, analyzing,
                      and evaluating the potential financial risks that could
                      impact a business&apos;s financial stability and long-term
                      success. By proactively assessing these risks, businesses
                      can develop strategies to mitigate or manage them
                      effectively. This service helps businesses understand
                      various financial risks—such as market, credit, liquidity,
                      and operational risks—and take the necessary steps to
                      reduce their exposure to these threats.
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
                    title="Why You Need Financial Risk Assessment"
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

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Improved Reputation and Brand Value",
    description:
      "Adopting ESG practices enhances a company's reputation by demonstrating its commitment to sustainability, ethical practices, and social responsibility, which can attract customers, investors, and top talent.",
  },
  {
    title: "Risk Mitigation",
    description:
      "ESG initiatives help businesses address environmental, social, and governance risks, such as climate change and regulatory compliance, reducing the likelihood of future legal, financial, or reputational challenges.",
  },
  {
    title: "Increased Investor Confidence",
    description:
      "Investors are increasingly looking for companies that prioritize ESG factors. By implementing strong ESG practices, businesses can appeal to socially conscious investors and improve access to capital.",
  },
  {
    title: "Operational Efficiency and Cost Savings",
    description:
      "Implementing sustainable practices can lead to cost savings through energy efficiency, waste reduction, resource optimization, and improved operations, which can significantly enhance a company's bottom line.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that businesses are compliant with evolving ESG-related regulations and standards, reducing the risk of non-compliance penalties and enhancing the company’s standing with regulatory bodies.",
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Focusing on ESG ensures long-term viability by mitigating risks, fostering innovation, and positioning businesses for future opportunities in an increasingly sustainability-driven economy.",
  },
];

const CoreComponentsCards = [
  {
    title: "Environmental Responsibility",
    description:
      "We help businesses develop and implement strategies to reduce their environmental impact, including carbon footprint reduction, waste management, energy efficiency, and sustainable resource usage.",
  },
  {
    title: "Social Responsibility",
    description:
      "Focuses on a company's impact on society, including fair labor practices, employee health and safety, diversity and inclusion, community engagement, and human rights considerations.",
  },
  {
    title: "Governance & Ethical Practices",
    description:
      "We establish corporate governance frameworks promoting transparency, accountability, and ethical practices, covering board diversity, executive compensation, and anti-corruption policies.",
  },
  {
    title: "ESG Strategy Development",
    description:
      "We help companies create a comprehensive ESG strategy aligned with their business objectives, including identifying material ESG issues, setting goals, and defining metrics for success.",
  },
  {
    title: "ESG Reporting & Disclosure",
    description:
      "We provide guidance on ESG reporting frameworks, helping companies disclose ESG performance to stakeholders transparently, accurately, and compliantly, using standards like GRI or SASB.",
  },
  {
    title: "Stakeholder Engagement & Communication",
    description:
      "We assist in developing strategies for engaging key stakeholders, such as investors, employees, customers, and communities, ensuring your ESG efforts are communicated effectively and meet expectations.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Attract Investors",
    description:
      "ESG practices attract responsible investors and improve access to capital, as investors increasingly factor these considerations into their decisions.",
  },
  {
    title: "Sustainable Growth",
    description:
      "ESG initiatives ensure that your business operates in a sustainable way, safeguarding resources and aligning with future economic, environmental, and social trends.",
  },
  {
    title: "Compliance and Risk Management",
    description:
      "By adhering to ESG regulations and standards, businesses can avoid penalties, reduce risks, and maintain good standing with regulators and industry bodies.",
  },
  {
    title: "Reputation Enhancement",
    description:
      "A strong commitment to ESG principles helps build a positive public image, improving relationships with customers, employees, investors, and other stakeholders.",
  },
  {
    title: "Employee Satisfaction and Retention",
    description:
      "Demonstrating commitment to social responsibility, like promoting diversity and fair labor practices, attracts and retains top talent.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Sustainable practices often lead to operational improvements and cost savings, such as reduced energy consumption, waste management, and resource optimization.",
  },
];

const OurApproachCards = [
  {
    heading: "ESG Assessment and Gap Analysis",
    description:
      "We assess your current ESG practices, identifying improvement areas, and evaluate your environmental, social, and governance structures to establish a baseline for further action.",
  },
  {
    heading: "Tailored ESG Strategy Development",
    description:
      "We work with you to develop a tailored ESG strategy that aligns with your business goals and values, focusing on key areas that are most material to your company and industry.",
  },
  {
    heading: "Implementation of ESG Initiatives",
    description:
      "We help implement sustainable practices, including environmental programs, diversity initiatives, and improved corporate governance.",
  },
  {
    heading: "ESG Reporting and Disclosure",
    description:
      "We guide ESG reporting frameworks, helping create transparent, comprehensive reports that showcase your efforts and performance while ensuring compliance with industry standards.",
  },
  {
    heading: "Ongoing Monitoring and Evaluation",
    description:
      "We help establish systems for ongoing monitoring and evaluation of ESG performance, ensuring that your business continuously improves and meets its ESG objectives.",
  },
  {
    heading: "Stakeholder Engagement and Education",
    description:
      "We help develop engagement strategies to communicate your ESG efforts to stakeholders and educate employees on sustainability and ethical practices.",
  },
];

export default function EnvironmentalSocialAndGovernance() {
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
                    Environmental, Social, and Governance (ESG)
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Environmental, Social, and Governance (ESG) refers to the
                      three key factors used to measure a company&apos;s
                      sustainability and societal impact. ESG principles help
                      businesses assess their practices across environmental
                      responsibility, social impact, and corporate governance.
                      As investors, customers, and stakeholders increasingly
                      prioritize ESG factors, businesses must integrate ESG into
                      their strategies to drive long-term growth, mitigate
                      risks, and contribute positively to society. This service
                      helps companies develop, implement, and monitor ESG
                      strategies that align with industry standards, regulatory
                      requirements, and stakeholder expectations.
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
                    title="Why You Need Environmental, Social, and Governance (ESG)"
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

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Strategic Deal Structuring",
    description:
      "Helps you structure the deal to maximize value, minimize tax liabilities, and achieve your long-term business objectives, ensuring the best possible outcome for both parties.",
  },
  {
    title: "Valuation and Financial Analysis",
    description:
      "Provides comprehensive business valuation services to assess the worth of the company being acquired or merged, ensuring that the price is fair and justified.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Identifies potential financial, operational, and legal risks in transactions and recommends strategies to mitigate them, protecting your business from future liabilities.",
  },
  {
    title: "Due Diligence Support",
    description:
      "Guides you through due diligence, ensuring all critical information is reviewed thoroughly and potential red flags are identified before finalizing the transaction.",
  },
  {
    title: "Post-Transaction Integration",
    description:
      "Assists in the integration process, ensuring smooth operational and cultural transitions, and maximizing the synergies between the merging or acquired companies.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that the transaction complies with all relevant legal and regulatory requirements, reducing the risk of regulatory issues or penalties during or after the transaction.",
  },
];

const CoreComponentsCards = [
  {
    title: "Initial Strategy and Goal Assessment",
    description:
      "We work with you to clearly define your objectives and assess whether a merger or acquisition aligns with your long-term business strategy.",
  },
  {
    title: "Target Identification and Evaluation",
    description:
      "We assist in identifying and evaluating potential acquisition targets or merger partners, ensuring alignment with strategic goals and valuable assets or opportunities.",
  },
  {
    title: "Valuation and Pricing",
    description:
      "We conduct a detailed financial analysis and valuation of the target company, ensuring the price reflects its true worth and aligns with the transaction's financial goals.",
  },
  {
    title: "Due Diligence Process",
    description:
      "We conduct thorough due diligence, reviewing financial statements, operations, legal contracts, and liabilities to ensure the target company is vetted.",
  },
  {
    title: "Deal Structuring and Negotiation",
    description:
      "We help structure the deal to maximize value, mitigate risk, and align with strategic goals, including negotiating terms to ensure the best deal structure for your business.",
  },
  {
    title: "Post-Merger Integration Planning",
    description:
      "We develop an integration plan to align operations, cultures, and processes, maximizing synergies for a smooth transition and long-term success.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Maximized Value",
    description:
      "Proper M&A support ensures the transaction is structured to maximize value for all parties, reducing the risk of overpaying or undervaluing the target company.",
  },
  {
    title: "Risk Reduction",
    description:
      "Through expert due diligence, risk assessment, and legal support, businesses can identify and mitigate risks for a smoother transaction.",
  },
  {
    title: "Efficient Deal Execution",
    description:
      "M&A transactions can be complex. Our support streamlines the process, ensuring the deal progresses smoothly and all critical details are handled effectively.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "With expert guidance, you make informed decisions throughout the M&A process, from target selection to integration, ensuring strategic alignment.",
  },
  {
    title: "Successful Integration",
    description:
      "The integration phase is crucial for realizing synergies. Our support ensures a smooth transition, helping both companies leverage strengths to drive success.",
  },
  {
    title: "Legal and Regulatory Compliance",
    description:
      "M&A transactions must comply with a range of laws and regulations. We ensure that your transaction is fully compliant, reducing the risk of penalties or regulatory issues.",
  },
];

const OurApproachCards = [
  {
    heading: "Strategic Planning and Consultation",
    description:
      "We start by understanding your business goals and objectives, helping to formulate an M&A strategy that aligns with your long-term vision. Our experts provide strategic insights and guidance to ensure that the deal fits within your broader business plan.",
  },
  {
    heading: "Target Search and Evaluation",
    description:
      "We assist in identifying and evaluating potential M&A targets or partners that bring the greatest value. This includes analyzing market opportunities, industry trends, and financial considerations to make well-informed recommendations.",
  },
  {
    heading: "Valuation and Financial Analysis",
    description:
      "Using industry-standard valuation methods and financial models, we ensure that the target company is accurately valued. We assess all financial aspects, including assets, liabilities, market conditions, and potential growth opportunities.",
  },
  {
    heading: "Due Diligence and Risk Assessment",
    description:
      "We conduct thorough due diligence to uncover any hidden risks, liabilities, or operational challenges. Our team ensures that every aspect of the transaction is carefully examined to avoid unexpected issues post-transaction.",
  },
  {
    heading: "Negotiation and Deal Structuring",
    description:
      "We assist in negotiating the best deal terms and structuring the transaction in a way that meets your financial and strategic goals. This includes advice on financing, tax implications, and shareholder interests.",
  },
  {
    heading: "Post-Merger Integration Support",
    description:
      "We help manage the integration process to ensure a smooth transition, focusing on harmonizing operational processes, aligning cultures, and realizing synergies to maximize the value of the merger or acquisition.",
  },
];

export default function MergersAndAcquisitionsSupport() {
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
                    Mergers and Acquisitions (M&A) Support
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Mergers and Acquisitions (M&A) Support provides expert
                      guidance and assistance to businesses navigating the
                      complex processes of merging with or acquiring another
                      company. This service ensures that business owners,
                      investors, and executives are equipped with the tools,
                      knowledge, and strategic advice necessary to make informed
                      decisions, maximize value, and mitigate risks during an
                      M&A transaction. Whether you are looking to acquire,
                      merge, or sell, we provide end-to-end support throughout
                      the process, from initial evaluation to post-transaction
                      integration.
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
                    title="Why You Need Mergers and Acquisitions (M&A) Support"
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

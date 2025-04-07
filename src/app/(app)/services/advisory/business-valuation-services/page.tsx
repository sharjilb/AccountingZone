import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Accurate Company Valuation",
    description:
      "Provides a precise and reliable valuation based on financial data, market conditions, and industry standards, helping businesses understand their true worth.",
  },
  {
    title: "Informed Decision Making",
    description:
      "Assists business owners, investors, and stakeholders in making strategic decisions regarding mergers, acquisitions, sales, investments, and financial planning.",
  },
  {
    title: "Negotiation Leverage",
    description:
      "Equips businesses with a clear understanding of their value, allowing for stronger negotiations in buy-sell agreements, mergers, or capital raising efforts.",
  },
  {
    title: "Fair Market Value Determination",
    description:
      "Establishes the fair market value of a business, ensuring that all parties involved have a realistic understanding of the company’s worth.",
  },
  {
    title: "Strategic Exit Planning",
    description:
      "Helps business owners prepare for succession or sale by providing an accurate valuation that can guide exit strategy decisions and tax planning.",
  },
  {
    title: "Financial Transparency",
    description:
      "Provides clarity and transparency to investors, lenders, and potential buyers, building confidence in financial reports and business decisions.",
  },
];

const CoreComponentsCards = [
  {
    title: "Income-Based Valuation",
    description:
      "Uses methods like the Discounted Cash Flow (DCF) to assess the business's future income potential, helping determine its value based on projected earnings and growth.",
  },
  {
    title: "Market-Based Valuation",
    description:
      "Compares the business to similar companies in the industry, using market multiples such as price-to-earnings (P/E) ratios or revenue multiples to establish a fair value.",
  },
  {
    title: "Asset-Based Valuation",
    description:
      "Focuses on the company’s net asset value, subtracting liabilities from the total assets, and is particularly useful for asset-intensive businesses.",
  },
  {
    title: "Comparable Company Analysis",
    description:
      "Analyzes similar publicly traded companies or recent transactions in the same industry to provide context for a business’s value in the marketplace.",
  },
  {
    title: "Risk Assessment and Adjustments",
    description:
      "Takes into account industry risks, market conditions, and the company’s operational performance to adjust the valuation and provide a more accurate final figure.",
  },
  {
    title: "Due Diligence and Reporting",
    description:
      "Provides a detailed report outlining the methodology, assumptions, and data used in the valuation, offering transparency and reliability for stakeholders.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Informed Strategic Decisions",
    description:
      "A reliable business valuation provides the insights necessary to make informed decisions about selling, buying, investing, or managing growth in a business.",
  },
  {
    title: "Maximized Value",
    description:
      "Helps business owners understand how to increase their company's value through operational improvements, market positioning, and financial planning.",
  },
  {
    title: "Mergers and Acquisitions",
    description:
      "Ensures fair and equitable terms in mergers, acquisitions, and buyout negotiations, providing both parties with an objective valuation to guide the process.",
  },
  {
    title: "Business Succession and Exit Planning",
    description:
      "Helps prepare for business transitions, such as passing the company to family or selling to a third party, by clarifying the company's value.",
  },
  {
    title: "Investor and Lender Confidence",
    description:
      "Assists in securing funding by providing investors and lenders with the necessary data to support investment decisions or loans.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Provides a reliable basis for tax filings, compliance with IRS regulations, and other legal requirements during business transitions.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Financial Review",
    description:
      "We start by reviewing your company’s financial statements, business model, and market conditions to gather the data needed for an accurate valuation.",
  },
  {
    heading: "Tailored Valuation Methodology",
    description:
      "Based on the type of business, industry, and purpose of the valuation, we select the most appropriate valuation method(s) to ensure an accurate assessment of your business's value.",
  },
  {
    heading: "Industry Analysis and Benchmarking",
    description:
      "We analyze the current market conditions and compare your business to similar companies within the industry to establish a realistic market-based value.",
  },
  {
    heading: "Risk Adjustment and Forecasting",
    description:
      "We take into account industry risks, operational challenges, and future growth potential to adjust the valuation accordingly, providing a comprehensive risk analysis.",
  },
  {
    heading: "Transparent Reporting",
    description:
      "We provide detailed reports that clearly outline our methodology, the assumptions made, and how we arrived at the final valuation, ensuring transparency and reliability for all stakeholders.",
  },
  {
    heading: "Ongoing Support and Advice",
    description:
      "We offer continuous support and strategic advice after the valuation is complete, helping you implement the insights gained and adjust your business strategies to improve value.",
  },
];

export default function BusinessValuationServices() {
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
                    Business Valuation Services
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Business Valuation Services involve assessing the economic
                      value of a company, which is essential for various
                      strategic business decisions. These services provide a
                      thorough analysis of the company&apos;s financial health,
                      market position, and future prospects to determine its
                      value. Whether for mergers and acquisitions, investment
                      purposes, or business succession planning, a professional
                      business valuation ensures that all stakeholders have a
                      clear understanding of the company&apos;s worth. This
                      service helps businesses make informed decisions, secure
                      financing, or negotiate deals based on accurate and
                      reliable valuation data.
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
                    title="Why You Need Business Valuation Services"
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

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Tax Filing Accuracy Review",
    description:
      "Ensures that tax returns were filed accurately, identifying any potential errors or missed opportunities that could affect your tax liability or refund.",
  },
  {
    title: "Identification of Missed Deductions/Credits",
    description:
      "Uncovers deductions, credits, or tax-saving strategies overlooked during filing, ensuring you receive the maximum refund or minimize tax liability.",
  },
  {
    title: "Tax Planning for the Future",
    description:
      "Provides recommendations to optimize tax planning for the upcoming year, including advice on adjusting withholding, estimated payments, or changes in business structures.",
  },
  {
    title: "Audit Risk Assessment and Preparation",
    description:
      "Assesses the risk of an audit and provides guidance on how to handle potential audit situations, helping you be prepared in case the IRS contacts you.",
  },
  {
    title: "Tax Strategy Optimization",
    description:
      "Reviews your overall tax strategy to ensure that it aligns with your long-term financial goals, recommending adjustments that can improve tax efficiency and reduce liability.",
  },
  {
    title: "Financial and Tax Education",
    description:
      "Offers valuable insights into tax law changes, new deductions, and credits that may impact your situation, empowering you with the knowledge to make informed decisions.",
  },
];

const CoreComponentsCards = [
  {
    title: "Tax Filing Review",
    description:
      "A thorough examination of your tax return to ensure that all information is accurate, all applicable deductions and credits are claimed, and any errors are addressed.",
  },
  {
    title: "Tax Strategy Assessment",
    description:
      "A review of your current tax strategy to determine if adjustments are needed, such as changes in withholding, payments, or investments.",
  },
  {
    title: "Audit Risk Evaluation",
    description:
      "An assessment of any red flags or areas of concern that could increase the likelihood of an IRS audit, with advice on how to mitigate this risk moving forward.",
  },
  {
    title: "Tax Savings Opportunities",
    description:
      "Identifying tax-saving opportunities, including business expense optimization, retirement contributions, and tax-loss harvesting for investment portfolios.",
  },
  {
    title: "Tax Planning Consultation",
    description:
      "Tailored advice on adjusting your tax planning strategies to reduce liability, manage cash flow, and maximize deductions for the next tax season.",
  },
  {
    title: "Review of Changes in Tax Law",
    description:
      "Keeping you informed about any recent changes in tax laws, such as new tax credits or deductions, which could impact your future filings and strategies.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accuracy and Compliance",
    description:
      "Ensures that your tax filings are accurate and compliant with all regulations, reducing the likelihood of issues with the IRS.",
  },
  {
    title: "Optimization of Tax Strategy",
    description:
      "Helps identify missed opportunities and provides strategic advice to optimize your tax situation in the future.",
  },
  {
    title: "Audit Preparation and Risk Mitigation",
    description:
      "Provides valuable guidance on how to reduce your audit risk and prepares you to handle any potential audits with confidence.",
  },
  {
    title: "Informed Tax Planning",
    description:
      "Offers tailored recommendations to improve your financial strategies and minimize tax liabilities in future years.",
  },
  {
    title: "Proactive Financial Management",
    description:
      "Assists in planning ahead for upcoming tax years, making adjustments where necessary to align your financial and tax goals.",
  },
];

const OurApproachCards = [
  {
    heading: "Thorough Post-Filing Review",
    description:
      "We conduct a detailed review of your tax return, addressing any issues, errors, or missed opportunities to ensure you’re in the best possible position moving forward.",
  },
  {
    heading: "Customized Tax Strategy Recommendations",
    description:
      "Based on the review, we provide personalized recommendations for tax-saving strategies, retirement planning, and investment decisions that align with your future goals.",
  },
  {
    heading: "Audit Risk and Compliance Consultation",
    description:
      "We assess any potential audit risks and provide expert guidance on how to reduce your audit likelihood and manage any future audit situations.",
  },
  {
    heading: "Ongoing Support and Education",
    description:
      "We keep you informed about changes in tax laws, deductions, and credits, ensuring that you stay up-to-date and are always ready for the next tax season.",
  },
  {
    heading: "Future Tax Planning Assistance",
    description:
      "We offer continuous support and strategic advice to help you plan effectively for future tax seasons, reducing your overall tax liability and optimizing your financial health.",
  },
];

export default function PostTaxSeasonConsultationAndReview() {
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
                    Post-Tax Season Consultation and Review
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Post-Tax Season Consultation and Review is a service
                      designed to help businesses and individuals evaluate their
                      tax filings after the tax season has ended. This service
                      provides an in-depth review of the tax return, identifies
                      opportunities for improvement, and offers strategic advice
                      to optimize future tax filings. It also helps clients
                      address any issues that may arise, such as audits, missed
                      deductions, or unexpected tax liabilities. Post-tax season
                      reviews ensure that clients are fully informed and
                      well-prepared for the upcoming tax year.
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
                    title="Why You Need Post-Tax Season Consultation and Review"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter text="We are here to address any questions you may have as you implement your plan. Additionally, for clients seeking an ongoing partnership." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

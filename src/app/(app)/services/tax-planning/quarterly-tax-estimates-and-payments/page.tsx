import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Avoidance of Penalties and Interest",
    description:
      "Ensures timely payments to the IRS, avoiding late payment penalties and interest charges for underpayment of taxes, safeguarding your business's financial health.",
  },
  {
    title: "Cash Flow Management",
    description:
      "Spreads the tax liability throughout the year, helping businesses manage cash flow more effectively by paying taxes in installments rather than one lump sum.",
  },
  {
    title: "Accurate Tax Estimates",
    description:
      "Helps businesses and individuals accurately calculate their quarterly tax payments, ensuring they do not overpay or underpay their estimated taxes.",
  },
  {
    title: "Improved Tax Planning",
    description:
      "Provides a structured approach to tax planning, allowing businesses to better understand their tax obligations and adjust business strategies.",
  },
  {
    title: "Efficient Tax Filing Process",
    description:
      "By keeping track of quarterly payments, businesses reduce the likelihood of errors during annual tax filings, making the tax preparation process more efficient.",
  },
  {
    title: "Reduced Audit Risk",
    description:
      "Managing and submitting estimated quarterly payments ensures tax obligations are met, reducing the risk of IRS audits for underpayment or non-payment.",
  },
];

const CoreComponentsCards = [
  {
    title: "Quarterly Tax Calculation",
    description:
      "We calculate the correct quarterly tax payment based on your projected income, deductions, and credits, ensuring that you pay the appropriate amount each quarter.",
  },
  {
    title: "Filing and Submission of Payments",
    description:
      "We assist with the timely submission of quarterly estimated tax payments to the IRS, ensuring that payments are made on time to avoid penalties.",
  },
  {
    title: "Income and Expense Projections",
    description:
      "We review your income and expenses for the quarter to ensure your estimates are accurate and reflect any changes in your business operations or tax situation.",
  },
  {
    title: "Tax Deduction Review",
    description:
      "We help identify available deductions and credits that can reduce your quarterly tax liability, ensuring you maximize savings and avoid overpayment.",
  },
  {
    title: "Payment Reminders and Tracking",
    description:
      "We send timely reminders and accurately track your quarterly payments, ensuring they are submitted before deadlines and properly recorded to avoid any issues.",
  },
  {
    title: "End-of-Year Tax Reconciliation",
    description:
      "At year-end, we reconcile your estimated payments with actual tax liability, ensuring accurate filings and that any overpayment is refunded or applied to future taxes.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Avoid Penalties",
    description:
      "Making quarterly payments helps you stay compliant and avoid the IRS's penalties for underpayment or late payments, which accumulate quickly.",
  },
  {
    title: "Smooth Cash Flow",
    description:
      "Spreading tax payments throughout the year improves cash flow management, ensuring that a large tax bill does not disrupt your business operations at year-end.",
  },
  {
    title: "Accurate Tax Compliance",
    description:
      "Ensures that you stay on top of your tax obligations, reducing the risk of errors during annual filings and preventing surprises when tax season arrives.",
  },
  {
    title: "Strategic Tax Planning",
    description:
      "Helps you plan your finances by providing clear visibility into your expected tax liability, allowing you to adjust business strategies or expenses if needed.",
  },
  {
    title: "Audit Protection",
    description:
      "By consistently making your quarterly tax payments, you minimize the chances of being flagged for underpayment, reducing your audit risk.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Tax Assessment",
    description:
      "We assess your business's income, expenses, and other financial factors to determine accurate quarterly tax estimates, taking into account your specific situation and tax obligations.",
  },
  {
    heading: "Timely Payment Assistance",
    description:
      "We manage the submission of your quarterly tax payments, ensuring they are filed accurately and on time to avoid penalties and interest.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We monitor changes in your business income and expenses and adjust your quarterly tax estimates as needed to keep them aligned with actual financial performance.",
  },
  {
    heading: "Year-End Reconciliation and Reporting",
    description:
      "We ensure that all quarterly payments are properly recorded and applied to your end-of-year tax return, ensuring accuracy and minimizing surprises during tax filing.",
  },
  {
    heading: "Education and Support",
    description:
      "We offer guidance on tax-saving strategies, deductions, and credits to reduce your overall tax liability, providing continuous support for your tax planning needs.",
  },
];

export default function QuarterlyTaxEstimatesAndPayments() {
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
                    Quarterly Tax Estimates and Payments
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Quarterly Tax Estimates and Payments are required by the
                      IRS for businesses and individuals who expect to owe a
                      significant amount of tax at the end of the year. This
                      service helps businesses and self-employed individuals
                      calculate and submit estimated quarterly tax payments
                      based on their expected income, deductions, and credits.
                      By making these payments on time, businesses can avoid
                      penalties and ensure they meet their tax obligations
                      throughout the year.
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
                    title="Why You Need Quarterly Tax Estimates and Payments"
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

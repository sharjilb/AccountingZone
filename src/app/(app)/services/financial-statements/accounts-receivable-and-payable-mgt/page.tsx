import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Improved Cash Flow",
    description:
      "Effective management of receivables and payables ensures that cash flows are steady and predictable, reducing the risk of liquidity problems.",
  },
  {
    title: "Timely Payments and Collections",
    description:
      "Helps ensure timely collection of receivables and prompt payment of payables, reducing the risk of late fees or strained supplier relationships.",
  },
  {
    title: "Enhanced Supplier Relationships",
    description:
      "By managing payables effectively, businesses can take advantage of early payment discounts and maintain strong supplier relationships.",
  },
  {
    title: "Reduced Bad Debts",
    description:
      "Efficient receivables management minimizes the chances of bad debts by following up on overdue invoices, assessing credit risk, and improving collections processes.",
  },
  {
    title: "Financial Control and Forecasting",
    description:
      "Regular monitoring of receivables and payables allows businesses to predict future cash flow and make informed financial decisions.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Automates and streamlines invoicing, payment processing, and collections, saving time, reducing administrative costs, and improving efficiency.",
  },
];

const CoreComponentsCards = [
  {
    title: "Invoicing and Billing",
    description:
      "Ensures that invoices are accurate, timely, and sent promptly to clients, helping businesses receive payments faster and avoid delays.",
  },
  {
    title: "Credit Risk Assessment",
    description:
      "Analyzes the creditworthiness of clients before extending credit, minimizing the risk of late payments, defaults, and potential financial losses.",
  },
  {
    title: "Collection Strategies",
    description:
      "Implements strategies for collecting outstanding payments, including reminders, follow-up communication, and negotiation of payment terms.",
  },
  {
    title: "Payment Scheduling",
    description:
      "Coordinates and schedules payments to suppliers to ensure timely payments, while maintaining optimal cash flow and financial stability.",
  },
  {
    title: "Aging Reports",
    description:
      "Generates regular aging reports that categorize receivables by age, helping businesses identify overdue accounts and prioritize collections.",
  },
  {
    title: "Cash Flow Forecasting",
    description:
      "Integrates receivables and payables data into cash flow forecasting models to predict liquidity, plan for future financial needs, and optimize cash management.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Optimized Cash Flow",
    description:
      "Ensures that cash is coming in on time and that bills are paid efficiently, helping businesses maintain financial stability.",
  },
  {
    title: "Better Supplier and Customer Relations",
    description:
      "Timely payments and collections foster stronger relationships with both suppliers and customers.",
  },
  {
    title: "Reduced Financial Stress",
    description:
      "Regular monitoring of payables and receivables reduces surprises, making it easier to plan for the future.",
  },
  {
    title: "Improved Financial Health",
    description:
      "Helps identify inefficiencies, prevent overdue payments, and control cash outflows, improving overall financial health.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Assessment",
    description:
      "We assess your current receivables and payables management practices, identifying areas for improvement.",
  },
  {
    heading: "Custom Solutions",
    description:
      "We develop a tailored strategy for managing your accounts, ensuring it aligns with your cash flow needs and business goals.",
  },
  {
    heading: "Ongoing Support",
    description:
      "We provide continuous monitoring, ensuring your receivables and payables are efficiently managed in line with financial objectives.",
  },
];

export default function AccountsReceivableAndPayableMgt() {
  return (
    <main>
      <Slider
        images={["/consultation/consultation2.jpg"]}
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
                    Accounts Receivable and Payable Management
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accounts Receivable and Payable Management involves
                      overseeing the money a business owes to others (payables)
                      and the money owed to it (receivables). Efficient
                      management of these two components ensures that a business
                      maintains healthy cash flow, optimizes liquidity, and
                      improves financial performance. This service helps
                      businesses streamline invoicing, collections, and payments
                      to maintain financial stability and operational
                      efficiency.
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
                    title="Why You Need Accounts Receivable and Payable Management"
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

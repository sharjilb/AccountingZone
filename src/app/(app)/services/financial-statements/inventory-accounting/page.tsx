import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Accurate Financial Reporting",
    description:
      "Ensures that inventory is accurately valued, improving the accuracy of financial statements, reports, and overall decision-making.",
  },
  {
    title: "Optimized Inventory Levels",
    description:
      "Helps businesses maintain optimal inventory levels, reducing holding costs while ensuring products are always readily available when needed.",
  },
  {
    title: "Cost Control",
    description:
      "Helps identify and manage inventory-related costs, such as storage, insurance, and obsolescence, allowing businesses to control expenses more effectively.",
  },
  {
    title: "Improved Cash Flow",
    description:
      "Reduces capital tied up in excess inventory and helps businesses free up cash for other operational needs and strategic growth opportunities.",
  },
  {
    title: "Compliance with Accounting Standards",
    description:
      "Ensures that inventory is accounted for in compliance with generally accepted accounting principles (GAAP) or international financial reporting standards (IFRS).",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Provides key insights into stock levels, turnover rates, and product margins, enabling businesses to make better procurement, sales, and pricing decisions.",
  },
];

const CoreComponentsCards = [
  {
    title: "Inventory Valuation Methods",
    description:
      "Employing valuation methods like FIFO, LIFO, or weighted average cost to value inventory accurately.",
  },
  {
    title: "Inventory Tracking",
    description:
      "Utilizing systems to track inventory movements, including purchases, sales, and adjustments, to ensure accurate records.",
  },
  {
    title: "Cost of Goods Sold (COGS) Calculation",
    description:
      "Determining the cost of goods sold based on the inventory valuation method, helping businesses calculate profitability accurately.",
  },
  {
    title: "Inventory Reconciliation",
    description:
      "Regularly reconciling physical inventory with accounting records to identify discrepancies and ensure inventory records are accurate.",
  },
  {
    title: "Stock Turnover Ratio Analysis",
    description:
      "Analyzing how quickly inventory is sold and replaced to assess inventory management efficiency and identify slow-moving stock.",
  },
  {
    title: "Inventory Write-offs and Adjustments",
    description:
      "Managing inventory obsolescence, shrinkage, and write-offs by adjusting inventory levels for damaged or unsellable goods.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accurate Financial Reporting",
    description:
      "Ensures inventory values are reflected in financial statements, providing stakeholders with a true picture of the business.",
  },
  {
    title: "Optimized Stock Management",
    description:
      "Prevents overstocking and understocking, reducing holding costs and lost sales opportunities.",
  },
  {
    title: "Cost Control",
    description:
      "Helps businesses identify inefficiencies and manage inventory-related expenses more effectively.",
  },
  {
    title: "Informed Business Decisions",
    description:
      "Provides critical data to inform strategic decisions on pricing, procurement, and sales strategies.",
  },
];

const OurApproachCards = [
  {
    heading: "Tailored Inventory Systems",
    description:
      "We assess your inventory needs and implement systems that track and value inventory in a way that aligns with your business model.",
  },
  {
    heading: "Comprehensive Reporting",
    description:
      "We provide detailed inventory reports and analysis, helping you make data-driven decisions and optimize your inventory management practices.",
  },
  {
    heading: "Ongoing Monitoring and Adjustments",
    description:
      "We offer continuous support to monitor inventory levels and reconcile records, ensuring that your inventory accounting remains accurate and up-to-date.",
  },
];

export default function InventoryAccounting() {
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
                    Inventory Accounting
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Inventory Accounting is the process of tracking and
                      managing a company&apos;s inventory, including raw
                      materials, work-in-progress, and finished goods. Proper
                      inventory accounting ensures accurate financial reporting,
                      optimizes stock levels, and helps businesses avoid
                      overstocking or stockouts. This service provides a
                      systematic approach to valuing and accounting for
                      inventory, ensuring compliance with financial reporting
                      standards and improving overall operational efficiency.
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
                    title="Why You Need Inventory Accounting"
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

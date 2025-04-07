import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Accurate Cost Tracking",
    description:
      "Provides precise data on production costs, helping businesses identify areas where resources are being used inefficiently.",
  },
  {
    title: "Improved Pricing Strategies",
    description:
      "Helps businesses set competitive and profitable pricing by analyzing cost structures and understanding cost per unit.",
  },
  {
    title: "Profitability Enhancement",
    description:
      "Identifies high-cost areas that can be optimized to improve profit margins and ensure the business remains competitive.",
  },
  {
    title: "Better Budgeting and Forecasting",
    description:
      "Supports more accurate budgeting by offering a clear picture of fixed and variable costs, leading to better financial planning.",
  },
  {
    title: "Cost Control and Efficiency",
    description:
      "Offers insights into reducing unnecessary costs and waste, enabling businesses to operate more efficiently.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "Provides the necessary cost data to make strategic decisions regarding production, investment, and resource allocation.",
  },
];

const CoreComponentsCards = [
  {
    title: "Cost Allocation",
    description:
      "Allocating costs accurately to products, services, or departments based on activities, helping businesses understand true cost drivers.",
  },
  {
    title: "Fixed and Variable Cost Analysis",
    description:
      "Differentiating between fixed costs (e.g., rent) and variable costs (e.g., raw materials) to help businesses manage expenses more effectively.",
  },
  {
    title: "Standard Costing",
    description:
      "Establishing benchmarks for expected costs and comparing them to actual costs to identify variances and areas for improvement.",
  },
  {
    title: "Activity-Based Costing (ABC)",
    description:
      "Identifying specific activities that drive costs and assigning costs based on resource consumption, providing more accurate cost information.",
  },
  {
    title: "Cost-Volume-Profit (CVP) Analysis",
    description:
      "Analyzing the relationship between costs, volume, and profit to better understand the impact of different production levels on overall profitability.",
  },
  {
    title: "Break-Even Analysis",
    description:
      "Determining the sales volume needed to cover fixed and variable costs, helping businesses identify their break-even point and profitability thresholds.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Enhanced Profitability",
    description:
      "By identifying and controlling costs, businesses can improve their profitability and maintain competitive pricing.",
  },
  {
    title: "Effective Resource Management",
    description:
      "Cost accounting helps businesses allocate resources more efficiently, minimizing waste and maximizing productivity.",
  },
  {
    title: "Accurate Decision Making",
    description:
      "Provides the data needed to make informed decisions about pricing, product development, and operational strategies.",
  },
  {
    title: "Financial Transparency",
    description:
      "Offers clarity into the business’s cost structure, helping stakeholders understand spending and optimize costs.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Analysis",
    description:
      "Offers clarity into the business's cost structure, helping stakeholders understand spending patterns and optimize overall costs effectively.",
  },
  {
    heading: "Custom Solutions",
    description:
      "We tailor cost accounting solutions to your specific business needs, helping you implement strategies for cost reduction and profitability enhancement.",
  },
  {
    heading: "Ongoing Monitoring",
    description:
      "We continuously track and review costs, providing ongoing support to ensure that cost controls and strategies remain effective.",
  },
];

export default function CostAccountingServices() {
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
                    Cost Accounting Services
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Cost Accounting Services focus on tracking, analyzing, and
                      managing the costs associated with producing goods or
                      services. This service is essential for businesses that
                      want to optimize their cost structure, improve
                      profitability, and make informed decisions regarding
                      pricing, budgeting, and financial planning. By
                      understanding where and how resources are being spent,
                      businesses can identify inefficiencies, reduce waste, and
                      enhance overall operational performance.
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
                    title="Why You Need Cost Accounting Services"
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

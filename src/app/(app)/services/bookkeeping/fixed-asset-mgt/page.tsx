import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Improved Asset Utilization",
    description:
      "Helps businesses track and maintain their fixed assets effectively, ensuring they are being used to their fullest potential and not sitting idle.",
  },
  {
    title: "Accurate Financial Reporting",
    description:
      "Ensures fixed assets are properly recorded, depreciated, and accounted for in financial statements, improving accuracy and compliance with accounting standards.",
  },
  {
    title: "Cost Savings",
    description:
      "Helps prevent unnecessary purchases by optimizing the use of existing assets and ensuring assets are properly maintained to extend their useful life.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensures that asset records meet all necessary legal and tax compliance requirements, reducing the risk of potential audit issues or fines.",
  },
  {
    title: "Asset Depreciation Management",
    description:
      "Tracks the depreciation of assets over time, helping businesses accurately calculate tax liabilities and manage their financial projections.",
  },
  {
    title: "Reduced Risk of Loss or Theft",
    description:
      "Provides better control and oversight of assets, reducing the risk of loss, theft, or misplacement of critical and valuable equipment.",
  },
];

const CoreComponentsCards = [
  {
    title: "Asset Tagging and Identification",
    description:
      "Each fixed asset is tagged and tracked with unique identifiers, ensuring accurate records, efficient management, and easy retrieval of asset information.",
  },
  {
    title: "Depreciation Tracking",
    description:
      "Tracks the depreciation of assets using various methods (e.g., straight-line, declining balance) to ensure accurate financial reporting and tax calculations.",
  },
  {
    title: "Asset Lifecycle Management",
    description:
      "Manages the entire lifecycle of assets—from acquisition and maintenance to disposal—ensuring that all assets are properly accounted for and efficiently used.",
  },
  {
    title: "Maintenance Scheduling",
    description:
      "Helps schedule regular maintenance for assets, ensuring they are kept in good working condition, reducing downtime, and prolonging their useful life.",
  },
  {
    title: "Asset Disposal and Write-Offs",
    description:
      "Tracks the disposal or sale of fixed assets, ensuring proper accounting and compliance with tax regulations when assets are written off or sold.",
  },
  {
    title: "Reporting and Analytics",
    description:
      "Provides detailed reports on asset usage, depreciation, maintenance, and value, helping businesses make informed decisions about their fixed asset portfolio.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Optimized Asset Utilization",
    description:
      "Ensures your business gets the most out of its assets by tracking their usage, condition, and value over time.",
  },
  {
    title: "Financial Accuracy",
    description:
      "Keeps your asset records accurate, ensuring depreciation is tracked and reported correctly for tax purposes and statements.",
  },
  {
    title: "Cost Reduction",
    description:
      "Helps businesses avoid unnecessary purchases, reduce costs, and keep assets in good condition.",
  },
  {
    title: "Compliance and Audit-Ready",
    description:
      "Keeps your asset records compliant with financial regulations, simplifying audits and reducing the risk of fines or penalties.",
  },
];

const OurApproachCards = [
  {
    heading: "Custom Asset Management System",
    description:
      "We implement a fixed asset management system tailored to your business's needs, ensuring that all assets are accurately tracked and managed.",
  },
  {
    heading: "Ongoing Monitoring and Maintenance",
    description:
      "We provide continuous support to monitor asset performance, schedule maintenance, and ensure that assets are being utilized efficiently.",
  },
  {
    heading: "Comprehensive Reporting",
    description:
      "We offer detailed reports on asset value, depreciation, and usage, helping you make data-driven decisions about asset purchases, sales, and maintenance.",
  },
  {
    heading: "Training and Support",
    description:
      "We provide training for your team to ensure they can effectively use the asset management system and keep accurate records of all fixed assets.",
  },
];

export default function FixedAssetManagement() {
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
                    Fixed Asset Management
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Fixed Asset Management involves the tracking, maintaining,
                      and reporting of a company&apos;s long-term assets, such
                      as property, equipment, machinery, and vehicles. These
                      assets are critical to the operation and growth of a
                      business, and effective management ensures that they are
                      properly accounted for, utilized efficiently, and kept in
                      good condition. This service helps businesses maximize the
                      value of their fixed assets while ensuring compliance with
                      accounting standards and improving operational
                      performance.
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
                    title="Why You Need Fixed Asset Management"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter
                    href="/services/tax-planning"
                    service="Tax Planning"
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

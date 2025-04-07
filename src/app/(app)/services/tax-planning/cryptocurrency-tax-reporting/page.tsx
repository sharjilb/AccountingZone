import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Compliance with Tax Regulations",
    description:
      "Ensures that cryptocurrency transactions are reported accurately, in accordance with IRS guidelines and other relevant tax authorities, avoiding penalties or legal issues.",
  },
  {
    title: "Accurate Reporting of Gains and Losses",
    description:
      "Helps calculate and report capital gains and losses resulting from crypto transactions, ensuring that taxes are paid on profits and that losses are properly deducted.",
  },
  {
    title: "Maximized Deductions and Credits",
    description:
      "Identifies opportunities to reduce tax liability through tax-loss harvesting, allowing you to offset gains with losses from other cryptocurrency investments.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Provides real-time tracking and reporting of cryptocurrency transactions, helping individuals and businesses stay on top of their tax obligations throughout the year.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Reduces the risk of errors in reporting, which can lead to audits, penalties, missed opportunities for tax savings, or other financial consequences.",
  },
  {
    title: "Streamlined Tax Filing",
    description:
      "Automates the calculation and documentation of crypto-related transactions, making the tax filing process easier and more efficient.",
  },
];

const CoreComponentsCards = [
  {
    title: "Transaction Tracking",
    description:
      "Tracks all cryptocurrency transactions, including buys, sells, exchanges, and transfers, ensuring that all events are documented and accounted for correctly.",
  },
  {
    title: "Capital Gains Calculation",
    description:
      "Calculates the capital gains or losses for each cryptocurrency transaction, factoring in the purchase price, sale price, holding period, and applicable fees.",
  },
  {
    title: "Tax-Loss Harvesting",
    description:
      "Identifies opportunities for tax-loss harvesting by selling cryptocurrencies that have lost value to offset capital gains from other crypto holdings.",
  },
  {
    title: "Income Reporting",
    description:
      "Accurately reports income from crypto-related activities such as mining, staking, airdrops, earning interest, or trading digital assets.",
  },
  {
    title: "Tax Form Preparation",
    description:
      "Prepares and generates the necessary tax forms (such as IRS Form 8949, Schedule D) for accurate and timely reporting of cryptocurrency transactions.",
  },
  {
    title: "Wallet and Exchange Integration",
    description:
      "Integrates with various cryptocurrency wallets and exchanges to import transaction data, ensuring all activities are captured and reported.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Accurate and Compliant Tax Filing",
    description:
      "Ensures your cryptocurrency transactions are reported correctly and timely, reducing the risk of errors and penalties from tax authorities.",
  },
  {
    title: "Optimized Tax Position",
    description:
      "Helps you identify opportunities for tax savings through deductions, credits, and tax-loss harvesting, minimizing your overall tax liability.",
  },
  {
    title: "Real-Time Tracking and Reporting",
    description:
      "Tracks crypto transactions in real-time, keeping your records up-to-date and ensuring you are prepared when tax season arrives.",
  },
  {
    title: "Stress-Free Tax Filing",
    description:
      "Automates much of the cryptocurrency reporting process, making tax filing easier, faster, and more efficient, while ensuring compliance.",
  },
  {
    title: "Mitigation of Audit Risk",
    description:
      "Properly documenting and reporting crypto transactions reduces the likelihood of audits and penalties related to unreported or incorrectly reported crypto activities.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Crypto Transaction Review",
    description:
      "We review and organize all your cryptocurrency transactions, ensuring that each trade, sale, and exchange is properly tracked and accounted for in your tax records.",
  },
  {
    heading: "Customized Reporting Strategy",
    description:
      "Based on your unique crypto portfolio, we develop a tailored reporting strategy that maximizes tax benefits and ensures compliance with all relevant tax regulations.",
  },
  {
    heading: "Integration with Crypto Platforms",
    description:
      "We integrate your cryptocurrency wallets and exchanges with our reporting systems, ensuring that all transactions are automatically imported and accurately reported.",
  },
  {
    heading: "Ongoing Monitoring and Updates",
    description:
      "We provide continuous monitoring of your cryptocurrency holdings and tax obligations, adjusting your reporting strategy to keep you compliant with changing tax laws.",
  },
  {
    heading: "Tax Filing and Compliance Support",
    description:
      "We assist with preparing and filing your tax forms, ensuring that all necessary documentation is completed accurately and on time.",
  },
];

export default function CryptocurrencyTaxReporting() {
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
                    Cryptocurrency Tax Reporting
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Cryptocurrency Tax Reporting involves accurately reporting
                      the gains and losses associated with cryptocurrency
                      transactions in compliance with tax regulations. As
                      cryptocurrencies become more widely used, the IRS and
                      other tax authorities are increasingly focusing on
                      ensuring that individuals and businesses report their
                      cryptocurrency activities correctly. This service helps
                      businesses and individuals track, calculate, and report
                      their crypto holdings, transactions, and taxes to ensure
                      compliance and minimize the risk of audits or penalties.
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
                    title="Why You Need Cryptocurrency Tax Reporting"
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

import React from "react";
import Image from "next/image";
import OurApproach from "@/components/services/OurApproach";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";
import ServicesGrid from "@/components/services/ServicesGrid";

const bookkeepingCards = [
  {
    title: "Expertise:",
    description:
      "Our team of skilled bookkeepers ensures accurate and efficient management of your financial records.",
  },
  {
    title: "Cost-Effectiveness:",
    description:
      "Outsourcing bookkeeping to us eliminates the need for in-house staff and reduces overhead costs.",
  },
  {
    title: "Time Savings:",
    description:
      "Free up valuable time to focus on core business activities while we handle the bookkeeping tasks.",
  },
  {
    title: "Scalability:",
    description:
      "Our services are scalable, adapting to your company's changing needs and growth.",
  },
  {
    title: "Compliance:",
    description:
      "Stay compliant with tax regulations and financial reporting requirements with our expert guidance.",
  },
  {
    title: "Technology:",
    description:
      "Benefit from our use of advanced digital tools and software for streamlined bookkeeping processes.",
  },
  {
    title: "Peace of Mind:",
    description:
      "Trust in our reliable and confidential handling of your financial data, ensuring security and peace of mind.",
  },
];

const gridCards = [
  {
    title: "Bank Account Reconciliation",
    description:
      "Make sure you don't lose a dime you’re owed. We configure your bank channels and sync with speed and precision.",
  },
  {
    title: "Bank Feeds",
    description:
      "This online banking feature allows us to connect with your financial institution and complete transactions while you focus on your other business.",
  },
  {
    title: "Credit Card Reconciliation",
    description:
      "Evaluation of Credit Checked, Issued, Cleared, Cancelled; Monitor Unpaid Payments & Late Payments.",
  },
  {
    title: "Data Entry",
    description:
      "Enter the time-consuming and labor-intensive process of data entry by outsourcing it to the best outsourced company in India – Shrink Consulting Finance & accounting Services.",
  },
  {
    title: "BAccounts Payable & Receivable",
    description:
      "Easily and proactively invoice your suppliers. Quickly and professionally invoice your clients.",
  },
  {
    title: "Invoices Processing",
    description:
      "Match invoices and purchase orders, scan invoices, audit and reconciliation, manual data entry, and automated data entry.",
  },
  {
    title: "Bills & Batch Enter",
    description:
      "You can easily and digitally record your payments, future transactions, costs, purchased materials, and batch number.",
  },
  {
    title: "Finalization of Accounts",
    description:
      "Find the right tools to find out where you stand financially and how profitable your business is.",
  },
  {
    title: "Year End Journal Entries",
    description:
      "Before closing the accounts, we ensure that all financial transactions for the year are recorded correctly in your accounts.",
  },
];

const faqs = [
  {
    heading: "What Is Bookkeeping?",
    description:
      "Bookkeeping is the meticulous recording, organization, and management of financial transactions provided by Accountings Zone, a global leader in outsourced accounting services.",
  },
  {
    question:
      "What are the main objectives of bookkeeping at Accountings Zone?",
    description:
      "The bookkeeping goals of Shrink Consulting include recording client transactions, categorizing transactions into appropriate accounts, aggregating data to create detailed financial statements, and analyzing financial metrics to improve client financial health and strategies.",
  },
  {
    heading: "What bookkeeping methods does Accountigns Zone use?",
    description:
      "When it comes to financial management, shrink Consulting uses sophisticated bookkeeping techniques, including single entry and double entry systems, designed to meet the needs of our global clients, ensuring accuracy and efficiency.",
  },
  {
    heading: "Customer satisfaction guarantee",
    description:
      "For us, nothing matters more than our clients’ satisfaction. We have an average customer satisfaction rating of 9/10*, therefore we are certain that you will be happy working with us as your financial partner as well.",
  },
];

export default function Bookkeeping() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Bookkeeping
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mt-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Finding the Right Advisor for Your Path
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-xl lg:text-2xl font-semibold text-black">
                      Simple and customized Bookkeeping for both large and small
                      companies
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      No matter how big or small your business is, our
                      streamlined and tailored bookkeeping solutions seamlessly
                      integrate with your business processes. With full
                      financial management services, high-quality records, and
                      access to expert knowledge, we make sure your financials
                      are in safe hands, so you can concentrate on growing your
                      business with confidence.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting2.jpg"
                      width={780}
                      height={428}
                      alt="Finding the Right Advisor for Your Path"
                      className="w-full object-cover"
                    />
                  </div>

                  <ServicesGrid
                    title="Flexible BookKeeping services for all types of needs"
                    gridCards={gridCards}
                  />

                  <h3 className="text-2xl font-bold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                    Our Capabilities
                  </h3>

                  <div className="space-y-8 lg:space-y-16">
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <h4 className="text-lg font-semibold text-black">
                        Why Outsource Bookkeeping to Accountings Zone?
                      </h4>
                    </div>

                    <div className="pt-6 lg:pt-12">
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {bookkeepingCards.map((item, index) => (
                          <li key={index}>
                            <FSCard
                              title={item.title}
                              description={item.description}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <FAQs title="Frequently Asked Questions (Faqs)" faqs={faqs} />

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

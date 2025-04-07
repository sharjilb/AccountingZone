import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Real-Time Access",
    description:
      "Provides business owners and accountants with instant access to financial data from anywhere, at any time, promoting efficient decision-making.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduces the need for expensive on-premise software and hardware, as cloud-based solutions typically operate on a subscription model, lowering upfront costs.",
  },
  {
    title: "Scalability",
    description:
      "Easily adjusts to your needs as you grow, providing flexibility to add users, integrate features, and manage increasing financial data.",
  },
  {
    title: "Data Security and Backup",
    description:
      "Cloud platforms offer automatic backups and high-level encryption to protect sensitive financial data, reducing the risk of data loss and breaches.",
  },
  {
    title: "Automation of Routine Tasks",
    description:
      "Automates key bookkeeping tasks, such as transaction categorization, invoice creation, and bank reconciliation, saving time and reducing human error.",
  },
  {
    title: "Seamless Integration",
    description:
      "Integrates effortlessly with business tools such as payment processors, e-commerce platforms, and tax software, providing a unified approach.",
  },
];

const CoreComponentsCards = [
  {
    title: "Real-Time Financial Reporting",
    description:
      "Provides up-to-the-minute financial data, including profit and loss statements, balance sheets, and cash flow reports, automatically updated as transactions occur.",
  },
  {
    title: "Bank and Credit Card Reconciliation",
    description:
      "Automatically syncs with your bank accounts and credit cards to import transactions and reconcile them with your financial records in real time.",
  },
  {
    title: "Invoice and Billing Management",
    description:
      "Creates and tracks invoices, automates reminders for overdue payments, and provides clients with an online payment option.",
  },
  {
    title: "Expense Tracking",
    description:
      "Captures and categorizes all business expenses in detail, helping businesses track their spending and identify cost-saving opportunities.",
  },
  {
    title: "Tax Reporting and Compliance",
    description:
      "Facilitates tax filing by automatically tracking income and expenses, generating reports for tax purposes, and ensuring compliance with relevant tax regulations.",
  },
  {
    title: "Multi-User Access and Collaboration",
    description:
      "Allows multiple users (accountants, business owners, and employees) to access and collaborate on financial data simultaneously, improving workflow and communication.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Efficiency",
    description:
      "Automates many accounting tasks, reducing manual work and minimizing errors, helping you save time and focus on business growth and development.",
  },
  {
    title: "Accessibility",
    description:
      "Access your financial data anywhere, anytime, whether you're in the office, at home, or on the go, providing greater flexibility and convenience.",
  },
  {
    title: "Security and Reliability",
    description:
      "Protects your financial data with advanced security features and automatic backups, ensuring that you never lose critical information.",
  },
  {
    title: "Cost Savings",
    description:
      "Eliminates the need for expensive hardware, software updates, and IT staff, allowing small businesses to access powerful accounting tools at an affordable price.",
  },
];

const OurApproachCards = [
  {
    heading: "Customized Cloud Setup",
    description:
      "We tailor cloud-based bookkeeping solutions to suit your business’s size, industry, and specific needs, ensuring seamless integration with your operations.",
  },
  {
    heading: "Training and Support",
    description:
      "We offer comprehensive training to ensure that your team can fully utilize the cloud platform's capabilities, along with ongoing support for troubleshooting and updates.",
  },
  {
    heading: "Continuous Monitoring",
    description:
      "We regularly monitor your cloud-based bookkeeping system to ensure it’s functioning smoothly and that your financial data is accurate and up-to-date.",
  },
];

export default function CloudBasedBookkeepingSolutions() {
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
                    Cloud-Based Bookkeeping Solutions
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Cloud-Based Bookkeeping Solutions offer businesses the
                      ability to manage their financial records online through
                      cloud software. This approach allows for real-time access
                      to financial data, automatic backups, and seamless
                      integration with other business tools. Cloud-based
                      bookkeeping eliminates the need for manual record-keeping
                      and physical storage, providing businesses with a more
                      efficient, accurate, and scalable way to handle their
                      accounting processes.
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
                    title="Why You Need Cloud-Based Bookkeeping Solutions"
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

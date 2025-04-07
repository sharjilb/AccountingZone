import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Accurate Tax Calculation",
    description:
      "Ensures that employee wages and withholdings are accurately calculated, including federal income tax, Social Security, Medicare, and other deductions.",
  },
  {
    title: "Timely Filing and Payments",
    description:
      "Guarantees that payroll tax filings are submitted on time, avoiding late fees, penalties, interest charges, and compliance issues.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Keeps businesses compliant with the latest tax laws and regulations, ensuring that all payroll taxes are correctly reported and paid to the appropriate authorities.",
  },
  {
    title: "Minimized Audit Risk",
    description:
      "Reduces the risk of IRS audits or tax issues by ensuring that all payroll tax forms are completed accurately and submitted according to legal requirements.",
  },
  {
    title: "Employee Satisfaction",
    description:
      "Ensures accurate and timely payroll processing, improving employee satisfaction, trust, and overall operational efficiency in your business.",
  },
  {
    title: "Streamlined Payroll Process",
    description:
      "Automates payroll tax calculations and filings, significantly reducing administrative workload, minimizing human error, and ensuring timely tax compliance.",
  },
];

const CoreComponentsCards = [
  {
    title: "Payroll Tax Calculation",
    description:
      "We calculate employee wages, tax withholdings, and deductions, including federal income tax, state taxes, Social Security, and retirement contributions.",
  },
  {
    title: "Quarterly and Annual Filings",
    description:
      "We prepare and file required payroll tax forms, such as IRS Form 941 and Form 940, along with state-specific filings, ensuring compliance with all deadlines.",
  },
  {
    title: "W-2 and 1099 Forms Preparation",
    description:
      "We prepare and file W-2 forms for employees and 1099 forms for independent contractors, ensuring timely delivery to employees and filing with the IRS.",
  },
  {
    title: "Direct Deposit Setup and Management",
    description:
      "We assist in setting up and managing direct deposit options for employees, ensuring efficient and secure payment processing for smooth payroll operations.",
  },
  {
    title: "Tax Payment Remittance",
    description:
      "We remit the appropriate payroll taxes to the IRS, state, and local tax authorities on behalf of your business, ensuring that payments are made on time.",
  },
  {
    title: "Record Keeping and Reporting",
    description:
      "We maintain thorough payroll tax records, including calculations, filings, and payment histories, and provide regular reports for your review.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Ensure Compliance",
    description:
      "Payroll tax laws and regulations are constantly changing. Accurate calculation and timely filing help ensure compliance with federal, state, and local requirements.",
  },
  {
    title: "Avoid Penalties and Fines",
    description:
      "By meeting deadlines and submitting accurate forms, you avoid costly penalties and interest from tax authorities, ensuring compliance and financial stability.",
  },
  {
    title: "Efficiency and Time Savings",
    description:
      "Automating the payroll tax process reduces administrative burden and the risk of manual errors, allowing your team to focus on more strategic tasks.",
  },
  {
    title: "Employee Trust",
    description:
      "Timely and accurate payroll ensures that employees are paid correctly and on time, which fosters trust and improves employee retention.",
  },
  {
    title: "Audit Protection",
    description:
      "Properly filed payroll taxes and accurate reporting reduce the likelihood of tax audits, protecting your business from unnecessary scrutiny.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Payroll Setup",
    description:
      "We assist with setting up your payroll system, ensuring all necessary tax rates, deduction categories, and payroll processes are accurately configured.",
  },
  {
    heading: "Ongoing Payroll Tax Calculation",
    description:
      "We calculate and track all employee wages and deductions, ensuring tax compliance with every payroll cycle, including employee and employer contributions.",
  },
  {
    heading: "Timely Filing and Payment Remittance",
    description:
      "We handle all filings and payments to the IRS, state, and local agencies, ensuring everything is submitted on time and in the correct format.",
  },
  {
    heading: "Regular Reporting and Recordkeeping",
    description:
      "We provide regular reports on payroll taxes, filing statuses, and payment history, helping you stay informed and prepared for audits or future planning.",
  },
  {
    heading: "Dedicated Support",
    description:
      "Our team is available to answer any questions and provide guidance on payroll tax-related issues, offering solutions tailored to your business’s specific needs.",
  },
];

export default function PayrollTaxCalculationAndFiling() {
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
                    Payroll Tax Calculation and Filing
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Payroll Tax Calculation and Filing involves the accurate
                      calculation of employee wages, withholding taxes, and the
                      timely filing of all required payroll tax forms. This
                      service ensures that businesses remain compliant with
                      federal, state, and local tax regulations, avoiding
                      penalties and fines. By outsourcing payroll tax
                      calculation and filing, businesses can streamline their
                      payroll processes, reduce the risk of errors, and focus on
                      core operations.
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
                    title="Why You Need Payroll Tax Calculation and Filing"
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

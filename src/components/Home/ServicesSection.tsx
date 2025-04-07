import React from "react";
import Image from "next/image";

// const servicesCards = [
//   {
//     title: "Tax Resolution",
//     icon: BsFillBarChartFill,
//     iconClassName: "size-14",
//   },
//   {
//     title: "PFP Loan Forgiveness Assistance",
//     icon: FaMoneyCheckAlt,
//     iconClassName: "size-14",
//   },
//   {
//     title: "Custom Bookkeeping Solutions",
//     icon: FaFileInvoiceDollar,
//     iconClassName: "size-14",
//   },
//   {
//     title: "Proactive Tax Advisory",
//     icon: FaHandshake,
//     iconClassName: "size-20",
//   },
//   {
//     title: "Business Consulting Solutions",
//     icon: FaChartLine,
//     iconClassName: "size-14",
//   },
//   {
//     title: "Consulting For QuickBooks",
//     icon: FaFileAlt,
//     iconClassName: "size-14",
//   },
// ];

export default function ServicesSection() {
  return (
    <section className="pt-10 lg:mx-auto flex flex-wrap px-8 container lg:w-2/3 mx-auto flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:order-1 mx-auto mb-8 md:mb-0">
        <h2
          className="mb-4 md:mb-8 font-semibold tracking-widest text-sm lg:text-base text-[#fbc710] uppercase fade-in"
        >
          SERVICES
        </h2>

        <h3
          className="mb-6 sm:mb-14 text-3xl font-bold tracking-[0.02em] lg:text-4xl fade-in"
        >
          To meet your needs <br />
          <span className="text-sm text-gray-500">
            Accounting, Bookkeeping, Financial Reporting, Payroll And Tax
            Services
          </span>
        </h3>

        <ul className="space-y-4">
          <li className="hover:cursor-pointer duration-300">
            <div className="text-lg font-bold uppercase">Accounting</div>
            <div className="mt-2">
              <ul className="list-disc grid grid-cols-1 sm:grid-cols-3 pl-6 text-sm text-gray-500 gap-8">
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Financial Statements
                  </h4>
                  <p className="text-xs">
                    We prepare comprehensive financial, income, cash flow
                    statements and balance sheets.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Ledger Maintenance
                  </h4>
                  <p className="text-xs">
                    Our team ensures that your general ledger is accurate and
                    up-to-date.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Payroll Accounting
                  </h4>
                  <p className="text-xs">
                    Accurate payroll accounting is crucial for compliance and
                    employee satisfaction.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:cursor-pointer duration-300">
            <div className="text-lg font-bold uppercase">BookKeeping</div>
            <div className="mt-2">
              <ul className="list-disc grid grid-cols-1 sm:grid-cols-3 pl-6 text-sm text-gray-500 gap-8">
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Financial Record Keeping
                  </h4>
                  <p className="text-xs">
                    Ensure your financial transactions are meticulously recorded
                    and organized.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Reconciliation and Reporting
                  </h4>
                  <p className="text-xs">
                    Keep your accounts balanced and up-to-date.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Custom Bookkeeping Solutions
                  </h4>
                  <p className="text-xs">
                    Tailored to fit your business needs, our customizable
                    bookkeeping services.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-black hover:cursor-pointer duration-300">
            <div className="text-lg font-bold uppercase">Tax planning</div>
            <div className="mt-2">
              <ul className="list-disc grid grid-cols-1 sm:grid-cols-3 pl-6 text-sm text-gray-500 gap-8">
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Strategic Tax Optimization
                  </h4>
                  <p className="text-xs">
                    Maximize your savings with our strategic tax planning
                    services.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Comprehensive Tax Compliance
                  </h4>
                  <p className="text-xs">
                    Our expert team ensures your tax filings are accurate and
                    timely, helping you avoid penalties and optimize your tax
                    liabilities.
                  </p>
                </li>
                <li className="hover:text-black hover:cursor-pointer duration-300">
                  <h4 className="font-bold text-gray-800">
                    Proactive Tax Advisory
                  </h4>
                  <p className="text-xs">
                    We provide ongoing advice and updates on tax law changes,
                    ensuring your business remains compliant and financially
                    efficient.
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 lg:w-5/12">
        <div className="relative mx-auto max-w-lg">
          <Image
            src="/accounting/accounting1.jpg"
            width="426"
            height="573"
            alt="Accounting Section"
            className="max-w-full h-auto fade-in"
          />
        </div>
      </div>
    </section>
  );
}

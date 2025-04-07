"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdownName: string) => {
    switch (dropdownName) {
      case "services":
        setServicesDropdownOpen(!servicesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "features":
        setFeaturesDropdownOpen(!featuresDropdownOpen);
        setServicesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "insights":
        setInsightsDropdownOpen(!insightsDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "industries":
        setIndustriesDropdownOpen(!industriesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "contact":
        setContactDropdownOpen(!contactDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "about":
        setAboutDropdownOpen(!aboutDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setResourcesDropdownOpen(false);
        break;
      case "resources":
        setResourcesDropdownOpen(!resourcesDropdownOpen);
        setFeaturesDropdownOpen(false);
        setIndustriesDropdownOpen(false);
        setInsightsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
        break;
    }
  };

  return (
    <nav className="bg-white justify-self-end p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden block w-6 h-3 bg-transparent appearance-none cursor-pointer"
      >
        {isOpen ? (
          <RxCross2 className="size-5" />
        ) : (
          <RxHamburgerMenu className="size-5" />
        )}
      </button>

      <ul className="hidden xl:flex items-center">
        <li className="mr-4 lg:mr-10">
          <Link
            href="/"
            className={`text-xs hover:text-[#fbc710] transition-colors uppercase ${
              pathname === "/" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            HOME
          </Link>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setServicesDropdownOpen(true)}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <div
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("services") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            SERVICES
          </div>
          <div
            className={`absolute text-[13px] z-10 -left-[170px] top-full w-[825px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
              servicesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="grid grid-cols-5 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  FINANCIAL - Accounting
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/budget-planning-and-forecasting"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Budget Planning and Forecasting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/cash-flow-management"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cash Flow Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/audit-preparation-assistance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Audit Preparation Assistance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/financial-analysis-and-strategy"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Financial Analysis and Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/cost-accounting-services"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cost Accounting Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/financial-risk-assessment"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Financial Risk Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/accounts-receivable-and-payable-mgt"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Accounts Receivable and Payable Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements/inventory-accounting"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Inventory Accounting
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  RECORDS - Bookkeeping
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/accounts-reconciliation"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Accounts Payable/Receivable Reconciliation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/cloud-based-bookkeeping-solutions"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cloud-Based Bookkeeping Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/real-time-financial-reporting"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Real-Time Financial Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/expense-tracking-and-mgt"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Expense Tracking and Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/fixed-asset-mgt"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Fixed Asset Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/audit-ready-documentation"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Audit-Ready Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/integration-with-accounting-software"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Integration with Accounting Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping/historical-bookkeeping-cleanup"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Historical Bookkeeping Cleanup
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  TAX - Tax planning
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/capital-gains-tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Capital Gains Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/tax-saving-strategies-for-startups"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Saving Strategies for Startups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/charitable-contributions-tax-optimization"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Charitable Contributions Tax Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/cryptocurrency-tax-reporting"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cryptocurrency Tax Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/payroll-tax-calculation-and-filing"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Payroll Tax Calculation and Filing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/quarterly-tax-estimates-and-payments"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Quarterly Tax Estimates and Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/post-tax-consultation-and-review"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Post-Tax Season Consultation and Review
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning/estate-and-inheritance-tax-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Estate and Inheritance Tax Planning
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  ADVISORY – Business Consulting
                </li>
                <li>
                  <Link
                    href="/services/advisory/financial-strategy-development"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Financial Strategy Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/business-performance-optimization"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Business Performance Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/risk-management-consulting"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Risk Management Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/business-valuation-services"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Business Valuation Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/mergers-and-acquisitions-support"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Mergers and Acquisitions Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/cash-flow-optimization-strategies"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cash Flow Optimization Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/start-up-financial-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Start-Up Financial Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory/cost-reduction-and-planning"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cost Reduction and Efficiency Planning
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  COMPLIANCE – Regulatory Services
                </li>
                <li>
                  <Link
                    href="/services/compliance/statutory-reporting-and-compliance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Statutory Reporting and Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/corporate-governance-advisory"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Corporate Governance Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/industry-regulatory-filings"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Industry-Specific Regulatory Filings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/anti-money-laundering-compliance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Anti-Money Laundering (AML) Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/internal-controls-and-auditing"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Internal Controls and Auditing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/employment-and-labor-law-compliance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Employment and Labor Law Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/corporate-secretarial-services"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Corporate Secretarial Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/compliance/environmental-social-and-governance"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Environmental, Social, and Governance (ESG)
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setIndustriesDropdownOpen(true)}
          onMouseLeave={() => setIndustriesDropdownOpen(false)}
        >
          <Link
            href="/industries"
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("industries") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            INDUSTRIES
          </Link>
          <div
            className={`absolute z-10 -left-[225px] top-full w-[825px] py-12 bg-white shadow-lg duration-300 transition-opacity text-[13px] ${
              industriesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="grid grid-cols-4 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
              <div className="space-y-4 px-4">
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Financial and Legal Services
                  </li>
                  <li>
                    <Link
                      href="/industries/financial-and-legal-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Banking and Financial Services Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/financial-and-legal-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Asset Management and Hedge Funds Legal Firms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/financial-and-legal-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Venture Capital and Private Equity Firms
                    </Link>
                  </li>
                </div>
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Retail, Hospitality, and Consumer Services
                  </li>
                  <li>
                    <Link
                      href="/industries/consumer-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Retail and Wholesale
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/consumer-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/consumer-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      E-commerce and Online Retailers
                    </Link>
                  </li>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Government and Public Sector
                  </li>
                  <li>
                    <Link
                      href="/industries/government-and-public-sector"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Government Agencies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/government-and-public-sector"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Public Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/government-and-public-sector"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Publicly Listed Companies
                    </Link>
                  </li>
                </div>
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Technology and Start-Ups
                  </li>
                  <li>
                    <Link
                      href="/industries/technology-and-start-ups"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Technology and Start-Ups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/technology-and-start-ups"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Engineering and IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/technology-and-start-ups"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Cryptocurrency and Blockchain Companies
                    </Link>
                  </li>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Non-Profit and Philanthropic Organizations
                  </li>
                  <li>
                    <Link
                      href="/industries/non-profit-and-philanthropic-organizations"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Non-Profit Organizations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/non-profit-and-philanthropic-organizations"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Charities and Philanthropic Entities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/non-profit-and-philanthropic-organizations"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Religious Institutions
                    </Link>
                  </li>
                </div>
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Healthcare, Education, and Professional Services
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare-education-and-professional-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare-education-and-professional-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare-education-and-professional-services"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Professional Services
                    </Link>
                  </li>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Manufacturing, Construction, and Real Estate
                  </li>
                  <li>
                    <Link
                      href="/industries/manufacturing-construction-and-real-estate"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/manufacturing-construction-and-real-estate"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/manufacturing-construction-and-real-estate"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Real Estate
                    </Link>
                  </li>
                </div>
                <div className="space-y-3">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Energy, Environment, and Sustainability
                  </li>
                  <li>
                    <Link
                      href="/industries/energy-environment-and-sustainability"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Energy Sector
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/energy-environment-and-sustainability"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Environmental and Sustainable Organizations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/energy-environment-and-sustainability"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Circular Economy Strategies
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setFeaturesDropdownOpen(true)}
          onMouseLeave={() => setFeaturesDropdownOpen(false)}
        >
          <Link
            href="/features"
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("features") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            FEATURES
          </Link>
          <div
            className={`absolute z-10 text-[13px] -left-[290px] top-full w-[825px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
              featuresDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="grid grid-cols-4 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
              <div className="space-y-3 px-4">
                <li>
                  <Link
                    href="/features"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/features/smart-questionnaires"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Preparation Software
                  </Link>
                  <p className="text-xs text-gray-500">
                    Automates tax calculations and ensures compliance (e.g.,
                    TurboTax, H&R Block).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Scenario Modeling Software
                  </Link>
                  <p className="text-xs text-gray-500">
                    Simulates &quot;what-if&quot; scenarios to evaluate
                    potential tax outcomes (e.g., Fathom).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Optimization Software
                  </Link>
                  <p className="text-xs text-gray-500">
                    Helps identify deductions, credits, and savings
                    opportunities (e.g., Bloomberg Tax).
                  </p>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Withholding Tax Calculators
                  </Link>
                  <p className="text-xs text-gray-500">
                    Assists businesses and individuals in calculating accurate
                    tax withholdings.
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Document Management Software
                  </Link>
                  <p className="text-xs text-gray-500">
                    Securely stores, organizes, and retrieves tax-related files
                    (e.g., DocuSign, Xero Tax).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Cross-Border Tax Compliance Tools
                  </Link>
                  <p className="text-xs text-gray-500">
                    Handles VAT, GST, and international tax filings (e.g.,
                    Avalara, Taxback International).
                  </p>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Dashboards
                  </Link>
                  <p className="text-xs text-gray-500">
                    Provides real-time insights into tax liabilities and filing
                    status (e.g., Tableau, Power BI).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Audit Trail Tools
                  </Link>
                  <p className="text-xs text-gray-500">
                    Tracks and logs financial transactions for audit and
                    compliance (e.g., AuditFile).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Client Portal Solutions
                  </Link>
                  <p className="text-xs text-gray-500">
                    Secure platforms for document sharing and communication with
                    clients (e.g., ShareFile).
                  </p>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Payroll Tax Management Software
                  </Link>
                  <p className="text-xs text-gray-500">
                    Simplifies payroll tax calculations, filings, and compliance
                    (e.g., QuickBooks Payroll).
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Industry-Specific Tax Solutions
                  </Link>
                  <p className="text-xs text-gray-500">
                    Tools tailored to manage taxes in specialized industries
                    like real estate, healthcare, and manufacturing.
                  </p>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Tax Filing and Payment Platforms
                  </Link>
                  <p className="text-xs text-gray-500">
                    Enables seamless electronic filing and tax payment
                    submissions (e.g., IRS e-File).
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setInsightsDropdownOpen(true)}
          onMouseLeave={() => setInsightsDropdownOpen(false)}
        >
          <div
            className={`text-xs hover:text-[#fbc710] transition-colors uppercase ${
              pathname.includes("/insights") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            INSIGHTS
          </div>
          <div
            className={`absolute z-10 text-[13px] -left-[345px] top-full w-[825px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
              insightsDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="grid grid-cols-3 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  Tax Insights
                </li>
                <li>
                  <Link
                    href="/insights/tax-insights"
                    className={`hover:text-[#fbc710] transition-colors ${
                      pathname === "/insights" ? "text-[#fbc710]" : "text-black"
                    }`}
                  >
                    <span>Compliance</span>
                    <p className="text-xs text-gray-500">
                      Ensuring adherence to local, national, and international
                      tax regulations is critical for avoiding penalties and
                      fostering trust with stakeholders.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights//tax-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Strategic Planning
                    <p className="text-xs text-gray-500">
                      Tax planning helps optimize financial performance through
                      credits, deductions, and deferrals.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/tax-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Impact on Cash Flow
                    <p className="text-xs text-gray-500">
                      Timely filing and tax optimization directly influence a
                      business&apos;s liquidity and operational health.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/tax-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Industry-Specific Nuances
                    <p className="text-xs text-gray-500">
                      Different sectors (e.g., healthcare, real estate,
                      manufacturing) face unique tax regulations and
                      opportunities.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/tax-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Globalization
                    <p className="text-xs text-gray-500">
                      Cross-border taxation and regulatory requirements (e.g.,
                      VAT, GST, and digital service taxes) are increasingly
                      relevant for businesses operating globally.
                    </p>
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  Accounting Insights
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Holistic Financial View
                    <p className="text-xs text-gray-500">
                      Accounting provides an overarching view of an
                      organization&apos;s financial health, aiding stakeholders
                      in making informed decisions.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Strategic Financial Management
                    <p className="text-xs text-gray-500">
                      By interpreting financial data, accounting supports
                      budgeting, forecasting, and long-term planning.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Regulatory Adherence
                    <p className="text-xs text-gray-500">
                      Accurate accounting ensures compliance with financial
                      reporting standards like GAAP or IFRS.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Technology Integration
                    <p className="text-xs text-gray-500">
                      Cloud accounting platforms and ERP systems have
                      revolutionized financial reporting, making data accessible
                      in real time.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/accounting-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Decision Support
                    <p className="text-xs text-gray-500">
                      Beyond numbers, accounting insights drive strategies like
                      cost optimization, revenue diversification, and investment
                      analysis.
                    </p>
                  </Link>
                </li>
              </div>
              <div className="space-y-3 px-4">
                <li className="font-bold text-sm text-[#fbc710]">
                  Bookkeeping Insights
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Foundational for Accounting
                    <p className="text-xs text-gray-500">
                      Proper bookkeeping ensures accurate data entry, forming
                      the base for financial analysis.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Real-Time Tracking
                    <p className="text-xs text-gray-500">
                      Timely bookkeeping provides immediate insights into cash
                      flow, expenses, and receivables.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Automation Trends
                    <p className="text-xs text-gray-500">
                      Automated bookkeeping tools (e.g., QuickBooks, Xero)
                      reduce human error and save time.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    SME Benefits
                    <p className="text-xs text-gray-500">
                      Small and medium enterprises rely heavily on precise
                      bookkeeping for expense tracking and financial
                      organization.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights/bookkeeping-insights"
                    className="text-black hover:text-[#fbc710] transition-colors"
                  >
                    Scalability
                    <p className="text-xs text-gray-500">
                      Efficient bookkeeping practices enable businesses to scale
                      by keeping financial records structured and audit-ready.
                    </p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setResourcesDropdownOpen(true)}
          onMouseLeave={() => setResourcesDropdownOpen(false)}
        >
          <div
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("/resources") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            RESOURCES
          </div>
          <div
            className={`absolute z-10 text-[13px] -left-[400px] top-full w-[825px] py-12 bg-white shadow-lg duration-300 transition-opacity ${
              resourcesDropdownOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="grid grid-cols-3 text-[11px] divide-x divide-[#fbc710] justify-center w-full">
              <div className="space-y-4 px-4">
                <div className="space-y-2">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Resources
                  </li>
                  <li>
                    <Link
                      href="/resources/glossary"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/blog"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/faq"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <div className="space-y-2">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Tax Resources
                  </li>
                  <li>
                    <Link
                      href="/resources/tax-guide"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Tax Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Tax Resources
                    </Link>
                  </li>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <div className="space-y-2">
                  <li className="font-bold text-sm text-[#fbc710]">
                    Support
                  </li>
                  <li>
                    <Link
                      href="/resources/faq"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/blog"
                      className="text-black hover:text-[#fbc710] transition-colors"
                    >
                      Latest Updates
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </li>
        <li className="mr-4 lg:mr-10">
          <Link
            href="/partner-application-form"
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname === "/partner-application-form"
                ? "text-[#fbc710]"
                : "text-black"
            }`}
          >
            <span className="2xl:block hidden">Partner Application Form</span>
            <span className="block 2xl:hidden">PA Form</span>
          </Link>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setAboutDropdownOpen(true)}
          onMouseLeave={() => setAboutDropdownOpen(false)}
        >
          <Link
            href="/about"
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname === "/about" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            ABOUT
          </Link>
        </li>
        <li
          className="relative group mr-4 lg:mr-10"
          onMouseEnter={() => setContactDropdownOpen(true)}
          onMouseLeave={() => setContactDropdownOpen(false)}
        >
          <Link
            href="/contact"
            className={`text-xs hover:text-[#fbc710] transition-colors cursor-pointer uppercase ${
              pathname.includes("/contact") ? "text-[#fbc710]" : "text-black"
            }`}
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <ul
        className={`absolute text-lg top-full right-0 z-40 block h-screen overflow-y-auto xl:hidden space-y-2 p-4 bg-white duration-700 transition-all transform ${
          isOpen
            ? "flex flex-col w-full sm:w-1/2 gap-y-2 pointer-events-auto"
            : "pointer-events-none w-0"
        }`}
      >
        <li>
          <Link
            href="/"
            className={`px-4 transition-colors ${
              pathname === "/" ? "text-[#fbc710]" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="group" onClick={() => handleDropdownClick("services")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Services
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              servicesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Financial Statements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Ledger Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/financial-statements"
                    className="text-black transition-colors"
                  >
                    Payroll Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/advisory"
                    className={`transition-colors ${
                      pathname === "/services/advisory"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Financial Record Keeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Reconciliation and Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bookkeeping"
                    className="text-black transition-colors"
                  >
                    Custom Bookkeeping Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Tax Planning & Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Strategic Tax Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Comprehensive Tax Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Proactive Tax Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-planning"
                    className="text-black transition-colors"
                  >
                    Tax Calculation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/multi-entity-tax-planning"
                    className={`transition-colors ${
                      pathname === "/services/multi-entity-tax-planning"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Multi Entity Tax Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-plans-proposals"
                    className={`transition-colors ${
                      pathname === "/services/tax-plans-proposals"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Plans & Proposals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("industries")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Industries
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              industriesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Small Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Corporations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Non-Profits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-black transition-colors"
                  >
                    Startups
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("features")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Features
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              featuresDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/features/smart-questionnaires"
                    className={`transition-colors ${
                      pathname === "/features/smart-questionnaires"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Smart Questionnaires
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black transition-colors"
                  >
                    Tax Compliance Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black transition-colors"
                  >
                    Multi-Year Tax Scenarios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("insights")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Insights
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              insightsDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/insights/case-studies"
                    className={`transition-colors ${
                      pathname === "/insights/case-studies"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className={`transition-colors ${
                      pathname === "/insights" ? "text-[#fbc710]" : "text-black"
                    }`}
                  >
                    Media Mentions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("resources")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Resources
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              resourcesDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/resources/blog"
                    className={`transition-colors ${
                      pathname === "/resources/blog"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/tax-guide"
                    className={`transition-colors ${
                      pathname === "/resources/tax-guide"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Tax Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/faq"
                    className={`transition-colors ${
                      pathname === "/resources/faq"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link
            href="/partner-application-form"
            className={`px-4 transition-colors ${
              pathname === "/partner-application-form"
                ? "text-[#fbc710]"
                : "text-black"
            }`}
          >
            Partner Application Form
          </Link>
        </li>
        <li className="group" onClick={() => handleDropdownClick("about")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            About
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              aboutDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="group" onClick={() => handleDropdownClick("contact")}>
          <div className="px-4 hover:text-[#fbc710] transition-colors">
            Contact
          </div>
          <div
            className={`mt-2 w-full px-5 ${
              contactDropdownOpen
                ? "block pointer-events-auto"
                : "hidden pointer-events-none"
            }`}
          >
            <div className="flex w-full">
              <ul className="flex flex-col font-semibold gap-y-4 w-full text-lg">
                <li>
                  <Link
                    href="/contact/get-a-consultation"
                    className={`transition-colors ${
                      pathname === "/contact/get-a-consultation"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Get a Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/support"
                    className={`transition-colors ${
                      pathname === "/contact/support"
                        ? "text-[#fbc710]"
                        : "text-black"
                    }`}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black transition-colors"
                  >
                    Office Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

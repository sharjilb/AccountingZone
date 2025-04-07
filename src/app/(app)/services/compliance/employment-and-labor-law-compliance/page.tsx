import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import Slider from "@/components/Slider";
import OurApproach from "@/components/services/OurApproach";

const KeyBenefitsCards = [
  {
    title: "Reduced Legal Risks",
    description:
      "Ensures that your business complies with all labor and employment laws, reducing the risk of costly lawsuits, fines, legal challenges, and reputational damage.",
  },
  {
    title: "Enhanced Employee Relations",
    description:
      "Promotes positive employee relations by ensuring workplace policies are fair, transparent, aligned with legal requirements, boosting morale.",
  },
  {
    title: "Mitigation of Discrimination Risks",
    description:
      "Helps establish policies that prevent discrimination, harassment, and unfair treatment, ensuring a respectful and inclusive work environment.",
  },
  {
    title: "Wage and Hour Law Compliance",
    description:
      "Ensures your business complies with wage and hour laws, including minimum wage, overtime pay, and recordkeeping, reducing wage-related disputes.",
  },
  {
    title: "Workplace Safety Compliance",
    description:
      "Helps businesses comply with workplace safety regulations like OSHA standards, ensuring a safe environment for all employees.",
  },
  {
    title: "Improved Governance and Reputation",
    description:
      "Demonstrates to employees, regulators, and stakeholders that your business operates with integrity and values legal compliance, enhancing your company’s reputation.",
  },
];

const CoreComponentsCards = [
  {
    title: "Employment Contracts & Agreements",
    description:
      "We assist in creating clear, compliant employment contracts covering job duties, compensation, benefits, and non-compete clauses, ensuring legal protections for both the business and its employees.",
  },
  {
    title: "Wage & Hour Compliance",
    description:
      "We ensure that your business complies with wage and hour laws, including minimum wage, overtime pay, and timekeeping requirements, helping to avoid wage disputes and penalties.",
  },
  {
    title: "Workplace Safety & Health Compliance",
    description:
      "We help implement workplace safety programs and ensure compliance with Occupational Safety and Health Administration (OSHA) standards, fostering a safe and healthy environment for employees.",
  },
  {
    title: "Anti-Discrimination & Opportunity Policies",
    description:
      "We help develop and enforce anti-discrimination policies that comply with laws like the Civil Rights Act, Equal Pay Act, and ADA, ensuring fair treatment for all employees.",
  },
  {
    title: "Employee Classification & Benefits",
    description:
      "We help classify employees correctly (exempt vs. non-exempt, contractor vs. employee) ensuring labor law compliance and proper management of benefits like healthcare and retirement plans.",
  },
  {
    title: "Employee Handbook Development",
    description:
      "We help create comprehensive employee handbooks that outline company policies, procedures, and employee rights, ensuring transparency and legal compliance in the workplace.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Legal Protection",
    description:
      "Ensures that your business stays compliant with the complex and ever-changing labor laws, reducing the risk of costly legal disputes and fines.",
  },
  {
    title: "Employee Satisfaction & Retention",
    description:
      "Clear policies and legal compliance promote a fair and respectful workplace, which leads to higher employee morale, satisfaction, and retention.",
  },
  {
    title: "Risk Management",
    description:
      "Helps you avoid legal risks associated with wage disputes, discrimination claims, and workplace injuries by ensuring compliance with applicable laws and regulations.",
  },
  {
    title: "Reputation Enhancement",
    description:
      "Demonstrates your commitment to ethical business practices, transparency, and fair treatment, boosting employee and stakeholder trust in your company.",
  },
  {
    title: "Operational Efficiency",
    description:
      "By adhering to labor laws, your business can avoid disruptions caused by labor disputes, allowing for smoother operations and better long-term stability.",
  },
  {
    title: "Workplace Safety & Productivity",
    description:
      "Compliance with safety regulations ensures a safer workplace, reducing accidents and injuries and promoting a healthier, more productive workforce.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Compliance Assessment",
    description:
      "We start by conducting a detailed assessment of your current employment practices, policies, and procedures to identify any gaps or areas of non-compliance.",
  },
  {
    heading: "Tailored Compliance Solutions",
    description:
      "Based on the assessment, we develop customized compliance strategies and policies tailored to your business's needs, industry standards, and regulatory requirements.",
  },
  {
    heading: "Wage and Hour Audits",
    description:
      "We conduct regular audits to ensure that your business complies with wage and hour laws, including proper classification of employees, overtime calculations, and timekeeping practices.",
  },
  {
    heading: "Employee Training and Education",
    description:
      "We provide training for your team on labor laws, workplace safety protocols, and anti-discrimination policies, promoting compliance and respect.",
  },
  {
    heading: "Policy and Handbook Development",
    description:
      "We help create clear, legally compliant employee handbooks and workplace policies, ensuring that your employees understand their rights, responsibilities, and the company’s expectations.",
  },
  {
    heading: "Ongoing Monitoring and Updates",
    description:
      "We provide continuous monitoring of changes in labor laws and regulations, ensuring that your business remains compliant and is able to quickly adapt to any legal changes.",
  },
];

export default function EmploymentAndLaborLawCompliance() {
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
                    Employment and Labor Law Compliance
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Employment and Labor Law Compliance ensures that
                      businesses adhere to all applicable labor and employment
                      regulations set by federal, state, and local authorities.
                      This service focuses on helping businesses manage their
                      obligations related to employee rights, workplace
                      conditions, wage and hour laws, discrimination laws, and
                      other key employment regulations. By implementing sound
                      compliance practices, businesses can reduce the risk of
                      legal disputes, fines, and reputational damage while
                      fostering a fair, safe, and productive work environment.
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
                    title="Why You Need Employment and Labor Law Compliance"
                    gridCards={WhyYouNeedCards}
                  />

                  <OurApproach
                    title="Our Approach"
                    ourApproach={OurApproachCards}
                  />

                  <ServicesFooter text="No matter what your tax, accounting, business, or financial issue is, feel free to give us a call so we can get started helping you today with our accounting advisory services for businesses and individuals." />
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

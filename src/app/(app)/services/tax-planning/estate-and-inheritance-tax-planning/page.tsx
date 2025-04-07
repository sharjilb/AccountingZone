import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";
import OurApproach from "@/components/services/OurApproach";
import Slider from "@/components/Slider";

const KeyBenefitsCards = [
  {
    title: "Minimized Estate Taxes",
    description:
      "Reduces estate tax liability through strategies like gifting, trusts, and other tax-saving techniques, ensuring more of your estate is passed on to beneficiaries.",
  },
  {
    title: "Optimized Wealth Transfer",
    description:
      "Develops strategies to efficiently transfer assets to heirs, avoiding unnecessary delays, costs, or disputes, and ensuring the smooth transfer of wealth according to your wishes.",
  },
  {
    title: "Protection of Family Wealth",
    description:
      "Protects your family's wealth from heavy taxation or external claims, ensuring assets are preserved and passed on to future generations.",
  },
  {
    title: "Philanthropic Giving",
    description:
      "Offers strategies for charitable giving that reduce estate taxes and benefit meaningful causes, such as charitable trusts or donations to nonprofit organizations.",
  },
  {
    title: "Financial Security for Heirs",
    description:
      "Ensures your heirs are financially secure by minimizing tax liabilities, avoiding probate, and preserving the value of inherited assets for future generations.",
  },
  {
    title: "Avoidance of Family Disputes",
    description:
      "Helps avoid disputes among heirs by clearly outlining your wishes, using tools such as wills, trusts, and other legal instruments to make your intentions clear.",
  },
];

const CoreComponentsCards = [
  {
    title: "Estate Tax Minimization",
    description:
      "Implements strategies to minimize estate taxes, such as gifting, establishing trusts, utilizing exemptions and deductions, and other methods to reduce the taxable value of the estate and preserve wealth.",
  },
  {
    title: "Trusts and Trust Planning",
    description:
      "Assists in creating and managing various types of trusts, including revocable living trusts, irrevocable trusts, and charitable trusts, to help pass on assets while minimizing taxes and avoiding probate.",
  },
  {
    title: "Gifting Strategies",
    description:
      "Advises on gifting strategies to reduce the overall size of the taxable estate, including annual gifting limits, lifetime gifting, and charitable gifts that benefit both the donor and the recipient.",
  },
  {
    title: "Generation-Skipping Planning",
    description:
      "Helps plan for the transfer of wealth to grandchildren or other generations, minimizing generation-skipping transfer taxes (GSTT) and ensuring the preservation of family wealth.",
  },
  {
    title: "Life Insurance Strategies",
    description:
      "Uses life insurance policies as part of estate planning to provide liquidity for paying estate taxes, debts, or other expenses, ensuring that heirs do not have to liquidate valuable assets to cover these costs.",
  },
  {
    title: "Legal Documentation and Will Creation",
    description:
      "Assists with creating wills, power of attorney documents, living wills, and healthcare directives, ensuring that your estate plan reflects your wishes and avoids probate issues.",
  },
];

const WhyYouNeedCards = [
  {
    title: "Preservation of Wealth",
    description:
      "Estate and inheritance tax planning ensures that more of your assets are preserved for future generations, rather than being significantly reduced by taxes.",
  },
  {
    title: "Smooth Wealth Transfer",
    description:
      "Proper planning allows for a seamless transfer of wealth, avoiding delays, disputes, or complications that could arise without an estate plan.",
  },
  {
    title: "Reduced Family Burden",
    description:
      "By minimizing estate taxes and ensuring that your heirs are financially secure, you reduce the burden on family members during an already emotional and stressful time.",
  },
  {
    title: "Charitable Giving",
    description:
      "Strategically incorporating charitable donations can reduce taxes while benefiting causes you care about, creating a legacy that aligns with your values.",
  },
  {
    title: "Avoid Probate",
    description:
      "With the right estate planning tools, such as trusts, your estate can avoid the lengthy and costly probate process, allowing for faster distribution of assets to heirs.",
  },
  {
    title: "Peace of Mind",
    description:
      "Knowing that your estate plan is in place, reflects your wishes, and will be executed as intended provides peace of mind for both you and your family members.",
  },
];

const OurApproachCards = [
  {
    heading: "Comprehensive Estate Review",
    description:
      "We begin by thoroughly reviewing your assets, liabilities, and goals to create a customized estate plan that minimizes taxes, protects wealth, and ensures smooth asset distribution.",
  },
  {
    heading: "Personalized Tax Strategies",
    description:
      "Based on your financial situation, we develop personalized tax-saving strategies, including gifting, trusts, and charitable contributions, to optimize the transfer of wealth.",
  },
  {
    heading: "Trust and Will Preparation",
    description:
      "We help create legally binding wills and trusts that reflect your desires, ensuring the proper management and distribution of your assets according to your instructions.",
  },
  {
    heading: "Regular Monitoring and Updates",
    description:
      "We provide ongoing monitoring and adjustments to your estate plan, ensuring it remains aligned with your goals, as tax laws and family circumstances change.",
  },
  {
    heading: "Education and Guidance",
    description:
      "We offer guidance on how to navigate the complexities of estate and inheritance tax planning, empowering you to make informed decisions and secure your legacy.",
  },
];

export default function EstateAndInheritanceTaxPlanning() {
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
                    Estate and Inheritance Tax Planning
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <p className="mt-[15px] lg:mt-[26px]">
                      Estate and Inheritance Tax Planning involves strategic
                      planning and management of an individual&apos;s or
                      family&apos;s wealth to minimize the tax burden on their
                      estate upon death and ensure a smooth transfer of assets
                      to heirs. This service helps individuals structure their
                      estates to minimize estate taxes, optimize asset
                      distribution, and ensure that their wealth is passed on
                      according to their wishes. Effective planning can
                      significantly reduce the financial impact on
                      beneficiaries, maximize the value of inherited assets, and
                      prevent legal disputes.
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
                    title="Why You Need Estate and Inheritance Tax Planning"
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

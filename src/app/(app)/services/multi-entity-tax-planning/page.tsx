import React from "react";
import Image from "next/image";
import FSCard from "@/components/services/FSCard";

const advisoryCards = [
  {
    title: "C Corporation",
  },
  {
    title: "S Corporation",
  },
  {
    title: "Schedule C",
  },
  {
    title: "Schedule E",
  },
  {
    title: "Schedule F",
  },
  {
    title: "Partnership",
  },
  {
    title: "Farm Rental",
  },
  {
    title: "Individual",
  },
];

export default function MultiEntityTaxPlanning() {
  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
              Multi Entity Tax Planning
            </h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg font-semibold text-black lg:text-xl">
                      Lower Taxes With Multi-Entity Tax Planning
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone&apos;s platform gives you an
                      unprecedented view your clients&apos; taxes for every
                      entity, in every jurisdiction, along with taxes owed and
                      tax savings for both current and future years, visible in
                      one multi-entity consolidated tax calculation. With this
                      complete view of a client&apos;s tax scenario, tax
                      management is easier than ever.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Advisory services are designed to help you reach your
                      business&apos;s financial goals faster. Here are some of
                      the ways we can help you.
                    </p>
                  </div>

                  <div className="m-[35px_0_28px] justify-self-center max-w-[400px] lg:m-[80px_0_77px]">
                    <Image
                      src="/accounting/accounting1.jpg"
                      width={400}
                      height={400}
                      alt="Tax Planning Strategies"
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                      Get a Full View of a Client&apos;s Tax Scenario, Not Just
                      One Form at a Time
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Evaluating one form at a time doesn&apos;t give you a full
                      view of a client&apos;s tax scenario — or allow you to be
                      an effective tax planner. Whether it is flow-through
                      income changing a client&apos;s marginal rate on a 1040 or
                      capital gains affecting how flow-through income and
                      dividends are taxed, complex interdependencies are lost in
                      the traditional focus on forms.
                    </p>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone gives you a holistic view of your
                      client&apos;s tax scenario so you can save them more.
                      Using our proprietary multi-entity consolidated tax
                      calculation, you&apos;ll see taxes and savings across all
                      entities, for any client, with every change in their tax
                      scenario, allowing for more effective tax management than
                      ever before.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Income Optimization for Tax Management
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Dividends, W-2 wages, flow-through income, management fees
                      and all other types of income play a significant role in
                      tax plans. Accountings Zone&apos;s multi-entity tax
                      calculation allows you to shift income to different
                      categories, in different entities, in different
                      jurisdictions to achieve an optimal mix of income for each
                      client scenario.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Form Inputs to Build the Full Scenario
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone tax planning software doesn&apos;t just
                      allow you to create tax plans — you can also estimate a
                      client&apos;s final tax return and make the right
                      recommendations to help lower taxes. Accountings Zone
                      supports hundreds of federal, state and local forms, and
                      more are added every day.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-20 sm:pt-32 lg:pt-12 mb-[18px] lg:mb-[43px]">
                      Uniform Questionnaire
                    </h3>
                    <p className="mt-[15px] lg:mt-[26px]">
                      Accountings Zone simplifies the client experience with
                      smart questionnaires. Your client can answer the fewest
                      number of questions for their current entity and see how
                      an entity change would affect their situation and
                      potentially lower taxes in minutes.
                    </p>
                  </div>

                  <div className="space-y-8 lg:space-y-16">
                    <h3 className="text-lg lg:text-xl font-semibold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                      Supported Entities and Jurisdictions for Tax Plans
                    </h3>
                    <div className="space-y-[15px] lg:space-y-[26px]">
                      <p className="text-lg md:text-base">
                        Accountings Zone supports federal taxes and 52 state and
                        local jurisdictions. The platform covers corporate
                        income tax, individual income tax, franchise tax and
                        excise tax.
                      </p>
                      <p className="text-lg md:text-base">
                        In each of those jurisdictions, we support the following
                        planning entities:
                      </p>
                    </div>

                    <div className="pt-4 lg:pt-6">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {advisoryCards.map((item, index) => (
                          <li key={index}>
                            <FSCard title={item.title} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-sm text-gray-500 lg:text-base">
                      <h3 className="text-lg lg:text-xl font-semibold text-black pt-48 sm:pt-80 lg:pt-40 mb-[18px] lg:mb-[43px]">
                        First-Ever Entity Comparison
                      </h3>
                      <p className="mt-[15px] lg:mt-[26px]">
                        Never before has tax software taken every field from a
                        partnership and translated it to a C corporation. Or
                        moved every field from a Schedule C to an S corporation.
                        Or every field from a C corporation to an S corporation,
                        for every supporting form, in every jurisdiction.
                      </p>
                      <p className="mt-[15px] lg:mt-[26px]">
                        Accountings Zone has created a singular data model
                        across all business entity types to allow you to easily
                        run client scenarios across any entity type when
                        creating a tax plan. With one selection, you’ll see
                        thousands of data points transformed into another
                        entity, so you can make the best recommendation for your
                        clients to help lower taxes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

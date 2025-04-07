"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FSCard from "@/components/services/FSCard";
import ServicesFooter from "@/components/services/ServicesFooter";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqCards = [
  {
    id: "#faq1",
    title: "Working with an Advisor",
  },
  { id: "#faq2", title: "Financial Planning Support" },
  { id: "#faq3", title: "Investment Management Support" },
];

const faqs1 = [
  {
    heading: "How does insufficient accounting hurt my bottom line?",
    description:
      "Many small and mid-sized businesses fail to adequately measure and manage their finances, even though poor financial management is a major cause of business failure. If you don't have good financial practices in place, your business could suffer in a number of ways: Lost revenue, Insufficient tax planning, Missed financial opportunities, Penalties and fines, and Closing your doors",
  },
  {
    heading: "What does the monthly accounting process look like?",
    description:
      "Our monthly accounting process starts with receiving your source documents. Our staff compiles the information and reports back to you with the following to help you take back control of your finances: Make monthly profit and loss statements, Make monthly balance sheets, Perform regular account reconciliation, Offer advice based on your financial statements, tax lanning, and your business's situation. We also include the following services: Business tax work, Sales tax filings, and Audit representation",
  },
  {
    question:
      "What makes you different than other monthly accounting services?",
    description:
      "Our customer service sets our firm apart. We make it our priority to reach out to clients on a consistent basis because we care about the success of your business. Our experienced team of accountants also provide proactive business advice and tax planning, allowing you to maximize your profits. Need to reach out? No problem! Other accountants will bill you by the minute, but a unique benefit that we offer is allowing our clients to contact us as much as they'd like – at no additional cost. Still not convinced that we're different? Contact us to better understand our serices.",
  },
  {
    heading: "Why should I choose monthly accounting over annual accounting?",
    description:
      "If you are looking for an outsourced accounting solution based on price alone, annual accounting may be enough for you. However, if your business is the right fit for monthly accounting services, they provide substantially more value than an annual service. If an accountant only sees your numbers once a year, it's too late to offer advice that would have helped to make that year more profitable – and definitely too late to lower your tax liability for a year that is already over with. Read about the benefits of tax planning and tax projections, two things that an annual accountant can't provide you. You can also know about why you don’t need to work with an annual accountant if you have a monthly accountant. Please note that while we can handle your personal taxes as well if you are a business client of ours, many of our clients still choose to have an annual accountant do their personal taxes.",
  },
  {
    question:
      "Why should I choose a local accounting firm over online accounting?",
    description:
      "There are a variety of pros and cons for every accounting service, and we know that we aren't the best solution for everybody. When you don't know the differences between outsourced accounting options, it's difficult to make the best decision for your business. If you trust other local vendors to help with your operations, why not trust a local accounting firm? Don't automatically go for a name you recognize or the lowest price without doing your research first.",
  },
  {
    question:
      "Why should I choose a local accounting firm over online accounting?",
    description:
      "Trust your gut. If you're already thinking about leaving your current accounting firm, then you're ready to move on: What if I'm making the wrong decision?, I've got too much going on right now, I don't want a new accountant to know that my books are a mess or my taxes have fallen behind, I can't afford a different level of service. Don't forget the necessary steps to move forward once you make your decision. If you'd like, we can help you with the process: Find a new accounting firm, Inform your current accounting firm, Set goals with your new accounting firm.",
  },
  {
    question:
      "Will you help me get caught up on my taxes? Can you file multiple prior years at once?",
    description:
      "Accountings Zone will file multiple years of back taxes for you at once when you come on board. In fact, if you haven't been filing your taxes, we require this. If your taxes are not up-to-date, then your accounting won't be accurate. We want to provide a quality accounting service for you, so we will need to start with a clean slate. After your accountant has the information that they requested from you in your initial strategy sessions, they are dedicated to getting your records caught up and accurate, as well as getting your financial statements and tax returns done. We do back taxes for payroll too! You or your payroll specialist need to be paying taxes and filing payroll returns. If this hasn't been done, you'll need to get your payroll back taxes done. Our software helps us file your old payroll returns. Plus, when we make amendments to your W2s, we can print them and have the final product in your hands as soon as they're done.",
  },
  {
    question:
      "How much does monthly accounting cost? What factors go into the pricing?",
    description:
      "Pricing for our monthly accounting services varies by your company's needs. It is not based on the size of your company, rather your company's accounting activity and the complexity of your financial statements. Our average accounting fee comes out to about $675 per month. Depending on these factors, your fee can range between $500 to $1,000+ per month. We will work with you to arrive at an affordable, fixed monthly fee.",
  },
  {
    question:
      "What do your clients need to provide you with in order to do your job?",
    description:
      "To efficiently help you with your business goals, we require access to your online accounts and source documents, either in electronic or hard copy form. Common documents include, but are not limited to: Business bank and credit card statements, Sales systems (POS), Accounting software, Inventory, and Accounts payable and receivable",
  },
  {
    heading: "Can I do part of my accounting myself?",
    description:
      "We recommend having you handle the day-to-day aspects of your business that need immediate attention, such as paying your bills, and we'll handle the monthly accounting and bookkeeping. Some owners want to continue to handle the bookkeeping portion internally. Accountings Zone allows this, although we don't necessarily encourage it. Before we even consider this option, we would like you to have a professional bookkeeper on staff. Doing your own bookkeeping may hinder you more than it helps you if mistakes occur.",
  },
  {
    heading: "Will you help me if I ever get audited?",
    description:
      "Yes. Audit representation is included in your monthly accounting fee. The only time that we would charge for audit representation is if the audit is for a time period during which you were not our client. Accountings Zone offers agent-level support, meaning that we deal with the IRS agent directly in the case of income tax audits. Almost all of these issues are resolved at the agent level and never need to go to tax court. If we're preparing your monthly sales tax returns, we will also represent you in a sales tax audit.",
  },
];

const faqs2 = [
  {
    heading: "Do you offer financial planning as well?",
    description:
      "Yes! Are you halfway to retirement and need a solid plan? About to change jobs or have a pending marriage or divorce? Saving for a child's education? We will build you a customized financial plan that will help you reach your goals and map out your financial future until age 95, and beyond. Accountings Zone has been recognized six years in a row as one of the “Top 10 Financial Advisors in New York, ” beating out thousands of other wealth management firms. This award was bestowed upon us in recognition of our comprehensive approach to financial planning and our robust investing strategies. We are here to advise you on any aspect of your life that is touched by money. We consider all the topics outlined in the chart, below, to ensure that you have a secure financial future.",
  },
  {
    question:
      "How often will you evaluate my situation and make necessary changes?",
    description:
      "Your financial plan is a living, breathing document. For most of our clients, we update their financial plan each year.",
  },
  {
    heading: "Do you have any tools that can help me track my finances?",
    description:
      "Yes! Our interactive, easy-to-use software solution will allow you to stay on top of your finances as never before. You will be able to see all your bills and money at a glance on your custom Accountings Zone client dashboard. You can effortlessly track your spending and check your account balances in real time. We're committed to keeping your data secure, and use multiple safety measures, like secure encryption. We are serious about security, and work to keep your information protected. To learn more about your Accountings Zone Client Dashboard: Contact Us",
  },
];

const faqs3 = [
  {
    heading: "What is your investment philosophy?",
    description:
      "As independent, fee-only, fiduciary advisors, we have access to thousands of investment solutions and can objectively choose the best investments to help you reach your goals. We partner with the top research firms to thoroughly vet every investment that we recommend for your portfolio. Accountings Zone also uses a disciplined process to add and remove investments from your portfolio, along with rebalancing the mix of stocks and bonds that is right for you. We structure portfolios for the long term, so that you can live your best life – now and in the future. The financial markets have been as unpredictable as ever, so you need a seasoned professional by your side who can build you a resilient portfolio that can adjust for the changing tides and protect your money. Accountings Zone is here for you!",
  },
  {
    question:
      "Does Accountings Zone provide stand-alone comprehensive financial planning?",
    description:
      "Accountings Zone offers both financial planning and investment management. If you want only stand-alone financial planning, then we’re probably not the right fit.",
  },
];

const faqs4 = [
  {
    heading: "How can I get started?",
    description:
      "Finding a top wealth management firm to trust with your money and financial future is just as important as finding a good doctor. You want someone you can trust, who has your best interests at heart, and takes the time to get to know you. Let's get started! Please click on the link to our calendar or call our office at +1-760-686-0609, and our team will set up your initial complimentary consultation. In this meeting, we will review your full financial picture, and evaluate if we are the best financial advisor for you.",
  },
];

export default function FAQ() {
  const router = useRouter();

  return (
    <main>
      <article className="overflow-hidden my-[80px] md:my-[120px] lg:mb-[160px] xl:mb-[210px] mx-8 sm:mx-20 lg:mx-auto p-[40px_0_60px] md:p-[60px_0_80px] lg:p-[100px_0_120px] xl:p-[150px_0_200px]">
        <header className="container mx-auto w-[90%] lg:w-[65%] my-[60px]">
          <div className="container">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl">FAQs</h1>
          </div>
        </header>

        <div className="flex flex-col mt-7 sm:mt-[150px] mx-auto overflow-hidden lg:flex-row lg:justify-between">
          <section className="w-full">
            <div className="lg:max-w-[1100px] mx-auto container">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full order-1 mx-auto lg:order-none">
                  <h2 className="text-2xl lg:text-3xl lg:mt-12 mb-[35px] lg:mb-[66px] font-bold text-black">
                    Hello, how we can help?
                  </h2>

                  <div className="text-sm text-gray-500 lg:text-base">
                    <h3 className="text-base lg:text-lg">
                      Choose a category to quickly find the help you need
                    </h3>
                    <div className="pt-6 lg:pt-12">
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {faqCards.map((item, index) => (
                          <li key={index}>
                            <Link href={item.id}>
                              <FSCard title={item.title} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <FAQSection
                    id="faq1"
                    title="Working with an Advisor"
                    faqs={faqs1}
                  />
                  <FAQSection
                    id="faq2"
                    title="Financial Planning Support"
                    faqs={faqs2}
                  />
                  <FAQSection
                    id="faq3"
                    title="Investment Management Support"
                    faqs={faqs3}
                  />
                  <FAQSection title="Getting Started" faqs={faqs4} />

                  <ServicesFooter text="You still have a question? If you cannot find answer to your question in our FAQ, you can always contact us. We will answer to you shortly!" />

                  <Button
                    onClick={() => router.push("contact")}
                    data-aos="fade"
                    size="lg"
                    className="text-lg rounded-none mt-28 sm:mt-16 lg:mt-4 bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black font-normal uppercase"
                  >
                    CONTACT US
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

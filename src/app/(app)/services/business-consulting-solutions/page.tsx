import React from "react";
import Image from "next/image";
import Slider from "@/components/Slider";

const images = ["/accounting/accounting3.jpg"];

export default function BusinessConsultingSolutions() {
  return (
    <main className="min-h-screen space-y-16">
      <Slider title="Business Consulting Solutions" images={images} />

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-14">
        <section
          id="business-consulting-solutions"
          className="container mx-auto px-8 sm:w-[1300px] flex flex-col md:items-center lg:flex-row gap-20"
        >
          <div className="relative w-full py-10 space-y-1 md:py-14 lg:py-28">
            <h2
              className="mb-4 md:mb-12 text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
              data-aos="fade"
            >
              <span className="text-yellow-500">Business Consulting </span>
              Solutions
            </h2>

            <p
              className="text-base sm:text-lg font-semibold text-gray-900"
              data-aos="fade"
            >
              Are you looking for ways to run your business better?
            </p>
            <p
              className="text-base sm:text-lg font-semibold text-gray-900"
              data-aos="fade"
            >
              Are you unsure about what type of organizational entity is best
              for your business?
            </p>
            <p
              className="text-base sm:text-lg font-semibold text-gray-900"
              data-aos="fade"
            >
              Are you ready to find a consulting partner that can help you with
              strategic planning and initiatives in your business?
            </p>

            <p
              className="text-base sm:text-lg pt-6 text-gray-800"
              data-aos="fade"
            >
              A business plan organizes and documents the strategies you have
              for running and growing your business. You might need it to get a
              loan, to find a partner or investor, or simply to crystalize your
              thoughts.
            </p>
          </div>

          <div
            className="container hidden sm:block mb-10 mx-auto lg:max-w-[480px]"
            data-aos="fade"
          >
            <Image
              src="/accounting/accounting3.jpg"
              alt="About Hero"
              width={1200}
              height={500}
              className="block w-full h-auto"
            />
          </div>
        </section>

        <section id="business-planning" className="container px-8 mx-auto">
          <div className="relative py-10 md:py-14 mx-auto lg:py-28">
            <div
              className="mb-4 md:mb-12 space-y-4 md:space-y-12"
              data-aos="fade"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                <span className="text-yellow-500">Business </span>Planning
              </h2>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                A business plan organizes and documents the strategies you have
                for running and growing your business. You might need it to get
                a loan, to find a partner or investor, or simply to crystalize
                your thoughts.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                There are many parts to a business plan, including:
              </p>
            </div>

            <div className="space-y-6 mb-8 sm:mb-16">
              <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:bg-yellow-50 *:shadow-md *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
                <li data-aos="fade">An executive overview</li>
                <li data-aos="fade">Risk analysis</li>
                <li data-aos="fade">A business model description</li>
                <li data-aos="fade">An organization chart and staffing plan</li>
                <li data-aos="fade">
                  Market opportunities and a competitive analysis
                </li>
                <li data-aos="fade">An operating plan</li>
                <li data-aos="fade">Financial statements and projections</li>
                <li data-aos="fade">And more...</li>
              </ul>
            </div>

            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              Whether you need a comprehensive business plan or just one section
              mentioned above, we can help. We offer services designed to work
              with you, step by step, to create the perfect business plan for
              your organization.
            </p>
          </div>
        </section>
      </div>

      <section
        id="startup-consulting"
        className="overflow-hidden mx-auto px-52 md:py-14 bg-yellow-50 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] shadow-lg"
      >
        <div className="relative py-10 md:py-14 mx-auto lg:py-28">
          <div
            className="mb-4 md:mb-12 space-y-4 md:space-y-12"
            data-aos="fade"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
              data-aos="fade"
            >
              Startup Consulting
            </h2>
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              If you have recently started a business or are thinking of
              starting one in the future, we can provide our expertise. Working
              with a financial professional from the beginning of your business
              venture nearly doubles the chances of your success.
            </p>
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              There are literally hundreds of things to take care of with a new
              business, and we can help take some of that burden off of your
              hands. Here are just a few things that need to be covered during
              your startup phase that are related to compliance or financial
              requirements:
            </p>
          </div>

          <div className="space-y-6 mb-8 sm:mb-16">
            <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:bg-yellow-50 *:shadow-lg *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
              <li data-aos="fade">
                Determine the best type of entity for legal and tax purposes
              </li>
              <li data-aos="fade">
                Select an accounting system, such as QuickBooks
              </li>
              <li data-aos="fade">
                File papers with local, state, and federal agencies to set up
                your business
              </li>
              <li data-aos="fade">
                If you will be using eCommerce, select a shopping cart
              </li>
              <li data-aos="fade">Acquire a federal ID number from the IRS</li>
              <li data-aos="fade">
                Acquire the necessary business licenses and permits
              </li>
              <li data-aos="fade">
                Open a new bank account, merchant account, and credit cards
              </li>
              <li data-aos="fade">
                Determine what insurance you should carry to protect yourself
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <h3
              className="mb-3 md:mb-8 text-lg text-gray-900 md:text-xl lg:text-2xl font-semibold"
              data-aos="fade"
            >
              If you hire employees:
            </h3>

            <div>
              <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:shadow-lg *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
                <li data-aos="fade">
                  Register with the IRS and the state agencies
                </li>
                <li data-aos="fade">
                  Secure accounting, legal, IT, and HR counsel
                </li>
                <li data-aos="fade">Select a payroll system</li>
                <li data-aos="fade">
                  Identify sales tax requirements and register with your state
                  and local agencies
                </li>
                <li data-aos="fade">Acquire Worker&apos;s Compensation</li>
                <li data-aos="fade">Fulfill any investor requirements</li>
                <li data-aos="fade">Set up benefits and a time off policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10">
        <section
          id="annual-budgeting"
          className="container px-8 mx-auto overflow-hidden max-w-[1300px] py-10 md:py-16"
        >
          <div className="relative py-10 md:py-14 mx-auto lg:py-28">
            <div
              className="mb-4 md:mb-12 space-y-4 md:space-y-12"
              data-aos="fade"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
                data-aos="fade"
              >
                Annual<span className="text-yellow-500"> Budgeting</span>
              </h2>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                Budgeting can sound restrictive, which is why we prefer the term
                “Profit Planning.” It&apos;s really the same thing: the ultimate
                goal is to help you realize your profit goals by tracking
                spending and sales, avoiding overspending, and making sure you
                have the revenue volume to cover your overhead expenses.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                Our budgeting services include:
              </p>
            </div>

            <div className="space-y-6 mb-8 sm:mb-16">
              <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:bg-yellow-50 *:shadow-md *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
                <li data-aos="fade">
                  Preparing a 12-month budget that includes revenue and expense
                  goals based on your chart of accounts
                </li>
                <li data-aos="fade">
                  Monthly reporting of budget versus actual variances to
                  increase your accountability
                </li>
                <li data-aos="fade">
                  A quarterly review of actual versus budgeted amounts and an
                  analysis of over and under accounts, including actions to take
                  to stem any issues or shortfalls
                </li>
                <li data-aos="fade">
                  An optional capital budget based on balance sheet accounts and
                  new capital acquisitions
                </li>
              </ul>
            </div>

            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              Please contact us if you would like to discuss our budgeting, or
              rather Profit Planning, services.
            </p>
          </div>
        </section>
      </div>

      <section
        id="entity-selection"
        className="overflow-hidden mx-auto px-52 py-10 bg-yellow-50 rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] shadow-lg"
      >
        <div className="relative py-10 md:py-14 mx-auto lg:py-28">
          <div
            className="mb-4 md:mb-12 space-y-4 md:space-y-12"
            data-aos="fade"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl font-semibold"
              data-aos="fade"
            >
              Entity Selection
            </h2>
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              Many factors should go into the decision of choosing the best
              entity type for your business. Each entity type has different
              legal and tax advantages and disadvantages. The most common
              choices for type of entity are:
            </p>
          </div>

          <div className="space-y-6 mb-8 sm:mb-16">
            <ul className="grid grid-cols-1 text-base md:text-lg text-gray-900 *:p-4 *:bg-yellow-50 *:shadow-lg *:rounded-lg sm:grid-cols-2 lg:grid-cols-2 sm:gap-8">
              <li data-aos="fade">Sole proprietor</li>
              <li data-aos="fade">Limited Liability Company (LLC)</li>
              <li data-aos="fade">Partnership</li>
              <li data-aos="fade">C Corporation</li>
              <li data-aos="fade">S Corporation</li>
              <li data-aos="fade">Nonprofit</li>
            </ul>
          </div>

          <div className="mx-auto space-y-1 md:space-y-3">
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              We can advise you of the options available to your situation
              and/or circumstances, plus help you get started with business
              filing requirements.
            </p>
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              As your business grows, it may outgrow your original choice of
              entity. We can help you evaluate the right choice of entity for
              the phase your business is in today and help you re-organize if a
              change is determined to be the best course of action.
            </p>
            <p
              className="text-base sm:text-lg font-semibold text-gray-700"
              data-aos="fade"
            >
              Contact us to get started on entity selection services.
            </p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden mx-auto container max-w-[1300px] py-10 md:py-14">
        <section
          id="management-consulting"
          className="container px-8 mx-auto overflow-hidden max-w-[1300px] py-10 md:py-14"
        >
          <div className="relative py-10 md:py-14 mx-auto lg:py-28">
            <div
              className="mb-4 md:mb-12 space-y-2 md:space-y-6"
              data-aos="fade"
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl mx-auto lg:text-4xl font-semibold"
                data-aos="fade"
              >
                Management Consulting
              </h2>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                With our management consulting services, we typically work with
                a senior executive on a specific project or on a retainer basis.
                In many cases, it can be extremely valuable to simply have an
                educated, unbiased outside view at your disposal.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                The goal of our management consulting services is to improve
                your business performance, often through profitability or other
                measurable results.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                Feel free to contact us to find out more about our management
                consulting services.
              </p>
            </div>
            <div
              className="space-y-2 md:space-y-6"
              data-aos="fade"
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl mx-auto lg:text-4xl font-semibold"
                data-aos="fade"
              >
                Strategic Planning
              </h2>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                Our strategic planning services help your organization evaluate
                or re-focus your goals, resources, and energy.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                We help you create a vision statement and a mission statement so
                that you have a solid foundation to build upon. We then work
                with you to set goals and objectives, including how to measure
                progress through metrics you select.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                From there, we help you create your action plan as well as set
                up accountability and a periodic progress check. When your
                employees, customers, vendors, investors, and other stakeholders
                clearly understand and are in alignment with the business’s
                objectives, you have the best opportunity to succeed.
              </p>
              <p
                className="text-base sm:text-lg font-semibold text-gray-700"
                data-aos="fade"
              >
                Let us know how we can help you develop your strategic plan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

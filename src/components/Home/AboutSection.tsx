"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="flex flex-wrap px-8 container lg:ws-2/3 mx-auto flex-col items-center md:flex-row">
      <div className="mb-14 w-full ml-auto md:w-1/2">
        <h2
          className="mb-4 md:mb-8 font-semibold tracking-widest text-sm lg:text-base text-[#fbc710] uppercase fade-in"
        >
          ABOUT US
        </h2>
        <h3
          className="mb-6 sm:mb-14 text-2xl tracking-[0.02em] font-bold sm:text-3xl lg:text-4xl fade-in"
        >
          Guided by integrity, trust, and client-centricity our values drive
          everything we do.
        </h3>

        <div className="mb-6 max-w-[700px] sm:mb-14 fade-in">
          <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-8">
            <li>
              <h4 className="font-bold text-lg">Integrity</h4>
              <p className="text-gray-500">
                Uphold high ethical standards and act with honesty,
                transparency, and professionalism in all your interactions.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-lg">Expertise</h4>
              <p className="text-gray-500">
                Stay up-to-date with industry trends, regulations, and best
                practices to offer informed advice to your clients.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-lg">Trust and Confidentiality</h4>
              <p className="text-gray-500">
                Understand the importance of trust and confidentiality in your
                client relationships.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-lg">Long-Term Relationships</h4>
              <p className="text-gray-500">
                Build long-term relationships with your clients based on trust,
                open communication, and mutual respect.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-lg">Objectivity</h4>
              <p className="text-gray-500">
                Provide unbiased advice that is based on thorough analysis,
                research, and a comprehensive understanding of your
                clients&apos; financial situations.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-lg">Accountability</h4>
              <p className="text-gray-500">
                Monitor progress, review strategies, and make adjustments as
                needed to help clients stay on track towards their financial
                goals.
              </p>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => router.push("about")}
          className="text-lg rounded-none bg-[#fbc710] hover:bg-[#e2b512] duration-300 text-black font-normal uppercase fade-in"
          size="lg"
        >
          LEARN MORE
        </Button>
      </div>

      <div className="w-full mx-auto md:w-1/2 lg:w-5/12">
        <div className="relative mx-auto max-w-lg">
          <Image
            src="/about/about-section.jpg"
            width="426"
            height="573"
            alt="About Us Section"
            className="max-w-full h-auto fade-in"
          />
        </div>
        {/* <div className="relative">
          <blockquote className="max-w-[330px] top-16 lg:top-10 left-10 lg:left-20 xl:lefts-[100px] xl:ml-[140px] md:max-w-[360px] md:mx-auto m-0 md:pr-[130px] pr-[100px] italic text-gray-800 relative pl-[70px] sm:pl-4 before:content-[''] before:absolute before:-left-6 lg:before:-left-24 before:top-[10px] lg:before:top-[-15px] before:w-[83px] before:h-[50px] lg:before:h-[62px] before:bg-no-repeat before:bg-[url('/quote.svg')]">
            "If you will be coping someone, you will never be the best"
          </blockquote>
          <cite className="-top-[120px] lg:-top-[150px] -left-[70px] sm:-left-[10px] md:-left-[20px] lg:-left-[50px] lg:px[76px] lg:py-[79px] px-[46px] py-[109px] text-2xl text-white relative pl-[94px] before:content-[''] before:absolute lg:before:top-10 before:left-16 lg:before:left-10 before:w-[100px] lg:before:w-[150px] before:h-[70%] lg:before:h-full before:border-[4px] before:border-solid before:border-[#fbc710] before:border-r-0">
            Paul. Designer
          </cite>
        </div> */}
      </div>
    </section>
  );
}

"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ChevronRight, CheckCircle, Users, Briefcase, Award, Target, ArrowRight } from "lucide-react"
import "@/styles/animations.css"
import { Button } from "@/components/ui/button"

// Dynamically import the AboutSection component with SSR disabled
const AboutSection = dynamic(() => import("@/components/Home/AboutSection"), {
  ssr: false,
})

const taxPlanningCards = [
  {
    title: "Financial Accounting",
    description: "Crafting accurate financial statements, maintaining ledgers, and offering payroll services.",
    icon: <Briefcase className="h-10 w-10 text-[#fbc710]" />,
  },
  {
    title: "Bookkeeping Services",
    description: "Ensuring seamless reconciliation, real-time reporting, cloud based bookkeeping solutions.",
    icon: <CheckCircle className="h-10 w-10 text-[#fbc710]" />,
  },
  {
    title: "Tax Planning",
    description: "Optimizing taxes with strategic planning, compliance, and advisory tailored to your needs.",
    icon: <Target className="h-10 w-10 text-[#fbc710]" />,
  },
  {
    title: "Business Advisory",
    description: "Providing expert guidance in financial strategy, risk mgt, and performance optimization.",
    icon: <Award className="h-10 w-10 text-[#fbc710]" />,
  },
  {
    title: "Regulatory Compliance",
    description: "Helping businesses navigate complex legal requirements with ease and efficiency.",
    icon: <CheckCircle className="h-10 w-10 text-[#fbc710]" />,
  },
  {
    title: "Financial Reporting",
    description: "Helping businesses navigate complex legal requirements with ease and efficiency.",
    icon: <Briefcase className="h-10 w-10 text-[#fbc710]" />,
  },
]

const ourClientsCard = [
  { title: "Small and Medium Enterprises (SMEs)" },
  { title: "Startups" },
  { title: "Corporations" },
  { title: "Non-Profit Organizations" },
  { title: "Individual Professionals" },
]

const ourCommitmentsCard = [
  { title: "Delivering exceptional service with integrity and professionalism." },
  { title: "Continuously innovating to meet the dynamic needs of the financial landscape." },
  { title: "Empowering our clients to make sound financial decisions." },
]

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export default function AboutContent() {
  return (
    <main className="bg-background">
      <article className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.header
          className="mb-16 md:mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          custom={0}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 inline-block px-4 py-1.5 text-sm font-medium bg-[#fbc710] text-black rounded-full">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">About Accountings Zone</h1>
            <div className="w-24 h-1 bg-[#fbc710] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to Accountings Zone, your trusted partner in financial management, bookkeeping, tax planning, and
              business advisory services. Established with the goal of simplifying complex financial processes, we pride
              ourselves on delivering customized solutions that empower businesses and individuals to achieve their
              financial goals.
            </p>
          </div>
        </motion.header>

        <motion.div initial="hidden" animate="visible" variants={fadeInVariants} custom={1} className="mb-24">
          <AboutSection />
        </motion.div>

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} custom={2} className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <div className="text-sm font-medium px-3 py-1 bg-[#fbc710] text-black rounded-md inline-block">
                Our Mission
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Driving Financial Success</h2>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="border-none shadow-md bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  To provide accurate, reliable, and innovative financial services that help our clients make informed
                  decisions and drive sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} custom={3} className="mb-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <div className="text-sm font-medium px-3 py-1 bg-[#fbc710] text-black rounded-md inline-block">
                Our Services
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">What We Do</h2>
            <p className="mt-4 text-muted-foreground">At Accountings Zone, we specialize in:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {taxPlanningCards.map((item, index) => (
              <motion.div key={index} initial="hidden" animate="visible" variants={fadeInVariants} custom={index + 4}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:border-[#fbc710]/50">
                  <CardHeader>
                    <div className="mb-4">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} custom={9} className="mb-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <div className="text-sm font-medium px-3 py-1 bg-[#fbc710] text-black rounded-md inline-block">
                Why Us
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team comprises seasoned professionals with in-depth knowledge of accounting, tax laws, and financial strategy.",
                icon: <Users className="h-8 w-8 text-[#fbc710]" />,
              },
              {
                title: "Tailored Solutions",
                description:
                  "We understand that every client is unique. Our services are customized to meet specific needs and goals.",
                icon: <Target className="h-8 w-8 text-[#fbc710]" />,
              },
              {
                title: "Technology-Driven",
                description:
                  "Leveraging the latest tools and software, we ensure accuracy, efficiency, and security in all our processes.",
                icon: <Briefcase className="h-8 w-8 text-[#fbc710]" />,
              },
              {
                title: "Client-Centric Approach",
                description:
                  "Your success is our priority. We build lasting relationships based on trust, transparency, and excellence.",
                icon: <Award className="h-8 w-8 text-[#fbc710]" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                custom={index + 10}
              >
                <Card className="h-full border-none shadow-md bg-background hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 rounded-full bg-[#fbc710]/10">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={fadeInVariants} custom={14} className="mb-24">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <div className="text-sm font-medium px-3 py-1 bg-[#fbc710] text-black rounded-md inline-block">
                Our Focus
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Serve</h2>
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card>
              <CardHeader>
                <CardTitle>We serve a diverse clientele</CardTitle>
                <CardDescription>
                  Our services are tailored to meet the needs of various organizations and individuals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {ourClientsCard.map((client, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-lg">{client.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CardHeader>
                    <CardTitle>At Accountings Zone, we are committed to</CardTitle>
                    <CardDescription>Our core values that drive everything we do.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {ourCommitmentsCard.map((commitment, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-lg">{commitment.title}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <section className="w-full py-16 md:py-20 bg-[#fbc710] text-black rounded-lg">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us on the Journey to Financial Clarity and Growth</h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-black/90">
                Whether you're an entrepreneur, an established business, or an individual seeking financial guidance, 
                Accountings Zone is here to support you every step of the way. Let us help you achieve your financial 
                goals with tailored solutions and expert advice.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="text-sm pt-2 text-black/90">
                <p>Email: support@accountingzone.com | Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

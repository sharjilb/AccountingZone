import { ArrowRight, FileText, Search, Video, BookOpen, HelpCircle, Zap, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SoftwareTutorials() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Tutorials for Software Use
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Our comprehensive software tutorials provide users with detailed guidance on using tax, accounting,
                  and financial management software effectively.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-[#fbc710] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#fbc710]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fbc710] disabled:pointer-events-none disabled:opacity-50">
                  View Tutorials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#fbc710] text-black hover:bg-[#fbc710]/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our comprehensive software tutorials provide users with detailed guidance on using tax, accounting, and
                financial management software effectively.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-3 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Video className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Step-by-Step Videos</h3>
                  <p className="text-muted-foreground">
                    Detailed video walkthroughs for using major accounting platforms with clear instructions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Popular Software Guides</h3>
                  <p className="text-muted-foreground">
                    Comprehensive tutorials for QuickBooks, Xero, FreshBooks, and other leading financial software.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Troubleshooting Support</h3>
                  <p className="text-muted-foreground">
                    Solutions for common technical issues and errors encountered when using financial software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="key-features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                What makes our software tutorials exceptional.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-12 max-w-6xl">
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Video className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Step-by-Step Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Walkthroughs for using major accounting platforms.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <BookOpen className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Popular Software Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Tutorials on QuickBooks, Xero, FreshBooks, and more.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <HelpCircle className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Troubleshooting Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Helping users resolve technical issues.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex items-center justify-center">
                  <Zap className="h-8 w-8 mb-2 text-[#fbc710]" />
                  <CardTitle>Efficiency Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Maximizing software capabilities and productivity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-we-work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our approach to helping you master financial software.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 lg:gap-8 mt-12 max-w-6xl">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Select a Tutorial</h3>
                <p className="text-muted-foreground">Choose a guide for your preferred financial software.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Follow Instructions</h3>
                <p className="text-muted-foreground">Learn through video demonstrations and written guides.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbc710] text-black">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Apply Skills</h3>
                <p className="text-muted-foreground">Use newly acquired knowledge to optimize your workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#fbc710] text-black w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to master financial software?</h2>
            <p className="text-lg text-black/90 max-w-2xl mx-auto">
              Our step-by-step tutorials will help you navigate complex financial software with confidence and
              efficiency.
            </p>
            <Button size="lg" variant="secondary" className="group bg-black text-white hover:bg-black/90">
              Access Tutorials
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="relative z-20 border-b border-purple-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </Link>
          <div className="flex gap-3">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20">Home</Button>
            </Link>
            <Link href="/why-donorconnect">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20">Why DonorConnect</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            The Problem
          </h1>
          <p className="text-gray-400 text-lg">Understanding the donor management challenge nonprofits face</p>
        </div>

        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Sparkles className="h-5 w-5 text-purple-400" />
                  </div>
                  Problem Explained
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nonprofits struggle to track donor information and donation history in one clear, organized system. 
                  This leads to missed follow-ups, poor reporting, and lost funding opportunities.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Many nonprofits rely on spreadsheets, email inboxes, or multiple disconnected systems to manage 
                  their donor relationships. This fragmented approach makes it nearly impossible to get a complete 
                  picture of donor engagement, identify retention risks, or make data-driven decisions about 
                  fundraising strategies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                    <ArrowRight className="h-5 w-5 text-blue-400" />
                  </div>
                  Why This Problem Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  For nonprofits, donor retention is critical to financial sustainability. Research shows that 
                  converting a first-time donor to a second-time donor is one of the biggest challenges in 
                  nonprofit fundraising. Without proper tracking and follow-up systems, organizations lose 
                  valuable donors simply because they can't identify who needs attention or when.
                </p>
                <p className="text-gray-400 mb-4">
                  This problem directly impacts an organization's ability to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Maintain consistent funding streams</li>
                  <li>Build long-term relationships with supporters</li>
                  <li>Demonstrate impact to stakeholders</li>
                  <li>Plan and execute effective fundraising campaigns</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Who Is Affected</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  This problem affects everyone involved in nonprofit operations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><strong className="text-gray-300">Nonprofit staff</strong> who waste time searching for donor information across multiple systems</li>
                  <li><strong className="text-gray-300">Development directors</strong> who can't make informed decisions without complete data</li>
                  <li><strong className="text-gray-300">Donors</strong> who receive inconsistent communication or are contacted at the wrong times</li>
                  <li><strong className="text-gray-300">Organizations</strong> that lose funding opportunities due to poor donor management</li>
                  <li><strong className="text-gray-300">Beneficiaries</strong> who suffer when organizations can't maintain stable funding</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-orange-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">What Happens If Not Solved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Without a solution, nonprofits will continue to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Lose donors due to lack of follow-up and engagement</li>
                  <li>Miss opportunities to convert first-time donors into repeat supporters</li>
                  <li>Waste staff time on manual data entry and searching for information</li>
                  <li>Make fundraising decisions based on incomplete or inaccurate data</li>
                  <li>Struggle to demonstrate impact and maintain donor relationships</li>
                  <li>Face financial instability due to inconsistent funding streams</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">How DonorConnect Is Different</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Unlike generic CRM systems or spreadsheets, DonorConnect is specifically designed for nonprofit 
                  donor retention. Our platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><strong className="text-gray-300">Automatically calculates retention risk</strong> based on giving patterns, helping staff prioritize outreach</li>
                  <li><strong className="text-gray-300">Links donations directly to donors</strong> in one unified system, eliminating data fragmentation</li>
                  <li><strong className="text-gray-300">Provides real-time dashboards</strong> showing key metrics like total donors, donations, and lapsed donors</li>
                  <li><strong className="text-gray-300">Uses AI to summarize donor activity</strong> and support planning decisions, making data actionable</li>
                  <li><strong className="text-gray-300">Focuses on the critical "first-to-second gift" conversion</strong> with built-in workflows and alerts</li>
                </ul>
                <p className="mt-4 text-gray-400">
                  DonorConnect transforms donor management from a reactive task into a proactive strategy for 
                  building lasting donor relationships.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-12">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-purple-500/50 rounded-full">
                Get Started with DonorConnect
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

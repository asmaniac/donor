import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, Shield, Brain } from 'lucide-react'

export default function WhyDonorConnectPage() {
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
            <Link href="/about">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-500/20">About</Button>
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
            Why DonorConnect
          </h1>
          <p className="text-gray-400 text-lg">Understanding our solution and why we built it</p>
        </div>

        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  DonorConnect is a comprehensive donor retention platform that helps nonprofits track donor 
                  information and donation history in one clear, organized system. Our platform solves the 
                  critical "first-to-second gift" conversion problem by providing tools to identify at-risk 
                  donors, track engagement, and automate follow-up workflows.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We built DonorConnect because we saw nonprofits struggling with fragmented donor data and 
                  missing opportunities to build lasting relationships. Our solution brings everything together 
                  in one place, making it easy for staff to see the complete picture of each donor's journey 
                  and take action to improve retention.
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
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>
                  Key Features and Why We Chose Them
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="font-bold text-white mb-2">🎯 Donor Management</h3>
                    <p className="text-gray-400">
                      Complete information is essential for personalized outreach. Each donor profile includes 
                      contact info, giving history, and calculated retention risk metrics.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="font-bold text-white mb-2">💰 Donation Tracking</h3>
                    <p className="text-gray-400">
                      Linking donations directly to donors enables automatic calculation of metrics and ensures 
                      accurate data.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="font-bold text-white mb-2">⚠️ Retention Risk Calculation</h3>
                    <p className="text-gray-400">
                      Automatic risk scoring helps staff prioritize which donors need attention based on 
                      giving patterns.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="font-bold text-white mb-2">🤖 AI-Powered Insights</h3>
                    <p className="text-gray-400">
                      AI summarizes donor activity and supports planning decisions, transforming raw data into 
                      actionable insights.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="font-bold text-white mb-2">📊 Real-Time Dashboard</h3>
                    <p className="text-gray-400">
                      Instant visibility into key metrics helps track organizational health and fundraising 
                      progress at a glance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
                    <Shield className="h-5 w-5 text-cyan-400" />
                  </div>
                  Challenges We Expected and How We Planned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                    <h3 className="font-bold text-white mb-2">✅ Data Accuracy</h3>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-gray-300">Challenge:</strong> Ensuring donation data accurately updates donor metrics
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">Solution:</strong> Database transactions automatically recalculate metrics atomically.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                    <h3 className="font-bold text-white mb-2">🔐 User Authentication</h3>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-gray-300">Challenge:</strong> Securing the platform while keeping it easy to use
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">Solution:</strong> Session-based auth with HTTP-only cookies for better security.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                    <h3 className="font-bold text-white mb-2">📈 Scalability</h3>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-gray-300">Challenge:</strong> Building a system that can handle growing data
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">Solution:</strong> PostgreSQL, Prisma ORM, and pagination for performance.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20">
                    <h3 className="font-bold text-white mb-2">🧠 AI Integration</h3>
                    <p className="text-gray-400 mb-2">
                      <strong className="text-gray-300">Challenge:</strong> Making AI features useful and responsible
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">Solution:</strong> Focused on specific use cases with clear documentation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
            <Card className="relative border-green-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-purple-500/20 border border-green-500/30">
                    <Brain className="h-5 w-5 text-green-400" />
                  </div>
                  System Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-white mb-3 text-lg">📄 Pages</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      <li><strong className="text-gray-300">Home:</strong> Landing page with app overview and navigation</li>
                      <li><strong className="text-gray-300">About:</strong> Problem explanation and impact</li>
                      <li><strong className="text-gray-300">Why DonorConnect:</strong> Solution rationale and planning</li>
                      <li><strong className="text-gray-300">Dashboard:</strong> Summary metrics from database</li>
                      <li><strong className="text-gray-300">Donors:</strong> List of all donors with search and filtering</li>
                      <li><strong className="text-gray-300">Donations:</strong> List of all donations linked to donors</li>
                      <li><strong className="text-gray-300">AI Policy:</strong> Documentation of AI usage and safeguards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-3 text-lg">💾 Data Structure</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                      <li><strong className="text-gray-300">Organizations:</strong> Multi-tenant support</li>
                      <li><strong className="text-gray-300">Users:</strong> Staff members with role-based access</li>
                      <li><strong className="text-gray-300">Donors:</strong> Complete profiles with metrics</li>
                      <li><strong className="text-gray-300">Donations:</strong> Linked to donors and campaigns</li>
                      <li><strong className="text-gray-300">Sessions:</strong> User authentication with expiration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-12">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-purple-500/50 rounded-full">
                Start Using DonorConnect
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

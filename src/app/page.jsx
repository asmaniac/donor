import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Users, Gift, TrendingUp, Heart, BarChart3, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-purple-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </div>
          <div className="flex items-center gap-1 bg-slate-800/50 p-1 rounded-lg border border-purple-500/20">
            <Link href="/about">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">About</Button>
            </Link>
            <Link href="/why-donorconnect">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Why</Button>
            </Link>
            <Link href="/ai-policy">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">AI Policy</Button>
            </Link>
            <Link href="/evidence">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Evidence</Button>
            </Link>
            <Link href="/reflection">
              <Button variant="ghost" size="sm" className="h-8 px-3 text-xs text-gray-300 hover:text-white hover:bg-purple-500/30 border border-transparent hover:border-purple-500/30">Reflection</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="h-8 px-4 text-xs bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-medium ml-1">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-purple-300" />
            <span className="text-purple-300 text-sm font-semibold">Welcome to DonorConnect</span>
          </div>
          
          <h1 className="text-7xl font-black bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
            Donor Management Reimagined
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 font-medium leading-relaxed">
            Nonprofits struggle to track donor information and donation history in one clear, organized system.
          </p>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            DonorConnect provides a comprehensive platform to manage donors, track donations, and improve retention—all in one beautiful place.
          </p>
          
          <Link href="/login">
            <Button size="lg" className="text-lg px-12 py-7 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-2xl shadow-purple-500/50 text-white font-bold rounded-full">
              Start Free Today
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative border-0 shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">Donor Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Centralize all your donor information in one accessible, searchable database.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative border-0 shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">Track Donations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Record, organize, and analyze all donations with powerful insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative border-0 shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">Boost Retention</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Identify at-risk donors and improve retention with data-driven insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Started in Seconds</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/dashboard" className="group">
              <Card className="border-purple-500/20 shadow-lg bg-gradient-to-br from-purple-900/40 to-slate-900/40 hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white group-hover:text-purple-300 transition">Dashboard</CardTitle>
                    <BarChart3 className="h-6 w-6 text-purple-400 group-hover:scale-125 transition" />
                  </div>
                  <CardDescription className="text-gray-400">View your organization's overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-purple-400/30 text-purple-300 hover:bg-purple-500/20 group-hover:border-purple-400/60">
                    Go to Dashboard →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/donors" className="group">
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-blue-900/40 to-slate-900/40 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white group-hover:text-blue-300 transition">Donors</CardTitle>
                    <Users className="h-6 w-6 text-blue-400 group-hover:scale-125 transition" />
                  </div>
                  <CardDescription className="text-gray-400">Manage your donor database</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-blue-400/30 text-blue-300 hover:bg-blue-500/20 group-hover:border-blue-400/60">
                    View Donors →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/donations" className="group">
              <Card className="border-cyan-500/20 shadow-lg bg-gradient-to-br from-cyan-900/40 to-slate-900/40 hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white group-hover:text-cyan-300 transition">Donations</CardTitle>
                    <Heart className="h-6 w-6 text-cyan-400 group-hover:scale-125 transition" />
                  </div>
                  <CardDescription className="text-gray-400">Track all donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 group-hover:border-cyan-400/60">
                    View Donations →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

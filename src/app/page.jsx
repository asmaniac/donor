import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Users, Gift, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-purple-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </div>
          <div className="flex gap-4">
            <Link href="/about">
              <Button variant="ghost" className="hover:text-purple-600">About</Button>
            </Link>
            <Link href="/why-donorconnect">
              <Button variant="ghost" className="hover:text-purple-600">Why DonorConnect</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/50">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-12 w-12 text-purple-600" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              DonorConnect
            </h1>
          </div>
          <p className="text-2xl text-gray-700 mb-6 font-medium">
            Nonprofits struggle to track donor information and donation history in one clear, organized system.
          </p>
          <p className="text-2xl text-gray-700 mb-10 font-medium">
            DonorConnect provides a comprehensive platform to manage donors, track donations, and improve retention—all in one place.
          </p>
          <Link href="/login">
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl shadow-purple-500/50">
              Start Using DonorConnect
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/30">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-900">Dashboard</CardTitle>
              </div>
              <CardDescription>View your organization's overview</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700">
                  Go to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/30">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-900">Donors</CardTitle>
              </div>
              <CardDescription>Manage your donor database</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Link href="/donors">
                <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700">
                  View Donors
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/30">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
              <div className="flex items-center gap-3">
                <Gift className="h-6 w-6 text-purple-600" />
                <CardTitle className="text-purple-900">Donations</CardTitle>
              </div>
              <CardDescription>Track all donations</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Link href="/donations">
                <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700">
                  View Donations
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

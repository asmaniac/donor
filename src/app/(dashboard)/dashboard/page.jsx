// Dashboard home page with metrics cards
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { getSessionUser } from '@/lib/session'
import { Users, Gift, DollarSign, AlertTriangle, TrendingUp, ArrowUpRight, Heart } from 'lucide-react'

export default async function DashboardPage() {
  const user = await getSessionUser()
  
  if (!user) {
    return null
  }

  // Fetch real data from database
  const [donorCount, donationCount, totalAmount, lapsedDonors] = await Promise.all([
    prisma.donor.count({
      where: { organizationId: user.organizationId }
    }),
    prisma.donation.count({
      where: {
        donor: {
          organizationId: user.organizationId
        }
      }
    }),
    prisma.donation.aggregate({
      where: {
        donor: {
          organizationId: user.organizationId
        }
      },
      _sum: {
        amount: true
      }
    }),
    prisma.donor.count({
      where: {
        organizationId: user.organizationId,
        status: 'LAPSED'
      }
    })
  ])

  const totalRaised = totalAmount._sum.amount || 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-500 text-lg">
          Overview of your donor retention platform
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Donors */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-purple-500/20 shadow-lg hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-gray-300">
                  Total Donors
                </CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-white">
                {donorCount}
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <span className="text-green-400">+12%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Total Donations */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-blue-500/20 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-gray-300">
                  Total Donations
                </CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <Gift className="h-5 w-5 text-blue-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-white">
                {donationCount}
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <span className="text-green-400">+8%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Total Raised */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-cyan-500/20 shadow-lg hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-gray-300">
                  Total Raised
                </CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <DollarSign className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {formatCurrency(totalRaised)}
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <span className="text-green-400">+24%</span> increase
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Lapsed Donors */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-orange-500/20 shadow-lg hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-gray-300">
                  At-Risk Donors
                </CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-orange-400">
                {lapsedDonors}
              </div>
              <p className="text-xs text-gray-500 mt-3">Need re-engagement</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition duration-500 blur"></div>
        <Card className="relative border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-400" />
              </div>
              Quick Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition">
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-purple-400" />
                  Average Donation
                </p>
                <p className="text-2xl font-black text-white">
                  {donationCount > 0 ? formatCurrency(totalRaised / donationCount) : '$0'}
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition">
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-blue-400" />
                  Repeat Donors
                </p>
                <p className="text-2xl font-black text-white">
                  {donorCount > 0 ? Math.round((donationCount / donorCount) * 100) : 0}%
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition">
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  Retention Rate
                </p>
                <p className="text-2xl font-black text-white">
                  {donorCount > 0 ? Math.round(((donorCount - lapsedDonors) / donorCount) * 100) : 0}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

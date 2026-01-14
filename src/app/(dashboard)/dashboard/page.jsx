// Dashboard home page with metrics cards
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { getSessionUser } from '@/lib/session'
import { Users, Gift, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react'

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
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Overview of your donor retention platform
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Donors */}
        <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Donors
              </CardTitle>
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-purple-700">
              {donorCount}
            </div>
            <p className="text-xs text-gray-500 mt-2">Active in your database</p>
          </CardContent>
        </Card>

        {/* Total Donations */}
        <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Donations
              </CardTitle>
              <Gift className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-purple-700">
              {donationCount}
            </div>
            <p className="text-xs text-gray-500 mt-2">All-time donations recorded</p>
          </CardContent>
        </Card>

        {/* Total Raised */}
        <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Raised
              </CardTitle>
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              {formatCurrency(totalRaised)}
            </div>
            <p className="text-xs text-gray-500 mt-2">Lifetime giving total</p>
          </CardContent>
        </Card>

        {/* Lapsed Donors */}
        <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-50/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Lapsed Donors
              </CardTitle>
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-orange-600">
              {lapsedDonors}
            </div>
            <p className="text-xs text-gray-500 mt-2">Need re-engagement</p>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info Card */}
      <Card className="border-purple-200 shadow-lg bg-gradient-to-r from-purple-50 to-purple-100/50">
        <CardHeader>
          <CardTitle className="text-purple-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Quick Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Average Donation</p>
              <p className="text-lg font-semibold text-purple-700">
                {donationCount > 0 ? formatCurrency(totalRaised / donationCount) : '$0'}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Donors with Multiple Gifts</p>
              <p className="text-lg font-semibold text-purple-700">
                {donorCount > 0 ? Math.round((donationCount / donorCount) * 100) : 0}%
              </p>
            </div>
            <div>
              <p className="text-gray-600">Retention Rate</p>
              <p className="text-lg font-semibold text-purple-700">
                {donorCount > 0 ? Math.round(((donorCount - lapsedDonors) / donorCount) * 100) : 0}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

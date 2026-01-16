// Admin Settings Page - Admin Only
import { getSessionUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Users, Database, Settings as SettingsIcon } from 'lucide-react'

export default async function SettingsPage() {
  const user = await getSessionUser()
  
  // Require authentication
  if (!user) {
    redirect('/login')
  }

  // Require admin role
  if (user.role !== 'ADMIN') {
    redirect('/dashboard')
  }

  // Get organization stats
  const [userCount, donorCount, donationCount] = await Promise.all([
    prisma.user.count({
      where: { organizationId: user.organizationId }
    }),
    prisma.donor.count({
      where: { organizationId: user.organizationId }
    }),
    prisma.donation.count({
      where: { organizationId: user.organizationId }
    })
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your organization settings and view system statistics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Organization Stats */}
        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-lg">Organization Stats</CardTitle>
            </div>
            <CardDescription>Current data in your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Users</span>
                <span className="font-semibold text-purple-700">{userCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Donors</span>
                <span className="font-semibold text-purple-700">{donorCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Donations</span>
                <span className="font-semibold text-purple-700">{donationCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-lg">User Management</CardTitle>
            </div>
            <CardDescription>Manage organization users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Currently, user management is handled through the database. 
              Future versions will include a user management interface.
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• Add new users via database</p>
              <p>• Update user roles in Prisma Studio</p>
              <p>• User interface coming soon</p>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-lg">System Settings</CardTitle>
            </div>
            <CardDescription>Configure system preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Integration</span>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database</span>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                  Connected
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Authentication</span>
                <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">
                  Session-based
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Badge */}
      <Card className="border-purple-300 bg-gradient-to-r from-purple-50 to-purple-100">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-700" />
            <CardTitle className="text-lg text-purple-900">Admin Access</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-purple-800">
            You are viewing this page as an <strong>ADMIN</strong> user. 
            This page is only accessible to users with the ADMIN role. 
            Staff members will be redirected to the dashboard.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

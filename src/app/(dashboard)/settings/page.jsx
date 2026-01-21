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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Admin Settings
        </h1>
        <p className="mt-2 text-gray-400">
          Manage your organization settings and view system statistics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Organization Stats */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <Database className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Organization Stats</CardTitle>
                  <CardDescription className="text-gray-400">Current data in your system</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Users</span>
                  <span className="font-semibold text-purple-300">{userCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Donors</span>
                  <span className="font-semibold text-purple-300">{donorCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Donations</span>
                  <span className="font-semibold text-purple-300">{donationCount}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-white">User Management</CardTitle>
                  <CardDescription className="text-gray-400">Manage organization users</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 mb-4">
                Currently, user management is handled through the database. 
                Future versions will include a user management interface.
              </p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• Add new users via database</p>
                <p>• Update user roles in Prisma Studio</p>
                <p>• User interface coming soon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Settings */}
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
                  <SettingsIcon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <CardTitle className="text-white">System Settings</CardTitle>
                  <CardDescription className="text-gray-400">Configure system preferences</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">AI Integration</span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Database</span>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                    Connected
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Authentication</span>
                  <span className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    Session-based
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Admin Badge */}
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
        <Card className="relative border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <Shield className="h-5 w-5 text-purple-400" />
              </div>
              <CardTitle className="text-white">Admin Access</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">
              You are viewing this page as an <span className="font-bold text-purple-300">ADMIN</span> user. 
              This page is only accessible to users with the ADMIN role. 
              Staff members will be redirected to the dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

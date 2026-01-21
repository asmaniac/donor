'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Sparkles, Gift } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function DonationsPage() {
  const router = useRouter()
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchDonations()
  }, [])

  const fetchDonations = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/donations')
      if (!response.ok) throw new Error('Failed to fetch donations')
      
      const data = await response.json()
      setDonations(data.donations || [])
      setError('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Donations
          </h1>
          <p className="text-gray-400 mt-2">Track all donations</p>
        </div>
        <Link href="/donations/new">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-medium">
            <Plus className="mr-2 h-4 w-4" />
            Add Donation
          </Button>
        </Link>
      </div>

      {/* Error State */}
      {error && (
        <Card className="border-red-500/30 bg-red-500/10 backdrop-blur-xl">
          <CardContent className="p-4">
            <p className="text-red-300">Error: {error}</p>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading && (
        <Card className="border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
              <p className="text-gray-400">Loading donations...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Donations List */}
      {!loading && !error && (
        <Card className="border-purple-500/20 shadow-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4 border-b border-purple-500/20">
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <Gift className="h-5 w-5 text-blue-400" />
              </div>
              Donation List
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-purple-500/20 hover:bg-transparent">
                    <TableHead className="font-semibold text-purple-300">Donor Name</TableHead>
                    <TableHead className="font-semibold text-purple-300">Email</TableHead>
                    <TableHead className="font-semibold text-purple-300">Amount</TableHead>
                    <TableHead className="font-semibold text-purple-300">Date</TableHead>
                    <TableHead className="font-semibold text-purple-300">Type</TableHead>
                    <TableHead className="font-semibold text-purple-300">Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.length > 0 ? (
                    donations.map((donation) => (
                      <TableRow key={donation.id} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors smooth-transition">
                        <TableCell className="font-medium text-white">
                          {donation.donor.firstName} {donation.donor.lastName}
                        </TableCell>
                        <TableCell className="text-gray-400">{donation.donor.email || 'N/A'}</TableCell>
                        <TableCell className="font-semibold text-green-400 text-lg">
                          {formatCurrency(donation.amount)}
                        </TableCell>
                        <TableCell className="text-gray-400">{formatDate(donation.date)}</TableCell>
                        <TableCell>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {donation.type}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-400">{donation.method || 'N/A'}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12">
                        <div className="flex flex-col items-center gap-2">
                          <Sparkles className="h-8 w-8 text-purple-400/50" />
                          <p className="text-gray-400">No donations found</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

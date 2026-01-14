'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Sparkles } from 'lucide-react'
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Donations
          </h1>
          <p className="text-gray-600 mt-2">Track all donations</p>
        </div>
        <Link href="/donations/new">
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/50">
            <Plus className="mr-2 h-4 w-4" />
            Add Donation
          </Button>
        </Link>
      </div>

      {/* Error State */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <p className="text-red-700">Error: {error}</p>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <p className="text-gray-600">Loading donations...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Donations List */}
      {!loading && !error && (
        <Card className="border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
            <CardTitle className="text-purple-900">Donation List</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-purple-50 hover:bg-purple-50">
                  <TableHead className="font-semibold text-purple-900">Donor Name</TableHead>
                  <TableHead className="font-semibold text-purple-900">Email</TableHead>
                  <TableHead className="font-semibold text-purple-900">Amount</TableHead>
                  <TableHead className="font-semibold text-purple-900">Date</TableHead>
                  <TableHead className="font-semibold text-purple-900">Type</TableHead>
                  <TableHead className="font-semibold text-purple-900">Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.length > 0 ? (
                  donations.map((donation) => (
                    <TableRow key={donation.id} className="hover:bg-purple-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-900">
                        {donation.donor.firstName} {donation.donor.lastName}
                      </TableCell>
                      <TableCell className="text-gray-600">{donation.donor.email || 'N/A'}</TableCell>
                      <TableCell className="font-semibold text-purple-700 text-lg">
                        {formatCurrency(donation.amount)}
                      </TableCell>
                      <TableCell className="text-gray-600">{formatDate(donation.date)}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-800 border border-purple-200">
                          {donation.type}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-600">{donation.method || 'N/A'}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Sparkles className="h-8 w-8 text-purple-300" />
                        <p>No donations found</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Search, Sparkles } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function DonorsPage() {
  const router = useRouter()
  const [donors, setDonors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchDonors()
  }, [searchTerm])

  const fetchDonors = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (searchTerm) params.append('search', searchTerm)
      
      const response = await fetch(`/api/donors?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch donors')
      
      const data = await response.json()
      setDonors(data.donors || [])
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
            Donors
          </h1>
          <p className="text-gray-600 mt-2">Manage your donor database</p>
        </div>
        <Link href="/donors/new">
          <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/50">
            <Plus className="mr-2 h-4 w-4" />
            Add Donor
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card className="border-purple-200 shadow-md">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search donors by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </CardContent>
      </Card>

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
              <p className="text-gray-600">Loading donors...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Donors List */}
      {!loading && !error && (
        <Card className="border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
            <CardTitle className="text-purple-900">Donor List</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-purple-50 hover:bg-purple-50">
                  <TableHead className="font-semibold text-purple-900">Name</TableHead>
                  <TableHead className="font-semibold text-purple-900">Email</TableHead>
                  <TableHead className="font-semibold text-purple-900">Total Gifts</TableHead>
                  <TableHead className="font-semibold text-purple-900">Total Amount</TableHead>
                  <TableHead className="font-semibold text-purple-900">Risk Level</TableHead>
                  <TableHead className="font-semibold text-purple-900">Last Gift</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donors.length > 0 ? (
                  donors.map((donor) => (
                    <TableRow 
                      key={donor.id} 
                      className="hover:bg-purple-50/50 transition-colors cursor-pointer"
                      onClick={() => router.push(`/donors/${donor.id}`)}
                    >
                      <TableCell className="font-medium text-gray-900">
                        <Link href={`/donors/${donor.id}`} className="hover:text-purple-600 transition-colors">
                          {donor.firstName} {donor.lastName}
                        </Link>
                      </TableCell>
                      <TableCell className="text-gray-600">{donor.email || 'N/A'}</TableCell>
                      <TableCell className="font-medium">{donor.totalGifts}</TableCell>
                      <TableCell className="font-semibold text-purple-700">{formatCurrency(donor.totalAmount)}</TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          donor.retentionRisk === 'HIGH' || donor.retentionRisk === 'CRITICAL' ? 'bg-red-100 text-red-800 border border-red-200' :
                          donor.retentionRisk === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                          donor.retentionRisk === 'LOW' ? 'bg-green-100 text-green-800 border border-green-200' :
                          'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}>
                          {donor.retentionRisk}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-600">{formatDate(donor.lastGiftDate)}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Sparkles className="h-8 w-8 text-purple-300" />
                        <p>No donors found</p>
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

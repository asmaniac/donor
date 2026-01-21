'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Search, Sparkles, Users } from 'lucide-react'
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
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Donors
          </h1>
          <p className="text-gray-400 mt-2">Manage your donor database</p>
        </div>
        <Link href="/donors/new">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-medium">
            <Plus className="mr-2 h-4 w-4" />
            Add Donor
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
        <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search donors by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
              />
            </div>
          </CardContent>
        </Card>
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
              <p className="text-gray-400">Loading donors...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Donors List */}
      {!loading && !error && (
        <Card className="border-purple-500/20 shadow-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4 border-b border-purple-500/20">
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              Donor List
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-purple-500/20 hover:bg-transparent">
                    <TableHead className="font-semibold text-purple-300">Name</TableHead>
                    <TableHead className="font-semibold text-purple-300">Email</TableHead>
                    <TableHead className="font-semibold text-purple-300">Total Gifts</TableHead>
                    <TableHead className="font-semibold text-purple-300">Total Amount</TableHead>
                    <TableHead className="font-semibold text-purple-300">Risk Level</TableHead>
                    <TableHead className="font-semibold text-purple-300">Last Gift</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donors.length > 0 ? (
                    donors.map((donor) => (
                      <TableRow 
                        key={donor.id} 
                        className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors cursor-pointer smooth-transition"
                        onClick={() => router.push(`/donors/${donor.id}`)}
                      >
                        <TableCell className="font-medium text-white">
                          <Link href={`/donors/${donor.id}`} className="hover:text-purple-300 transition-colors">
                            {donor.firstName} {donor.lastName}
                          </Link>
                        </TableCell>
                        <TableCell className="text-gray-400">{donor.email || 'N/A'}</TableCell>
                        <TableCell className="font-medium text-gray-300">{donor.totalGifts}</TableCell>
                        <TableCell className="font-semibold text-green-400">{formatCurrency(donor.totalAmount)}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            donor.retentionRisk === 'HIGH' || donor.retentionRisk === 'CRITICAL' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                            donor.retentionRisk === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            donor.retentionRisk === 'LOW' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                          }`}>
                            {donor.retentionRisk}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-400">{formatDate(donor.lastGiftDate)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12">
                        <div className="flex flex-col items-center gap-2">
                          <Sparkles className="h-8 w-8 text-purple-400/50" />
                          <p className="text-gray-400">No donors found</p>
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

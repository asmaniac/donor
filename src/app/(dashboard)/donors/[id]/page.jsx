'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Sparkles, User } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function DonorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [donor, setDonor] = useState(null)
  const [donations, setDonations] = useState([])
  const [aiSummary, setAiSummary] = useState('')
  const [loadingSummary, setLoadingSummary] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchDonorData()
  }, [params.id])

  const fetchDonorData = async () => {
    try {
      setLoading(true)
      const donorResponse = await fetch(`/api/donors/${params.id}`)
      if (!donorResponse.ok) throw new Error('Failed to fetch donor')
      const donorData = await donorResponse.json()
      setDonor(donorData)

      const donationsResponse = await fetch(`/api/donations?donorId=${params.id}`)
      if (donationsResponse.ok) {
        const donationsData = await donationsResponse.json()
        setDonations(donationsData.donations || [])
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const generateAISummary = async () => {
    try {
      setLoadingSummary(true)
      setError('')
      const response = await fetch('/api/ai/donor-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ donorId: params.id })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate summary')
      }

      setAiSummary(data.summary)
    } catch (err) {
      setError(err.message || 'Failed to generate AI summary')
      console.error('AI Summary Error:', err)
    } finally {
      setLoadingSummary(false)
    }
  }

  if (loading) {
    return (
      <Card className="border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
        <CardContent className="p-12 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-400">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <p>Loading...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !donor) {
    return (
      <div className="p-8 space-y-4">
        <div className="p-4 bg-red-500/10 text-red-300 rounded-lg border border-red-500/30">
          Error: {error || 'Donor not found'}
        </div>
        <Link href="/donors">
          <Button className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">Back to Donors</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/donors">
          <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            {donor.firstName} {donor.lastName}
          </h1>
          <p className="text-gray-400 text-sm">{donor.email || 'No email'}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-4 border-b border-purple-500/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <User className="h-5 w-5 text-purple-400" />
                </div>
                Donor Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="font-medium text-white">{donor.email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                  <p className="font-medium text-white">{donor.phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                  <p className="font-medium text-white">{donor.status}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Retention Risk</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
                    donor.retentionRisk === 'HIGH' || donor.retentionRisk === 'CRITICAL' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                    donor.retentionRisk === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    donor.retentionRisk === 'LOW' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                  }`}>
                    {donor.retentionRisk}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Total Gifts</p>
                  <p className="font-semibold text-purple-300 text-lg">{donor.totalGifts}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Total Amount</p>
                  <p className="font-semibold text-purple-300 text-lg">{formatCurrency(donor.totalAmount)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">First Gift</p>
                  <p className="font-medium text-white">{formatDate(donor.firstGiftDate)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Last Gift</p>
                  <p className="font-medium text-white">{formatDate(donor.lastGiftDate)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
          <Card className="relative border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
            <CardHeader className="pb-4 border-b border-blue-500/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                </div>
                AI-Powered Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {error && (
                <div className="mb-4 p-3 bg-red-500/10 text-red-300 rounded-lg border border-red-500/30 text-sm">
                  {error}
                </div>
              )}
              {aiSummary ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                    <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">{aiSummary}</p>
                  </div>
                  <Button onClick={generateAISummary} variant="outline" size="sm" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20">
                    Regenerate Summary
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Get an AI-powered summary of this donor's activity and recommendations using OpenAI GPT-4.
                  </p>
                  <Button 
                    onClick={generateAISummary} 
                    disabled={loadingSummary}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/50 text-white font-medium"
                  >
                    {loadingSummary ? (
                      <>
                        <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                        Generating with AI...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate AI Summary
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
        <Card className="relative border-green-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader className="pb-4 border-b border-green-500/20">
            <CardTitle className="text-white">Donation History</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {donations.length > 0 ? (
              <div className="space-y-3">
                {donations.map((donation) => (
                  <div key={donation.id} className="flex justify-between items-center p-4 border border-green-500/20 rounded-lg hover:bg-green-500/5 transition-colors group/item">
                    <div>
                      <p className="font-semibold text-lg text-green-300">{formatCurrency(donation.amount)}</p>
                      <p className="text-sm text-gray-400">{formatDate(donation.date)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">{donation.type}</p>
                      <p className="text-sm text-gray-400">{donation.method || 'N/A'}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">No donations recorded yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

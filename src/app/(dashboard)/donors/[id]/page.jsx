'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Sparkles } from 'lucide-react'
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
      const response = await fetch('/api/ai/donor-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ donorId: params.id })
      })

      if (!response.ok) throw new Error('Failed to generate summary')

      const data = await response.json()
      setAiSummary(data.summary)
    } catch (err) {
      setError('Failed to generate AI summary')
    } finally {
      setLoadingSummary(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-600">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <p>Loading...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !donor) {
    return (
      <div className="p-8">
        <p className="text-red-600">Error: {error || 'Donor not found'}</p>
        <Link href="/donors">
          <Button className="mt-4">Back to Donors</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/donors">
          <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {donor.firstName} {donor.lastName}
          </h1>
          <p className="text-gray-600">{donor.email || 'No email'}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
            <CardTitle className="text-purple-900">Donor Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{donor.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{donor.phone || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">{donor.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Retention Risk</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
                  donor.retentionRisk === 'HIGH' || donor.retentionRisk === 'CRITICAL' ? 'bg-red-100 text-red-800 border border-red-200' :
                  donor.retentionRisk === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                  donor.retentionRisk === 'LOW' ? 'bg-green-100 text-green-800 border border-green-200' :
                  'bg-gray-100 text-gray-800 border border-gray-200'
                }`}>
                  {donor.retentionRisk}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Gifts</p>
                <p className="font-semibold text-purple-700">{donor.totalGifts}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-semibold text-purple-700">{formatCurrency(donor.totalAmount)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">First Gift</p>
                <p className="font-medium">{formatDate(donor.firstGiftDate)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Gift</p>
                <p className="font-medium">{formatDate(donor.lastGiftDate)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              AI-Powered Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {aiSummary ? (
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{aiSummary}</p>
                </div>
                <Button onClick={generateAISummary} variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
                  Regenerate Summary
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Get an AI-powered summary of this donor's activity and recommendations.
                </p>
                <Button 
                  onClick={generateAISummary} 
                  disabled={loadingSummary}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/50"
                >
                  {loadingSummary ? (
                    <>
                      <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                      Generating...
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

      <Card className="border-purple-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
          <CardTitle className="text-purple-900">Donation History</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {donations.length > 0 ? (
            <div className="space-y-3">
              {donations.map((donation) => (
                <div key={donation.id} className="flex justify-between items-center p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                  <div>
                    <p className="font-semibold text-lg text-purple-700">{formatCurrency(donation.amount)}</p>
                    <p className="text-sm text-gray-600">{formatDate(donation.date)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{donation.type}</p>
                    <p className="text-sm text-gray-600">{donation.method || 'N/A'}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">No donations recorded yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

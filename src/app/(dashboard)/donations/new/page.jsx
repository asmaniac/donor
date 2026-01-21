'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Gift } from 'lucide-react'
import Link from 'next/link'

export default function NewDonationPage() {
  const router = useRouter()
  const [donors, setDonors] = useState([])
  const [formData, setFormData] = useState({
    donorId: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    type: 'ONE_TIME',
    method: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchDonors()
  }, [])

  const fetchDonors = async () => {
    try {
      const response = await fetch('/api/donors')
      if (!response.ok) throw new Error('Failed to fetch donors')
      const data = await response.json()
      setDonors(data.donors || [])
    } catch (err) {
      setError('Failed to load donors')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)
    
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          donorId: formData.donorId,
          amount: parseFloat(formData.amount),
          date: new Date(formData.date).toISOString(),
          type: formData.type,
          method: formData.method || null,
          notes: formData.notes || null
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to create donation')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/donations')
      }, 1500)
    } catch (err) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <Link href="/donations">
          <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Donations
          </Button>
        </Link>
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Add New Donation
        </h1>
      </div>

      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
        <Card className="relative border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader className="pb-4 border-b border-blue-500/20">
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <Gift className="h-5 w-5 text-blue-400" />
              </div>
              Donation Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {success && (
              <div className="mb-4 p-4 bg-green-500/10 text-green-300 rounded-lg border border-green-500/30">
                ✓ Donation recorded successfully! Redirecting...
              </div>
            )}
            {error && (
              <div className="mb-4 p-4 bg-red-500/10 text-red-300 rounded-lg border border-red-500/30">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="donorId" className="text-gray-300 font-medium">Donor *</Label>
                <select
                  id="donorId"
                  required
                  value={formData.donorId}
                  onChange={(e) => setFormData({ ...formData, donorId: e.target.value })}
                  disabled={isSubmitting}
                  className="flex h-10 w-full rounded-md border border-blue-500/30 bg-slate-800/50 text-white px-3 py-2 text-sm focus:border-blue-400/60 focus:ring-blue-400/50 placeholder-gray-500"
                >
                  <option value="" className="bg-slate-900 text-white">Select a donor</option>
                  {donors.map((donor) => (
                    <option key={donor.id} value={donor.id} className="bg-slate-900 text-white">
                      {donor.firstName} {donor.lastName} {donor.email ? `(${donor.email})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-gray-300 font-medium">Amount ($) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    required
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    disabled={isSubmitting}
                    className="border-blue-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-blue-400/60 focus:ring-blue-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-gray-300 font-medium">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    disabled={isSubmitting}
                    className="border-blue-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-blue-400/60 focus:ring-blue-400/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-gray-300 font-medium">Type *</Label>
                  <select
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-blue-500/30 bg-slate-800/50 text-white px-3 py-2 text-sm focus:border-blue-400/60 focus:ring-blue-400/50"
                  >
                    <option value="ONE_TIME" className="bg-slate-900 text-white">One Time</option>
                    <option value="RECURRING" className="bg-slate-900 text-white">Recurring</option>
                    <option value="PLEDGE" className="bg-slate-900 text-white">Pledge</option>
                    <option value="IN_KIND" className="bg-slate-900 text-white">In Kind</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="method" className="text-gray-300 font-medium">Payment Method</Label>
                  <Input
                    id="method"
                    type="text"
                    placeholder="e.g., Credit Card, Check, Wire"
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    disabled={isSubmitting}
                    className="border-blue-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-blue-400/60 focus:ring-blue-400/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-gray-300 font-medium">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  disabled={isSubmitting}
                  rows={3}
                  className="border-blue-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-blue-400/60 focus:ring-blue-400/50"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/50 text-white font-medium" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Recording...' : 'Record Donation'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => router.push('/donations')}
                  disabled={isSubmitting}
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

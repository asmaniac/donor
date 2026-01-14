'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft } from 'lucide-react'
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
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/donations">
          <Button variant="outline" size="sm" className="mb-4 border-purple-200 hover:bg-purple-50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Donations
          </Button>
        </Link>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Add New Donation
        </h1>
      </div>

      <Card className="border-purple-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
          <CardTitle className="text-purple-900">Donation Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {success && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
              ✓ Donation recorded successfully! Redirecting...
            </div>
          )}
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="donorId" className="text-gray-700 font-medium">Donor *</Label>
              <select
                id="donorId"
                required
                value={formData.donorId}
                onChange={(e) => setFormData({ ...formData, donorId: e.target.value })}
                disabled={isSubmitting}
                className="flex h-10 w-full rounded-md border border-purple-200 bg-background px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option value="">Select a donor</option>
                {donors.map((donor) => (
                  <option key={donor.id} value={donor.id}>
                    {donor.firstName} {donor.lastName} {donor.email ? `(${donor.email})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-gray-700 font-medium">Amount ($) *</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-gray-700 font-medium">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type" className="text-gray-700 font-medium">Type *</Label>
                <select
                  id="type"
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  disabled={isSubmitting}
                  className="flex h-10 w-full rounded-md border border-purple-200 bg-background px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="ONE_TIME">One Time</option>
                  <option value="RECURRING">Recurring</option>
                  <option value="PLEDGE">Pledge</option>
                  <option value="IN_KIND">In Kind</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="method" className="text-gray-700 font-medium">Payment Method</Label>
                <Input
                  id="method"
                  type="text"
                  placeholder="e.g., Credit Card, Check, Wire"
                  value={formData.method}
                  onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-gray-700 font-medium">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                disabled={isSubmitting}
                rows={3}
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/50" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Recording...' : 'Record Donation'}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => router.push('/donations')}
                disabled={isSubmitting}
                className="border-purple-200 hover:bg-purple-50"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

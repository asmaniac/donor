'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'

export default function NewDonorPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)
    
    try {
      const response = await fetch('/api/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email || null,
          phone: formData.phone || null,
          address: formData.address || null,
          city: formData.city || null,
          state: formData.state || null,
          zipCode: formData.zipCode || null
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to create donor')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/donors')
      }, 1500)
    } catch (err) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <Link href="/donors">
          <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Donors
          </Button>
        </Link>
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Add New Donor
        </h1>
      </div>

      <div className="group relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
        <Card className="relative border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
          <CardHeader className="pb-4 border-b border-purple-500/20">
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              Donor Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {success && (
              <div className="mb-4 p-4 bg-green-500/10 text-green-300 rounded-lg border border-green-500/30">
                ✓ Donor created successfully! Redirecting...
              </div>
            )}
            {error && (
              <div className="mb-4 p-4 bg-red-500/10 text-red-300 rounded-lg border border-red-500/30">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300 font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    disabled={isSubmitting}
                    className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300 font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    disabled={isSubmitting}
                    className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300 font-medium">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-gray-300 font-medium">Address</Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  disabled={isSubmitting}
                  className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-gray-300 font-medium">City</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    disabled={isSubmitting}
                    className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-gray-300 font-medium">State</Label>
                  <Input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    disabled={isSubmitting}
                    className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-gray-300 font-medium">Zip Code</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    disabled={isSubmitting}
                    className="border-purple-500/30 bg-slate-800/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-medium" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Donor'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => router.push('/donors')}
                  disabled={isSubmitting}
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
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

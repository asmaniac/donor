'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Sparkles } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Success - redirect to dashboard
      const redirectTo = searchParams.get('redirect') || '/dashboard'
      router.push(redirectTo)
      router.refresh()
    } catch (err) {
      setError(err.message || 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-0 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-white/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-3xl font-black">DonorConnect</CardTitle>
        </div>
        <CardDescription className="text-blue-100">
          Sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8">
        {error && (
          <div className="mb-4 rounded-lg bg-red-500/20 p-4 text-sm text-red-300 border border-red-500/30">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="border-purple-500/30 bg-slate-700/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300 font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="border-purple-500/30 bg-slate-700/50 text-white placeholder-gray-500 focus:border-purple-400/60 focus:ring-purple-400/50"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/50 text-white font-bold" 
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 p-5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
          <p className="text-sm text-gray-300 font-bold mb-3">Demo Credentials:</p>
          <p className="text-xs text-gray-400">📧 Email: admin@hopefoundation.org</p>
          <p className="text-xs text-gray-400">🔐 Password: password123</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Suspense fallback={<div className="text-center text-gray-400">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}

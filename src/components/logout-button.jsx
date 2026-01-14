'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST'
      })

      if (response.ok) {
        router.push('/login')
        router.refresh()
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline" 
      size="sm"
      className="border-purple-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}

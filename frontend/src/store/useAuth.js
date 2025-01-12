// useAuth.js
import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()

  const logout = async () => {
    try {
      const token = localStorage.getItem('token')
      
      if (!token) {
        throw new Error('No token found')
      }

      const response = await fetch('http://127.0.0.1:8000/api/logout/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Logout failed')
      }

      // Clear token from storage
      localStorage.removeItem('token')
      
      // Redirect to login
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
      // Still clear token and redirect even if the API call fails
      localStorage.removeItem('token')
      router.push('/login')
    }
  }

  return {
    logout
  }
}
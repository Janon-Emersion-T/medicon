// src/store/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
  }),
  
  actions: {
    async logout() {
      try {
        // Call the logout endpoint
        await axios.post('/api/logout', {}, {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`
          }
        })
        
        // Clear tokens from localStorage
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        
        // Reset store state
        this.accessToken = null
        this.refreshToken = null
        
        // Redirect to login page
        router.push('/login')
      } catch (error) {
        console.error('Logout failed:', error)
        throw error
      }
    }
  }
})
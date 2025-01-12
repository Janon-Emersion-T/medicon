// src/components/LogoutButton.vue
<template>
  <button 
    @click="handleLogout" 
    class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  >
    <span v-if="!isLoading">Logout</span>
    <span v-else>Logging out...</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const isLoading = ref(false)

const handleLogout = async () => {
  isLoading.value = true
  try {
    await authStore.logout()
  } catch (error) {
    // Handle error (e.g., show error message to user)
    console.error('Logout failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
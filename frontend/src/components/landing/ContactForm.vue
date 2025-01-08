// components/ContactForm.vue
<template>
  <div class="bg-white rounded-lg shadow-sm p-6 lg:p-8">
    <h2 class="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Add your form submission logic here
  console.log('Form submitted:', formData)
}
</script>
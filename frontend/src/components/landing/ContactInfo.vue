// components/ContactInfo.vue
<template>
  <div class="bg-white rounded-lg shadow-sm p-6 lg:p-8">
    <h2 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
    <div class="space-y-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Phone</h3>
          <p class="mt-1 text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>

      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Email</h3>
          <p class="mt-1 text-gray-600">contact@example.com</p>
        </div>
      </div>

      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium text-gray-900">Address</h3>
          <p class="mt-1 text-gray-600">
            123 Business Street<br />
            Suite 100<br />
            City, State 12345
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
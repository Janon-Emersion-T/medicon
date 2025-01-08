// components/about/TeamSection.vue
<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our diverse team of experts is passionate about helping businesses succeed.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.id" class="bg-white rounded-lg shadow-md p-6">
          <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
          <p class="text-gray-600 mb-2">{{ member.position }}</p>
          <p class="text-sm text-gray-500">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO & Founder',
    description: 'Visionary leader with 15+ years of experience in business technology.',
    image: '/images/team/john.jpg'
  },
  // Add more team members here
]
</script>
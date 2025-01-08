// components/about/ValueSection.vue
<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="value in values" :key="value.id" class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 text-2xl">{{ value.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    id: 1,
    icon: '🎯',
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Integrity',
    description: 'We build trust through transparency and honest relationships.'
  },
  {
    id: 3,
    icon: '⭐',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.'
  }
]
</script>
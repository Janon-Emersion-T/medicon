// components/about/MissionSection.vue
<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            At our core, we believe in making business management accessible to everyone. Our platform combines cutting-edge technology with user-friendly design to streamline your operations.
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-blue-600 mr-3">✓</span>
              <span>Simplified business operations</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-3">✓</span>
              <span>Innovative technology solutions</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-600 mr-3">✓</span>
              <span>24/7 dedicated support</span>
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <img src="/images/mission.jpg" alt="Our Mission" class="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
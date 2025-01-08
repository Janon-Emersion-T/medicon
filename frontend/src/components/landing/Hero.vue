<template>
  <div class=" min-h-screen">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 z-0 bg-cover bg-center bg-blend-lighten"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4 h-screen flex items-center">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-gray-300 font-boldspace-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empower Your Future With Knowledge
          </h1>
          <p class="text-xl md:text-2xl text-gray-100 max-w-xl">
            Join thousands of students worldwide in their journey to success. 
            Discover courses taught by industry experts and take your skills to the next level.
          </p>
          <!-- <div class="flex flex-wrap gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Get Started
            </button>
            <button class="border-2 border-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
              Learn More
            </button>
          </div> -->
          
          <!-- Stats -->
          <div class="flex gap-8 pt-8">
            <div>
              <p class="text-3xl font-bold">5000+</p>
              <p class="text-gray-300">Students</p>
            </div>
            <div>
              <p class="text-3xl font-bold">100+</p>
              <p class="text-gray-300">Courses</p>
            </div>
            <div>
              <p class="text-3xl font-bold">99%</p>
              <p class="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>

        <!-- Right Content - Image -->
        <div class="hidden lg:block">
          <img 
            src="@/assets/Hero.png" 
            alt="Students learning" 
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/Herobg.jpg'

export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage
    }
  }
}
</script>
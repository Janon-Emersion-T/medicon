<template>
  <Header />
  <div class="min-h-screen bg-white">
    <Hero />
    <WhoWeAre />

    <!-- Core Values Section -->
    <section class="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div class="flex flex-col sm:flex-row items-start sm:items-center mb-4">
            <div class="bg-blue-600 p-3 rounded-full mb-3 sm:mb-0">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="sm:ml-4 text-lg sm:text-xl font-bold text-gray-800">EXCELLENCE</h3>
          </div>
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base">We are dedicated to delivering academic excellence that excels and advances to meet the highest standards of quality and relevance.</p>
        </div>

        <!-- Similar updates for other core value cards -->
      </div>
    </section>

    <!-- Study Sections -->
    <section class="flex flex-col md:grid md:grid-cols-2 gap-0">
      <div class="bg-blue-600 p-6 sm:p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Study at MCNIQBUK</h2>
        <p class="text-white leading-relaxed text-sm sm:text-base">With a focus on preparing students for a globally interconnected world, MCNIQBUK collaborates with international institutions, ensuring our programs align with global standards and best practices. Our graduates are equipped to excel in diverse professional landscapes.</p>
      </div>
      <div class="h-48 sm:h-64 md:h-auto order-1 md:order-2">
        <img :src="Campus" alt="Campus view" class="w-full h-full object-cover" />
      </div>
    </section>

    <section class="flex flex-col md:grid md:grid-cols-2 gap-0">
      <div class="h-48 sm:h-64 md:h-auto">
        <img :src="Campus2" alt="Campus facilities" class="w-full h-full object-cover" />
      </div>
      <div class="bg-blue-600 p-6 sm:p-8 md:p-16 flex flex-col justify-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Student Life at MCNIQBUK</h2>
        <p class="text-white leading-relaxed text-sm sm:text-base">Experience a vibrant campus life that fosters both academic and personal growth. Our state-of-the-art facilities and diverse community create an enriching environment for learning and development.</p>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8">Majors, Minors & Graduate Programs</h2>
      <p class="text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
        At MCNIQBUK, we believe in the transformative power of education. Our commitment is to provide a dynamic and enriching learning experience that empowers individuals to excel in an ever-evolving world.
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div class="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Short Course Programs</h3>
          <p class="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Your Future Starts Here! Explore, Learn, and Achieve with MCNIQBUK. Enriching Minds, Shaping Futures.</p>
          <button class="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-xl sm:text-2xl">→</button>
        </div>
        
        <!-- Similar updates for other program cards -->
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose MCNIQBUK?</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div class="text-center p-4 sm:p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300">
          <div class="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform hover:scale-110 transition-transform duration-300">
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Academic Excellence</h3>
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base">Elevate your educational experience with MCNIQBUK's commitment to academic excellence. Our programs are crafted to meet the highest standards, ensuring a rigorous and intellectually stimulating learning environment.</p>
        </div>

        <!-- Similar updates for other "Why Choose" items -->
      </div>
    </section>

    <!-- Subscribe Section -->
    <section class="relative bg-gray-900 text-white py-12 sm:py-16 md:py-24">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative max-w-7xl mx-auto text-center px-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Your Future, Your Education, Your MCNIQBUK.</h2>
        <h3 class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">Join with us today!</h3>
        <p class="mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">Don't miss out on the chance to be part of a community that values education, innovation, and growth. Subscribe now and be at the forefront of the MCNIQBUK educational journey!</p>
        <button class="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base">
          DISCOVER MORE
        </button>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Campus from '../../assets/Campus.jpg'
import Campus2 from '../../assets/Campus2.jpg'
import Hero from '../../components/landing/Hero.vue'
import WhoWeAre from '../../components/landing/WhoWeAre.vue'
import Header from '../../components/landing/Header.vue'
import Footer from '../../components/landing/Footer.vue'
</script>
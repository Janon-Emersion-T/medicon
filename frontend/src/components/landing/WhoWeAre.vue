<template>
    <section class="relative  pb-12 lg:pb-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <span class="text-red-500 font-medium uppercase tracking-wider">WHO WE ARE</span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Knowledge will bring you the opportunity to make a difference.
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              At MCNIQBUK we strive to provide accessible and world-class education that transforms 
              lives and communities. Our mission is to foster a dynamic learning environment that 
              nurtures critical thinking, creativity, and a passion for lifelong learning.
            </p>
            <button class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md 
              transition duration-300 uppercase text-sm font-medium">
              Discover More
            </button>
          </div>
          
          <!-- Image Section -->
          <div class="relative">
            <div class="bg-sky-500 absolute -bottom-6 -right-6 w-4/5 h-4/5 z-0"></div>
            <img 
              src="@/assets/WhoWeAre.jpg" 
              alt="Team collaborating" 
              class="relative z-10 w-full h-auto rounded-lg shadow-lg"
            />
            
            <!-- Global Perspective Card -->
            <div class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-20 
              max-w-[200px] lg:max-w-[250px]">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-900">Global Perspective</h3>
                <span class="text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                  </svg>
                </span>
              </div>
              <p class="text-sm text-gray-600">
                Our graduates are equipped to excel in diverse professional landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'WhoWeAreSection'
  }
  </script>
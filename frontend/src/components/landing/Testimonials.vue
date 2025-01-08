<template>
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index"
               class="bg-gray-50 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img :src="`/api/placeholder/100/100`" :alt="testimonial.name" class="w-full h-full object-cover" />
              </div>
              <div class="ml-4">
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.location }}</p>
              </div>
            </div>
            <p class="text-gray-700">{{ testimonial.comment }}</p>
            <div class="mt-4 flex text-yellow-400">
              <span v-for="star in 5" :key="star">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London",
      comment: "Outstanding service! The doctors were incredibly professional and caring. The online booking system made everything so convenient."
    },
    {
      name: "Michael Chen",
      location: "Manchester",
      comment: "I've been a patient for over a year now, and the quality of care is consistently excellent. Highly recommended!"
    },
    {
      name: "Emma Thompson",
      location: "Birmingham",
      comment: "The staff is amazing, and the facilities are top-notch. I appreciate how they always follow up after appointments."
    }
  ];
  </script>
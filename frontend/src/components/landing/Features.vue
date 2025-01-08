<template>
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-lg text-gray-600">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" 
               class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-blue-600 text-xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Expert Consultations",
      description: "Connect with experienced healthcare professionals for personalized medical advice and treatment plans."
    },
    {
      icon: "📱",
      title: "Online Booking",
      description: "Easy and convenient appointment scheduling through our digital platform."
    },
    {
      icon: "🏥",
      title: "Specialist Care",
      description: "Access to a wide network of specialized medical professionals and advanced treatments."
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Fast and efficient emergency response with 24/7 support available."
    },
    {
      icon: "📊",
      title: "Health Monitoring",
      description: "Regular health check-ups and continuous monitoring of your well-being."
    },
    {
      icon: "💊",
      title: "Pharmacy Services",
      description: "Direct access to prescribed medications and pharmaceutical consultations."
    }
  ];
  </script>
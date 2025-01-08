<template>
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Solutions for Every Medical Practice
            </h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              Whether you're a small clinic or a large hospital, our solutions adapt to your needs and grow with your practice.
            </p>
            
            <div class="mt-8 space-y-6">
              <div v-for="solution in solutions" :key="solution.title" class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <component :is="solution.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ solution.title }}
                  </h3>
                  <p class="mt-2 text-base text-gray-500">
                    {{ solution.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 relative sm:mt-16 lg:mt-0">
            <div class="lg:pl-8">
              <div class="bg-white rounded-lg shadow-xl overflow-hidden">
                <img class="w-full" src="/solutions-dashboard.svg" alt="Dashboard preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const solutions = [
    {
      title: 'Primary Care Clinics',
      description: 'Streamline daily operations and enhance patient care with our comprehensive suite of tools.',
      icon: 'HomeIcon'
    },
    {
      title: 'Specialty Practices',
      description: 'Customizable workflows and specialized features for your specific medical field.',
      icon: 'AcademicCapIcon'
    },
    {
      title: 'Multi-Location Practices',
      description: 'Unified management system for seamless operations across all your locations.',
      icon: 'OfficeBuildingIcon'
    }
  ]
  </script>
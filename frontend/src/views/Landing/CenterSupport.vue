<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <!-- Hero Section -->
    <div class="bg-blue-600 text-white pt-40">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Become an Approved Assessment Center</h1>
        <p class="text-xl md:text-2xl mb-8">Partner with us to deliver high-quality qualifications and transform lives through education</p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </div>
    </div>

    <!-- Benefits Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Quality Assurance</h3>
            <p>Benefit from our robust quality assurance framework and ongoing support to maintain high standards.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Fast Track Processing</h3>
            <p>Quick and efficient approval process with dedicated support throughout your journey.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Comprehensive Resources</h3>
            <p>Access to extensive teaching materials, assessment tools, and professional development.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Application Process</h2>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 space-y-8 sm:space-y-12">
              <div v-for="(step, index) in applicationSteps" :key="index" 
                   class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {{ index + 1 }}
                </div>
                <div class="flex-grow bg-white p-4 rounded-lg shadow-md">
                  <h3 class="font-semibold mb-2">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <!-- Requirements Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Center Requirements</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Facilities</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Suitable assessment rooms
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                IT infrastructure
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Secure storage facilities
              </li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Staff</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Qualified assessors
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Internal quality assurance
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Administrative support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p class="text-xl mb-8">Contact our team to begin your journey as an approved assessment center</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white text-blue-600 p-6 rounded-lg">
              <h3 class="font-semibold mb-2">Email Us</h3>
              <p>support@example.com</p>
            </div>
            <div class="bg-white text-blue-600 p-6 rounded-lg">
              <h3 class="font-semibold mb-2">Call Us</h3>
              <p>+44 (0) 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/landing/Header.vue'
import Footer from '@/components/landing/Footer.vue'

export default {
  name: 'CenterSupport',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      applicationSteps: [
        {
          title: 'Initial Enquiry',
          description: 'Complete our online application form with your organization details.'
        },
        {
          title: 'Documentation Review',
          description: 'Submit required documentation for our team to review.'
        },
        {
          title: 'Quality Check',
          description: 'Our team conducts a thorough review of your facilities and processes.'
        },
        {
          title: 'Approval & Onboarding',
          description: 'Receive your center approval and begin the onboarding process.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style> 
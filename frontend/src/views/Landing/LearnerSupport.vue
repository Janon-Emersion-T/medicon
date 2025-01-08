<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <!-- Hero Section -->
    <div class="bg-blue-600 text-white pb-20 pt-40">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">Learner Support Services</h1>
        <p class="text-xl text-center max-w-3xl mx-auto">Dedicated to helping you achieve your educational goals with comprehensive support throughout your learning journey.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Support Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Academic Support</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              One-to-one tutoring sessions
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Study skills workshops
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Assignment guidance
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Technical Support</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              24/7 online platform assistance
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Learning management system help
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Digital resource access
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">Well-being Support</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Counseling services
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Mental health resources
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">•</span>
              Stress management workshops
            </li>
          </ul>
        </div>
      </div>

      <!-- How to Access Support -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">How to Access Support</h2>
        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">1</span>
              </div>
              <h4 class="font-semibold mb-2">Register</h4>
              <p class="text-gray-600">Create your account on our learning platform</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">2</span>
              </div>
              <h4 class="font-semibold mb-2">Book a Session</h4>
              <p class="text-gray-600">Schedule your support appointment</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">3</span>
              </div>
              <h4 class="font-semibold mb-2">Attend</h4>
              <p class="text-gray-600">Join your session online or in-person</p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">4</span>
              </div>
              <h4 class="font-semibold mb-2">Follow Up</h4>
              <p class="text-gray-600">Access resources and implement feedback</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="bg-gray-100 rounded-lg p-8">
        <h2 class="text-3xl font-bold mb-8 text-center">Contact Support Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-700 mb-2" for="name">Name</label>
                <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="email">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="message">Message</label>
                <textarea id="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Support Hours</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium">Monday - Friday</h4>
                <p class="text-gray-600">9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h4 class="font-medium">Weekend</h4>
                <p class="text-gray-600">10:00 AM - 2:00 PM</p>
              </div>
              <div class="pt-4">
                <h4 class="font-medium">Emergency Support</h4>
                <p class="text-gray-600">24/7 via our online portal</p>
              </div>
              <div class="pt-4">
                <h4 class="font-medium">Contact Information</h4>
                <p class="text-gray-600">Email: support@learning.com</p>
                <p class="text-gray-600">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/landing/Header.vue';
import Footer from '@/components/landing/Footer.vue';

export default {
  name: 'LearnerSupport',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
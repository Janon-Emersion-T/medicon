<template>
  <header class="fixed w-full top-0 z-50 bg-white shadow-lg">
    <!-- Top Bar - Hidden on mobile -->
    <div class="hidden md:block bg-gray-50 py-2 px-4 border-b">
      <div class="max-w-7xl mx-auto flex flex-wrap gap-2 justify-end">
        <router-link 
          to="/" 
          class="bg-green-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600 transition"
        >
          Home
        </router-link>
        <router-link 
          to="/About" 
          class="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600 transition"
        >
          About Us
        </router-link>
        <router-link 
          to="/contact" 
          class="bg-purple-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600 transition"
        >
          Contact Us
        </router-link>
        <router-link 
          to="/login" 
          class="bg-red-500 text-white px-4 py-1.5 rounded text-sm hover:bg-red-600 transition"
        >
          Login
        </router-link>
      </div>
    </div>

    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center ">
        <div class="flex-shrink-0">
          <router-link to="/">
            <img src="@/assets/MCNIQBUK.png" alt="MCN IQBUK" class="h-16 md:h-20">
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <div v-for="item in navItems" :key="item.title" class="relative group">
            <button class="text-gray-700 hover:text-blue-600 py-2 flex items-center">
              {{ item.title }}
              <svg class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute hidden group-hover:block w-48 bg-white shadow-xl rounded-md py-2 z-50 -left-4">
              <router-link 
                v-for="subItem in item.items" 
                :key="subItem.text" 
                :to="subItem.link" 
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition"
              >
                {{ subItem.text }}
              </router-link>
            </div>
          </div>
          <!-- <router-link 
            to="/qualifications" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            Qualifications
          </router-link> -->

          <router-link 
            to="/center-support" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            Center Support
          </router-link>

          <router-link 
            to="/learner-support" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            Learner Support
          </router-link>

          <!-- <router-link 
            to="/services" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            Services
          </router-link> -->

          <router-link 
            to="/become-a-center" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            Become a Centre
          </router-link>
          <router-link 
            to="/international" 
            class="text-gray-700 hover:text-blue-800 py-2"
          >
            International
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="lg:hidden text-gray-700">
          <svg v-if="!isOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="lg:hidden pb-6">
        <!-- Top Menu Items for Mobile -->
        <div class="space-y-2 mb-4 px-3">
          <router-link 
            to="/" 
            class="w-full block bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition text-left"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="w-full block bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition text-left"
          >
            About Us
          </router-link>
          <router-link 
            to="/contact" 
            class="w-full block bg-purple-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition text-left"
          >
            Contact us
          </router-link>
          <router-link 
            to="/login" 
            class="w-full block bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition text-left"
          >
            Login
          </router-link>
        </div>

        <!-- Regular Navigation Items -->
        <div v-for="item in navItems" :key="item.title" class="py-2">
          <div class="font-medium text-gray-700 px-3 py-2">{{ item.title }}</div>
          <div class="pl-6 space-y-1">
            <router-link 
              v-for="subItem in item.items" 
              :key="subItem.text" 
              :to="subItem.link" 
              class="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              {{ subItem.text }}
            </router-link>
          </div>
        </div>
        <router-link 
          to="/qualifications" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          Qualifications
        </router-link>
        <router-link 
          to="/center-support" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          Center Support
        </router-link>
        <router-link 
          to="/learner-support" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          Learner Support
        </router-link>
        <router-link 
          to="/services" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          Services
        </router-link>
        <router-link 
          to="/become-a-center" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          Become a Centre
        </router-link>
        <router-link 
          to="/international" 
          class="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-md"
        >
          International
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
      navItems: [
        /* {
          title: 'Qualifications',
          items: [
            { text: 'Option 1', link: '/qualifications/option-1' },
            { text: 'Option 2', link: '/qualifications/option-2' },
          ],
        }, */
        /* {
          title: 'Centre Support',
          items: [
            { text: 'Support 1', link: '/centre-support/support-1' },
            { text: 'Support 2', link: '/centre-support/support-2' },
          ],
        }, */
        /* {
          title: 'Learner Support',
          items: [
            { text: 'Learn 1', link: '/learner-support/learn-1' },
            { text: 'Learn 2', link: '/learner-support/learn-2' },
          ],
        }, */
        /* {
          title: 'Services',
          items: [
            { text: 'Service 1', link: '/services/service-1' },
            { text: 'Service 2', link: '/services/service-2' },
          ],
        }, */
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

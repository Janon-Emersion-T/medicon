// ContactPage.vue
<template>
  <div class="min-h-screen bg-gray-50 mt-32">
    <Header />

    <section class="relative bg-blue-900 mt-32">
      <div class="h-72 bg-cover bg-center" style="background-image: url('@/assets/about-banner.jpg');">
        <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 class="text-white text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <ContactHero />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <!-- <ContactMap /> -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../../components/landing/Header.vue'
import Footer from '../../components/landing/Footer.vue'
import ContactHero from '../../components/landing/ContactHero.vue'
import ContactForm from '../../components/landing/ContactForm.vue'
import ContactInfo from '../../components/landing/ContactInfo.vue'
import ContactMap from '../../components/landing/ContactMap.vue'
</script>
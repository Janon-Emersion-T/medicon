// ContactPage.vue
<template>
  <div class="min-h-screen bg-gray-50 mt-32">
    <Header />
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
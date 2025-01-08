<template>
  <div class="bg-gray-100 text-gray-900">
    <Header />

    <section class="relative mt-32">
      <div class="h-72 bg-cover bg-center" style="background-image: url('@/assets/about-banner.jpg');">
        <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 class="text-white text-4xl md:text-6xl font-bold">About MCNIQBUK</h1>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 md:px-12 lg:px-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">Who We Are</h2>
        <p class="text-lg leading-relaxed text-gray-700">
          Medicon International Qualifications Board United Kingdom (MCNIQBUK) is dedicated to providing globally
          recognized qualifications that empower individuals to achieve their educational and career aspirations. Our
          qualifications set a benchmark for excellence and are trusted by institutions and employers worldwide.
        </p>
      </div>
    </section>

    <section class="bg-white py-12 px-4 md:px-12 lg:px-24">
      <div class="grid gap-12 md:grid-cols-2">
        <div class="space-y-6">
          <h3 class="text-xl md:text-2xl font-semibold">Our Mission</h3>
          <p class="text-gray-700 leading-relaxed">
            To create accessible, high-quality qualifications that help individuals reach their full potential, while
            fostering innovation and global standards in education and training.
          </p>
        </div>
        <div>
          <h3 class="text-xl md:text-2xl font-semibold">Our Vision</h3>

          <p class="text-gray-700 leading-relaxed">
            To be a leading international qualifications board that inspires and empowers learners worldwide to achieve
            excellence in their fields of study and work.
          </p>
        </div>
        <!-- <div>
          <img src="@/assets/mission.jpg" alt="Our Mission" class="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        </div> -->
      </div>
    </section>

    <!--<section class="py-12 px-4 md:px-12 lg:px-24 bg-gray-50">
      <div class="grid gap-12 md:grid-cols-2">
         <div>
          <img src="@/assets/vision.jpg" alt="Our Vision" class="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        </div> 
        <div class="space-y-6">
          <h3 class="text-xl md:text-2xl font-semibold">Our Vision</h3>
          
        </div>
      </div>
    </section>-->
    <section class="py-12 px-4 md:px-12 lg:px-24">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold">Our Core Values</h2>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Integrity</h4>
          <p class="text-gray-700">We uphold the highest standards of honesty and ethics in everything we do.</p>
        </div>
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Innovation</h4>
          <p class="text-gray-700">We embrace creativity and forward-thinking solutions to deliver exceptional
            qualifications.</p>
        </div>
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Excellence</h4>
          <p class="text-gray-700">We are committed to achieving and maintaining the highest quality standards.</p>
        </div>
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Diversity</h4>
          <p class="text-gray-700">We value and respect people from all backgrounds and cultures.</p>
        </div>
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Collaboration</h4>
          <p class="text-gray-700">We believe in the power of teamwork to achieve shared goals.</p>
        </div>
        <div class="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 class="text-xl font-semibold mb-3">Lifelong Learning</h4>
          <p class="text-gray-700">We inspire and promote continuous personal and professional growth.</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/landing/Header.vue';
import Footer from '@/components/landing/Footer.vue';

export default {
  name: "AboutMCNIQBUK",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>

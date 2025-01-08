<template>
  <Header />
  <main class="min-h-screen pt-32">
    <!-- Hero Section -->
    <section class="relative bg-blue-600 text-white py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Become an Accredited Assessment Center</h1>
        <p class="text-xl md:text-2xl mb-8">Join our network of prestigious educational centers and help shape the future of professional qualifications</p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Apply Now
        </button>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Become a Center?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-certificate"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Global Recognition</h3>
            <p>Offer internationally recognized qualifications and enhance your institution's reputation.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Comprehensive Support</h3>
            <p>Access dedicated support, training materials, and professional development opportunities.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Business Growth</h3>
            <p>Expand your course offerings and attract more students with our prestigious certifications.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Application Process</h2>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <div class="flex flex-col md:grid md:grid-cols-2 gap-8">
              <div class="bg-gray-50 p-6 rounded-lg">
                <span class="text-blue-600 font-bold text-xl mb-2 block">Step 1</span>
                <h3 class="text-lg font-semibold mb-3">Initial Application</h3>
                <p>Complete our online application form with your institution's details.</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <span class="text-blue-600 font-bold text-xl mb-2 block">Step 2</span>
                <h3 class="text-lg font-semibold mb-3">Documentation Review</h3>
                <p>Submit required documentation for our quality assurance review.</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <span class="text-blue-600 font-bold text-xl mb-2 block">Step 3</span>
                <h3 class="text-lg font-semibold mb-3">Center Inspection</h3>
                <p>Our team will conduct a site visit to verify facilities and procedures.</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <span class="text-blue-600 font-bold text-xl mb-2 block">Step 4</span>
                <h3 class="text-lg font-semibold mb-3">Accreditation</h3>
                <p>Receive your center accreditation and begin offering qualifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Center Requirements</h2>
        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                <p>Qualified staff with relevant experience in assessment and quality assurance</p>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                <p>Suitable premises and facilities for assessment activities</p>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                <p>Robust quality management systems and procedures</p>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                <p>Financial stability and appropriate insurance coverage</p>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3">✓</span>
                <p>Commitment to maintaining high standards of assessment and verification</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <!-- <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p class="text-lg mb-8">Contact our team to begin your journey as an accredited assessment center</p>
          <div class="flex flex-col md:flex-row justify-center gap-4">
            <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Apply Now
            </button>
            <button class="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </section> -->
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/landing/Header.vue';
import Footer from '@/components/landing/Footer.vue';

export default {
  name: "BecomeACenter",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
<template>
    <Header />
    <div class="Qualifications">
      <div class="pt-40">
        <p>Qualifications</p>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Header from '@/components/landing/Header.vue';
  import Footer from '@/components/landing/Footer.vue';
  export default {
    name: "Qualifications",
    components: {
      Header,
      Footer
    }
  };
  </script>
  
  <style scoped>
  .Qualifications {
    text-align: center;
    margin: 50px auto;
  }
  </style>
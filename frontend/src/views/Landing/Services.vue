<template>
    <Header />
    <div class="Services">
      <div class="pt-40">
        <p>Services</p>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Header from '@/components/landing/Header.vue';
  import Footer from '@/components/landing/Footer.vue';
  export default {
    name: "Services",
    components: {
      Header,
      Footer
    }
  };
  </script>
  
  <style scoped>
  .Services {
    text-align: center;
    margin: 50px auto;
  }
  </style>
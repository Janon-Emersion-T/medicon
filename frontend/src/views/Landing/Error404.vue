<template>
  <Header />
  <div class="not-found">
    <div class="pt-40">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/landing/Header.vue';
import Footer from '@/components/landing/Footer.vue';
export default {
  name: "NotFound",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin: 50px auto;
}
</style>
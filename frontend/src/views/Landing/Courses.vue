// pages/courses/index.vue
<template>
    <Header />
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <CourseHero />
        
        <!-- Main Content -->
        <div class="container mx-auto px-4 py-12">
            <!-- Course Categories -->
            <CourseCategories />
            
            <!-- Featured Courses -->
            <FeaturedCourses />
            
            <!-- Course List -->
            <CourseList />
            
            <!-- Why Choose Us -->
            <WhyChooseUs />
            
            <!-- Student Testimonials -->
            <Testimonials />
            
            <!-- Call to Action -->
            <CallToAction />
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../../components/landing/Header.vue'
import Footer from '../../components/landing/Footer.vue'
import CourseHero from '../../components/landing/CourseHero.vue'
import CourseCategories from '../../components/landing/CourseCategories.vue'
import FeaturedCourses from '../../components/landing/FeaturedCourses.vue'
/* import CourseList from '../../components/courses/CourseList.vue'*/
/* import WhyChooseUs from '../../components/courses/WhyChooseUs.vue' */
import Testimonials from '../../components/landing/Testimonials.vue'
import CallToAction from '../../components/landing/CallToAction.vue'
</script>
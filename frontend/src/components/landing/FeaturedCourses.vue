// components/courses/FeaturedCourses.vue
<template>
    <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="course in featuredCourses" :key="course.id" 
                 class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover" />
                    <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {{ course.level }}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">{{ course.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ course.description }}</p>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-gray-500 flex items-center">
                            <ClockIcon class="w-5 h-5 mr-1" />
                            {{ course.duration }}
                        </span>
                        <span class="text-gray-500 flex items-center">
                            <UserGroupIcon class="w-5 h-5 mr-1" />
                            {{ course.students }} students
                        </span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-blue-600">£{{ course.price }}</span>
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ClockIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

const featuredCourses = [
    {
        id: 1,
        title: 'Level 3 Diploma in Business Administration',
        description: 'Comprehensive course covering all aspects of business administration.',
        image: '/images/business-admin.jpg',
        level: 'Level 3',
        duration: '12 months',
        students: '250',
        price: '1,499'
    },
    // Add more courses...
]
</script>
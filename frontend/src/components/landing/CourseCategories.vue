// components/courses/CourseCategories.vue
<template>
    <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Course Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="category in categories" :key="category.id" 
                 class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <div class="flex items-center mb-4">
                    <component :is="category.icon" 
                             class="w-12 h-12 text-blue-600" />
                    <h3 class="text-xl font-semibold ml-4">{{ category.name }}</h3>
                </div>
                <p class="text-gray-600 mb-4">{{ category.description }}</p>
                <ul class="space-y-2">
                    <li v-for="course in category.courses" :key="course" 
                        class="flex items-center text-gray-700">
                        <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                        {{ course }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon, BookOpenIcon, ChartBarIcon, UsersIcon } from '@heroicons/vue/24/outline'

const categories = [
    {
        id: 1,
        name: 'Business Management',
        icon: ChartBarIcon,
        description: 'Develop essential business management skills with our comprehensive courses.',
        courses: ['Business Administration', 'Project Management', 'Leadership & Management']
    },
    {
        id: 2,
        name: 'Health & Social Care',
        icon: UsersIcon,
        description: 'Gain qualifications in health and social care sector.',
        courses: ['Healthcare Management', 'Social Care Practice', 'Mental Health Support']
    },
    {
        id: 3,
        name: 'Education & Training',
        icon: BookOpenIcon,
        description: 'Start your career in education with our certified courses.',
        courses: ['Teaching Assistant', 'Education Management', 'Special Education']
    }
]
</script>

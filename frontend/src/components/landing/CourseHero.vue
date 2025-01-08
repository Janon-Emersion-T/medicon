// components/courses/CourseHero.vue
<template>
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="container mx-auto px-4 py-16 md:py-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">
                        Level 3 Professional Courses
                    </h1>
                    <p class="text-lg md:text-xl mb-8 text-blue-100">
                        Advance your career with our accredited professional qualifications. Learn at your own pace with expert support.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Browse Courses
                        </button>
                        <button class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Free Consultation
                        </button>
                    </div>
                </div>
                <div class="hidden md:block">
                    <img src="" alt="Education illustration" class="w-full max-w-lg mx-auto" />
                </div>
            </div>
        </div>
    </div>
</template>
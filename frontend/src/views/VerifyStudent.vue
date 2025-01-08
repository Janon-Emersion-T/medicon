<template>
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Loading State -->
        <div v-if="loading" class="p-8 text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p class="mt-4 text-gray-600">Loading certificate details...</p>
        </div>
  
        <!-- Error State -->
        <div v-else-if="error" class="p-8 text-center">
          <div class="text-red-600 text-xl mb-4">Certificate Not Found</div>
          <p class="text-gray-600">{{ error }}</p>
          <button 
            @click="$router.push('/')"
            class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Return Home
          </button>
        </div>
  
        <!-- Certificate Details -->
        <div v-else-if="student" class="p-8">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Certificate Verification</h1>
            <p class="text-gray-600">Certificate Number: {{ student.certificate_verification_number }}</p>
          </div>
  
          <!-- QR Code and Basic Info -->
          <div class="flex flex-col md:flex-row gap-8 mb-8">
            <!-- QR Code -->
            <div class="flex-shrink-0">
              <img 
                :src="student.qr_code" 
                alt="QR Code" 
                class="w-48 h-48 object-contain border rounded-lg"
              />
            </div>
  
            <!-- Basic Information -->
            <div class="flex-grow">
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Student Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-600">Full Name</p>
                  <p class="font-medium">{{ student.first_name }} {{ student.last_name }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Candidate Number</p>
                  <p class="font-medium">{{ student.candidate_number }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Date of Birth</p>
                  <p class="font-medium">{{ formatDate(student.date_of_birth) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Gender</p>
                  <p class="font-medium">{{ student.gender }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Degree Information -->
          <div class="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Qualification Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-sm text-gray-600">Degree Type</p>
                <p class="font-medium">{{ student.degree_type }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Degree Name</p>
                <p class="font-medium">{{ student.degree_name }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Degree Provider</p>
                <p class="font-medium">{{ student.degree_provider }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Batch Number</p>
                <p class="font-medium">{{ student.batch_number }}</p>
              </div>
            </div>
          </div>
  
          <!-- Dates -->
          <div class="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Important Dates</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p class="text-sm text-gray-600">Started Date</p>
                <p class="font-medium">{{ formatDate(student.started_date) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Completed Date</p>
                <p class="font-medium">{{ formatDate(student.completed_date) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Awarded Date</p>
                <p class="font-medium">{{ formatDate(student.awarded_date) }}</p>
              </div>
            </div>
          </div>
  
          <!-- Contact Information -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-sm text-gray-600">Email</p>
                <p class="font-medium">{{ student.email }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Phone</p>
                <p class="font-medium">{{ student.phone }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Nationality</p>
                <p class="font-medium">{{ student.nationality }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Address</p>
                <p class="font-medium">{{ student.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'VerifyStudent',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const student = ref(null);
      const loading = ref(true);
      const error = ref(null);
  
      const fetchStudent = async () => {
        try {
          loading.value = true;
          error.value = null;
          const certificateNumber = route.params.certificateNumber;
          const response = await axios.get(`http://127.0.0.1:8000/api/students/verify/${certificateNumber}/`);
          student.value = response.data;
        } catch (err) {
          error.value = 'The certificate number you provided or the QR code you scanned could not be found or verified. Please check the number and try again. For more details. Contact Us';
          console.error('Error fetching student:', err);
        } finally {
          loading.value = false;
        }
      };
  
      const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
      };
  
      onMounted(() => {
        fetchStudent();
      });
  
      return {
        student,
        loading,
        error,
        formatDate,
        router
      };
    }
  };
  </script>
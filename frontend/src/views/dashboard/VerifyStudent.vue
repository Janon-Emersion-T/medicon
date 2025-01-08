<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-600">Loading verification details...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-600">{{ error }}</p>
        <button 
          @click="$router.push('/students')" 
          class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Back to Students
        </button>
      </div>

      <div v-else>
        <h2 class="text-2xl font-bold mb-6">Certificate Verification</h2>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm font-medium text-gray-500">Student Name</p>
              <p class="mt-1">{{ student.first_name }} {{ student.last_name }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Certificate Number</p>
              <p class="mt-1">{{ student.certificate_verification_number }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Degree</p>
              <p class="mt-1">{{ student.degree_type }} in {{ student.degree_name }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Candidate Number</p>
              <p class="mt-1">{{ student.candidate_number }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Started Date</p>
              <p class="mt-1">{{ formatDate(student.started_date) }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Completed Date</p>
              <p class="mt-1">{{ formatDate(student.completed_date) }}</p>
            </div>
            
            <div>
              <p class="text-sm font-medium text-gray-500">Awarded Date</p>
              <p class="mt-1">{{ formatDate(student.awarded_date) }}</p>
            </div>
          </div>

          <!-- QR Code Section -->
          <div class="mt-8 flex justify-center">
            <div class="text-center">
              <p class="text-sm font-medium text-gray-500 mb-2">Certificate QR Code</p>
              <img 
                :src="qrCodeUrl" 
                :alt="'QR Code for ' + student.certificate_verification_number"
                class="mx-auto w-48 h-48 object-contain"
                @error="handleQrCodeError"
              />
            </div>
          </div>
          
          <div class="mt-8">
            <button 
              @click="$router.push('/students')" 
              class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Back to Students
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerifyStudent',
  data() {
    return {
      student: null,
      loading: true,
      error: null,
      qrCodeUrl: null
    };
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },
    async fetchStudentDetails() {
      try {
        const certificateNumber = this.$route.params.certificateNumber;
        const response = await axios.get(`http://127.0.0.1:8000/api/students/verify/${certificateNumber}/`);
        this.student = response.data;
        this.qrCodeUrl = `http://127.0.0.1:8000/backend/qr_codes/${certificateNumber}.png`;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching student details:', error);
        this.error = 'Could not find student with this certificate number';
        this.loading = false;
      }
    },
    handleQrCodeError() {
      console.error('Error loading QR code image');
      this.qrCodeUrl = null;
    }
  },
  mounted() {
    this.fetchStudentDetails();
  }
};
</script>
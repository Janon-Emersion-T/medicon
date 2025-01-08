<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Search Section -->
      <div class="mb-8">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search students..."
          class="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
      </div>
  
      <!-- Students Table -->
      <div class="mt-8 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Number</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="student in filteredStudents" :key="student.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.first_name }} {{ student.last_name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.certificate_verification_number }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.degree_type }} in {{ student.degree_name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        @click="generateCertificate(student)"
                        class="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Generate Certificate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading Modal -->
      <div v-if="isGenerating" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-md w-full">
          <h2 class="text-2xl font-bold mb-6">Generating Certificate</h2>
          <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { jsPDF } from 'jspdf';
  
  export default {
    name: 'CertificateGenerator',
    data() {
      return {
        students: [],
        searchQuery: '',
        isGenerating: false,
      };
    },
    computed: {
      filteredStudents() {
        const query = this.searchQuery.toLowerCase();
        return this.students.filter(student => 
          student.first_name.toLowerCase().includes(query) ||
          student.last_name.toLowerCase().includes(query) ||
          student.certificate_verification_number.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      async fetchStudents() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/students/');
          this.students = response.data;
        } catch (error) {
          console.error('Error fetching students:', error);
          alert('Error fetching students. Please try again.');
        }
      },
      async generateCertificate(student) {
        this.isGenerating = true;
        try {
          // Create new PDF document
          const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
          });
  
          // Load images
          const [logo, signature, qrCode] = await Promise.all([
            this.loadImage(require('@/assets/qbuk.png')),
            this.loadImage(require('@/assets/sign.png')),
            this.loadImage(`http://127.0.0.1:8000/qr_codes/${student.certificate_verification_number}.png`)
          ]);
  
          // Set background
          doc.setFillColor(255, 255, 255);
          doc.rect(0, 0, 210, 297, 'F');
  
          // Add logo
          doc.addImage(logo, 'PNG', 75, 20, 60, 60);
  
          // Add certificate title
          doc.setFontSize(36);
          doc.setFont('helvetica', 'bold');
          doc.text('CERTIFICATE', 105, 100, { align: 'center' });
  
          // Add student name
          doc.setFontSize(24);
          doc.setFont('helvetica', 'normal');
          doc.text(`${student.first_name} ${student.last_name}`, 105, 130, { align: 'center' });
  
          // Add award text
          doc.setFontSize(16);
          doc.text('Has been awarded the', 105, 150, { align: 'center' });
  
          // Add degree details
          doc.setFontSize(20);
          doc.setFont('helvetica', 'bold');
          doc.text(`${student.degree_type} in ${student.degree_name}`, 105, 170, { align: 'center' });
  
          // Add institution
          doc.setFontSize(16);
          doc.setFont('helvetica', 'normal');
          doc.text('Designed by', 105, 190, { align: 'center' });
          doc.setFont('helvetica', 'bold');
          doc.text('Medicon Paramedical College', 105, 200, { align: 'center' });
  
          // Add footer text
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text('Within the Qualifications Board UK Quality Endorsement Scheme guideline', 105, 220, { align: 'center' });
          doc.text('The Certificate is accompanied by a list of modules which confirms the content of the course.', 105, 230, { align: 'center' });
  
          // Add signature
          doc.addImage(signature, 'PNG', 130, 240, 40, 20);
  
          // Add QR code
          doc.addImage(qrCode, 'PNG', 20, 240, 30, 30);
  
          // Add certificate details
          doc.setFontSize(10);
          doc.text(`Awarded Date: ${new Date(student.awarded_date).toLocaleDateString()}`, 20, 280);
          doc.text(`Certificate Verification Number: ${student.certificate_verification_number}`, 20, 285);
          doc.text(`Candidate Number: ${student.candidate_number}`, 20, 290);
          doc.text('Director - Academic', 150, 270);
  
          // Download PDF
          doc.save(`${student.first_name}_${student.last_name}_Certificate.pdf`);
        } catch (error) {
          console.error('Error generating certificate:', error);
          alert('Error generating certificate. Please try again.');
        } finally {
          this.isGenerating = false;
        }
      },
      loadImage(url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        });
      },
    },
    mounted() {
      this.fetchStudents();
    },
  };
  </script>
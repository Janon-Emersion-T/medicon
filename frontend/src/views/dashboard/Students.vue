<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Search, Add Student, and Import Excel section -->
      <div class="flex justify-between items-center">
        <div class="w-1/3">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search students..."
            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        </div>
        <div class="space-x-4">
          <input
            type="file"
            ref="fileInput"
            @change="handleFileUpload"
            accept=".xlsx,.xls"
            class="hidden"
          >
          <button
            @click="$refs.fileInput.click()"
            class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Import Excel
          </button>
          <button
            @click="openModal('create')"
            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add New Student
          </button>
        </div>
      </div>
  
      <!-- Table section (unchanged) -->
      <div class="mt-8 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Number</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="student in filteredStudents" :key="student.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.first_name }} {{ student.last_name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ student.email }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.degree_type }} in {{ student.degree_name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ student.certificate_verification_number }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <button
                        @click="viewStudent(student.certificate_verification_number)"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </button>
                      <button
                        @click="deleteStudent(student.id)"
                        class="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal section (unchanged) -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-2xl w-full">
          <h2 class="text-2xl font-bold mb-6">Add New Student</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">First Name</label>
                <input 
                  type="text" 
                  v-model="formData.first_name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  v-model="formData.last_name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Degree Type</label>
                <select 
                  v-model="formData.degree_type"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="Certificate">Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Degree Name</label>
                <input 
                  type="text" 
                  v-model="formData.degree_name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Started Date</label>
                <input 
                  type="date" 
                  v-model="formData.started_date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Completed Date</label>
                <input 
                  type="date" 
                  v-model="formData.completed_date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Awarded Date</label>
                <input 
                  type="date" 
                  v-model="formData.awarded_date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Certificate Number</label>
                <input 
                  type="text" 
                  v-model="formData.certificate_verification_number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Candidate Number</label>
                <input 
                  type="text" 
                  v-model="formData.candidate_number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
              </div>
            </div>
  
            <div class="flex justify-end space-x-3">
              <button 
                type="button"
                @click="closeModal"
                class="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Import Progress Modal -->
      <div v-if="showImportModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-md w-full">
          <h2 class="text-2xl font-bold mb-6">Importing Students</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span>Processing...</span>
              <span>{{ processedRecords }} / {{ totalRecords }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-indigo-600 h-2 rounded-full"
                :style="{ width: `${(processedRecords / totalRecords) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import * as XLSX from 'xlsx';
  
  export default {
    name: 'Students',
    setup() {
      const router = useRouter();
      return { router };
    },
    data() {
      return {
        students: [],
        searchQuery: '',
        showModal: false,
        showImportModal: false,
        processedRecords: 0,
        totalRecords: 0,
        formData: {
          first_name: '',
          last_name: '',
          email: '',
          degree_type: 'Certificate',
          degree_name: '',
          started_date: '',
          completed_date: '',
          awarded_date: '',
          certificate_verification_number: '',
          candidate_number: '',
        },
      };
    },
    computed: {
      filteredStudents() {
        const query = this.searchQuery.toLowerCase();
        return this.students.filter(student => 
          student.first_name.toLowerCase().includes(query) ||
          student.last_name.toLowerCase().includes(query) ||
          student.email.toLowerCase().includes(query)
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
      openModal(mode) {
        this.showModal = true;
        this.resetForm();
      },
      closeModal() {
        this.showModal = false;
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          first_name: '',
          last_name: '',
          email: '',
          degree_type: 'Certificate',
          degree_name: '',
          started_date: '',
          completed_date: '',
          awarded_date: '',
          certificate_verification_number: '',
          candidate_number: '',
        };
      },
      async submitForm() {
        try {
          await axios.post('http://127.0.0.1:8000/api/students/', this.formData);
          alert('Student created successfully!');
          this.closeModal();
          await this.fetchStudents();
        } catch (error) {
          console.error('Error submitting form:', error);
          alert(error.response?.data?.detail || 'Error saving student. Please try again.');
        }
      },
      viewStudent(certificateNumber) {
        this.router.push(`/verify/${certificateNumber}`);
      },
      async deleteStudent(id) {
        if (confirm('Are you sure you want to delete this student?')) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/students/${id}/`);
            alert('Student deleted successfully!');
            await this.fetchStudents();
          } catch (error) {
            console.error('Error deleting student:', error);
            alert('Error deleting student. Please try again.');
          }
        }
      },
      async handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        try {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const records = XLSX.utils.sheet_to_json(firstSheet);
  
            this.totalRecords = records.length;
            this.processedRecords = 0;
            this.showImportModal = true;
  
            for (const record of records) {
              try {
                await axios.post('http://127.0.0.1:8000/api/students/', {
                  first_name: record['First Name'],
                  last_name: record['Last Name'],
                  email: record['Email'],
                  degree_type: record['Degree Type'],
                  degree_name: record['Degree Name'],
                  started_date: record['Started Date'],
                  completed_date: record['Completed Date'],
                  awarded_date: record['Awarded Date'],
                  certificate_verification_number: record['Certificate Number'],
                  candidate_number: record['Candidate Number'],
                });
                this.processedRecords++;
              } catch (error) {
                console.error('Error importing record:', error);
              }
            }
  
            await this.fetchStudents();
            this.showImportModal = false;
            alert('Import completed successfully!');
          };
          reader.readAsArrayBuffer(file);
        } catch (error) {
          console.error('Error processing file:', error);
          alert('Error processing file. Please check the file format and try again.');
        }
        event.target.value = ''; // Reset file input
      },
      viewStudent(certificateNumber) {
        this.router.push(`/verify/${certificateNumber}`);
      },
    },
    mounted() {
      this.fetchStudents();
    },
  };
  </script>
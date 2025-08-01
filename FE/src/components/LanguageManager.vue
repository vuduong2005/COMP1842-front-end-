<template>
  <div class="container">
    <h1>Language Manager</h1>

    <!-- Form -->
    <form @submit.prevent="addLanguage">
      <input v-model="newLanguage.name" placeholder="Language name" required />
      <input v-model="newLanguage.code" placeholder="Language code" required />
      <button type="submit">Add Language</button>
    </form>

    <!-- Table -->
    <table>
      <thead>
        <tr><th>Name</th><th>Code</th><th>Actions</th></tr>
      </thead>
      <tbody>
        <tr v-for="lang in languages" :key="lang._id">
          <td>{{ lang.name }}</td>
          <td>{{ lang.code }}</td>
          <td>
            <button @click="deleteLanguage(lang._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API = 'http://localhost:3000/languages'
const languages = ref([])
const newLanguage = ref({ name: '', code: '' })

// Load existing languages
const fetchLanguages = async () => {
  const res = await axios.get(API)
  languages.value = res.data
}

const addLanguage = async () => {
  await axios.post(API, newLanguage.value)
  newLanguage.value = { name: '', code: '' }
  fetchLanguages()
}

const deleteLanguage = async (id) => {
  await axios.delete(`${API}/${id}`)
  fetchLanguages()
}

onMounted(fetchLanguages)
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th, td {
  padding: 0.5rem;
  border: 1px solid #ddd;
}
form {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
}
input {
  flex: 1;
}
</style>

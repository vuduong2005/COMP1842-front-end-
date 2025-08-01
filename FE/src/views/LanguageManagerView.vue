<template>
  <div class="ui container" style="max-width: 800px; margin: 2rem auto;">
    <h2 class="ui header">Language Manager</h2>
    <div v-if="successMessage" class="ui positive message">
  {{ successMessage }}
</div>
    <div class="ui form">
      <div class="field">
        <label>Name</label>
        <input v-model="newLanguage.name" type="text" placeholder="Enter language name" />
      </div>
      <div class="field">
        <label>Code</label>
        <input v-model="newLanguage.code" type="text" placeholder="Enter language code" />
      </div>
      <button class="ui primary button" @click="addLanguage">Add Language</button>
    </div>

    <div style="overflow-x: auto;" v-if="languages.length">
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(lang, index) in languages" :key="lang._id">
            <td v-if="editIndex !== index">{{ lang.name }}</td>
            <td v-else>
              <input v-model="editLanguage.name" />
            </td>

            <td v-if="editIndex !== index">{{ lang.code }}</td>
            <td v-else>
              <input v-model="editLanguage.code" />
            </td>

            <td>
              <template v-if="editIndex === index">
                <button class="ui green button" @click="updateLanguage(lang._id)">Save</button>
                <button class="ui yellow button" @click="cancelEdit">Cancel</button>
              </template>
              <template v-else>
                <button class="ui blue button" @click="startEdit(index, lang)">Edit</button>
                <button class="ui red button" @click="deleteLanguage(lang._id)">Delete</button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="ui message">No languages added yet.</div>
  </div>
</template> 

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const languages = ref([])
const newLanguage = ref({ name: '', code: '' })
const editIndex = ref(null)
const editLanguage = ref({ name: '', code: '' })
const successMessage = ref('')  // 🟢 NEW: to hold temporary success messages

// Display success banner
function showMessage(msg) {
  successMessage.value = msg
  setTimeout(() => successMessage.value = '', 3000)  // auto-hide after 3s
}

const fetchLanguages = async () => {
  try {
    const res = await axios.get('http://localhost:3000/languages')
    languages.value = res.data
  } catch (err) {
    console.error('❌ Failed to fetch languages:', err)
  }
}

const addLanguage = async () => {
  try {
    const res = await axios.post('http://localhost:3000/languages', newLanguage.value)
    languages.value.push(res.data)
    newLanguage.value = { name: '', code: '' }
    showMessage('✅ Language added successfully!')
  } catch (err) {
    console.error('❌ Failed to add language:', err)
  }
}

function startEdit(index, lang) {
  editIndex.value = index
  editLanguage.value = { ...lang }
}

function cancelEdit() {
  editIndex.value = null
  editLanguage.value = { name: '', code: '' }
}

async function updateLanguage(id) {
  try {
    const res = await axios.put(`http://localhost:3000/languages/${id}`, editLanguage.value)
    languages.value[editIndex.value] = res.data
    cancelEdit()
    showMessage('✅ Language updated.')
  } catch (err) {
    console.error('❌ Failed to update language:', err)
  }
}

async function deleteLanguage(id) {
  if (!confirm('Are you sure you want to delete this language?')) return

  try {
    await axios.delete(`http://localhost:3000/languages/${id}`)
    languages.value = languages.value.filter(lang => lang._id !== id)
    showMessage('🗑️ Language deleted.')
  } catch (err) {
    console.error('❌ Failed to delete language:', err)
  }
}

onMounted(fetchLanguages)
</script>

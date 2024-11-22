// src/composables/useUsers.js
import { ref } from 'vue'
import axios from 'axios'

export function useUsers() {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchUsers = async () => {
    loading.value = true
    try {
      const response = await axios.get('/api/users')
      users.value = response.data
    } catch (err) {
      error.value = err
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { users, loading, error, fetchUsers }
}

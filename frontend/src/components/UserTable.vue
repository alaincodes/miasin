<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import UserAction from '../components/users/UserAction.vue'
import UserName from '../components/users/UserName.vue'
import UserJob from '../components/users/UserJob.vue'

const users = ref([])

const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users')
    users.value = response.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <UserName :user="user.fullname" :email="user.email" />
          </td>
          <td>
            <UserJob :job="user.job" :country="user.country" />
          </td>
          <td>Purple</td>
          <th>
            <UserAction />
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

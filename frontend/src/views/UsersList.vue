<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users')
        this.users = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>{{ user.fullName }} - {{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

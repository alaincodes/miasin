<script setup>
import { Link } from '@inertiajs/vue3'

const users = defineProps([''])
</script>

<template>
  <div v-for="user in posts" :key="user.id">
    <Link :href="`/posts/${user.id}`">
      {{ user.name }}
    </Link>
    <div>{{ user.email }}</div>
  </div>
</template>

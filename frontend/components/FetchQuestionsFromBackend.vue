<script setup>
const config = useRuntimeConfig()
const { data, pending, error } = await useFetch(`${config.public.API_URL}/api/question`)
</script>

<template>
  <div v-if="pending">Chargement...</div>
  <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
  <div v-else>
    <div v-for="question in data" :key="question.id">
      {{ question.content }}
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
const config = useRuntimeConfig()
const { data, pending, error } = await useFetch(`${config.public.API_URL}/api/question`)

</script>

<template>
  <div v-if="pending">Chargement...</div>
  <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
  <div v-else>
    <div :id="question.id" v-for="question in data" :key="question.id">
      {{ question.content }}
      {{ dayjs().to(question.createdAt) }}
    </div>
  </div>
</template>

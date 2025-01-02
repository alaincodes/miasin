<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
const config = useRuntimeConfig()
const { data, pending, error } = await useFetch(`${config.public.API_URL}/api/question`)
const sortedQuestions = computed(() => {
  return data.value?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})
</script>

<template>
  <div v-if="pending">Chargement...</div>
  <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
  <div v-else class="grid gap-5 md:divide-y md:divide-c-yellow-1">
    <div :id="question.id" v-for="question in sortedQuestions" :key="question.id" class="grid gap-4 p-4 md:px-6 md:py-9">
      <p class="italic"><strong>Anonymous</strong> filed a complaint against <strong>Accused</strong> {{ dayjs().to(question.createdAt) }}</p>
      <Question :question="question.content" :date="question.createdAt" />
    </div>
  </div>
</template>

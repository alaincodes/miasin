<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const route = useRoute()
const questionId = route.params.id
const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.API_URL}/api/question/${questionId}`)
</script>

<template>
  <div>
    <p class="italic"><strong>Anonymous</strong> filed a complaint against <strong>Accused</strong> {{ dayjs().to(dayjs(data.createdAt)) }}</p>
    <Question :question="data.content" />
  </div>
</template>

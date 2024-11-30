<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <span class="loading loading-infinity loading-lg"></span>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useFetch(() => "https://jsonplaceholder.typicode.com/posts/" + route.params.id, { lazy: true })

useSeoMeta({
  title: () => post.value?.title
})
</script>
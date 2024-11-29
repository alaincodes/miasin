<script setup>
  const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
</script>

<template>
  <h1>About page</h1>
  <article v-for="post in posts" :key="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body.slice(0, 1000) }}</p>
    <NuxtLink :to="`/blog/${post.id}`" >Lire la liste</NuxtLink>
  </article>
  <pre>
    {{ posts }}
  </pre>
</template>

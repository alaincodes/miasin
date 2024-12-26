<script setup>
defineProps({
  question: String
})
</script>

<template>
  <code class="p-3 rounded-md bg-c-black-light md:text-xl">{{ question }}</code>
</template>
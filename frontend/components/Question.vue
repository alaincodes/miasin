<script setup>
defineProps({
  question: String
})
</script>

<template>
  <code class="p-3 rounded-md bg-c-black-light text-xl">{{ question }}</code>
</template>
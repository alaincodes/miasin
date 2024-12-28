<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="prose p-3 rounded-md bg-c-black-light text-white md:text-lg">
    <p>{{ question }}</p>
  </div>
</template>
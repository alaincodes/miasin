<script setup>
defineProps({
  country: {
    type: String
  },
  job: {
    type: String
  }
})
</script>

<template>
  <p>{{ country }}</p>
  <br />
  <span class="badge badge-ghost badge-sm">{{ job }}</span>
</template>

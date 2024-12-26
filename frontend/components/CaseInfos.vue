<script setup>
defineProps({
  topics: {
    type: Array,
    required: true,
  },
  accuser: {
    type: String,
    required: true,
  },
  accused: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div v-if="topics.length > 0" class="flex gap-3">
    <p>Topic:</p>
    <ul class="flex flex-wrap gap-1">
      <li v-for="topic in topics">
        <button class="px-3 py-1 bg-c-yellow-1 rounded-3xl text-c-black text-xs">
          {{ topic }}
        </button>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-sm italic">
      <strong>{{ accuser }}</strong> filed a complaint against
      <strong>{{ accused }}</strong>
      on <strong>{{ date }}</strong> at
      <strong>{{ time }}</strong>
    </p>
  </div>
</template>
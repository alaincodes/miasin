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
  },
  guiltyCount: {
    type: Number,
    required: true,
  },
  innocentCount: {
    type: Number,
    required: true,
  },
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
      and <strong>{{ accused }}</strong> has been found
      <span class="font-bold uppercase" :class="guiltyCount > innocentCount ? 'text-c-yellow-1' : 'text-c-green-3'">
        {{ guiltyCount > innocentCount ? "GUILTY" : "INNOCENT" }}
      </span> for now.
    </p>
  </div>
</template>
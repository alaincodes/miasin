<script setup>
  defineProps({
    onGuilty: Function,
    onInnocent: Function,
    accused: String,
    guiltyCount: Number,
    innocentCount: Number
  })
</script>

<template>
  <div class="grid grid-cols-12 items-center gap-y-6 md:gap-0">
    <button @click="onGuilty" class="col-span-6 grid grid-flow-col place-items-center gap-2 py-2 px-3 border border-transparent rounded-xl rounded-r-none duration-300 bg-c-yellow-1 text-c-black hover:bg-yellow-900 hover:border-yellow-900 md:col-span-2">
      Guilty
    </button>
    <button @click="onInnocent" class="col-span-6 grid grid-flow-col place-items-center gap-2 py-2 px-3 border border-transparent rounded-xl rounded-l-none duration-300 bg-c-green-3 text-c-black hover:bg-green-900 hover:border-green-900 md:col-span-2">
      Innocent
    </button>
    <p class="col-span-full text-center md:col-start-6 md:col-span-7 md:text-right">
      <strong>{{ accused }}</strong> is
      <span
        class="font-bold uppercase"
        :class="guiltyCount > innocentCount ? 'text-c-yellow-1' : 'text-c-green-3'"
      >
        {{ guiltyCount > innocentCount ? "GUILTY !!!" : "INNOCENT !!!" }}
      </span>
    </p>
  </div>
</template>
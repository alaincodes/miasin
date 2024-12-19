<script setup>
import { ref, computed } from 'vue'

const guiltyCount = ref(0)
const innocentCount = ref(0)

const finalJudgement = computed(() => {
  if (guiltyCount.value > innocentCount.value) {
    return "GUILTY !!!"
  } else if (guiltyCount.value < innocentCount.value) {
    return "INNOCENT !!!"
  } else {
    return "Deciding..."
  }
})
</script>

<template>
  <div class="container grid grid-cols-1 justify-items-center items-center gap-8 w-9/12 mx-auto p-8">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-3xl font-bold text-cyan-900">Case:</h1>
      <div class="grid gap-6">
        <h2 class="prose text-3xl font-bold text-cyan-900">&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum, excepturi earum minima placeat quam accusantium blanditiis optio odio ut ?&rdquo;</h2>
        <div class="size-24 m-auto">
          <img src="../assets/images/judge.svg" class="w-full h-full" alt="picture of a judge">
        </div>
      </div>

      <div class="flex gap-4">
        <button @click="guiltyCount++" class="grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-red-600 rounded-xl text-red-600 duration-300 hover:bg-red-700 hover:text-white">
          <span>Guilty:</span>
          <span class="text-2xl">{{ guiltyCount }}</span>
        </button>
        <button @click="innocentCount++" class="grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-green-600 rounded-xl text-green-600 duration-300 hover:bg-green-700 hover:text-white">
          <span>Innocent:</span>
          <span class="text-2xl">{{ innocentCount }}</span>
        </button>
      </div>

      <div class="flex flex-col items-center gap-4">
        <p class="text-xl font-bold">Final Jugement:</p>
        <p class="text-5xl font-bold uppercase underline underline-offset-8">{{ finalJudgement }}</p>
      </div>
    </div>

    <button class="grid grid-flow-col place-items-center self-end justify-self-end gap-2 py-2 px-4 border border-slate-600 rounded-xl text-slate-600 duration-300 hover:bg-slate-700 hover:text-white">Next case...</button>
  </div>
</template>

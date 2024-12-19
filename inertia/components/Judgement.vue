<script setup>
import { ref, computed, onMounted } from 'vue'
import VerdictChart from '@/VerdictChart.vue'

const guiltyCount = ref(1)
const innocentCount = ref(1)
const verdictColor = ref("")
// const isGuiltySelected = ref(false)
// const isInnocentSelected = ref(false)

// const toggleGuilty = () => {
//   if (isGuiltySelected.value) {
//     guiltyCount.value -= 1
//   } else {
//     guiltyCount.value += 1
//   }
//   isGuiltySelected.value = !isGuiltySelected.value
// }

// const toggleInnocent = () => {
//   if (isInnocentSelected.value) {
//     innocentCount.value -= 1
//   } else {
//     innocentCount.value += 1
//   }
//   isInnocentSelected.value = !isInnocentSelected.value
// }

const finalJudgement = computed(() => {
  if (guiltyCount.value > innocentCount.value) {
    verdictColor.value = "text-red-500"

    return "GUILTY !!!"
  } else {
    verdictColor.value = "text-green-500"

    return "INNOCENT !!!"
  }
})
</script>

<template>
  <div class="container grid grid-cols-1 justify-items-center items-center gap-8 mx-auto p-8 md:w-9/12">
    <div class="flex flex-col items-center gap-9">
      <h1 class="text-3xl font-bold text-cyan-900">Case: Ending in 1:00 </h1>
      <div class="grid gap-6">
        <h2 class="text-4xl font-bold text-red-800">&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum, excepturi earum minima placeat quam accusantium blanditiis optio odio ut ?&rdquo;</h2>
      </div>

      <div class="grid grid-cols-1 place-items-start justify-items-center gap-6 w-full md:grid-cols-2 md:gap-12">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div class="col-span-full">
            <p class="text-2xl">Ladies and gentlemen of the jury, your duty is to deliberate based on the evidence and the law as I’ve explained it. Your verdict must be impartial and unanimous.</p>
          </div>
          <div class="size-24 col-span-full m-auto md:size-48">
            <img src="../assets/images/themis.webp" class="w-full h-full" alt="picture of a judge">
          </div>
          <button @click="guiltyCount++" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border bg-red-800 rounded-xl text-white duration-300 hover:bg-red-600 hover:text-red-100">
            <span>Guilty</span>
          </button>
          <button @click="innocentCount++" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border bg-green-800 rounded-xl text-white duration-300 hover:bg-green-600 hover:text-green-100">
            <span>Innocent</span>
          </button>
        </div>

        <div class="flex flex-col items-center gap-4 w-full">
          <p class="text-xl font-bold">Final Jugement: <span :class="verdictColor">{{ finalJudgement }}</span></p>
          <VerdictChart :guiltyCount="guiltyCount" :innocentCount="innocentCount" />
        </div>
      </div>
    </div>

    <button class="grid grid-flow-col place-items-center self-end justify-self-end gap-2 py-2 px-4 border border-slate-600 rounded-xl text-slate-600 duration-300 hover:bg-slate-700 hover:text-white">Next case...</button>
  </div>
</template>

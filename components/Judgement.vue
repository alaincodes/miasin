<script setup>
import { computed, ref, onMounted } from 'vue'
import { useFakeContentStore } from '../stores/useFakeContentStore.js'

const fakeContentStore = useFakeContentStore()

const userVote = ref('')

onMounted(() => {
  fakeContentStore.selectFirstCaseIfNeeded()
})

const finalJudgement = computed(() => {
  if (fakeContentStore.selectedCase) {
    const { guiltyCount, innocentCount } = fakeContentStore.selectedCase
    return guiltyCount > innocentCount ? "GUILTY !!!" : "INNOCENT !!!"
  }
  return ''
})

const verdictColor = computed(() => {
  if (fakeContentStore.selectedCase) {
    const { guiltyCount, innocentCount } = fakeContentStore.selectedCase
    return guiltyCount > innocentCount ? "text-red-500" : "text-green-500"
  }
  return ''
})

const voteGuilty = () => {
  if (userVote.value === 'guilty') {
    fakeContentStore.selectedCase.guiltyCount--
    userVote.value = ''
  } else {
    if (userVote.value === 'innocent') {
      fakeContentStore.selectedCase.innocentCount--
    }
    fakeContentStore.selectedCase.guiltyCount++
    userVote.value = 'guilty'
  }
}

const voteInnocent = () => {
  if (userVote.value === 'innocent') {
    fakeContentStore.selectedCase.innocentCount--
    userVote.value = ''
  } else {
    if (userVote.value === 'guilty') {
      fakeContentStore.selectedCase.guiltyCount--
    }
    fakeContentStore.selectedCase.innocentCount++
    userVote.value = 'innocent'
  }
}

const isVoted = computed(() => {
  return userVote.value !== ''
})

const isGuiltyVoted = computed(() => userVote.value === 'guilty')

const isInnocentVoted = computed(() => userVote.value === 'innocent')
</script>

<template>
  <div v-if="fakeContentStore.selectedCase" class="grid grid-cols-1 justify-items-center items-center gap-8 mx-auto md:self-center">
    <div class="flex flex-col items-center gap-9">
      <div class="grid gap-6">
        <h2 class="text-2xl font-bold text-red-800 md:text-3xl">{{ fakeContentStore.selectedCase.message }}</h2>
      </div>

      <div class="grid grid-cols-1 place-items-start justify-items-center gap-6 w-full xl:grid-cols-2 xl:gap-12">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div class="col-span-full">
            <p class="italic font-light text-black/80 md:text-xs">Ladies and gentlemen of the jury, your duty is to deliberate based on the evidence and the law as I’ve explained it. Your verdict must be impartial and unanimous.</p>
          </div>
          <div class="size-24 col-span-full m-auto md:size-48">
            <img src="~/assets/images/themis.webp" class="w-full h-full" alt="picture of a judge" />
          </div>
          <button @click="voteGuilty" :class="{'bg-red-800/40': isGuiltyVoted, 'bg-red-600': !isGuiltyVoted}" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border rounded-xl text-white duration-300">
            <span>Guilty</span>
          </button>
          <button @click="voteInnocent" :class="{'bg-green-800/40': isInnocentVoted, 'bg-green-600': !isInnocentVoted}" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border rounded-xl text-white duration-300">
            <span>Innocent</span>
          </button>
        </div>

        <div class="flex flex-col items-center gap-4 w-full">
          <div>
            <p class="font-bold text-black/80">{{ fakeContentStore.selectedCase.user }} is <span :class="verdictColor">{{ finalJudgement }}</span></p>
          </div>
          <VerdictChart :guiltyCount="fakeContentStore.selectedCase.guiltyCount" :innocentCount="fakeContentStore.selectedCase.innocentCount" />
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center">Charging....</p>
  </div>
</template>

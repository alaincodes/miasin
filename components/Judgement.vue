<script setup>
import { computed, ref, onMounted } from 'vue'
import { useFakeContentStore } from '../stores/useFakeContentStore.js'

const fakeContentStore = useFakeContentStore()

const userVote = ref('') // Peut être 'guilty', 'innocent', ou ''

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

// Fonction pour voter "Guilty"
const voteGuilty = () => {
  if (userVote.value === 'guilty') {
    // Si déjà "Guilty", annuler le vote
    fakeContentStore.selectedCase.guiltyCount--
    userVote.value = ''
  } else {
    // Si ce n'était pas "Guilty", enregistrer le vote
    if (userVote.value === 'innocent') {
      fakeContentStore.selectedCase.innocentCount-- // Annuler le vote innocent
    }
    fakeContentStore.selectedCase.guiltyCount++
    userVote.value = 'guilty'
  }
}

// Fonction pour voter "Innocent"
const voteInnocent = () => {
  if (userVote.value === 'innocent') {
    // Si déjà "Innocent", annuler le vote
    fakeContentStore.selectedCase.innocentCount--
    userVote.value = ''
  } else {
    // Si ce n'était pas "Innocent", enregistrer le vote
    if (userVote.value === 'guilty') {
      fakeContentStore.selectedCase.guiltyCount-- // Annuler le vote guilty
    }
    fakeContentStore.selectedCase.innocentCount++
    userVote.value = 'innocent'
  }
}

// Vérification si l'utilisateur a voté
const isVoted = computed(() => {
  return userVote.value !== '' // True si un vote a été donné
})

// Vérification si l'utilisateur a voté "Guilty"
const isGuiltyVoted = computed(() => userVote.value === 'guilty')

// Vérification si l'utilisateur a voté "Innocent"
const isInnocentVoted = computed(() => userVote.value === 'innocent')
</script>

<template>
  <div v-if="fakeContentStore.selectedCase" class="grid grid-cols-1 justify-items-center items-center gap-8 mx-auto md:self-center">
    <div class="flex flex-col items-center gap-9">
      <div class="grid gap-6">
        <h2 class="text-2xl font-bold text-red-800 md:text-4xl">{{ fakeContentStore.selectedCase.message }}</h2>
      </div>

      <div class="grid grid-cols-1 place-items-start justify-items-center gap-6 w-full xl:grid-cols-2 xl:gap-12">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div class="col-span-full">
            <p class="italic font-light md:text-xs">Ladies and gentlemen of the jury, your duty is to deliberate based on the evidence and the law as I’ve explained it. Your verdict must be impartial and unanimous.</p>
          </div>
          <div class="size-24 col-span-full m-auto md:size-48">
            <img src="~/assets/images/themis.webp" class="w-full h-full" alt="picture of a judge" />
          </div>
          <!-- Bouton "Guilty" -->
          <button @click="voteGuilty" :class="{'bg-red-800/40': isGuiltyVoted, 'bg-red-600': !isGuiltyVoted}" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border rounded-xl text-white duration-300">
            <span>Guilty</span>
          </button>
          <!-- Bouton "Innocent" -->
          <button @click="voteInnocent" :class="{'bg-green-800/40': isInnocentVoted, 'bg-green-600': !isInnocentVoted}" class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border rounded-xl text-white duration-300">
            <span>Innocent</span>
          </button>
        </div>

        <div class="flex flex-col items-center gap-4 w-full">
          <div>
            <img src="~/assets/images/icons/gavel.svg" class="size-8 mx-auto mb-2 animate-hammerSwing" alt="gavel">
            <p class="text-xl font-bold"><span :class="verdictColor">{{ finalJudgement }}</span></p>
          </div>
          <!-- Pass the counts to the VerdictChart component -->
          <VerdictChart :guiltyCount="fakeContentStore.selectedCase.guiltyCount" :innocentCount="fakeContentStore.selectedCase.innocentCount" />
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center">Charging....</p>
  </div>
</template>

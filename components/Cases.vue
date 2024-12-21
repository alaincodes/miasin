<script setup>
import { useFakeContentStore } from '../stores/useFakeContentStore.js'

const fakeContentStore = useFakeContentStore()
</script>

<template>
  <div class="grid grid-cols-1 gap-9 content-start md:h-full md:overflow-y-auto">
    <h2 class="text-center text-3xl font-bold text-cyan-900">Cases:</h2>
    <ul class="flex flex-col divide-y divide-slate-900">
      <li v-for="(item, index) in fakeContentStore.cases" :key="index">
        <div
          class="prose max-w-full w-full py-4 rounded-sm duration-300 cursor-pointer hover:bg-slate-500/20 md:p-6"
        >
          <p>
            <strong>Anonymous</strong> filed a complaint on <strong>{{ item.date }}</strong>
            at <strong>{{ item.time }}</strong>
          </p>
          <p><strong>Case:</strong> {{ item.message }}</p>
          <p>
            Verdict: <strong>{{ item.user }}</strong> is
            <span
              class="font-bold uppercase"
              :class="item.judgement === 'Guilty' ? 'text-red-600' : 'text-green-600'"
            >
              {{ item.judgement }}
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

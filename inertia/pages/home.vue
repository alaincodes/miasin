<script setup>
  import { Head } from '@inertiajs/vue3'
    import Header from '@/Header.vue'
</script>

<template>
  <Head title="Homepage" />

  <div class="[--header-height:4rem] grid place-content-center min-h-dvh pt-[--header-height]">
    <Header />

    <div class="grid grid-cols-1 justify-items-center items-center gap-8 p-8">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-3xl font-bold text-cyan-900">Judging:</h1>
        <div class="grid gap-6">
          <h2 class="prose text-3xl font-bold text-cyan-900">&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum, excepturi earum minima placeat quam accusantium blanditiis optio odio ut ?&rdquo;</h2>
          <div class="size-24 m-auto">
            <img src="../assets/images/judge.svg" class="w-full h-full" alt="picture of a judge">
          </div>
        </div>

        <div class="flex gap-4">
          <button data-guilty-btn class="grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-red-600 rounded-xl text-red-600 duration-300 hover:bg-red-700 hover:text-white">
            <span>Guilty:</span>
            <span data-guilty-count class="text-2xl">14</span>
          </button>
          <button data-innocent-btn class="grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-green-600 rounded-xl text-green-600 duration-300 hover:bg-green-700 hover:text-white">
            <span>Innocent:</span>
            <span data-innocent-count class="text-2xl">9</span>
          </button>
        </div>

        <div class="flex flex-col items-center gap-4">
          <p class="text-xl font-bold">Final Jugement:</p>
          <p data-jugement class="text-5xl font-bold uppercase underline underline-offset-8">Guilty</p>
        </div>
      </div>
    </div>
  </div>
</template>

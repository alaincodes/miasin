<script setup>
  import { Head } from '@inertiajs/vue3'
  import Header from '@/Header.vue'
  import Judgement from '@/Judgement.vue'
</script>

<template>
  <Head title="Le Tribunal" />

  <div class="[--header-height:4rem] grid place-content-center min-h-dvh pt-[--header-height]">
    <Header />
    <Judgement />
  </div>
</template>

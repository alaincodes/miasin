<script setup>
  import GlobalChart from '@/GlobalChart.vue'
  import Header from '@/Header.vue'
</script>

<template>
  <Header />

  <div class="[--header-height:4rem] grid place-content-center min-h-dvh pt-[--header-height]">
    <GlobalChart />
  </div>
</template>

<script setup>
import Header from '@/components/header'
import Footer from '@/components/footer'

useHead({
  htmlAttrs: {
    'data-theme': 'nord',
  },
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />

    <Header />

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <Footer />
  </div>
</template>

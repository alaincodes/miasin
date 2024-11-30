<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const config = useAppConfig()

useSeoMeta({
  title: config.title
})

useHead({
  htmlAttrs: {
    'data-theme': 'nord',
  },
})
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <Header />

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <Footer />
  </div>
</template>

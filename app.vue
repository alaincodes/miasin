<script setup>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

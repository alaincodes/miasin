<script setup>
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
    <NuxtRouteAnnouncer />

    <AppHeader />

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <AppFooter />
  </div>
</template>

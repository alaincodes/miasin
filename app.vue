<script setup>
useHead({
  htmlAttrs: {
    'data-theme': 'nord',
  },
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

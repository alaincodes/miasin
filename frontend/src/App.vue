<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
</script>

<template>
  <main class="container mx-auto">
    <AppHeader />
    <AppBreadcrumb />
  </main>

  <router-view />
</template>

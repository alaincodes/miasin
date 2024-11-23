<script setup>
import { RouterView } from 'vue-router'
import BasicMenu from './components/BasicMenu.vue'
import AdminMenu from './components/AdminMenu.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <BasicMenu v-if="$route.path === '/'" />
    <AdminMenu v-else-if="$route.path === '/admin'" />
    <RouterView />
  </Layout>
</template>

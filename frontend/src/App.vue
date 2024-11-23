<script setup>
import { RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <MainMenu />
    <RouterView />
  </Layout>
</template>

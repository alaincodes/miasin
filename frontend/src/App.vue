<script setup>
import { RouterView } from 'vue-router'
import Toolbar from './components/Toolbar.vue'
import MainMenu from './components/MainMenu.vue'
</script>

<template>
  <MainMenu />
  <Toolbar />

  <RouterView />
</template>

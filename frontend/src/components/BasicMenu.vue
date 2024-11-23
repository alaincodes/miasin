<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl">MIASIN</RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <RouterLink to="/admin" class="btn btn-ghost text-xl">Sign in</RouterLink>
      </ul>
    </div>
  </div>
</template>

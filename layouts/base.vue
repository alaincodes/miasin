<script setup>
import Header from '@/components/header'
import Footer from '@/components/footer'
</script>

<template>
  <Header />

  <div class="min-h-dvh">
    <main>
      <slot />
    </main>
  </div>

  <Footer />
</template>
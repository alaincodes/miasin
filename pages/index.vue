<script setup>
const { data } = await useFetch('/api/grocery/lists')
</script>

<template>
  <NuxtLayout name="base">
    <div>
      <pre>{{ data }}</pre>
    </div>
  </NuxtLayout>
</template>

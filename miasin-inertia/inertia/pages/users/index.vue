<script setup>
  defineProps({
  users: {
    type: Array,
    default: () => [],
  },
})

console.log(users) // Afficher les données reçues dans la console
</script>

<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <p>{{ users }}</p>
  </div>
</template>


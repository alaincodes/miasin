<script setup>
import { onMounted, ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import Chart from 'chart.js/auto'

// Récupérer le store
const formStore = useFormStore()

// Déclarer une référence réactive pour les données
const data = ref([
  { amount: 500, category: "Food" },
  { amount: 1200, category: "Travel" },
  { amount: 800, category: "Electronics" },
  { amount: 1500, category: "Rent" },
  { amount: 300, category: "Entertainment" },
  { amount: 450, category: "Books" },
  { amount: 2000, category: "Education" },
])

// Mettre à jour les données du tableau avec celles du store
const updateChartData = () => {
  // Ajoutez les données du formulaire dans le tableau `data`
  if (formStore.formData.name && formStore.formData.amount) {
    data.value.push({ amount: parseFloat(formStore.formData.amount), category: formStore.formData.name })
  }
}

onMounted(() => {
  // Mettez à jour les données du graphique
  updateChartData()

  const ctx = document.getElementById('expenses').getContext('2d')

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.value.map(row => row.category),
      datasets: [
        {
          label: 'Monthly expenses',
          data: data.value.map(row => row.amount),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
})
</script>

<template>
  <div class="w-full h-96">
    <canvas id="expenses"></canvas>
  </div>
</template>

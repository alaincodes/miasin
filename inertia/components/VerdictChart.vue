<script setup>
import { ref, computed, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartRef = ref(null)

const data = [
  { verdict: "Guilty", count: 1 },
  { verdict: "Innocent", count: 1 },
]

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.verdict),
        datasets: [
          {
            label: 'Verdict',
            data: data.map(row => row.count),
            backgroundColor: [
              'rgb(239, 68, 68)',
              'rgb(34, 197, 94)',
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    })
  }
})
</script>

<template>
  <div class="w-full">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

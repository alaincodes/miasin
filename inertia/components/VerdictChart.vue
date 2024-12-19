<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

const chartRef = ref(null)

const props = defineProps({
  guiltyCount: {
    type: Number,
    required: true,
  },
  innocentCount: {
    type: Number,
    required: true,
  }
})

const data = computed(() => [
  { verdict: "Guilty", count: props.guiltyCount },
  { verdict: "Innocent", count: props.innocentCount },
])

let chart = null

onMounted(() => {
  if (chartRef.value) {
    chart = new Chart(chartRef.value, {
      type: 'doughnut',
      data: {
        labels: data.value.map(row => row.verdict),
        datasets: [
          {
            label: 'Verdict',
            data: data.value.map(row => row.count),
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

watch(data, () => {
  if (chart) {
    chart.data.labels = data.value.map(row => row.verdict)
    chart.data.datasets[0].data = data.value.map(row => row.count)
    chart.update()
  }
})
</script>

<template>
  <div class="w-full">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

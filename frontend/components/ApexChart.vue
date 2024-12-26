<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  guiltyCount: {
    type: Number,
    required: true,
  },
  innocentCount: {
    type: Number,
    required: true,
  },
});

let chart = ref(null);

onMounted(() => {
  import('apexcharts').then(ApexCharts => {
    const options = {
      series: [
        { name: 'Guilty', data: [props.guiltyCount] },
        { name: 'Innocent', data: [props.innocentCount] },
      ],
      chart: {
        type: 'bar',
        height: 130,
        toolbar: {
          show: false
        },
      },
      colors: ['#ffd859', '#52ce63'],
      plotOptions: {
        bar: {
          borderRadius: 3,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true,
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        categories: ['Verdict'],
        labels: {
          show: false,
          style: {
            colors: ['#FFFFFF'],
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#FFFFFF'],
          }
        }
      },
      legend: {
        labels: {
          colors: ['#FFFFFF', '#FFFFFF'],
        },
      },
    }

    const chartElementId = `apexchart-${props.id}`;
    chart.value = new ApexCharts.default(document.querySelector(`#${chartElementId}`), options);
    chart.value.render();
  })
})

watch([() => props.guiltyCount, () => props.innocentCount], () => {
  if (chart.value) {
    chart.value.updateOptions({
      series: [
        { name: 'Guilty', data: [props.guiltyCount] },
        { name: 'Innocent', data: [props.innocentCount] },
      ],
    }, false, true);
  }
});
</script>

<template>
  <div :id="`apexchart-${props.id}`"></div>
</template>

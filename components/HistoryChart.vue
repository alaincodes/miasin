<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const chartRef = ref(null);

const data = [
	{ year: 2010, total: 10, guilty: 20, innocent: 95 },
	{ year: 2011, total: 20, guilty: 30, innocent: 35 },
	{ year: 2012, total: 15, guilty: 34, innocent: 65 },
	{ year: 2013, total: 25, guilty: 95, innocent: 16 },
	{ year: 2014, total: 22, guilty: 45, innocent: 47 },
	{ year: 2015, total: 30, guilty: 85, innocent: 25 },
	{ year: 2016, total: 28, guilty: 53, innocent: 26 },
];

onMounted(() => {
	if (chartRef.value) {
		new Chart(chartRef.value, {
			type: "bar",
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: "Guilty",
						data: data.map((row) => row.guilty),
						backgroundColor: "rgba(239, 68, 68, 0.2)",
					},
					{
						label: "Innocent",
						data: data.map((row) => row.innocent),
						backgroundColor: "rgba(34, 197, 94, 0.2)",
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "top",
					},
				},
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}
});
</script>

<template>
	<div style="width: 800px">
		<canvas ref="chartRef"></canvas>
	</div>
</template>

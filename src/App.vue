<script setup>
import Navbar from './components/Navbar.vue'
import RadarChart from './components/RadarChart.vue'
import Form from './components/Form.vue'
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()
</script>

<template>
  <Navbar />
  <div class="grid grid-cols-1 items-center justify-center gap-6 p-6 lg:grid-cols-2">
    <RadarChart />
    <Form />
  </div>
  <div>
    <h3>Aperçu des données :</h3>
    <p><strong>Nom :</strong> {{ formStore.formData.name }}</p>
    <p><strong>amount :</strong> {{ formStore.formData.amount }}</p>
  </div>
</template>

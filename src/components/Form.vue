<script setup>
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()

const submitForm = () => {
  formStore.updateForm({
    name: formStore.formData.name,
    amount: formStore.formData.amount,
  })
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="grid grid-cols-1 gap-y-6">
      <div>
        <label class="input input-bordered flex items-center gap-2">
          <input v-model="formStore.formData.name" type="text" class="grow" placeholder="Expense Item" />
        </label>
      </div>
      <div>
        <label class="input input-bordered flex items-center gap-2">
          <input v-model="formStore.formData.amount" type="text" class="grow" placeholder="Expense amount" />
        </label>
      </div>
      <div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>
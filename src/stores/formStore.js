import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {
      name: '',
      amount: '',
    },
  }),
  actions: {
    updateForm(data) {
      this.formData = { ...this.formData, ...data }
    },
  },
})

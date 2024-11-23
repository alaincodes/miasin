<script setup>
defineProps({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})
</script>
<template>
  <div class="flex items-center gap-3">
    <div class="avatar">
      <div class="mask mask-squircle h-12 w-12">
        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div class="font-bold">{{ user }}</div>
      <div class="text-sm opacity-50">{{ email }}</div>
    </div>
  </div>
</template>

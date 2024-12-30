<script setup>
  defineProps({
    onGuilty: {
      type: Function,
      required: true,
    },
    onInnocent: {
      type: Function,
      required: true,
    }
  })
</script>

<template>
  <div class="flex items-center flex-col gap-y-6 w-full md:gap-0">
    <div class="flex w-full">
      <UiGuiltyCTA @click="onGuilty" class="rounded-r-none" />
      <UiInnocentCTA @click="onInnocent" class="rounded-l-none" />
      <UiCommentCTA class="ml-auto" />
      <UiShareCTA class="ml-1" />
    </div>
  </div>
</template>
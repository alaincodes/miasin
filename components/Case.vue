<template>
  <div class="grid gap-3 max-w-full w-full py-4 px-6 rounded-sm duration-300 cursor-pointer hover:bg-slate-500/20 md:p-6">
    <slot name="caseHeader"></slot>
    <slot name="caseDetail"></slot>
    <slot name="caseVerdict"></slot>
  </div>
</template>

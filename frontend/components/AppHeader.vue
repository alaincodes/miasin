<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);

const handleBurger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
  isMenuOpen.value = false;
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.menu') && !event.target.closest('button') && isMenuOpen.value) {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const stopPropagation = (event) => {
  event.stopPropagation();
  closeMenu();
}
</script>

<template>
	<header
		class="z-50 fixed top-0 w-full h-[--header-height] p-4 bg-c-black-light text-white"
	>
		<div class="container flex items-center justify-between mx-auto">
			<NuxtLink href="/" class="grid grid-flow-col items-center gap-2 duration-300 hover:text-c-yellow-1">
        <NuxtImg width="28" height="28" src="/judge.png" densities="x1 x2" />
        <span class="font-bold">MIASIN</span>
			</NuxtLink>
      <button @click="handleBurger" class="block md:hidden" aria-label="open main menu">
        <svg class="size-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6 0 16.1-13 29.1-29.1 29.1H61.1zm82.9-96a16 16 0 1 0-32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16z"/>
        </svg>
      </button>
			<nav class="hidden md:block">
				<ul class="flex gap-4">
					<li><NuxtLink to="/cases/create" class="duration-300 hover:text-c-yellow-1" @click="stopPropagation">Submit</NuxtLink></li>
					<li><NuxtLink to="/rules" class="duration-300 hover:text-c-yellow-1" @click="stopPropagation">Rules</NuxtLink></li>
				</ul>
			</nav>
		</div>
	</header>

  <div :class="isMenuOpen ? 'bounce-in-right' : 'translate-y-full'" class="menu z-50 absolute top-[--header-height] right-0 bottom-0 left-0 w-dvw h-[calc(100dvh-var(--header-height))] grid place-content-center p-6 bg-c-black-lighter md:hidden">
    <nav>
      <ul class="flex flex-col gap-4">
        <li><NuxtLink to="/cases/create" class="duration-300 hover:text-c-yellow-1" @click="stopPropagation">Submit</NuxtLink></li>
        <li><NuxtLink to="/rules" class="duration-300 hover:text-c-yellow-1" @click="stopPropagation">Rules</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

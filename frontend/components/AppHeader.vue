<template>
	<header
		class="z-50 fixed top-0 w-full h-[--header-height] p-4 bg-c-black-light text-white"
	>
		<div class="container flex items-center justify-between mx-auto">
			<NuxtLink href="/" class="grid grid-flow-col items-center gap-2 duration-300 hover:text-c-yellow-1">
        <NuxtImg width="28" height="28" src="/judge.png" densities="x1 x2" />
        <span class="font-bold">MIASIN</span>
			</NuxtLink>
			<nav>
				<ul class="flex gap-4">
					<li><NuxtLink to="/cases/create" class="duration-300 hover:text-c-yellow-1">Submit</NuxtLink></li>
					<li><NuxtLink to="/rules" class="duration-300 hover:text-c-yellow-1">Rules</NuxtLink></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<template>
	<header
		class="z-50 fixed top-0 w-full h-[--header-height] p-4 bg-red-800 text-white"
	>
		<div class="container flex items-center justify-between mx-auto">
			<NuxtLink href="/" class="grid grid-flow-col items-center gap-2">
				<div class="w-7">
					<img src="~/assets/images/icons/judge.webp" />
				</div>
			</NuxtLink>
			<nav>
				<ul class="flex gap-4">
					<li><NuxtLink to="/cases/new">New Case</NuxtLink></li>
					<!-- <li><NuxtLink to="/statistics">Statistics</NuxtLink></li> -->
					<li><NuxtLink to="/cases">Cases</NuxtLink></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

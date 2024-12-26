<template>
	<AppHeader />

	<div
		class="[--header-height:3.75rem] container grid h-[calc(100vh-var(--header-height))] min-h-dvh mx-auto pt-[--header-height]"
	>
		<slot></slot>
	</div>
</template>

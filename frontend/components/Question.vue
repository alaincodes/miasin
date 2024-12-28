<script setup>
defineProps({
	question: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		class="prose max-w-full p-3 rounded-md bg-c-black-light text-white prose-p:leading-6"
	>
		<p>{{ question }}</p>
	</div>
</template>

<script setup>
import { ref } from "vue";
const config = useRuntimeConfig();

const content = ref("");
const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function handleFormSubmit() {
	isLoading.value = true;
	successMessage.value = "";
	errorMessage.value = "";

	try {
		const res = await $fetch(`${config.public.API_URL}/api/question`, {
			method: "POST",
			body: { content: content.value },
		});

		successMessage.value = "QUESTION ADDED";
		content.value = "";
		navigateTo("/");
	} catch (error) {
		errorMessage.value = "MISSING SOMETHING......";
	} finally {
		isLoading.value = false;
	}
}
</script>

<template>
	<div class="grid place-content-center p-6 mx-auto">
		<h1 class="mb-6 text-3xl text-center">Add new case</h1>
		<form @submit.prevent="handleFormSubmit" class="text-c-black">
			<div class="grid grid-cols-1 gap-6">
				<label for="content" class="col-span-full">
					<span class="text-white">Crime description</span>
					<textarea
						id="content"
						v-model="content"
						rows="5"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="I am a victim..."
					/>
				</label>

				<div class="col-span-full flex justify-between gap-6">
					<label class="inline-flex items-center">
						<input
							placeholder="Submit"
							type="submit"
							class="py-2 px-3 rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-c-black focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
							:disabled="isLoading"
						/>
						<span class="sr-only">Submit</span>
					</label>
				</div>
			</div>
		</form>

		<p v-if="isLoading" class="mt-4 text-blue-500">Chargement...</p>
		<p v-if="successMessage" class="mt-4 text-green-500">
			{{ successMessage }}
		</p>
		<p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
	</div>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const config = useRuntimeConfig();
const { data, pending, error } = await useFetch(
	`${config.public.API_URL}/api/question`
);

const handleGuiltyVote = async (id) => {
	const currentVote = localStorage.getItem(`voted_guilty_${id}`);

	try {
		let increment = 0;

		if (currentVote === "true") {
			increment = -1;
			localStorage.removeItem(`voted_guilty_${id}`);
		} else {
			increment = 1;
			localStorage.setItem(`voted_guilty_${id}`, "true");
		}

		const response = await fetch(
			`${config.public.API_URL}/api/question/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					guiltyCount: increment,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Failed to update guilty count");
		}

		const updatedQuestion = data.value.find((question) => question.id === id);
		if (updatedQuestion) {
			updatedQuestion.guiltyCount += increment;
		}
	} catch (error) {
		console.error("Error updating guilty count:", error.message);
	}
};

const handleInnocentVote = async (id) => {
	const currentVote = localStorage.getItem(`voted_innocent_${id}`);

	try {
		let increment = 0;

		if (currentVote === "true") {
			increment = -1;
			localStorage.removeItem(`voted_innocent_${id}`);
		} else {
			increment = 1;
			localStorage.setItem(`voted_innocent_${id}`, "true");
		}

		const response = await fetch(
			`${config.public.API_URL}/api/question/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					innocentCount: increment,
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Failed to update innocent count");
		}

		const updatedQuestion = data.value.find((question) => question.id === id);
		if (updatedQuestion) {
			updatedQuestion.innocentCount += increment;
		}
	} catch (error) {
		console.error("Error updating innocent count:", error.message);
	}
};
</script>

<template>
	<div v-if="pending">Chargement...</div>
	<div v-else-if="error">Une erreur est survenue</div>
	<div
		v-else
		v-for="question in data"
		:key="question.id"
		class="grid gap-5 even:bg-slate-500/20"
	>
		<div class="grid gap-4 h-full content-center p-4 md:px-6 md:py-9">
			<p class="italic">
				<strong class="underline underline-offset-4">Anonymous</strong> filed a
				complaint against
				<strong class="underline underline-offset-4">{{
					question.accused
				}}</strong>
				{{ dayjs().to(dayjs(question.createdAt)) }}
			</p>

			<NuxtLink :to="`/questions/${question.id}`" class="">
				<Question :question="question.content" :date="question.createdAt" />
			</NuxtLink>

			<VerdictApexChart
				:id="question.id"
				:guiltyCount="question.guiltyCount"
				:innocentCount="question.innocentCount"
			/>

			<Verdict
				:onGuilty="() => handleGuiltyVote(question.id)"
				:onInnocent="() => handleInnocentVote(question.id)"
			/>
		</div>
	</div>
</template>

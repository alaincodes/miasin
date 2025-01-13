<script setup>
import { ref } from "vue";
import { useDebounce } from "@vueuse/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const config = useRuntimeConfig();
const { data, pending, error } = await useFetch(
	`${config.public.API_URL}/api/question`
);

const loading = ref(false);

const getVoteFromLocalStorage = (id, voteType) => {
	return localStorage.getItem(`voted_${voteType}_${id}`) === "true";
};

const updateVoteInLocalStorage = (id, voteType, value) => {
	if (value) {
		localStorage.setItem(`voted_${voteType}_${id}`, "true");
	} else {
		localStorage.removeItem(`voted_${voteType}_${id}`);
	}
};

const updateVoteCount = async (id, voteType, increment) => {
	try {
		const response = await fetch(
			`${config.public.API_URL}/api/question/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					[`${voteType}Count`]: increment,
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`Failed to update ${voteType} count`);
		}

		const updatedQuestion = data.value.find((question) => question.id === id);
		if (updatedQuestion) {
			updatedQuestion[`${voteType}Count`] += increment;
		}
	} catch (error) {
		console.error(`Error updating ${voteType} count:`, error.message);
	}
};

const handleVote = async (id, voteType) => {
	if (loading.value) return;

	const opposingVoteType = voteType === "guilty" ? "innocent" : "guilty";
	const currentVote = getVoteFromLocalStorage(id, voteType);
	const opposingVote = getVoteFromLocalStorage(id, opposingVoteType);

	let increment = currentVote ? -1 : 1;

	loading.value = true;

	try {
		if (opposingVote) {
			await updateVoteCount(id, opposingVoteType, -1);
			updateVoteInLocalStorage(id, opposingVoteType, false);
		}

		await updateVoteCount(id, voteType, increment);
		updateVoteInLocalStorage(id, voteType, !currentVote);
	} catch (error) {
		console.error("Error updating vote:", error.message);
	} finally {
		await useDebounce(loading, 2000);
		loading.value = false;
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

			<div class="flex items-center flex-col gap-y-6 w-full md:gap-0">
				<div class="flex w-full">
					<UiGuiltyCTA
						:id="question.id"
						:handleGuiltyVote="() => handleVote(question.id, 'guilty')"
						class="rounded-r-none"
					/>
					<UiInnocentCTA
						:id="question.id"
						:handleInnocentVote="() => handleVote(question.id, 'innocent')"
						class="rounded-l-none"
					/>
					<UiCommentCTA class="ml-auto" />
					<UiShareCTA class="ml-1" />
				</div>
			</div>
		</div>
	</div>
</template>

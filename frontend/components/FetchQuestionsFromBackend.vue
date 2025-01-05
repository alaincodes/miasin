<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const config = useRuntimeConfig();
const { data, pending, error } = await useFetch(
	`${config.public.API_URL}/api/question`
);
</script>

<template>
	<div v-if="pending">Chargement...</div>
	<div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
	<div
		v-else
		v-for="question in data"
		:key="question.id"
		class="grid gap-5 even:bg-slate-500/20"
	>
		<div class="grid gap-4 h-full content-center p-4 md:px-6 md:py-9">
			<p class="italic">
				<strong>Anonymous</strong> filed a complaint against
				<strong>Accused</strong> {{ dayjs().to(dayjs(question.createdAt)) }}
			</p>

			<NuxtLink :to="`/questions/${question.id}`" class="">
				<Question :question="question.content" :date="question.createdAt" />
			</NuxtLink>

			<VerdictApexChart
				:id="question.id"
				:guiltyCount="question.guiltyCount + 1"
				:innocentCount="question.innocentCount + 1"
			/>

			<Verdict
				:onGuilty="() => question.guiltyCount"
				:onInnocent="() => question.innocentCount"
				:guiltyCount="question.guiltyCount"
				:innocentCount="question.innocentCount"
			/>
		</div>
	</div>
</template>

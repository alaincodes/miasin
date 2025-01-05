<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const route = useRoute();
const questionId = route.params.id;
const config = useRuntimeConfig();
const { data } = await useFetch(
	`${config.public.API_URL}/api/question/${questionId}`
);
</script>

<template>
	<div
		class="grid gap-4 h-full content-center mx-auto p-4 md:px-6 md:py-9 md:w-6/12"
	>
		<p class="italic">
			<strong>Anonymous</strong> filed a complaint against
			<strong>Accused</strong> {{ dayjs().to(dayjs(data.createdAt)) }}
		</p>
		<Question :question="data.content" />
	</div>
</template>

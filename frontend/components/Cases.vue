<script setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import "swiper/css";
import { useFakeContentStore } from "../stores/useFakeContentStore.js";

const fakeContentStore = useFakeContentStore();

onMounted(() => {
	if (window.matchMedia("(max-width: 768px)").matches) {
		new Swiper(".swiper", {
			direction: "vertical",
			slidesPerView: 1,
		});
	}
});
</script>

<template>
	<div class="swiper w-full h-full max-h-screen md:max-h-full">
		<div
			class="swiper-wrapper md:flex md:flex-col md:divide-y md:divide-c-yellow-1"
		>
			<div
				v-for="item in fakeContentStore.cases"
				:key="item.id"
				class="swiper-slide even:bg-slate-500/20 md:!h-auto"
			>
				<div class="grid gap-4 h-full content-center p-4 md:px-6 md:py-9">
					<CaseInfos
						:topics="item.topics"
						:accuser="item.accuser"
						:accused="item.accused"
						:date="item.date"
						:time="item.time"
					/>

					<Question :question="item.question" />

					<VerdictApexChart
						:id="item.id"
						:guiltyCount="item.guiltyCount"
						:innocentCount="item.innocentCount"
					/>

					<Verdict
						:onGuilty="() => fakeContentStore.incrementGuilty(item.id)"
						:onInnocent="() => fakeContentStore.incrementInnocent(item.id)"
						:accused="item.accused"
						:guiltyCount="item.guiltyCount"
						:innocentCount="item.innocentCount"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

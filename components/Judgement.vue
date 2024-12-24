<script setup>
import { computed, onMounted } from "vue";
import { useFakeContentStore } from "../stores/useFakeContentStore.js";

const fakeContentStore = useFakeContentStore();

onMounted(() => {
	fakeContentStore.selectFirstCase();
});

const finalJudgement = computed(() => {
	if (fakeContentStore.selectedCase) {
		const { guiltyCount, innocentCount } = fakeContentStore.selectedCase;

		return guiltyCount > innocentCount ? "GUILTY !!!" : "INNOCENT !!!";
	}

	return "";
});

const verdictColor = computed(() => {
	if (fakeContentStore.selectedCase) {
		const { guiltyCount, innocentCount } = fakeContentStore.selectedCase;

		return guiltyCount > innocentCount ? "text-c-yellow-1" : "text-c-green-3";
	}
	return "";
});
</script>

<template>
	<div
		v-if="fakeContentStore.selectedCase"
		class="grid grid-cols-1 justify-items-center items-center gap-8 mx-auto md:self-center"
	>
		<div class="flex flex-col items-center gap-9">
			<div class="flex flex-col gap-6 w-full xl:flex-row xl:justify-between">
				<h2
					v-if="fakeContentStore.selectedCase.id === 1"
					class="whitespace-nowrap font-bold uppercase"
				>
					Case of the day
				</h2>
				<div
					v-if="fakeContentStore.selectedCase.topics.length > 0"
					class="flex gap-3"
				>
					<p>Topic:</p>
					<ul class="flex flex-wrap gap-1">
						<li v-for="topic in fakeContentStore.selectedCase.topics">
							<button
								class="px-3 py-1 bg-c-yellow-1 rounded-3xl text-c-black text-xs"
							>
								{{ topic }}
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="grid gap-6 text-white">
				<h2>
					<strong>Anonymous</strong> filed a complaint against
					<strong>{{ fakeContentStore.selectedCase.user }}</strong> on
					<strong>{{ fakeContentStore.selectedCase.date }}</strong> at
					<strong>{{ fakeContentStore.selectedCase.time }}</strong>
				</h2>
				<h2 class="text-2xl font-bold text-white md:text-3xl">
					{{ fakeContentStore.selectedCase.message }}
				</h2>
			</div>

			<div
				class="grid grid-cols-1 place-items-start justify-items-center gap-6 w-full xl:grid-cols-2 xl:gap-12"
			>
				<div class="grid grid-cols-2 gap-4 w-full">
					<div class="size-24 col-span-full m-auto md:size-48">
						<img
							src="~/assets/images/themis.webp"
							class="w-full h-full"
							alt="picture of a judge"
						/>
					</div>
					<button
						@click="
							fakeContentStore.incrementGuilty(fakeContentStore.selectedCase.id)
						"
						class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-transparent rounded-xl bg-c-yellow-1 text-c-black duration-300 hover:bg-yellow-900 hover:border-yellow-900"
					>
						<span>Guilty</span>
					</button>
					<button
						@click="
							fakeContentStore.incrementInnocent(
								fakeContentStore.selectedCase.id
							)
						"
						class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-transparent rounded-xl bg-c-green-3 text-c-black duration-300 hover:bg-green-900 hover:border-green-900"
					>
						<span>Innocent</span>
					</button>
				</div>

				<div class="flex flex-col items-center gap-4 w-full">
					<div>
						<p class="font-bold text-white">
							{{ fakeContentStore.selectedCase.user }} is
							<span :class="verdictColor">{{ finalJudgement }}</span>
						</p>
					</div>
					<VerdictChart
						:guiltyCount="fakeContentStore.selectedCase.guiltyCount"
						:innocentCount="fakeContentStore.selectedCase.innocentCount"
					/>

          <!-- <ApexChart
            :id="fakeContentStore.selectedCase.id"
            :guiltyCount="fakeContentStore.selectedCase.guiltyCount"
						:innocentCount="fakeContentStore.selectedCase.innocentCount"
          /> -->
				</div>
			</div>
		</div>
	</div>

	<div v-else>
		<p class="text-center">Charging....</p>
	</div>
</template>

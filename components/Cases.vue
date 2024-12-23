<script setup>
import { useFakeContentStore } from "../stores/useFakeContentStore.js";

const fakeContentStore = useFakeContentStore();
</script>

<template>
	<div
		class="grid grid-cols-1 gap-9 content-start md:h-full md:overflow-y-auto"
	>
		<h2 class="text-center text-3xl font-bold text-white">Cases:</h2>
		<ul class="flex flex-col divide-y divide-slate-900">
			<li
				v-for="(item, index) in fakeContentStore.cases"
				:key="index"
				@click="fakeContentStore.selectCase(item)"
			>
				<div
					class="grid gap-3 max-w-full w-full py-4 px-6 rounded-sm duration-300 cursor-pointer hover:bg-slate-500/20 md:p-6"
				>
					<div v-if="item.topics.length > 0" class="flex gap-3">
						<p>Topic:</p>
						<ul class="flex flex-wrap gap-1">
							<li v-for="topic in item.topics">
								<button
									class="px-3 py-1 bg-c-yellow-1 rounded-3xl text-c-black text-xs"
								>
									{{ topic }}
								</button>
							</li>
						</ul>
					</div>
					<p>
						<strong>Anonymous</strong> filed a complaint on
						<strong>{{ item.date }}</strong> at
						<strong>{{ item.time }}</strong>
					</p>
					<p><strong>Case:</strong> {{ item.message }}</p>
					<div>
						<p>
							Guilty count: <strong>{{ item.guiltyCount }}</strong>
						</p>
						<p>
							Innocent count <strong>{{ item.innocentCount }}</strong>
						</p>
					</div>
					<p>
						Verdict: <strong>{{ item.user }}</strong> is
						<span
							class="font-bold uppercase"
							:class="
								item.judgement === 'Guilty'
									? 'text-c-yellow-1'
									: 'text-c-green-3'
							"
						>
							{{ item.judgement }}
						</span>
					</p>
					<ul class="flex gap-4">
						<li>
							<button
								@click="fakeContentStore.incrementGuilty(item.id)"
								class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-transparent rounded-xl duration-300 bg-c-yellow-1 text-c-black hover:bg-yellow-900 hover:border-yellow-900"
							>
								Guilty
							</button>
						</li>
						<li>
							<button
								@click="fakeContentStore.incrementInnocent(item.id)"
								class="col-span-1 grid grid-flow-col place-items-center gap-2 py-2 px-4 border border-transparent rounded-xl duration-300 bg-c-green-3 text-c-black hover:bg-green-900 hover:border-green-900"
							>
								Innocent
							</button>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

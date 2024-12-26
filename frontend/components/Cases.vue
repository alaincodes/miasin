<script setup>
import { onMounted } from "vue";
import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useFakeContentStore } from "../stores/useFakeContentStore.js";

const fakeContentStore = useFakeContentStore();

onMounted(() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    new Swiper('.swiper', {
      modules: [FreeMode],
      direction: 'vertical',
      navigation: true,
      slidesPerView: 1,
      breakpoints: {
        768: {
          freeMode: {
            enabled: true,
            sticky: false,
          },
          slidesPerView: 'auto',
        }
      },
    });
  }
});
</script>

<template>
  <div class="swiper w-full h-full max-h-screen md:max-h-full">
    <div class="swiper-wrapper md:flex md:flex-col md:divide-y md:divide-c-yellow-1">
      <div
        v-for="item in fakeContentStore.cases"
        :key="item.id"
        @click="fakeContentStore.selectCase(item)"
        class="swiper-slide even:bg-slate-500/20 md:!h-auto"
      >
        <div class="grid gap-4 p-4 rounded-sm duration-300 md:px-6 md:py-9">
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
          <div>
            <p class="text-xs italic">
              <strong>{{ item.accuser }}</strong> filed a complaint against
              <strong>{{ item.accused }}</strong>
              on <strong>{{ item.date }}</strong> at
              <strong>{{ item.time }}</strong>
            </p>
          </div>
          <code class="p-3 rounded-md bg-c-black-light text-xl">{{ item.message }}</code>
          <ApexChart
            :id="item.id"
            :guiltyCount="item.guiltyCount"
            :innocentCount="item.innocentCount"
          />
          <div class="grid grid-cols-12 items-center gap-y-6 md:gap-0">
            <button
              @click="fakeContentStore.incrementGuilty(item.id)"
              class="col-span-6 grid grid-flow-col place-items-center gap-2 py-2 px-3 border border-transparent rounded-xl rounded-r-none duration-300 bg-c-yellow-1 text-c-black hover:bg-yellow-900 hover:border-yellow-900 md:col-span-2"
            >
              Guilty
            </button>
            <button
              @click="fakeContentStore.incrementInnocent(item.id)"
              class="col-span-6 grid grid-flow-col place-items-center gap-2 py-2 px-3 border border-transparent rounded-xl rounded-l-none duration-300 bg-c-green-3 text-c-black hover:bg-green-900 hover:border-green-900 md:col-span-2"
            >
              Innocent
            </button>
            <p class="col-span-full text-center md:col-start-6 md:col-span-7 md:text-right">
              <strong>{{ item.accused }}</strong> is
              <span
                class="font-bold uppercase"
                :class="{
                  'text-c-yellow-1': item.guiltyCount > item.innocentCount,
                  'text-c-green-3': item.guiltyCount <= item.innocentCount,
                }"
              >
                {{
                  item.guiltyCount > item.innocentCount
                    ? "GUILTY !!!"
                    : "INNOCENT !!!"
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const staticContent = [
  {
    date: '12/12/24',
    time: '12h30',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user: 'User1',
    judgement: 'Guilty',
  },
  {
    date: '15/12/24',
    time: '11h04',
    message: 'Quisquam, tempora facilis rem deserunt doloribus natus!',
    user: 'User2',
    judgement: 'Innocent',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Deleniti eum expedita animi magni voluptates aliquid.',
    user: 'User3',
    judgement: 'Guilty',
  },
]
</script>
<template>
  <div class="grid grid-cols-1 gap-6">
    <div>
      <h2 class="mb-6 text-2xl font-bold">Cases:</h2>
      <ul class="flex flex-col gap-4">
        <li v-for="(item, index) in staticContent" :key="index">
          <div>
            <p>{{ item.date }} at {{ item.time }}</p>
            <p><strong>Case:</strong> {{ item.message }}</p>
            <p>Verdict: <strong>{{ item.user }}</strong> is
              <span class="font-bold uppercase" :class="item.judgement === 'Guilty' ? 'text-red-600' : 'text-green-600'">
                {{ item.judgement }}
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
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
    message: 'Nullam cursus lacinia erat. Fusce commodo aliquam arcu. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Etiam rhoncus. Praesent nec nisl a purus blandit viverra. Donec sodales sagittis magna. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Aenean ut eros et nisl sagittis vestibulum.',
    user: 'User3',
    judgement: 'Guilty',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Ut tincidunt tincidunt erat. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vivamus elementum semper nisi.',
    user: 'User3',
    judgement: 'Guilty',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Praesent blandit laoreet nibh. Fusce pharetra convallis urna. Cras ultricies mi eu turpis hendrerit fringilla. Maecenas vestibulum mollis diam.',
    user: 'User3',
    judgement: 'Innocent',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Fusce a quam. In ac felis quis tortor malesuada pretium. Donec venenatis vulputate lorem. Etiam iaculis nunc ac metus.',
    user: 'User3',
    judgement: 'Guilty',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.',
    user: 'User3',
    judgement: 'Innocent',
  },
  {
    date: '20/12/24',
    time: '2h21',
    message: 'Aenean commodo ligula eget dolor. Sed a libero.',
    user: 'User3',
    judgement: 'Guilty',
  },
]
</script>
<template>
  <div class="grid grid-cols-1 gap-9 content-start">
    <h2 class="text-center text-3xl font-bold text-cyan-900">Cases:</h2>
    <ul class="flex flex-col divide-y divide-slate-900">
      <li v-for="(item, index) in staticContent" :key="index">
        <div class="prose p-4 rounded-sm duration-300 cursor-pointer hover:bg-slate-500/20">
          <p><strong>Anonymous</strong> filed a complaint on <strong>{{ item.date }}</strong> at <strong>{{ item.time }}</strong></p>
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
</template>
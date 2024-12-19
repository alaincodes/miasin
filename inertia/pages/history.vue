<template>
  <div class="grid grid-cols-1 gap-6">
    <div>
      <h2 class="mb-6 text-2xl font-bold">Incoming Cases:</h2>
      <ul>
        <li><span>12/12/24</span> Case 1 (User 1)</li>
        <li><span>12/12/24</span> Case 2 (User 2)</li>
        <li><span>12/12/24</span> Case 3 (User 3)</li>
      </ul>
    </div>
    <div>
      <h2 class="mb-6 text-2xl font-bold">History:</h2>
      <ul class="flex flex-col gap-4">
        <li>
          <div>
            <p>12/12/24</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. (User1)</p>
            <p>Judgement: <span class="font-bold uppercase text-red-600">Guilty</span></p>
          </div>
        </li>
        <li>
          <div>
            <p>12/12/24</p>
            <p>Lorem ipsum ? (User2)</p>
            <p>Judgement: <span class="font-bold uppercase text-green-600">Innocent</span></p>
          </div>
        </li>
        <li>
          <div>
            <p>12/12/24</p>
            <p>Lorem ipsum ? (User3)</p>
            <p>Judgement: <span class="font-bold uppercase text-red-600">Guilty</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

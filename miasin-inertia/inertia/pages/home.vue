<script setup lang="ts">
  import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />

  <div class="navbar bg-base-100">
    <div class="flex-1">
      <Link href="/" class="btn btn-ghost text-xl">MIASIN</Link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <Link href="/admin" class="btn btn-ghost text-xl">Sign in</Link>
      </ul>
    </div>
  </div>

  <div class="space-y-6">
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link href="/login" class="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            Freelance
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            Pro
            <div class="badge badge-secondary">BEST</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 w-96 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            Enterprise
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>
<template>
  <div class="container mx-auto">
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
            </path>
          </svg>
        </div>
        <div class="stat-title">Clients actifs</div>
        <div class="stat-value text-primary">25</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div class="stat-title">Projets actifs</div>
        <div class="stat-value text-secondary">2</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div class="stat-title">Factures non réglées</div>
        <div class="stat-value text-secondary">2 (€1500)</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  </div>
  <div>
    <ul>
      <li>Clients actifs : 25</li>
      <li>Projets actifs : 3</li>
      <li>Factures non réglées : 2 (€1500)</li>
      <li>Revenu : €10,000</li>
    </ul>
  </div>
  <div>
    <h3>Échéances proches :</h3>
    <ul>
      <li>Projet X (02/12/2024)</li>
      <li>Facture Y (03/12/2024)</li>
    </ul>
  </div>
  <div>
    <h3>Activité récente :</h3>
    <ul>
      <li>Nouveau client : "ABC Ltd." (21/11/2024)</li>
      <li>Projet ajouté : "Développement site web"</li>
    </ul>
  </div>
  <div>
    <h3>Actions rapides :</h3>
    <button>Ajouter un client</button>
    <button>Créer un projet</button>
    <button>Générer facture</button>
  </div>
</template>


# Mini CRM pour Freelances

Un outil simple pour aider les freelances à gérer leurs clients, projets et factures.

## 🚀 Stack utilisée
- **Frontend** : Vue.js (tableau de bord interactif).
- **Backend** : AdonisJS (API RESTful et génération de PDF).

---

## 🛠️ Fonctionnalités
- **Tableau de bord** : Vue centralisée pour les clients, projets et factures.
- **Calendrier** : Suivi des échéances et délais.
- **Calcul automatique** : Revenus et taxes basés sur les projets terminés.
- **Factures par email** : Envoi direct depuis l'application.

---

## 📋 Installation et démarrage

1. **Clonez le projet :**
   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. **Backend (AdonisJS) :**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   node ace db:seed
   npm run dev
   ```
   API disponible sur `http://localhost:3333`.

3. **Frontend (Vue.js) :**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Application disponible sur `http://localhost:5173`.

---

## ✨ Fonctionnement
Le frontend utilise Vue.js pour interagir avec l'API AdonisJS, qui gère la logique et la génération des factures PDF.

---

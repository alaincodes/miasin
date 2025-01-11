# Étape 1 : Utiliser une image Node.js officielle
FROM node:22-alpine

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le dossier Prisma et l'environnement .env
COPY prisma ./prisma

# Étape 6 : Appliquer les migrations Prisma (si nécessaire)
RUN npx prisma migrate deploy

# Étape 7 : Copier tout le code source dans le conteneur
COPY . .

# Étape 8 : Construire le projet NestJS
RUN npm run build

# Étape 9 : Exposer le port sur lequel ton app va tourner
EXPOSE 10000

# Étape 10 : Démarrer l'application
CMD ["npm", "run", "start:prod"]

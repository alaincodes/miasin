# Étape 1 : Utiliser une image de base Node.js (version alpine pour une image plus légère)
FROM node:22-alpine

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Copier tout le dossier prisma (et son contenu)
COPY prisma ./prisma

# Copier le fichier .env dans le conteneur
COPY .env .env

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Appliquer les migrations Prisma
RUN npx prisma migrate deploy

# Étape 6 : Copier tout le code source de l'application dans le conteneur
COPY . .

# Étape 7 : Compiler le code TypeScript (création des fichiers dist)
RUN npm run build

# Étape 8 : Exposer le port sur lequel l'application écoute
EXPOSE 10000

# Étape 9 : Lancer l'application en mode production
CMD ["npm", "run", "start:prod"]

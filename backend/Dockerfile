# Étape 1 : Utiliser une image de base Node.js (version alpine pour une image plus légère)
FROM node:16-alpine

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tout le code source de l'application dans le conteneur
COPY . .

# Étape 6 : Compiler le code TypeScript (création des fichiers dist)
RUN npm run build

# Étape 7 : Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Étape 8 : Lancer l'application en mode production
CMD ["npm", "run", "start:prod"]

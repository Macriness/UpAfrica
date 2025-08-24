# Étape 1 : construction de l’app
FROM node:20-alpine AS builder

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances (ignore les conflits de peer deps)
RUN npm install --legacy-peer-deps

# Copier le reste du projet
COPY . .

# Build de l’app Next.js
RUN npm run build

# Étape 2 : image finale plus légère
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copier uniquement ce qui est nécessaire
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Exposer le port
EXPOSE 3000

# Lancer l’app
CMD ["npm", "start"]


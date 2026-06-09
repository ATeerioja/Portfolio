# =============================================================
# Portfolio v2 — Multi-stage Dockerfile
#
# Stage 1 (builder): installs deps and runs `vite build`
# Stage 2 (runtime): copies the dist/ output into Nginx
#
# Only the Nginx image is shipped — node_modules never reaches prod.
# =============================================================

# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (Docker layer cache: only re-runs
# npm install when package.json changes, not on every code change)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build
# Output is in /app/dist

# ---- Stage 2: Serve ----
FROM nginx:1.27-alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy our Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built site from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

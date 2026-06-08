# =============================================================
# Portfolio — Dockerfile
# Uses a simple two-layer approach:
#   1. Copy static source files
#   2. Serve them with Nginx
#
# No build step needed for v1 (plain HTML/CSS/JS).
# When you add a build tool (Vite, etc.) later, add a build
# stage above and copy the dist/ output here instead.
# =============================================================

FROM nginx:1.27-alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy our Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy site source
COPY src/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

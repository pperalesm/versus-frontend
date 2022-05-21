FROM node:16-alpine as node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=node /app/dist/versus-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
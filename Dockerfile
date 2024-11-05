# stage 1
FROM node:20.13.1-alpine AS softuni-angular
WORKDIR /app  
COPY . .
RUN npm config set maxsockets 1 && npm install && npm run build
# RUN npm install
# RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=softuni-angular /app/dist/softuni-tickets-app/browser/ /usr/share/nginx/html
EXPOSE 80

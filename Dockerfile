FROM node:19-alpine3.16 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:1.23.2-alpine
COPY --from=build /app/build /usr/share/nginx/html
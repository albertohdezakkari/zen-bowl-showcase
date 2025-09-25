FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
RUN apk add --no-cache nginx
RUN cp -r dist/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

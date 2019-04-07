FROM node:11.6.0-alpine as builder
COPY . /mfront
RUN npm install --production
RUN npm run build

FROM nginx:1.15.10-alpine
COPY --from=builder /mfront/dist /usr/share/nginx/html/
COPY config.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g daemon off;"]
EXPOSE 80

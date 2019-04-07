FROM node:alpine as builder
COPY . /mfront
WORKDIR /mfront
RUN yarn
RUN yarn build

FROM nginx:1.15.10-alpine
COPY --from=builder /mfront/dist /usr/share/nginx/html/
COPY config.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g daemon off;"]
EXPOSE 80

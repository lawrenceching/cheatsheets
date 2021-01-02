FROM node:latest as builder
WORKDIR /app

ARG BAIDU_TRACK_ID_ARG="baiduTrackIdArgument"
ARG GOOGLE_TRACK_ID_ARG="googleTrackIdArgument"

ENV BAIDU_TRACK_ID=$BAIDU_TRACK_ID_ARG
ENV GOOGLE_TRACK_ID=$GOOGLE_TRACK_ID_ARG

COPY package*.json ./
COPY yarn.lock ./
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn
COPY . .
RUN yarn build

RUN ls -l /app/public

FROM nginx:stable

EXPOSE 80

COPY --from=builder /app/public /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD ["nginx"]
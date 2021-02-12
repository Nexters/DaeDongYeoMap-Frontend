FROM nginx:1.19.6-alpine

# nginx 설정파일 교체
RUN mkdir -p /etc/ssl/certs
RUN rm /etc/nginx/conf.d/*

COPY ./.certs/fullchain.pem /etc/ssl/certs/
COPY ./.certs/privkey.pem /etc/ssl/certs/
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 443
CMD [ "nginx", "-g", "daemon off;" ]

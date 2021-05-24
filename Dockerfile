FROM nginx:1.17-alpine
LABEL author="Victor Augusto <victor.silva@ikatec.com.br>"
RUN mkdir -p /home/app
WORKDIR /home/app
COPY ./build /home/app
COPY nginx.conf /etc/nginx/conf.d/default.conf
ONBUILD RUN nginx -t
EXPOSE 8080

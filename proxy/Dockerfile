FROM nginx

RUN apt-get update && apt-get upgrade -y

RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir /etc/nginx/sites-enabled
RUN mkdir /etc/nginx/sites-available
RUN touch /etc/nginx/sites-available/resources
RUN ln -s /etc/nginx/sites-available/resources /etc/nginx/sites-enabled/resources

COPY ./config-proxy.conf /etc/nginx/nginx.conf
COPY ./config-resource.conf.local /etc/nginx/sites-available/resources
COPY ./index.html /usr/share/nginx/html

VOLUME /usr/share/nginx/html
VOLUME /etc/nginx

EXPOSE 8080 80

CMD ["nginx", "-g", "daemon off;"]

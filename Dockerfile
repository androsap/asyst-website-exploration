FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf

ENV PORT 3000

ARG env
ENV RUNTIME_ENV=${env}
COPY ./build${RUNTIME_ENV} /usr/share/nginx/apps

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

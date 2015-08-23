FROM node:0.12.7-wheezy

#RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && \
    npm run build

EXPOSE 8080
EXPOSE 3000

CMD npm start

FROM iojs:3.1

#RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && \
    npm run build

EXPOSE 8080
EXPOSE 3000

CMD npm start

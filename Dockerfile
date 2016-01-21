FROM node:5.4.1
RUN mkdir /src

WORKDIR /src
RUN npm install
RUN npm install webpack -g
RUN npm install webpack-dev-server -g

EXPOSE 8080
CMD [ "npm", "run", "dev" ]

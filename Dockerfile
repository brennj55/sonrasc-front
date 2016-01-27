FROM node:5.4.1
RUN mkdir /src

WORKDIR /src
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src
RUN npm install webpack -g \
                webpack-dev-server -g \
                gulp -g

EXPOSE 8080
#CMD [ "npm", "run", "dev" ]
CMD [ "bash" ]

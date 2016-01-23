# sonrasc-front
Frontend of final year project for Sonrasc invoice processing. Currently work in progress.

# Components for development
Docker container with NodeJS, requires docker and docker-compose.
Webpack to bundle modules. Uses Babel loader to transpile ES6 to ES5/browser friendly code.

Client application written with ReactJS and Redux.
Tests for behaviour written using Jasmine. GulpJS used for management of webpack configurations to bundle application code and test code seperately.

webpack-dev-sever is used for live reloading for development. 

Currently developed using docker-osx-dev.
Ran using "docker-compose build" & "docker-compose up" to initalise development enviornment.

Look up "docker-machine ip default" to get your machines ip address. Application viewable on <your-host-address>:8080.
